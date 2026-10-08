export type InfoCard = {
  title: string;
  body: string;
};

export type FaqEntry = {
  question: string;
  answer: string;
};

export type OrientationCallouts = {
  leftTitle: string;
  leftBody: string;
  rightTitle: string;
  rightBody: string;
};

export type PerspectiveCard = {
  title: string;
  body: string;
};

export type ExpectAction = {
  title: string;
  body: string;
  href: string;
  ctaLabel: string;
};

export type FaqButton = {
  label: string;
  href: string;
};

export type FooterCard = {
  title: string;
  body: string;
};

export type ServicePageData = {
  slug: string;
  eyebrow: string;
  title: string;
  intro: string;
  heroImage: string;
  heroAlt: string;
  orientationTitle: string;
  orientationIntro: string;
  orientationCards: InfoCard[];
  decisionTitle: string;
  decisionIntro: string;
  decisionCards: InfoCard[];
  expectTitle: string;
  expectBody: string;
  faqs: FaqEntry[];
  sources: string[];
  /** Opt-in refined layout (flanking photos, quote card, ticket-style cards). Omit to keep the standard template. */
  enhancedLayout?: true;
  heroQuote?: string;
  heroBullets?: readonly string[];
  orientationCallouts?: OrientationCallouts;
  orientationImages?: readonly [string, string];
  decisionCtaLabel?: string;
  /** Opt-in "category boundary" panel + link inside the orientation section. */
  categoryBoundaryTitle?: string;
  categoryBoundaryItems?: readonly string[];
  categoryBoundaryLinkLabel?: string;
  categoryBoundaryLinkHref?: string;
  /** Opt-in two-action row (e.g. educational guide + booking) in the expect section. */
  expectActions?: readonly [ExpectAction, ExpectAction];
  /** Opt-in perspective/chat-bubble cards alongside the expect section photo. */
  perspectiveCards?: readonly [PerspectiveCard, PerspectiveCard, PerspectiveCard];
  /** Opt-in pull-quote + button row under the FAQ intro column. */
  faqQuote?: string;
  faqButtons?: readonly [FaqButton, FaqButton];
  /** Opt-in override for the shared BookingCta's three icon bullets. */
  bookingCtaPoints?: readonly [string, string, string];
  /** Opt-in three-card row under Medical Sources. */
  sourcesFooterCards?: readonly [FooterCard, FooterCard, FooterCard];
};

export const NEUROPATHY_PAGE: ServicePageData = {
  slug: "neuropathy",
  eyebrow: "Neuropathy care",
  title: "A clearer next step when neuropathy is limiting your day",
  intro:
    "We focus on movement, daily function, independence, and quality of life—so you can get back to what matters. Care is personalized and outcomes vary.",
  heroImage: "/images/pages/neuropathy-woodland-walk-v2.png",
  heroAlt: "An older adult walking away along a quiet tree-lined path",
  orientationTitle: "Visitor orientation",
  orientationIntro:
    "Peripheral neuropathy describes a broad set of conditions affecting the peripheral nerves. This page offers general orientation, not diagnosis or a protocol.",
  orientationCards: [
    {
      title: "Clear information",
      body: "A plain-language overview of common symptoms, questions, and care pathways.",
    },
    {
      title: "Personal conversation",
      body: "Your medical history, goals, and concerns belong in an individualized clinical conversation.",
    },
    {
      title: "Informed next step",
      body: "Understand what to ask, what may require evaluation, and what comes next.",
    },
  ],
  decisionTitle: "Goals and decision factors",
  decisionIntro:
    "Every person’s priorities are different. Use these themes to prepare the questions that matter most to you.",
  decisionCards: [
    { title: "Movement and daily function", body: "Discuss the activities, balance, comfort, and participation you want to protect." },
    { title: "Independence and quality of life", body: "Share how your concerns affect routines, confidence, sleep, and daily life." },
    { title: "Questions for a personalized conversation", body: "Ask about evaluation, options, alternatives, costs, and expected follow-up." },
  ],
  expectTitle: "What to expect",
  expectBody:
    "Booking occurs through Sigma Core’s secure scheduling experience. The care conversation is personalized and begins with your goals and questions.",
  faqs: [
    { question: "What is this site for?", answer: "This site provides clear, general information about our approach to nerve health and human performance." },
    { question: "Do you diagnose neuropathy online?", answer: "No. The website does not diagnose conditions. Individual guidance requires an appropriate clinical evaluation." },
    { question: "How do I book an appointment?", answer: "Use the Book page to continue to the secure scheduling experience." },
    { question: "Where is your clinic located?", answer: "Sigma Core serves the Richmond, Virginia area. Final public address details require reconfirmation before launch." },
    { question: "Why aren’t treatment details listed?", answer: "We keep treatment details off this page to protect clarity, safety, and individualization. Your experience is designed after we learn what is most appropriate for you." },
  ],
  sources: ["National Institute of Neurological Disorders and Stroke", "Centers for Disease Control and Prevention", "North American Spine Society"],
};

export const HORMONE_PAGE: ServicePageData = {
  slug: "hormone-optimization",
  eyebrow: "Hormone health",
  title: "A personalized conversation about hormone health and how you want to feel",
  intro:
    "We focus on what matters to you—function, energy, recovery, and well-being—and how those goals fit into your everyday life.",
  heroImage: "/images/pages/hormone-hero-v2.png",
  heroAlt: "An adult preparing thoughtful questions in a notebook at home",
  orientationTitle: "Visitor orientation",
  orientationIntro:
    "Symptoms and goals can overlap with many health factors and require an appropriate licensed clinician’s individualized assessment.",
  orientationCards: [
    { title: "General information", body: "This page offers educational context around wellness topics and human performance." },
    { title: "Your individual conversation", body: "Personal health history and goals require a one-to-one conversation with a licensed clinician." },
    { title: "Responsible prescribing", body: "Credentials, services, process, risks, benefits, and alternatives should be confirmed before care." },
  ],
  decisionTitle: "Goals and decision factors",
  decisionIntro:
    "Prepare questions that support a responsible conversation and help your clinician understand what matters most to you.",
  decisionCards: [
    { title: "Function", body: "Ask what the provider is evaluating, what may be appropriate, and what benefits or limits to expect." },
    { title: "Energy", body: "Discuss how progress is monitored, what follow-up is involved, and how your goals are defined." },
    { title: "Recovery", body: "Ask what happens if an option is not appropriate and how the plan may be adjusted." },
    { title: "Your goals", body: "Clarify the outcomes that matter, what trade-offs exist, and what you want to learn before deciding." },
  ],
  expectTitle: "Responsible next step",
  expectBody:
    "The responsible prescribing provider, credentials, services, process, risks, benefits, and alternatives must be confirmed before care begins.",
  faqs: [
    { question: "Why does individualized assessment matter?", answer: "Your goals, routines, health history, and needs are personal. A responsible conversation helps clarify what may be appropriate." },
    { question: "Does this page provide medical advice?", answer: "No. This page offers general education and does not provide individual medical advice." },
    { question: "How do I book?", answer: "Start with the Book page and the secure scheduling experience." },
    { question: "Where is the clinic located?", answer: "Sigma Core serves the Richmond, Virginia area. Final public address details require reconfirmation." },
  ],
  sources: ["U.S. Food and Drug Administration", "Endocrine Society", "The Menopause Society"],
};

export const PELVIC_PAGE: ServicePageData = {
  slug: "pelvic-floor-incontinence",
  eyebrow: "Private care",
  title: "Private, respectful support for pelvic-floor and incontinence concerns",
  intro:
    "Pelvic-floor and incontinence care is a sensitive service category. We use respectful, plain language centered on comfort, confidence, and daily life.",
  heroImage: "/images/pages/pelvic-private.png",
  heroAlt: "A mature adult enjoying a private, quiet moment outdoors",
  orientationTitle: "Private orientation",
  orientationIntro:
    "Concerns vary from person to person and deserve an individualized conversation. We do not list diagnoses, populations, or treatment claims here.",
  orientationCards: [
    { title: "Share what you’ve noticed", body: "Describe what you are experiencing and how it may be affecting daily life." },
    { title: "Connect it to your life", body: "Help us understand the effect on routines, activity, sleep, travel, exercise, and confidence." },
    { title: "Ask your questions", body: "Bring the questions you want answered so we can focus the conversation." },
    { title: "Get a clinical perspective", body: "A clinical review helps determine the next step that may be appropriate for you." },
  ],
  decisionTitle: "Concerns and goals",
  decisionIntro:
    "We’ll help you identify what matters most while protecting your privacy throughout the conversation.",
  decisionCards: [
    { title: "Privacy by design", body: "General marketing forms do not collect free-text medical narratives or symptom history." },
    { title: "No pressure", body: "This is a conversation, not a commitment." },
    { title: "Your pace", body: "We listen first so you can move forward with clarity." },
  ],
  expectTitle: "What to expect",
  expectBody:
    "We respect your privacy and your time. An appropriate provider will explain evaluation, visit length, options, and process only after approval.",
  faqs: [
    { question: "Is my conversation private?", answer: "Yes. Privacy is a priority, and health information is kept confidential and protected." },
    { question: "How do I book?", answer: "Request a conversation through the secure Book page." },
    { question: "Where is the clinic?", answer: "Sigma Core is based in the Richmond, Virginia area." },
    { question: "Why do individual questions require a provider?", answer: "Questions about your situation, options, and what may be appropriate need a provider’s professional assessment." },
  ],
  sources: ["National Institute of Diabetes and Digestive and Kidney Diseases", "American Urological Association", "International Urogynecological Association"],
  enhancedLayout: true,
  heroQuote: "Your care, your privacy.",
  orientationCallouts: {
    leftTitle: "Your privacy matters.",
    leftBody: "We protect your information and the conversations you have with us.",
    rightTitle: "Clear limits.",
    rightBody: "This site offers general information only. It is not medical advice or a substitute for a personalized conversation.",
  },
  orientationImages: ["/images/shared/reception-1.png", "/images/shared/reception-2.png"],
  decisionCtaLabel: "Ready to start the conversation?",
};

export const REGENERATIVE_PAGE: ServicePageData = {
  slug: "regenerative-medicine",
  eyebrow: "Regenerative medicine",
  title: "Explore whether regenerative medicine belongs in your care conversation",
  intro:
    "This consultation is a starting point for questions and informed decisions. No modality is named or promoted before verification and review.",
  heroImage: "/images/shared/reception-1.png",
  heroAlt: "Sigma Core Medical Center reception area",
  orientationTitle: "Category orientation",
  orientationIntro:
    "Regenerative medicine is a broad category. Legality, evidence, risks, and suitability depend on the actual product or procedure.",
  orientationCards: [
    { title: "Category boundary", body: "This section provides category-level information only; specific products and procedures require their own review." },
    { title: "Evidence first", body: "Ask which evidence supports the option for people like you and whether it fits the intended use." },
    { title: "Alternatives and uncertainty", body: "Understand reasonable alternatives, limitations, risks, and what remains uncertain." },
  ],
  decisionTitle: "Questions for a consultation",
  decisionIntro:
    "Prompt questions about the exact product or procedure, FDA status, evidence, alternatives, costs, follow-up, and what happens if it is not appropriate.",
  decisionCards: [
    { title: "What are my goals?", body: "Clarify what you want to improve or understand and how progress would be measured." },
    { title: "What is the evidence?", body: "Ask what supports this for people like you and whether it fits the intended use." },
    { title: "What are the alternatives?", body: "Compare reasonable alternatives, including doing nothing and monitoring." },
    { title: "What is the uncertainty?", body: "Ask about known benefits and risks, what is not yet known, and expected follow-up." },
    { title: "What comes next?", body: "Understand how the process works and what happens when an option is not appropriate." },
  ],
  expectTitle: "Decision factors",
  expectBody:
    "Good decisions start with clarity, not certainty. There is uncertainty in any decision, and alternatives should be part of the conversation.",
  faqs: [
    { question: "Why aren’t specific options listed?", answer: "We do not publish products, indications, efficacy claims, costs, eligibility, or timelines pending approval and verification." },
    { question: "Why is an appropriate provider important?", answer: "A qualified provider can review your goals, health context, evidence, alternatives, and risks." },
    { question: "How do I book a consultation?", answer: "Use the secure scheduling path on the Book page." },
    { question: "Where is the clinic located?", answer: "Sigma Core serves Richmond, Virginia and the surrounding area." },
  ],
  sources: ["U.S. Food and Drug Administration", "Peer-reviewed literature", "Professional clinical guidance"],
  enhancedLayout: true,
  heroBullets: [
    "Category-level information only—no specific product or procedure is named here.",
    "Evidence, alternatives, and risks are reviewed before anything is discussed as an option.",
    "Your questions shape the conversation, not a fixed treatment plan.",
  ],
  orientationCallouts: {
    leftTitle: "Category-level only.",
    leftBody: "This page describes the category, not a specific product or procedure. No modality is named or promoted here.",
    rightTitle: "Verification required.",
    rightBody: "Evidence, alternatives, and suitability depend on the specific option once it is reviewed and verified.",
  },
  orientationImages: ["/images/shared/reception-2.png", "/images/shared/waiting-room.png"],
  decisionCtaLabel: "Ready to explore your questions?",
  categoryBoundaryTitle: "Category boundary",
  categoryBoundaryItems: [
    "This section provides category-level information only.",
    "Specific products or procedures require their own review.",
    "Content here does not name or promote any modality.",
  ],
  categoryBoundaryLinkLabel: "Learn more about our approach",
  categoryBoundaryLinkHref: "/about",
  expectActions: [
    {
      title: "Start with information",
      body: "Request Sigma Core’s educational guide to review category-level information at your own pace.",
      href: "/educational-guide",
      ctaLabel: "Get the Educational Guide",
    },
    {
      title: "Ready to talk",
      body: "Use the Book page to request an appointment and bring your questions to the conversation.",
      href: "/book",
      ctaLabel: "Book an Appointment",
    },
  ],
  perspectiveCards: [
    { title: "Your personal goals", body: "What are you hoping to understand or address? What matters most in your decision?" },
    { title: "Your informed questions", body: "What would bring clarity? What concerns or unknowns do you want to explore?" },
    { title: "Your individualized conversation", body: "A conversation, not a commitment. We’ll help you sort through options and next steps." },
  ],
  faqQuote: "We do not publish products, indications, efficacy claims, costs, eligibility, or timelines pending approval and verification.",
  faqButtons: [
    { label: "Book a Consultation", href: "/book" },
    { label: "Contact the Clinic", href: "/contact" },
  ],
  bookingCtaPoints: ["Talk through your goals", "Get clear on next steps", "Make an informed decision"],
  sourcesFooterCards: [
    { title: "Choose your starting point", body: "Explore the category or begin with the educational guide." },
    { title: "Start the conversation", body: "Book an appointment to ask your questions and see if this may be appropriate for you." },
    { title: "Decide what comes next", body: "Review the available information and choose the appropriate next step." },
  ],
};

export const SERVICE_PAGES = [
  NEUROPATHY_PAGE,
  HORMONE_PAGE,
  PELVIC_PAGE,
  REGENERATIVE_PAGE,
] as const;
