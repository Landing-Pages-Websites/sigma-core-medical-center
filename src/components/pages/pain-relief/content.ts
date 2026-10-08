export const PAIN_NAV_ITEMS = [
  {
    label: "Knee Orientation",
    body: "Explore knee pain as a starting point. We look beyond the joint to understand how it connects.",
    href: "#knee",
    image: "/images/pages/pain-nav-knee-v4.png",
  },
  {
    label: "Low-Back Orientation",
    body: "Explore low-back pain as a starting point. We assess movement and system relationships.",
    href: "#low-back",
    image: "/images/pages/pain-nav-low-back-v4.png",
  },
  {
    label: "Neck Orientation",
    body: "Explore neck pain as a starting point. We consider how posture and movement work together.",
    href: "#neck",
    image: "/images/pages/pain-nav-neck-v4.png",
  },
] as const;

export const KNEE_STEPS = [
  { title: "Understand your concerns", body: "Learn how knee pain may affect walking, stairs, standing, sleep, and the activities you value." },
  {
    title: "Watch for red flags",
    body: "Seek urgent care if you have a fall or injury with inability to bear weight, noticeable deformity, severe swelling, fever with a red or hot knee, or calf pain with swelling or shortness of breath.",
  },
  { title: "Plan your next step", body: "Bring your questions and concerns to a health care professional to discuss the right next step for you." },
] as const;

export const DECISIONS = [
  "Who will be responsible for my care?",
  "How will my assessment be thorough and specific to me?",
  "What are we hoping to achieve together?",
  "What are the risks, trade-offs, and unknowns?",
  "What alternatives are available, including doing nothing?",
  "What should I expect for follow-up and next steps?",
  "What will the total investment be in time, visits, and cost?",
  "When is referral to another provider appropriate?",
] as const;

export const PAIN_FAQ = {
  question: "Why are knee, low-back, and neck concerns grouped together on this page?",
  answers: [
    "These concerns are grouped to give you a single place to explore information that may help you understand what’s possible.",
    "This page does not provide a diagnosis or assess your specific situation. It’s for general information only.",
    "When you’re ready, you can connect with our Richmond, Virginia team to take the next step.",
    "Some details are not available on this page yet. We’re continuing to add useful information over time.",
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
