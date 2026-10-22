import assert from "node:assert/strict";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import test from "node:test";

const SOURCE_EXTENSION = /\.(?:[cm]?[jt]sx?|css|json|md|mdx)$/;
const LOCAL_IMAGE = /["'`(](\/(?!\/)[^"'`()\s?#]+\.(?:avif|gif|ico|jpe?g|png|svg|webp))(?:[?#][^"'`()\s]*)?["'`)]/gi;

function sourceFiles(directory: string): string[] {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) return sourceFiles(path);
    return SOURCE_EXTENSION.test(entry.name) ? [path] : [];
  });
}

test("static local image references resolve to public assets or the Next app icon", () => {
  const missing: string[] = [];
  const referenced = new Set<string>();
  for (const file of ["app", "src"].flatMap(sourceFiles)) {
    for (const match of readFileSync(file, "utf8").matchAll(LOCAL_IMAGE)) {
      const url = match[1];
      referenced.add(url);
      // Next serves this metadata image from app; /images/* must exist in public.
      const asset = url === "/icon.png" ? "app/icon.png" : join("public", url);
      if (!statSync(asset, { throwIfNoEntry: false })?.isFile()) {
        missing.push(`${file}: ${url}`);
      }
    }
  }
  assert.ok(referenced.size > 0, "Expected static local image references");
  assert.deepEqual(missing, [], `Missing static images:\n${missing.join("\n")}`);
});
