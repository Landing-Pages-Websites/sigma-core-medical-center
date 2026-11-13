import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactElement } from "react";
import PostDate from "@/components/blog/PostDate";
import PostThumbnail from "@/components/blog/PostThumbnail";
import type { BlogPost } from "@/lib/blog";

const CARD_IMAGE_SIZES = "(min-width: 1024px) 24rem, (min-width: 640px) 45vw, calc(100vw - 3rem)";

/** Grid card for the blog index: thumbnail, date, title and summary. The whole card is one link target. */
export default function PostCard({ post }: { post: BlogPost }): ReactElement {
  return (
    <article className="group relative flex h-full flex-col bg-white shadow-[0_8px_24px_rgb(6_29_54/0.08)] transition-shadow hover:shadow-[0_16px_36px_rgb(6_29_54/0.16)] has-[a:focus-visible]:outline-2 has-[a:focus-visible]:outline-offset-4 has-[a:focus-visible]:outline-action">
      <div className="relative aspect-[16/10] overflow-hidden bg-navy">
        <PostThumbnail post={post} sizes={CARD_IMAGE_SIZES} />
      </div>
      <div className="flex flex-1 flex-col border-t-4 border-action p-6 [overflow-wrap:anywhere]">
        <PostDate post={post} />
        <h2 className="mt-2 font-heading text-xl leading-snug font-bold tracking-[-0.01em] text-navy">
          <Link
            href={`/blog/${post.slug}`}
            className="after:absolute after:inset-0 group-hover:text-action focus-visible:text-action focus-visible:outline-none motion-safe:transition-colors"
          >
            {post.title}
          </Link>
        </h2>
        {post.description ? <p className="mt-3 line-clamp-3 text-base leading-relaxed text-muted">{post.description}</p> : null}
        <span aria-hidden className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold text-action">
          Read article <ArrowRight size={16} className="motion-safe:transition-transform motion-safe:group-hover:translate-x-1" />
        </span>
      </div>
    </article>
  );
}
