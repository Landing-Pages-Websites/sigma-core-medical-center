import type { Metadata } from "next";
import type { ReactElement } from "react";
import BlogConsultCta from "@/components/blog/BlogConsultCta";
import FeaturedPost from "@/components/blog/FeaturedPost";
import PostCard from "@/components/blog/PostCard";
import { TallBracket } from "@/components/pages/shared/page-motifs";
import { BRAND } from "@/content/site";
import { listPublishedPosts } from "@/lib/blog";
import { buildBlogMetadata } from "@/lib/blog-seo";

const BLOG_INTRO = "Plain-language articles on pain, movement, recovery, hormones, and pelvic health, to help you prepare questions for your care.";

export const metadata: Metadata = buildBlogMetadata({
  title: "Blog",
  description: `Articles and updates from ${BRAND.name}.`,
  path: "/blog",
});

export default function BlogIndexPage(): ReactElement {
  const [latest, ...rest] = listPublishedPosts();
  return (
    <main id="main-content" className="min-w-0 bg-chalk text-navy">
      <section data-mega-section="hero" id="hero" className="bg-navy text-white">
        <div className="mx-auto flex max-w-7xl items-start gap-4 px-6 pt-16 pb-14 sm:gap-5 sm:px-10 lg:pt-20 lg:pb-16">
          <TallBracket className="mt-1 h-24 w-4 text-royal sm:h-28 sm:w-5" />
          <div>
            <h1 className="font-heading text-[clamp(2.75rem,6vw,4.5rem)] leading-none font-bold tracking-[-0.035em]">Blog</h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/85">{BLOG_INTRO}</p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-10 lg:py-20">
        {latest ? <FeaturedPost post={latest} /> : <p className="text-muted">No articles have been published yet.</p>}
        {rest.length ? (
          <section data-mega-section="articles" id="articles" aria-label="More articles" className="mt-16">
            <h2 className="font-heading text-2xl font-bold tracking-[-0.02em] sm:text-3xl">More articles</h2>
            <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((post) => <PostCard key={post.id ?? post.slug} post={post} />)}
            </div>
          </section>
        ) : null}
        <BlogConsultCta />
      </div>
    </main>
  );
}
