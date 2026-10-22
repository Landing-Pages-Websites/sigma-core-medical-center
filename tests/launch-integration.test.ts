import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { execFileSync } from "node:child_process";
import test from "node:test";
import sitemap from "../app/sitemap";
import robots from "../app/robots";
import { SITE_URL } from "../src/content/site";
import { NOINDEX_PATHS } from "../src/content/indexing";
import { siteJsonLd } from "../src/content/seo";
import { listPublishedPosts } from "../src/lib/blog";
import { buildBlogMetadata } from "../src/lib/blog-seo";

const BASE = "c5e830ecd5aa2993a3dd08a79b4ea60a4fc1ecbe";
const source = (path: string): string => readFileSync(path, "utf8");
const baseSource = (path: string): string => execFileSync("git", ["show", `${BASE}:${path}`], {
  encoding: "utf8", env: { ...process.env, GIT_NO_LAZY_FETCH: "1" },
});

test("www is the single canonical origin for metadata, robots, schema and sitemap", () => {
  assert.equal(SITE_URL, "https://www.sigmacoremedicalcenter.com");
  assert.equal(robots().host, SITE_URL);
  assert.equal(robots().sitemap, `${SITE_URL}/sitemap.xml`);
  assert.equal(siteJsonLd().url, SITE_URL);
  const entries = sitemap();
  for (const entry of entries) {
    assert.equal(new URL(entry.url).origin, SITE_URL);
    assert.ok(!NOINDEX_PATHS.has(new URL(entry.url).pathname));
  }
  for (const post of listPublishedPosts()) {
    const url = `${SITE_URL}/blog/${post.slug}`;
    assert.ok(entries.some((entry) => entry.url === url));
    assert.equal(buildBlogMetadata({ title: post.title, description: post.description, path: `/blog/${post.slug}` }).alternates?.canonical, url);
  }
});

test("main composition, global styles, fonts and metadata fields survive integration", () => {
  for (const path of ["app/page.tsx", "app/globals.css", "src/lib/fonts.ts", "app/(batch-three)/layout.tsx"]) {
    assert.equal(source(path), baseSource(path), path);
  }
  const root = source("app/layout.tsx");
  for (const key of ["applicationName", "keywords", "category", "alternates", "robots", "openGraph", "twitter", "formatDetection", "themeColor"]) {
    assert.ok(root.includes(`${key}:`), key);
  }
  const bridge = /<script\s+src="https:\/\/app.gomega.ai\/review-bridge[\s\S]*?\/>/;
  assert.equal(root.match(bridge)?.[0], baseSource("app/layout.tsx").match(bridge)?.[0]);
  for (const name of ["MegaSnippet", "PostHogProvider", "GoogleAnalytics", "JsonLd"]) {
    assert.equal((root.match(new RegExp(`<${name}[ >]`, "g")) ?? []).length, 1, name);
  }
});

test("every existing publication hold remains explicit and excluded from sitemap", () => {
  for (const path of NOINDEX_PATHS) {
    if (path.startsWith("/variant-")) continue;
    const group = ["/book", "/contact"].includes(path) ? "(batch-three)"
      : ["/privacy", "/terms", "/accessibility", "/notice-of-privacy-practices"].includes(path) ? "(utility)" : "(site)";
    assert.match(source(`app/${group}${path}/page.tsx`), /index: false/);
  }
});
