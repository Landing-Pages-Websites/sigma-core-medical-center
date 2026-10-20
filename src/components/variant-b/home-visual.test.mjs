import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const read = (path) => readFileSync(new URL(path, import.meta.url), "utf8");
const services = read("./services.tsx");
const hero = read("./hero.tsx");
const css = read("../../../app/globals.css");
const cuts = [...services.matchAll(/"(polygon\([^"]+\))"/g)].map((match) => match[1]);

function horizontalPosition(value, width, rem) {
  if (value === "0") return 0;
  if (/^\d+%$/.test(value)) return Number.parseFloat(value) * width / 100;
  if (/^\d+(\.\d+)?rem$/.test(value)) return Number.parseFloat(value) * rem;
  const inset = value.match(/^calc\(100% - (\d+(\.\d+)?)rem\)$/);
  assert.ok(inset, `Unsupported polygon coordinate: ${value}`);
  return width - Number(inset[1]) * rem;
}

test("all four card cuts leave a padded text corridor at narrow and wide widths", () => {
  assert.equal(cuts.length, 4);
  const padding = services.match(/className=\{`relative p-(\d+) pl-(\d+) /);
  assert.ok(padding);
  // Geometry coverage, including doubled rem units; not a native browser zoom test.
  for (const rem of [16, 32]) {
    for (const width of [272, 342, 688, 900]) {
      for (const cut of cuts) {
        const vertices = cut.slice(8, -1).split(", ");
        const xs = vertices.map((point) => horizontalPosition(point.replace(/ [^ ]+$/, ""), width, rem));
        const insets = xs.filter((x) => x > 0 && x < width);
        assert.ok(insets.length > 0, "The stepped notch must remain");
        for (const x of insets) {
          const paddingRem = Number(x < width / 2 ? padding[2] : padding[1]) / 4;
          assert.ok(Math.min(x, width - x) <= (paddingRem - 0.25) * rem,
            `${cut}: notch must leave glyph clearance within the text padding at ${width}px/${rem}px rem`);
        }
      }
    }
  }
});

test("card and decorative shadow share each corrected cut", () => {
  assert.match(services, /<span\s+aria-hidden[\s\S]*?style=\{\{ clipPath: MODULE_CUTS\[index\] \}\}/);
  assert.match(services, /<article[\s\S]*?style=\{\{ clipPath: MODULE_CUTS\[index\] \}\}/);
});

function luminance(channels) {
  const linear = channels.map((channel) => {
    const value = channel / 255;
    return value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
  });
  return linear[0] * 0.2126 + linear[1] * 0.7152 + linear[2] * 0.0722;
}

test("normal white hero paragraph has contrast margin over the composited watermark", () => {
  const background = css.match(/--color-action:\s*#([\da-f]{6})/i);
  const watermark = hero.match(/<GhostWord\s+word="Movement"\s+className="([^"]+)"/);
  assert.ok(background);
  assert.ok(watermark);
  const opacity = Number(watermark[1].match(/\btext-white\/(\d+)\b/)?.[1]) / 100;
  assert.ok(opacity > 0, "Movement must remain visible");
  const channels = background[1].match(/../g).map((hex) => Number.parseInt(hex, 16));
  const composite = channels.map((channel) => Math.round(channel * (1 - opacity) + 255 * opacity));
  const contrast = 1.05 / (luminance(composite) + 0.05);
  assert.ok(contrast >= 4.8, `Expected margin above 4.5:1; measured ${contrast}:1`);
  assert.match(hero, /<p className="mt-6 max-w-xl text-lg text-white sm:text-xl">\{HERO.body\}<\/p>/);
});

test("Movement remains decorative and hidden from assistive technology", () => {
  const motifs = read("./motifs.tsx");
  assert.match(motifs, /function GhostWord[\s\S]*?<span\s+aria-hidden/);
});
