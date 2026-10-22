import type { Metadata } from "next";
import type { ReactElement } from "react";
import PostCard from "@/components/blog/PostCard";
import { BRAND } from "@/content/site";
import { listPublishedPosts } from "@/lib/blog";
import { buildBlogMetadata } from "@/lib/blog-seo";

export const metadata: Metadata = buildBlogMetadata({
  title: "Blog",
  description: `Articles and updates from ${BRAND.name}.`,
  path: "/blog",
});

export default function BlogIndexPage(): ReactElement {
  const posts = listPublishedPosts();
  return (
    <main id="main-content" className="min-w-0 bg-chalk text-navy">
      <div className="mx-auto w-full max-w-3xl px-6 py-16 sm:px-10 sm:py-24">
        <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl">Blog</h1>
        <p className="mt-4 leading-relaxed text-muted">
          Articles and updates from {BRAND.name}.
        </p>
        <section aria-label="Articles" className="mt-10">
          {posts.map((post) => <PostCard key={post.id ?? post.slug} post={post} />)}
          {!posts.length ? <p className="text-muted">No articles have been published yet.</p> : null}
        </section>
      </div>
    </main>
  );
}
