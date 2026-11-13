import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ReactElement } from "react";
import ArticleHeader from "@/components/blog/ArticleHeader";
import ArticleSidebar from "@/components/blog/ArticleSidebar";
import BlogArticleSchema from "@/components/blog/BlogArticleSchema";
import BlogConsultCta from "@/components/blog/BlogConsultCta";
import BlogImage from "@/components/blog/BlogImage";
import MarkdownBody from "@/components/blog/MarkdownBody";
import { getPublishedPost, listPublishedPosts, type BlogPost } from "@/lib/blog";
import { relatedPosts } from "@/lib/blog-related";
import { buildBlogMetadata } from "@/lib/blog-seo";

type ArticleParams = { params: Promise<{ slug: string }> };

const RELATED_COUNT = 4;

// The content publisher triggers a rebuild; unknown slugs must be real 404s.
export const dynamicParams = false;

export function generateStaticParams(): Array<{ slug: string }> {
  return listPublishedPosts().map((post) => ({ slug: post.slug }));
}

async function resolveArticle(params: ArticleParams["params"]): Promise<BlogPost | null> {
  try {
    const { slug } = await params;
    return getPublishedPost(slug);
  } catch (error) {
    throw new Error("[blog] Unable to resolve the requested article.", { cause: error });
  }
}

export async function generateMetadata({ params }: ArticleParams): Promise<Metadata> {
  const post = await resolveArticle(params);
  if (!post) notFound();
  return buildBlogMetadata({
    title: post.title,
    description: post.description || post.title,
    path: `/blog/${post.slug}`,
    image: post.image,
  });
}

export default async function BlogArticlePage({ params }: ArticleParams): Promise<ReactElement> {
  const post = await resolveArticle(params);
  if (!post) notFound();
  return (
    <main id="main-content" className="min-w-0 bg-chalk text-navy">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-16 sm:px-10 sm:py-24 lg:grid-cols-[minmax(0,1fr)_22rem] xl:gap-16">
        <article className="min-w-0 [overflow-wrap:anywhere]">
          <BlogArticleSchema post={post} />
          <ArticleHeader post={post} />
          {post.image ? (
            <div className="mt-8">
              <BlogImage src={post.image} alt={post.imageAlt ?? post.title} variant="banner" preload />
            </div>
          ) : null}
          <div className="mt-10"><MarkdownBody source={post.body} /></div>
          <BlogConsultCta />
        </article>
        <ArticleSidebar related={relatedPosts(post, listPublishedPosts(), RELATED_COUNT)} />
      </div>
    </main>
  );
}
