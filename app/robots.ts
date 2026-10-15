import type { MetadataRoute } from "next";
import { VARIANT_PATHS } from "@/content/indexing";
import { SITE_URL } from "@/content/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: [...VARIANT_PATHS, "/api/"] },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
