import Link from "next/link";
import type { ReactElement } from "react";
import PostDate from "@/components/blog/PostDate";
import PostThumbnail from "@/components/blog/PostThumbnail";
import type { BlogPost } from "@/lib/blog";

const RELATED_THUMB_SIZES = "6rem";

/** Compact list of related articles, to keep a reader on the site after this one. */
export default function RelatedArticles({ posts }: { posts: readonly BlogPost[] }): ReactElement | null {
  if (!posts.length) return null;
  return (
    <section aria-labelledby="related-articles" className="bg-white p-7 shadow-[0_8px_24px_rgb(6_29_54/0.08)]">
      <h2 id="related-articles" className="text-xs font-semibold tracking-[0.2em] text-action uppercase">Related articles</h2>
      <ul className="mt-4 space-y-5">
        {posts.map((post) => (
          <li key={post.slug} className="group relative flex gap-4 has-[a:focus-visible]:outline-2 has-[a:focus-visible]:outline-offset-4 has-[a:focus-visible]:outline-action">
            <div className="relative aspect-square w-20 shrink-0 overflow-hidden bg-navy">
              <PostThumbnail post={post} sizes={RELATED_THUMB_SIZES} />
            </div>
            <div className="min-w-0 [overflow-wrap:anywhere]">
              <Link
                href={`/blog/${post.slug}`}
                className="line-clamp-3 font-heading leading-snug font-bold text-navy after:absolute after:inset-0 group-hover:text-action focus-visible:outline-none motion-safe:transition-colors"
              >
                {post.title}
              </Link>
              <div className="mt-1"><PostDate post={post} /></div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
