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

export function medicalBusinessJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": `${SITE_URL}/#medicalbusiness`,
    name: "Sigma Core Medical Center",
    url: SITE_URL,
    telephone: "+1-804-486-7699",
    address: {
      "@type": "PostalAddress",
      streetAddress: "9020 Stony Point Pkwy #100",
      addressLocality: "Richmond",
      addressRegion: "VA",
      postalCode: "23235",
      addressCountry: "US",
    },
    parentOrganization: {
      "@id": `${SITE_URL}/#organization`,
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

export function prpInjectionJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${SITE_URL}/services/regenerative-medicine/prp-injection#service`,
        name: "PRP injection care built around your goals",
        serviceType: "Regenerative medicine",
        description:
          "Explore whether platelet-rich plasma may be appropriate for a joint, tendon, pain, recovery, or performance conversation at Sigma Core Medical Center.",
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: "Richmond, Virginia area",
        url: `${SITE_URL}/services/regenerative-medicine/prp-injection`,
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/services/regenerative-medicine/prp-injection#faq`,
        name: "PRP questions",
        url: `${SITE_URL}/services/regenerative-medicine/prp-injection`,
        mainEntity: [
          {
            "@type": "Question",
            name: "What is a PRP injection?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Platelet-rich plasma (PRP) is prepared from a sample of a person’s own blood. A consultation should explain the specific preparation, intended use, injection plan, alternatives, and follow-up before you decide whether it may be appropriate.",
            },
          },
          {
            "@type": "Question",
            name: "Is PRP FDA-approved?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "PRP is not a single FDA-approved treatment for every use. Regulatory status and evidence depend on the exact preparation and intended use. Sigma Core does not describe PRP as FDA-approved for a blanket indication.",
            },
          },
          {
            "@type": "Question",
            name: "Can PRP cure arthritis, tendon injuries, or pain?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "No. This page does not promise a cure, permanent results, or a particular outcome. The right conversation is about your goals, the evidence for the proposed use, possible risks, and reasonable alternatives.",
            },
          },
          {
            "@type": "Question",
            name: "How many PRP injections will I need?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "There is no one-size-fits-all schedule. If PRP is considered, the care team should explain whether an injection is appropriate, what follow-up may involve, and what would happen if it is not the right option for you.",
            },
          },
          {
            "@type": "Question",
            name: "Who may want to discuss PRP?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Adults with a joint, tendon, or recovery concern may choose to ask about PRP. A question is not a diagnosis or a recommendation. An individualized evaluation is needed to discuss whether it fits your health history and goals.",
            },
          },
        ],
      },
    ],
  };
}
