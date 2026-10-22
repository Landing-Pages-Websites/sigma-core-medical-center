import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { MegaSnippet } from "../src/components/analytics/MegaSnippet";
import { GoogleAnalytics } from "../src/components/analytics/GoogleAnalytics";
import { JsonLd } from "../src/components/shared/json-ld";

test("React preserves owned MEGA bootstrap before exactly one optimizer", () => {
  const html = renderToStaticMarkup(createElement(MegaSnippet));
  assert.match(html, /siteKey:'49774b7nqtttt6ue'/);
  for (const global of ["MEGA_TAG_CONFIG", "API_ENDPOINT", "TRACKING_API_ENDPOINT"]) {
    assert.ok(html.indexOf(`window.${global}=`) < html.indexOf('src="https://cdn.gomega.ai/scripts/optimizer.min.js"'));
  }
  assert.equal((html.match(/optimizer.min.js/g) ?? []).length, 1);
  const posthog = readFileSync("src/components/analytics/PostHogProvider.tsx", "utf8");
  assert.match(posthog, /process.env.NEXT_PUBLIC_POSTHOG_KEY/);
});

test("no GA4 loader is invented for an unset measurement ID", () => {
  const original = process.env.NEXT_PUBLIC_GA4_ID;
  try {
    delete process.env.NEXT_PUBLIC_GA4_ID;
    assert.equal(renderToStaticMarkup(createElement(GoogleAnalytics)), "");
  } finally {
    if (original === undefined) delete process.env.NEXT_PUBLIC_GA4_ID;
    else process.env.NEXT_PUBLIC_GA4_ID = original;
  }
});

test("site schema escapes closing script tags", () => {
  const html = renderToStaticMarkup(createElement(JsonLd, { data: { name: "</script><script>alert(1)</script>" } }));
  assert.equal((html.match(/<script/g) ?? []).length, 1);
  assert.match(html, /\\u003c\/script>/);
});
