import type { MetadataRoute } from "next";
import { SITE_URL } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE_URL}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/services`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/services/neuropathy`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/services/pain-relief`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/services/hormone-optimization`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/services/pelvic-floor-incontinence`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/services/regenerative-medicine`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/about`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/contact`, changeFrequency: "monthly", priority: 0.5 },
  ];
}
