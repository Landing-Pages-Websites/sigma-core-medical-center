import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import test from "node:test";

const require = createRequire(import.meta.url);
const fontkit = require("next/dist/compiled/@next/font/dist/fontkit").default;
const { getFallbackMetricsFromFontFile } = require(
  "next/dist/compiled/@next/font/dist/local/get-fallback-metrics-from-font-file",
);
const fontNames = ["SourceSans3-400", "SourceSans3-600", "PlayfairDisplay-500", "PlayfairDisplay-600"];
const loadFont = (name) => fontkit(readFileSync(new URL(`./${name}.woff2`, import.meta.url)));

test("Latin shaping preserves kerning, ligatures, marks and positioning", () => {
  const samples = ["Sigma Core Medical Center", "AVATAR To Wa office affinity ffi ffl",
    "Café déjà vu é e\u0301 a\u0308 o\u0302 — ‘care’ → ↗ ®", "0123456789 $99.00 50%"];
  for (const name of fontNames) {
    const original = loadFont(name);
    const compact = loadFont(`${name}-latin`);
    for (const sample of samples) {
      const layouts = [original, compact].map((font) => font.layout(sample));
      assert.deepEqual(layouts[0].positions, layouts[1].positions, `${name}: ${sample}`);
      assert.deepEqual(layouts[0].glyphs.map((glyph) => glyph.path.commands),
        layouts[1].glyphs.map((glyph) => glyph.path.commands), `${name}: shaped outlines`);
    }
  }
});

test("explicit Arial fallback metrics match the original Next font calculation", () => {
  const css = readFileSync(new URL("../globals.css", import.meta.url), "utf8");
  for (const [name, family] of [["SourceSans3-400", "Sigma Source Sans"], ["PlayfairDisplay-500", "Sigma Playfair"]]) {
    const metrics = getFallbackMetricsFromFontFile(loadFont(name), "sans-serif");
    assert.deepEqual(metrics, getFallbackMetricsFromFontFile(loadFont(`${name}-latin`), "sans-serif"));
    const block = css.match(new RegExp(`@font-face\\s*\\{[^}]*font-family: "${family} Fallback"[^}]*\\}`))[0];
    assert.ok(block.includes(`ascent-override: ${metrics.ascentOverride}`));
    assert.ok(block.includes(`descent-override: ${metrics.descentOverride}`));
    assert.ok(block.includes(`size-adjust: ${metrics.sizeAdjust}`));
    assert.ok(block.includes('src: local("Arial")'));
    assert.equal(Number.parseFloat(metrics.lineGapOverride), 0);
    assert.ok(block.includes("line-gap-override: 0%"));
  }
});
