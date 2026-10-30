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
    employee: {
      "@type": "Person",
      "@id": `${SITE_URL}/#nicholas-fleming`,
      name: "Nicholas Fleming",
      honorificPrefix: "Dr.",
      honorificSuffix: "DC",
      jobTitle: "Provider",
      worksFor: { "@id": `${SITE_URL}/#organization` },
    },
  };
}

type ServiceJsonLdInput = {
  slug: string;
  name: string;
  serviceType: string;
  description: string;
};

export function serviceJsonLd({ slug, name, serviceType, description }: ServiceJsonLdInput): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/services/${slug}#service`,
    name,
    serviceType,
    description,
    url: `${SITE_URL}/services/${slug}`,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: { "@type": "AdministrativeArea", name: BRAND.location },
  };
}
