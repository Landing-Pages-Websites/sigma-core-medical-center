import type { MetadataRoute } from "next";
import { SITE_URL } from "@/content/site";
import { IS_PRODUCTION } from "@/lib/site-seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: IS_PRODUCTION
      ? { userAgent: "*", allow: "/", disallow: ["/variant-a", "/variant-b", "/api/"] }
      : { userAgent: "*", disallow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
