import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { ReactElement } from "react";
import PostDate from "@/components/blog/PostDate";
import type { BlogPost } from "@/lib/blog";

export default function ArticleHeader({ post }: { post: BlogPost }): ReactElement {
  return (
    <header>
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
        <Link
          href="/blog"
          className="inline-flex min-h-11 items-center gap-2 text-base font-semibold text-action underline underline-offset-4 hover:text-hover focus-visible:text-hover motion-safe:transition-colors"
        >
          <ArrowLeft size={16} aria-hidden="true" /> All articles
        </Link>
        <PostDate post={post} />
      </div>
      <h1 className="mt-6 font-heading text-3xl leading-[1.1] font-bold tracking-[-0.03em] sm:text-4xl">
        {post.title}
      </h1>
      {post.author ? <p className="mt-4 text-base text-muted">By {post.author}</p> : null}
    </header>
  );
}
