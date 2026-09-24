import type { MetadataRoute } from "next";
import routeManifest from "../public/route-manifest.json";
import { SITE_URL } from "@/content/site";

const NOINDEX_PATHS = new Set([
  "/services/hormone-optimization",
  "/services/pelvic-floor-incontinence",
  "/services/regenerative-medicine",
  "/educational-guide",
  "/book",
  "/privacy",
  "/notice-of-privacy-practices",
  "/accessibility",
  "/terms",
]);

export default function sitemap(): MetadataRoute.Sitemap {
  return routeManifest.routes
    .filter((path) => !NOINDEX_PATHS.has(path))
    .map((path) => ({ url: new URL(path, SITE_URL).toString() }));
}
