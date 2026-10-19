import assert from "node:assert/strict";
import test from "node:test";
import { parseFrontmatter } from "./frontmatter.mjs";
import { isPostFile, postId, servablePost } from "./post-file.mjs";

test("native UUID identities are returned verbatim, never reminted", () => {
  const id = "B380819E-88B6-48BD-8F1E-BFE6A580D72A";
  assert.equal(postId({ id }), id);
});

test("existing publisher item identities remain supported verbatim", () => {
  const id = "item_aeyxkc1x7n3xnegbzzyfrqn2gm";
  assert.equal(postId({ id }), id);
  assert.equal(postId({ id: "invalid-identity" }), "");
  assert.equal(postId({}), "");
});

test("content plumbing never becomes an article", () => {
  for (const name of ["README.md", "readme.MD", ".gitkeep", "_draft.md"]) {
    assert.equal(isPostFile(name), false, name);
  }
  assert.equal(isPostFile("published-post.md"), true);
  assert.equal(isPostFile("published-post.mdx"), true);
});

test("drafts are excluded without discarding published posts with no id", () => {
  const data = { title: "Published article", slug: "published-article" };
  assert.deepEqual(servablePost("article.md", data), {
    title: data.title,
    slug: data.slug,
  });
  assert.equal(servablePost("article.md", { ...data, draft: true }), null);
  assert.equal(servablePost("article.md", { ...data, draft: "true" }), null);
});

test("nested frontmatter cannot replace a post's identity", () => {
  const id = "b380819e-88b6-48bd-8f1e-bfe6a580d72a";
  const { data } = parseFrontmatter(
    `---\nid: "${id}"\ntitle: "Article"\nfaq:\n  id: "other"\n---\nBody`,
  );
  assert.equal(postId(data), id);
});
