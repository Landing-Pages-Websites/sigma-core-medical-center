import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactElement } from "react";
import PostDate from "@/components/blog/PostDate";
import PostThumbnail from "@/components/blog/PostThumbnail";
import type { BlogPost } from "@/lib/blog";

const FEATURE_IMAGE_SIZES = "(min-width: 1024px) 42rem, calc(100vw - 3rem)";

/** The newest article, shown large at the top of the blog index. */
export default function FeaturedPost({ post }: { post: BlogPost }): ReactElement {
  return (
    <article className="group relative grid bg-white shadow-[0_12px_32px_rgb(6_29_54/0.12)] lg:grid-cols-[1.25fr_1fr] has-[a:focus-visible]:outline-2 has-[a:focus-visible]:outline-offset-4 has-[a:focus-visible]:outline-action">
      <div className="relative aspect-[16/10] overflow-hidden bg-navy lg:aspect-auto lg:min-h-[24rem]">
        <PostThumbnail post={post} sizes={FEATURE_IMAGE_SIZES} preload />
      </div>
      <div className="flex flex-col justify-center border-t-4 border-action p-7 sm:p-10 lg:border-t-0 lg:border-l-4 [overflow-wrap:anywhere]">
        <p className="text-xs font-semibold tracking-[0.2em] text-action uppercase">Latest article</p>
        <div className="mt-3"><PostDate post={post} /></div>
        <h2 className="mt-2 font-heading text-3xl leading-tight font-bold tracking-[-0.02em] text-navy sm:text-4xl">
          <Link
            href={`/blog/${post.slug}`}
            className="after:absolute after:inset-0 group-hover:text-action focus-visible:text-action focus-visible:outline-none motion-safe:transition-colors"
          >
            {post.title}
          </Link>
        </h2>
        {post.description ? <p className="mt-4 text-lg leading-relaxed text-muted">{post.description}</p> : null}
        <span aria-hidden className="mt-6 inline-flex items-center gap-2 font-semibold text-action">
          Read article <ArrowRight size={18} className="motion-safe:transition-transform motion-safe:group-hover:translate-x-1" />
        </span>
      </div>
    </article>
  );
}
