// Canonical production identity, shared by metadata, discovery and origin checks.
export { SITE_URL } from "./site-url";

export const SITE_TITLE =
  "Sigma Core Medical Center | Neuropathy and Personalized Care in Richmond";

export const SITE_DESCRIPTION =
  "Explore care for neuropathy, persistent pain, hormone health, pelvic-floor concerns, and regenerative goals at Sigma Core Medical Center in Richmond.";

export const BRAND = {
  name: "Sigma Core Medical Center",
  tagline: "Human Performance and Longevity",
  location: "Richmond, Virginia area",
  openingNote: "Opening details are being confirmed",
} as const;

export const HERO = {
  eyebrow: "Personalized care in the Richmond area",
  headline: "Focused care for movement, function, and life",
  body: "Explore personalized options for neuropathy, persistent pain, hormone health, pelvic-floor concerns, and regenerative goals in one modern medical center.",
  primaryCta: "Request a Free Consultation",
  secondaryCta: "Explore Neuropathy Care",
  locationLabel: "Richmond, Virginia area",
} as const;

export const NEUROPATHY = {
  eyebrow: "Advanced Neuropathy Care",
  headline: "Tired of Numbness, Tingling, Burning Feet, or Losing Your Balance?",
  body: "If you've tried medications, supplements, or other treatments without the relief you hoped for, discover our Advanced Neuropathy Protocol — a personalized approach that brings together innovative therapies and advanced technology.",
  orientationPoints: [
    "Discover a Different Approach",
    "Explore Advanced Treatment Options",
    "Take the First Step Toward Better Living",
  ],
  cta: "Discover Our Neuropathy Program",
  disclaimer: "No cure or reversal is promised.",
} as const;

export type Service = {
  name: string;
  summary: string;
  href?: string;
  primary?: boolean;
};

export const SERVICES = {
  headline: "Discover What's Possible With a Different Approach to Healthcare",
  body: "Your health deserves more than a one-size-fits-all approach. Explore our specialized services and discover how modern technology and personalized integrative care can open the door to new possibilities.",
  cta: "Explore Our Advanced Services",
  primary: {
    name: "Advanced Neuropathy Care",
    summary:
      "Numbness, tingling, burning feet, or balance problems? Discover our Advanced Neuropathy Protocol and explore innovative therapies beyond the usual approaches.",
    href: "/services/neuropathy",
    primary: true,
  } as Service,
  secondary: [
    {
      name: "Knee, Back & Joint Pain Relief",
      summary:
        "Tired of pain limiting your life? Explore advanced, personalized options to help you move more comfortably and get back to doing what you love.",
      href: "/services/pain-relief",
    },
    {
      name: "Hormone Health & Vitality",
      summary:
        "Low energy, declining stamina, or just not feeling yourself? Discover personalized options to support hormone balance, vitality, and well-being.",
      href: "/services/hormone-optimization",
    },
    {
      name: "Bladder Control & Pelvic Health",
      summary:
        "Bladder leaks, urgency, or pelvic-floor weakness? Explore discreet, modern treatment options designed to help restore confidence and improve daily life.",
      href: "/services/pelvic-floor-incontinence",
    },
    {
      name: "Regenerative & Integrative Medicine",
      summary:
        "Discover specialized therapies and advanced treatment options focused on supporting comfort, mobility, and your body's natural recovery processes.",
      href: "/services/regenerative-medicine",
    },
  ] as Service[],
} as const;

export const PLACE = {
  eyebrow: "A DIFFERENT KIND OF MEDICAL EXPERIENCE",
  headline: "Your Health Deserves More Than the Same Old Answers.",
  body: "Welcome to Sigma Core Medical Center, where advanced medical technologies, innovative therapeutic options, and personalized integrative care come together under one roof.",
  bodySecond:
    "We're here to help you explore new possibilities for improving your health, restoring function, and enjoying a better quality of life.",
  locationLine: "Conveniently located in Richmond's Stony Point Medical Complex.",
  facilityCaption: "Sigma Core Medical Center, Richmond area",
  openingNote: "Opening details are being confirmed",
  principles: [
    "Advanced Medical Technologies",
    "Personalized Integrative Care",
    "Innovative Treatment Options",
    "Focused on Your Quality of Life",
  ],
} as const;

export const PATH = {
  headline: "Getting Started Is Easier Than You Think.",
  steps: [
    {
      title: "Discover Your Options",
      body: "Explore advanced therapies and integrative care options for the health concerns that matter most to you.",
    },
    {
      title: "Let's Talk About Your Health",
      body: "Schedule a consultation to discuss what you've been experiencing, what you've already tried, and what you're hoping to improve.",
    },
    {
      title: "Discover Your Next Step",
      body: "Learn which available services may be appropriate for your needs and what the next steps in your care could look like.",
    },
  ],
  cta: "Request My Free Consultation",
  disclaimer: "General website information is not medical advice.",
} as const;

export const WAYS = {
  headline: "Ready to Discover What Sigma Core Can Do for You?",
  guide: {
    label: "WANT TO LEARN MORE FIRST?",
    headline: "Explore Your Options. Start With Answers.",
    body: "Dealing with numbness, tingling, burning feet, or balance concerns? Our free Neuropathy Clarity Scorecard helps you organize your symptoms and better prepare for a conversation about your health.",
    cta: "Get My Free Neuropathy Guide",
    availabilityNote:
      "The resource title, media, and delivery details are pending customer approval; do not imply it is available before publication.",
  },
  booking: {
    label: "READY TO TAKE THE NEXT STEP?",
    headline: "Your Better Health Journey Could Start Here.",
    body: "You don't have to keep wondering what other options may be available. Connect with Sigma Core Medical Center and discover how our personalized integrative approach may fit your health needs.",
    cta: "Request My Free Consultation",
  },
  privacyNote:
    "Our forms ask for contact details only. Please do not include medical information.",
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
        "Sigma Core serves the Richmond, Virginia area. The public address has not been reconfirmed.",
    },
    {
      question: "How do I book?",
      answer:
        "The booking integration has not been supplied yet. Appointment details will be shared when available.",
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
  cta: "Request a Free Consultation",
} as const;

/** Confirmed public contact facts for Sigma Core Medical Center. */
export const CONTACT = {
  address: "9020 Stony Point Pkwy #100, Richmond, VA 23235",
  phone: "804-486-7699",
  officePhone: "804-531-0770",
  email: "front.desk@sigmacoremedicalcenter.com",
  hours: "Monday–Thursday, 8:30 AM–12:00 PM and 1:00 PM–5:00 PM",
} as const;

export const PROVIDER = {
  name: "Dr. Nicholas Fleming, DC",
} as const;

/** Variant B homepage next-step copy, reconciled to the published guide and phone booking. */
export const WAYS_B = {
  guideBody:
    "Dealing with numbness, tingling, burning feet, or balance concerns? Our free Neuropathy Clarity Scorecard helps you organize your symptoms and better prepare for a conversation about your health.",
  guideNote:
    "Includes a 4-page symptom self-assessment and 7-day tracker. Educational only; not a medical diagnosis.",
  bookingBody:
    "You don't have to keep wondering what other options may be available. Connect with Sigma Core Medical Center and discover how our personalized integrative approach may fit your health needs.",
  callLine: "Prefer to speak with someone? Call our office directly.",
} as const;

const [, , ...FAQ_GENERAL_ITEMS] = FAQ.items;

/** Variant B homepage FAQ: confirmed location and booking answers, unchanged general answers. */
export const FAQ_B = {
  items: [
    {
      question: "Where is Sigma Core located?",
      answer: `Sigma Core Medical Center is at ${CONTACT.address}. Office hours are ${CONTACT.hours}.`,
    },
    {
      question: "How do I book?",
      answer: `Request a Free Consultation online or call ${CONTACT.phone}.`,
    },
    ...FAQ_GENERAL_ITEMS,
  ] as FaqItem[],
} as const;

export const FOOTER = {
  tagline: "Human Performance and Longevity",
  location: "Richmond, Virginia area",
  cta: "Book an Appointment",
  nav: [
    "Services",
    "About",
    "Blog",
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
      "Appointments will be requested through Sigma Core's approved scheduling experience. The integration has not been supplied yet; please check back for updates.",
  },
  guide: {
    title: "Educational guide pending",
    message:
      "The Sigma Core educational guide is pending final approval. The resource title, media, and delivery details will be published once approved; it is not available yet.",
  },
  page: {
    title: "Page in preparation",
    message:
      "This page is in preparation for a later site build and has not been published yet.",
  },
} as const;
