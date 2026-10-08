export type UtilityDocument = {
  title: string;
  introduction: string;
  missing: readonly string[];
  nextStep: string;
  links: readonly { href: string; label: string }[];
};

export const UTILITY_DOCUMENTS = {
  privacy: {
    title: "Website Privacy Policy",
    introduction: "The website privacy policy is awaiting review. This page is not a published policy and does not describe current data-handling practices.",
    missing: [
      "Counsel-approved policy covering the website’s actual forms, service providers, and any tracking in use",
      "Confirmed organization and privacy contact details",
      "Approved effective date and publication sign-off",
    ],
    nextStep: "Sigma Core and its privacy counsel must approve the final text before it replaces this status page.",
    links: [
      { href: "/notice-of-privacy-practices", label: "Notice of Privacy Practices status" },
      { href: "/terms", label: "Website terms status" },
      { href: "/contact", label: "Contact information status" },
    ],
  },
  notice: {
    title: "Notice of Privacy Practices",
    introduction: "The clinic’s approved Notice of Privacy Practices has not been supplied. This page is not the official notice and does not state patient rights or clinic privacy procedures.",
    missing: [
      "The complete, approved notice in accessible web text",
      "Confirmed covered entity, privacy contact, and effective date",
      "A downloadable or printable file, if one is approved and supplied",
    ],
    nextStep: "The clinic and healthcare privacy counsel must review and supply the official notice before it can be published here.",
    links: [
      { href: "/privacy", label: "Website privacy policy status" },
      { href: "/contact", label: "Contact information status" },
    ],
  },
  accessibility: {
    title: "Accessibility",
    introduction: "An approved accessibility statement and verified assistance channel have not yet been supplied. This page makes no claim of audited accessibility conformance.",
    missing: [
      "Customer-approved accessibility statement and any supported standards language",
      "Confirmed assistance contact and response process for reporting barriers",
      "Reviewed publication or update date",
    ],
    nextStep: "An accessibility and legal review is needed before a statement or assistance process can be published. The contact page currently lists the status of public contact details; it is not a verified assistance channel.",
    links: [
      { href: "/contact", label: "Contact information status" },
      { href: "/privacy", label: "Website privacy policy status" },
    ],
  },
  terms: {
    title: "Website Terms of Use",
    introduction: "Website terms and a clinician- and counsel-approved medical disclaimer have not been supplied. This page is not a binding terms document.",
    missing: [
      "Counsel-approved website terms and confirmed organization details",
      "Approved medical disclaimer language and clinical review",
      "Confirmed effective date and any applicable contact process",
    ],
    nextStep: "Information elsewhere on this site is general, not individualized medical advice. The official terms and medical disclaimer must be reviewed and supplied before publication.",
    links: [
      { href: "/privacy", label: "Website privacy policy status" },
      { href: "/book", label: "Appointment booking status" },
      { href: "/contact", label: "Contact information status" },
    ],
  },
} as const satisfies Record<string, UtilityDocument>;
