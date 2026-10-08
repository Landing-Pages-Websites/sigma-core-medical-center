import type { MetadataRoute } from "next";
import { SITE_URL } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "/", priority: 1 },
    { path: "/services", priority: 0.9 },
    { path: "/services/neuropathy", priority: 0.8 },
    { path: "/services/pain-relief", priority: 0.8 },
    { path: "/services/hormone-optimization", priority: 0.8 },
    { path: "/services/pelvic-floor-incontinence", priority: 0.8 },
    { path: "/services/regenerative-medicine", priority: 0.8 },
    { path: "/about", priority: 0.7 },
    { path: "/educational-guide", priority: 0.7 },
    { path: "/book", priority: 0.9 },
    { path: "/contact", priority: 0.7 },
  ] as const;

  return routes.map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: "weekly" as const,
    priority,
  }));
}
