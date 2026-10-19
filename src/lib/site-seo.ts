import { BRAND, SITE_URL } from "@/content/site";

// Preview and local builds stay protected independently of canonical identity.
export const IS_PRODUCTION = process.env.VERCEL_ENV === "production";

export const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: BRAND.name,
  url: SITE_URL,
};
