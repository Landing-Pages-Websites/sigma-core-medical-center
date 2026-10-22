import { createHash } from "node:crypto";
import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { parseFrontmatter } from "../src/lib/frontmatter.mjs";
import { listPostFilenames, postId, servablePost } from "../src/lib/post-file.mjs";

const contentDir = "src/content/blog";
const inventoryPath = join(contentDir, "_inventory.json");
const inventory = JSON.parse(readFileSync(inventoryPath, "utf8"));
const posts = listPostFilenames(contentDir).sort().map((filename) => {
  const bytes = readFileSync(join(contentDir, filename));
  const { data } = parseFrontmatter(bytes.toString("utf8"));
  const served = servablePost(filename, data);
  return {
    old_url: null, title: data.title, new_slug: data.slug, status: "authored",
    item_id: postId(data), target: served ? `/blog/${served.slug}` : null,
    filename, sha256: createHash("sha256").update(bytes).digest("hex"),
  };
});
writeFileSync(inventoryPath, `${JSON.stringify({
  ...inventory, posts_found: posts.length, posts_with_item_id: posts.filter((post) => post.item_id).length,
  generated_at: new Date().toISOString(), posts,
}, null, 2)}\n`);
