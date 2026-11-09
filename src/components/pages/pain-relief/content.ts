export const PAIN_NAV_ITEMS = [
  {
    label: "Knee Consultation",
    body: "Explore questions about knee concerns, movement, and daily activities.",
    href: "#knee",
    image: "/images/pages/pain-nav-knee-grimace.webp",
  },
  {
    label: "Low-Back Consultation",
    body: "Explore questions about low-back concerns and everyday movement.",
    href: "#low-back",
    image: "/images/pages/pain-nav-low-back-grimace.webp",
  },
  {
    label: "Neck Consultation",
    body: "Explore questions about neck concerns, comfort, and daily function.",
    href: "#neck",
    image: "/images/pages/pain-nav-neck-grimace.webp",
  },
] as const;

export const KNEE_STEPS = [
  { title: "Understand your concerns", body: "Learn how knee pain may affect walking, stairs, standing, sleep, and the activities you value." },
  {
    title: "Know what this page covers",
    body: "This page shares general information only. It does not offer symptom-specific or urgent-care guidance, and it is not medical advice.",
  },
  { title: "Plan your next step", body: "Bring your questions and concerns to a health care professional to discuss the right next step for you." },
] as const;

export const DECISIONS = [
  "What should I share about my knee, back, or neck pain?",
  "How will my evaluation be specific to me?",
  "Which daily activities matter most to my goals?",
  "What are the risks, trade-offs, and unknowns?",
  "What alternatives exist, including doing nothing?",
  "What should I expect for follow-up and next steps?",
  "What will the total investment be in time, visits, and cost?",
  "When is referral to another provider appropriate?",
] as const;

export const PAIN_FAQ = {
  question: "Why are knee, low-back, and neck concerns grouped together on this page?",
  answers: [
    "These concerns are grouped to give you a single place to explore information that may help you understand what’s possible.",
    "This page does not provide a diagnosis or assess your specific situation. It’s for general information only.",
    "To book a Free Consultation, call 804-486-7699. Online scheduling is not available.",
    "Sigma Core Medical Center is led by Dr. Nicholas Fleming, DC. Questions about your own situation are best discussed with a qualified professional.",
  ],
} as const;

export const PAIN_ROUTES = [
  { title: "Knee", body: "Understand knee-specific factors and daily demands.", href: "#knee" },
  { title: "Low-Back", body: "Explore what influences your low-back.", href: "#low-back" },
  { title: "Neck", body: "Look at neck-related factors and function.", href: "#neck" },
] as const;

export const SOURCE_GROUPS = [
  {
    title: "Knee",
    sources: [
      "NIH MedlinePlus: Knee Pain",
      "NIH MedlinePlus: Osteoarthritis",
      "American Academy of Orthopaedic Surgeons (AAOS): Knee Conditions",
      "American Physical Therapy Association (APTA): Knee Pain",
    ],
  },
  {
    title: "Low Back",
    sources: [
      "NIH MedlinePlus: Low Back Pain",
      "NIH MedlinePlus: Sciatica",
      "American Academy of Orthopaedic Surgeons (AAOS): Low Back Pain",
      "American Physical Therapy Association (APTA): Low Back Pain",
    ],
  },
  {
    title: "Neck",
    sources: [
      "NIH MedlinePlus: Neck Pain",
      "NIH MedlinePlus: Cervical Radiculopathy",
      "American Academy of Orthopaedic Surgeons (AAOS): Neck Conditions",
      "American Physical Therapy Association (APTA): Neck Pain",
    ],
  },
] as const;
