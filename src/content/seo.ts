import { BRAND, SITE_DESCRIPTION, SITE_URL } from "./site";

// Reconstructed from existing public copy/assets; no unverified clinic coordinates.
export const GEO = { region: "US-VA", placename: BRAND.location } as const;

export const SEO = {
  siteName: BRAND.name,
  locale: "en_US",
  keywords: ["Sigma Core Medical Center", "neuropathy", "personalized care", "Richmond"],
  socialImage: "/social-card.png",
  socialImageAlt: BRAND.name,
} as const;

export function siteJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: BRAND.name,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
  };
}
