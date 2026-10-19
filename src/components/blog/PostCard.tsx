import Link from "next/link";
import type { ReactElement } from "react";
import PostDate from "@/components/blog/PostDate";
import type { BlogPost } from "@/lib/blog";

/** Starter's editorial list card, using the existing site's type and palette. */
export default function PostCard({ post }: { post: BlogPost }): ReactElement {
  return (
    <article className="border-b border-silver py-8 last:border-b-0 [overflow-wrap:anywhere]">
      <PostDate post={post} />
      <h2 className="mt-2 font-heading text-2xl leading-tight font-bold tracking-tight sm:text-3xl">
        <Link href={`/blog/${post.slug}`} className="hover:underline focus-visible:underline">
          {post.title}
        </Link>
      </h2>
      {post.description ? <p className="mt-3 leading-relaxed text-muted">{post.description}</p> : null}
      <Link
        href={`/blog/${post.slug}`}
        aria-label={`Read article: ${post.title}`}
        className="mt-3 inline-flex min-h-11 items-center text-base font-semibold text-action underline underline-offset-4 hover:text-hover focus-visible:text-hover motion-safe:transition-colors"
      >
        Read article
      </Link>
    </article>
  );
}
