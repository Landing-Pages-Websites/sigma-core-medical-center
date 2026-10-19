import type { Metadata } from "next";
import { BRAND, SITE_URL } from "@/content/site";
import { publishedDate, type BlogPost } from "@/lib/blog";

interface BlogMetadataInput {
  title: string;
  description: string;
  path: string;
  image?: string | null;
}

/** Blog metadata uses the legacy site's existing canonical-origin config. */
export function buildBlogMetadata(input: BlogMetadataInput): Metadata {
  const url = new URL(input.path, SITE_URL).toString();
  const images = input.image ? [new URL(input.image, SITE_URL).toString()] : [];
  return {
    title: input.title,
    description: input.description,
    alternates: { canonical: url },
    openGraph: {
      type: input.path === "/blog" ? "website" : "article",
      siteName: BRAND.name,
      title: input.title,
      description: input.description,
      url,
      ...(images.length ? { images } : {}),
    },
    twitter: {
      card: images.length ? "summary_large_image" : "summary",
      title: input.title,
      description: input.description,
      ...(images.length ? { images } : {}),
    },
  };
}

/** Invalid dates omit schema, never the article, matching the starter renderer. */
export function buildBlogArticleSchema(post: BlogPost): Record<string, unknown> | null {
  const datePublished = publishedDate(post)?.toISOString();
  if (!datePublished) return null;
  const organization = { "@type": "Organization", name: BRAND.name, url: SITE_URL };
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description || post.title,
    url: new URL(`/blog/${post.slug}`, SITE_URL).toString(),
    ...(post.image ? { image: new URL(post.image, SITE_URL).toString() } : {}),
    datePublished,
    dateModified: datePublished,
    author: organization,
    publisher: organization,
  };
}
