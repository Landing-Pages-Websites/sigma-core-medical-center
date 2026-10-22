import type { MetadataRoute } from "next";
import routeManifest from "../public/route-manifest.json";
import { NOINDEX_PATHS } from "@/content/indexing";
import { listPublishedPosts, publishedDate } from "@/lib/blog";
import { SITE_URL } from "@/content/site";

const HIGH_PRIORITY = new Set(["/", "/services", "/services/neuropathy"]);

function priorityFor(path: string): number {
  if (path === "/") return 1;
  if (HIGH_PRIORITY.has(path)) return 0.9;
  return path.startsWith("/services/") ? 0.8 : 0.6;
}

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
        changeFrequency: path === "/" ? "weekly" : "monthly",
        priority: priorityFor(path),
      };
    });
}
