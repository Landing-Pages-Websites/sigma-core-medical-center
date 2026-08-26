export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://sigma-core-medical-center.vercel.app";

export const SITE_TITLE =
  "Sigma Core Medical Center | Neuropathy and Personalized Care in Richmond";

export const SITE_DESCRIPTION =
  "Explore personalized options for neuropathy, persistent pain, hormone health, pelvic-floor concerns, and regenerative goals in one modern Richmond-area medical center.";

export const BRAND = {
  name: "Sigma Core Medical Center",
  tagline: "Human Performance and Longevity",
  location: "Richmond, Virginia area",
  openingNote: "Opening target: September 8, 2026",
} as const;

export const HERO = {
  eyebrow: "Personalized care in the Richmond area",
  headline: "Focused care for movement, function, and life",
  body: "Explore personalized options for neuropathy, persistent pain, hormone health, pelvic-floor concerns, and regenerative goals in one modern medical center.",
  primaryCta: "Book an Appointment",
  secondaryCta: "Explore Neuropathy Care",
  locationLabel: "Richmond, Virginia area",
} as const;

export const NEUROPATHY = {
  eyebrow: "Neuropathy care",
  headline: "A clearer next step when neuropathy is limiting your day",
  body: "Start with a personalized conversation focused on movement, daily function, independence, and quality of life. Care options and outcomes vary.",
  orientationPoints: [
    "Understand your goals",
    "Discuss appropriate options",
    "Choose an informed next step",
  ],
  cta: "Explore Neuropathy Care",
  disclaimer: "No cure or reversal is promised.",
} as const;

export type Service = {
  name: string;
  summary: string;
  primary?: boolean;
};

export const SERVICES = {
  headline: "Care organized around what you want to keep doing",
  body: "Brief, benefit-led pathways help you find the right conversation without publishing protocols or promising a result.",
  cta: "Explore All Services",
  primary: {
    name: "Neuropathy",
    summary:
      "A function-focused conversation for the concerns affecting movement and daily life.",
    primary: true,
  } as Service,
  secondary: [
    {
      name: "Pain and mobility",
      summary: "Orientation for persistent joint, knee, low-back, or neck concerns.",
    },
    {
      name: "Hormone optimization",
      summary:
        "An individualized conversation about function, energy, recovery, and personal goals.",
    },
    {
      name: "Pelvic floor and incontinence",
      summary: "Private, respectful support centered on comfort, confidence, and daily life.",
    },
    {
      name: "Regenerative medicine",
      summary:
        "Explore whether this category belongs in your personalized care conversation.",
    },
  ] as Service[],
} as const;

export const PLACE = {
  eyebrow: "A modern Richmond-area clinic",
  headline: "Designed for a focused, personal conversation",
  body: "Sigma Core brings a concise set of care categories into one calm, modern setting, with one clear next step at a time.",
  facilityCaption: "Sigma Core Medical Center, Richmond area",
  openingNote: "Opening target: September 8, 2026",
  principles: [
    "Personalized care",
    "Clear orientation",
    "Function-focused goals",
    "Care options and outcomes vary",
  ],
} as const;

export const PATH = {
  headline: "A simple path to an informed next step",
  steps: [
    {
      title: "Choose your starting point",
      body: "Explore a care category or begin with the educational guide.",
    },
    {
      title: "Start the conversation",
      body: "Book an appointment to discuss your goals and whether Sigma Core may be an appropriate fit.",
    },
    {
      title: "Decide what comes next",
      body: "Review the available information and choose the next appropriate step for you.",
    },
  ],
  disclaimer: "General website information is not medical advice.",
} as const;

export const WAYS = {
  headline: "Choose the next step that fits today",
  guide: {
    label: "Start with information",
    headline: "Get the Sigma Core educational guide",
    body: "Request the approved educational resource when it becomes available.",
    cta: "Get the Educational Guide",
    availabilityNote:
      "The resource title, media, and delivery details are pending customer approval; do not imply it is available before publication.",
  },
  booking: {
    label: "Ready to talk",
    headline: "Book an appointment",
    body: "Use the approved GoHighLevel calendar to request your appointment.",
    cta: "Book an Appointment",
  },
  privacyNote:
    "General marketing forms do not collect free-text medical history or symptom narratives.",
} as const;

export type FaqItem = {
  question: string;
  answer: string;
};

export const FAQ = {
  headline: "Questions before you take the next step?",
  items: [
    {
      question: "Where is Sigma Core located?",
      answer:
        "Sigma Core serves the Richmond, Virginia area. The onboarding address is 725 Manakin Towne Lane, Manakin-Sabot, VA 23103 and will be reconfirmed before launch.",
    },
    {
      question: "How do I book?",
      answer:
        "Use the Book an Appointment path to continue to Sigma Core's approved GoHighLevel scheduling experience.",
    },
    {
      question: "Can the website tell me which care is right for me?",
      answer:
        "No. Website information is general and non-diagnostic. An appropriate clinical conversation is needed for individualized guidance.",
    },
    {
      question: "Are results guaranteed?",
      answer:
        "No. Care is personalized and outcomes vary. Sigma Core does not promise a cure, reversal, or specific result.",
    },
  ] as FaqItem[],
  locationLabel: "Richmond, Virginia area",
  addressNote: "Public address to be reconfirmed before launch",
  cta: "Book an Appointment",
} as const;

export const FOOTER = {
  tagline: "Human Performance and Longevity",
  location: "Richmond, Virginia area",
  cta: "Book an Appointment",
  nav: [
    "Services",
    "About",
    "Contact",
    "Privacy",
    "Notice of Privacy Practices",
    "Accessibility",
    "Terms",
  ],
  disclaimer:
    "Website information is general and is not a substitute for individualized medical advice. Care options and outcomes vary.",
} as const;

export const PENDING = {
  booking: {
    title: "Booking opens soon",
    message:
      "Appointments will be requested through Sigma Core's approved GoHighLevel scheduling experience. The scheduling link is being finalized and is not yet available — please check back closer to the September 8, 2026 opening target.",
  },
  guide: {
    title: "Educational guide pending",
    message:
      "The Sigma Core educational guide is pending final approval. The resource title, media, and delivery details will be published once approved; it is not available yet.",
  },
  page: {
    title: "Page in preparation",
    message:
      "This page is being prepared as part of the full Sigma Core website and is not included in this homepage preview.",
  },
} as const;
