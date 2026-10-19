import type { MetadataRoute } from "next";
import routeManifest from "../public/route-manifest.json";
import { SITE_URL } from "@/content/site";
import { listPublishedPosts, publishedDate } from "@/lib/blog";

const NOINDEX_PATHS = new Set([
  "/services/hormone-optimization",
  "/services/pelvic-floor-incontinence",
  "/services/regenerative-medicine",
  "/educational-guide",
  "/book",
  "/contact",
  "/privacy",
  "/notice-of-privacy-practices",
  "/accessibility",
  "/terms",
]);

export default function sitemap(): MetadataRoute.Sitemap {
  const postDates = new Map(
    listPublishedPosts().map((post) => [`/blog/${post.slug}`, publishedDate(post)]),
  );
  const paths = new Set([...routeManifest.routes, "/blog", ...postDates.keys()]);
  return [...paths]
    .filter((path) => !NOINDEX_PATHS.has(path))
    .map((path) => {
      const lastModified = postDates.get(path);
      return {
        url: new URL(path, SITE_URL).toString(),
        ...(lastModified ? { lastModified } : {}),
      };
    });
}
