import { SITE_URL } from "@/content/site-url";

/** Public identity comes from the canonical seam; Preview hosts are deployment-owned. */
export function allowedLeadOrigins(): ReadonlySet<string> {
  const origins = new Set([new URL(SITE_URL).origin]);
  if (process.env.VERCEL_ENV === "preview") {
    for (const host of [process.env.VERCEL_URL, process.env.VERCEL_BRANCH_URL]) {
      if (host && /^[a-z0-9.-]+\.vercel\.app$/i.test(host)) origins.add(`https://${host}`);
    }
  }
  if (!process.env.VERCEL_ENV && process.env.NODE_ENV !== "production") {
    origins.add("http://localhost:3000");
    origins.add("http://127.0.0.1:3000");
  }
  return origins;
}

/** Non-browser clients still pass the same CAPTCHA/proof and Preview gates. */
export function leadOriginAllowed(origin: string | null): boolean {
  return origin === null || allowedLeadOrigins().has(origin);
}
