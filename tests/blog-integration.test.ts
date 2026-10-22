import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";
import test from "node:test";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { BLOG_CONTENT_DIR, listPublishedPosts, publishedDate, type BlogPost } from "../src/lib/blog";
import { listPostFilenames, postId, servablePost } from "../src/lib/post-file.mjs";
import { parseFrontmatter } from "../src/lib/frontmatter.mjs";
import MarkdownBody from "../src/components/blog/MarkdownBody";
import inventory from "../src/content/blog/_inventory.json";

const BASE = "c5e830ecd5aa2993a3dd08a79b4ea60a4fc1ecbe";
const git = (...args: string[]): Buffer => execFileSync("git", args, { env: { ...process.env, GIT_NO_LAZY_FETCH: "1" } });

test("all 46 main articles retain their exact bytes and identities, including the three later posts", () => {
  const paths = git("ls-tree", "-r", "--name-only", BASE, BLOG_CONTENT_DIR).toString().trim().split("\n");
  assert.equal(paths.length, 46);
  assert.equal(listPostFilenames(BLOG_CONTENT_DIR).length, paths.length);
  assert.equal(inventory.posts_found, paths.length);
  assert.equal(inventory.posts_with_item_id, 46);
  const served = listPublishedPosts();
  assert.equal(served.length, 46);
  assert.equal(new Set(served.map((post) => post.id)).size, 46);
  assert.equal(new Set(served.map((post) => post.slug)).size, 46);
  for (const path of paths) {
    const bytes = readFileSync(path);
    assert.deepEqual(bytes, git("show", `${BASE}:${path}`), path);
    const { data } = parseFrontmatter(bytes.toString());
    const file = path.slice(BLOG_CONTENT_DIR.length + 1);
    const record = inventory.posts.find((post) => post.filename === file);
    assert.ok(record, file);
    assert.equal(record.item_id, postId(data));
    assert.equal(record.sha256, createHash("sha256").update(bytes).digest("hex"));
    assert.equal(record.target, `/blog/${servablePost(file, data)?.slug}`);
    assert.ok(served.some((post) => post.id === record.item_id && post.slug === record.new_slug));
  }
});

test("publication date normalization rejects impossible dates and respects offsets", () => {
  const post = (date: string): BlogPost => ({ ...listPublishedPosts()[0], date });
  assert.equal(publishedDate(post("2026-02-30")), null);
  assert.equal(publishedDate(post("sometime last spring")), null);
  assert.equal(publishedDate(post("2026-10-21"))?.toISOString(), "2026-10-21T00:00:00.000Z");
  assert.equal(publishedDate(post("2026-10-21T02:00:00+02:00"))?.toISOString(), "2026-10-21T00:00:00.000Z");
});

test("publisher markdown cannot inject executable HTML or unsafe link protocols", () => {
  const html = renderToStaticMarkup(createElement(MarkdownBody, {
    source: '<script>alert(1)</script>\n\n[bad](javascript:alert)\n\n<img src="x" onerror="alert(1)">\n\n[good](https://example.com)',
  }));
  assert.doesNotMatch(html, /<script|onerror=|href="javascript:/);
  assert.match(html, /href="https:\/\/example.com"/);
});
