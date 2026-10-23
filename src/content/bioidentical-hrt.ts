import type { ServicePageData } from "@/content/pages";

/** Educational service-page content for the bioidentical HRT destination. */
export const BIOIDENTICAL_HRT_PAGE: ServicePageData = {
  slug: "bioidentical-hrt",
  eyebrow: "Bioidentical hormone replacement therapy",
  title: "A thoughtful conversation about bioidentical hormone replacement therapy",
  intro:
    "Bioidentical hormone replacement therapy may be one option adults discuss when hormone-related changes affect energy, recovery, sleep, or day-to-day function. Sigma Core starts with an individualized evaluation to understand whether this approach may be appropriate for you.",
  heroImage: "/images/pages/hormone-consultation-v2.webp",
  heroAlt: "An adult having a calm conversation in a bright clinic setting",
  orientationTitle: "Start with the right questions",
  orientationIntro:
    "The phrase bioidentical hormone replacement therapy, or BHRT, can refer to hormone products that are chemically identical to hormones made by the body. Product, route, dose, monitoring, risks, and alternatives are individual clinical decisions.",
  orientationCards: [
    {
      title: "What are you hoping to change?",
      body: "Describe the changes affecting your energy, recovery, sleep, function, or quality of life and the goals that matter most to you.",
    },
    {
      title: "What should be evaluated?",
      body: "A clinician should consider your health history, current medications, symptoms, goals, and other factors before discussing an option.",
    },
    {
      title: "What should you understand?",
      body: "Ask about potential benefits, limitations, risks, monitoring, alternatives, and what follow-up may involve before making a decision.",
    },
  ],
  decisionTitle: "Questions that support an informed decision",
  decisionIntro:
    "Use these topics to prepare for a personal conversation. They are starting points, not a diagnosis or a treatment plan.",
  decisionCards: [
    {
      title: "Your goals",
      body: "Explain the changes you have noticed and the activities, function, energy, or recovery you want to support.",
    },
    {
      title: "Your health history",
      body: "Bring a complete list of medications, supplements, relevant conditions, and questions about how your history affects options.",
    },
    {
      title: "Monitoring and follow-up",
      body: "Ask what monitoring may be needed, how decisions are reviewed, and when you should contact the care team.",
    },
    {
      title: "Alternatives and timing",
      body: "Discuss whether another approach, further evaluation, or more time to consider the options may be appropriate.",
    },
  ],
  expectTitle: "A careful next step",
  expectBody:
    "A consultation can help you understand whether hormone evaluation or bioidentical hormone replacement therapy fits your goals. Before any plan is considered, a qualified clinician should review your history, current medications, relevant symptoms, potential benefits and risks, and alternatives.",
  expectActions: [
    {
      title: "See the broader hormone-care approach",
      body: "Review how Sigma Core frames hormone health around function, energy, recovery, and personal goals.",
      href: "/services/hormone-optimization",
      ctaLabel: "Explore hormone optimization",
    },
    {
      title: "Talk through your goals",
      body: "Start with a conversation about whether Sigma Core may be an appropriate fit for your needs.",
      href: "/book",
      ctaLabel: "Book an appointment",
    },
  ],
  faqs: [
    {
      question: "Is bioidentical hormone replacement therapy the same for everyone?",
      answer:
        "No. Hormone-related symptoms, health history, goals, product choices, monitoring, and alternatives differ from person to person. A qualified clinician must determine what, if anything, may be appropriate.",
    },
    {
      question: "Does “bioidentical” mean a product is FDA-approved?",
      answer:
        "Approval status depends on the specific product and its use. Ask which product is being discussed and whether it is FDA-approved for that use; do not assume that the word bioidentical means approved or risk-free.",
    },
    {
      question: "Can this page tell me whether I need BHRT?",
      answer:
        "No. This page provides general education, not a diagnosis or personal medical advice. An individualized clinical conversation is needed to discuss your concerns and possible next steps.",
    },
    {
      question: "What happens during a consultation?",
      answer:
        "You can discuss your goals, symptoms, health history, medications, questions, and possible next steps. The clinician should also explain relevant benefits, risks, alternatives, and follow-up.",
    },
    {
      question: "Is hormone replacement therapy right for me?",
      answer:
        "Only an appropriately qualified clinician who reviews your individual circumstances can help answer that question. Care options and outcomes vary.",
    },
    {
      question: "Does this page provide medical advice?",
      answer:
        "No. It is general website information and is not a substitute for an individualized evaluation or medical advice.",
    },
  ],
  faqQuote:
    "A good consultation leaves room for questions, alternatives, and a decision that fits your health history and goals.",
  faqButtons: [
    { label: "Review hormone optimization", href: "/services/hormone-optimization" },
    { label: "Book a conversation", href: "/book" },
  ],
  bookingCtaPoints: ["Discuss your goals", "Review appropriate options", "Choose an informed next step"],
  sources: ["U.S. Food and Drug Administration", "The Endocrine Society", "The Menopause Society"],
};
