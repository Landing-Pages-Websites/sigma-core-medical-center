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
  title: "Explore a thoughtful next step for neuropathy",
  intro:
    "Explore neuropathy treatment with clear information about symptoms, evaluation, and questions to bring to a consultation. Care is individualized and outcomes vary.",
  heroImage: "/images/pages/neuropathy-woodland-walk-v2.webp",
  heroAlt: "An older adult walking away along a quiet tree-lined path",
  orientationTitle: "Visitor orientation",
  orientationIntro:
    "Peripheral neuropathy describes a broad set of conditions affecting the peripheral nerves. This page offers general information about neuropathy treatment conversations, not a diagnosis or guaranteed protocol.",
  orientationCards: [
    {
      title: "Clear information",
      body: "A plain-language overview of common symptoms, evaluation questions, and treatment conversations.",
    },
    {
      title: "Personal conversation",
      body: "Your medical history, goals, and concerns belong in an individualized clinical conversation.",
    },
    {
      title: "Informed next step",
      body: "Understand what to ask about evaluation, options, risks, and follow-up.",
    },
  ],
  decisionTitle: "Goals and decision factors",
  decisionIntro:
    "Every person’s priorities are different. Use these themes to prepare for a neuropathy treatment consultation.",
  decisionCards: [
    { title: "Movement and daily function", body: "Discuss the activities, balance, comfort, and participation you want to protect." },
    { title: "Independence and quality of life", body: "Share how your concerns affect routines, confidence, sleep, and daily life." },
    { title: "Questions for a treatment conversation", body: "Ask about evaluation, possible options, alternatives, costs, and expected follow-up." },
  ],
  expectTitle: "What to expect",
  expectBody:
    "A neuropathy treatment consultation starts with your symptoms, health history, goals, and questions. A qualified clinician can discuss whether an evaluation or care option may be appropriate and what follow-up could involve.",
  faqs: [
    { question: "What is this site for?", answer: "This site provides clear, general information about neuropathy treatment conversations and our approach to nerve health and human performance." },
    { question: "What treatments are available for neuropathy?", answer: "Treatment depends on symptoms, likely causes, health history, and goals. A qualified clinician can discuss whether a treatment or supportive approach may be appropriate, along with potential benefits, risks, alternatives, and follow-up. No single approach is right for everyone." },
    { question: "Do you diagnose neuropathy online?", answer: "No. The website does not diagnose conditions. Individual guidance requires an appropriate clinical evaluation." },
    { question: "How do I prepare for a neuropathy treatment consultation?", answer: "Bring questions about your symptoms, daily function, goals, current care, and what you want to understand about evaluation or next steps." },
    { question: "How do I book an appointment?", answer: "Use the Book page to review the current consultation and scheduling status." },
    { question: "Where is your clinic located?", answer: "Sigma Core serves the Richmond, Virginia area. Final public address details require reconfirmation before launch." },
    { question: "Why isn’t one treatment presented as right for everyone?", answer: "Neuropathy symptoms and contributing factors can differ. A consultation is the appropriate place to discuss what may be suitable for your situation rather than promise a universal result." },
  ],
  sources: ["National Institute of Neurological Disorders and Stroke", "Centers for Disease Control and Prevention", "North American Spine Society"],
};

export const HORMONE_PAGE: ServicePageData = {
  slug: "hormone-optimization",
  eyebrow: "Hormone health",
  title: "A personalized conversation about hormone health and how you want to feel",
  intro:
    "We focus on what matters to you—function, energy, recovery, and well-being—and how those goals fit into your everyday life.",
  heroImage: "/images/pages/hormone-hero-v2.webp",
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
  eyebrow: "Pelvic floor therapy and evaluation",
  title: "Pelvic Floor Therapy and Incontinence Evaluation",
  intro:
    "Learn what to consider when looking for pelvic floor therapy or an incontinence evaluation. Sigma Core provides respectful, plain-language orientation without diagnosing or promising a particular outcome.",
  heroImage: "/images/pages/pelvic-private.webp",
  heroAlt: "A mature adult enjoying a private, quiet moment outdoors",
  orientationTitle: "Private orientation",
  orientationIntro:
    "Pelvic-floor concerns and incontinence symptoms can have different causes and deserve an individualized evaluation. This page provides general orientation, not a diagnosis or treatment plan.",
  orientationCards: [
    { title: "Share what you’ve noticed", body: "Describe changes such as leakage, urgency, frequency, pressure, or other concerns in your own words." },
    { title: "Connect it to your life", body: "Explain how symptoms affect routines, activity, sleep, travel, exercise, and confidence." },
    { title: "Ask about pelvic floor therapy", body: "Ask what an evaluation includes and whether pelvic floor therapy may be appropriate for your goals." },
    { title: "Discuss next steps", body: "A qualified provider can review options, alternatives, and follow-up for your individual situation." },
  ],
  decisionTitle: "Questions for an evaluation",
  decisionIntro:
    "Use these prompts to prepare for a pelvic floor therapy or incontinence evaluation while protecting your privacy throughout the conversation.",
  decisionCards: [
    { title: "Your symptoms and goals", body: "Note what you have noticed and the activities, routines, or goals you want to discuss." },
    { title: "What an evaluation includes", body: "Ask how your history, symptoms, and goals will inform the evaluation and next-step discussion." },
    { title: "Options and alternatives", body: "Ask whether pelvic floor therapy may be appropriate, what alternatives exist, and what follow-up involves." },
  ],
  expectTitle: "What to expect",
  expectBody:
    "We respect your privacy and your time. An appropriate provider can explain what an incontinence evaluation may include, whether pelvic floor therapy may be appropriate, and what other options or follow-up may be considered. Visit details are not yet confirmed.",
  faqs: [
    { question: "What is an incontinence evaluation?", answer: "It is a provider-led review of your history, symptoms, goals, and relevant health context. This page cannot diagnose you or determine whether therapy is appropriate." },
    { question: "Could pelvic floor therapy be appropriate?", answer: "That depends on your individual evaluation. A qualified provider can discuss whether pelvic floor therapy, another option, or a different referral may fit your situation." },
    { question: "How do I book an evaluation?", answer: "Check the Book page for current scheduling status. Online scheduling is not yet available." },
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
  orientationImages: ["/images/shared/reception-1.webp", "/images/shared/reception-2.webp"],
  decisionCtaLabel: "Ready to prepare for an evaluation?",
};

export const REGENERATIVE_PAGE: ServicePageData = {
  slug: "regenerative-medicine",
  eyebrow: "Regenerative medicine",
  title: "Explore whether regenerative medicine belongs in your care conversation",
  intro:
    "This consultation is a starting point for questions and informed decisions. No modality is named or promoted before verification and review.",
  heroImage: "/images/shared/reception-1.webp",
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
  orientationImages: ["/images/shared/reception-2.webp", "/images/shared/waiting-room.webp"],
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

export const SPINAL_DECOMPRESSION_PAGE: ServicePageData = {
  slug: "spinal-decompression",
  eyebrow: "Spinal decompression therapy",
  title: "A thoughtful next step for back and neck concerns",
  intro:
    "Spinal decompression therapy is a non-surgical care approach that may be considered for some back or neck concerns. A personalized evaluation can help clarify whether it fits your goals, history, and daily function.",
  heroImage: "/images/pages/pain-low-back-v3.webp",
  heroAlt: "Adult walking outdoors on a tree-lined path",
  orientationTitle: "Start with the right conversation",
  orientationIntro:
    "Spinal decompression is not a one-size-fits-all treatment and this page cannot determine its suitability. The purpose of a consultation is to understand your concerns, review relevant history, and discuss reasonable next steps.",
  orientationCards: [
    { title: "What this page covers", body: "General orientation to spinal decompression therapy and the questions that may matter before an evaluation." },
    { title: "What an evaluation adds", body: "A clinician can consider your symptoms, medical history, goals, and whether further assessment is needed." },
    { title: "What this page does not do", body: "It does not diagnose a condition, promise an outcome, or replace an individualized clinical conversation." },
  ],
  decisionTitle: "Questions that shape the next step",
  decisionIntro:
    "Bring the details that help a clinician understand what you want to keep doing and what has changed. The right approach depends on the person, not just the location of discomfort.",
  decisionCards: [
    { title: "Your symptoms and patterns", body: "Note where concerns occur, when they began, what changes them, and whether they affect movement, sleep, or routine." },
    { title: "Your goals for movement", body: "Describe the activities, work, exercise, travel, or daily tasks you want to protect or return to." },
    { title: "Your health context", body: "Share relevant history, prior care, medications, injuries, procedures, and any changes that concern you." },
    { title: "Your options and questions", body: "Ask about whether this approach may be appropriate, alternatives, risks, expected follow-up, and what happens next." },
  ],
  expectTitle: "What to expect from a consultation",
  expectBody:
    "A consultation is a conversation about your goals and health context, not a commitment to treatment. If spinal decompression is not appropriate, the clinician can discuss other reasonable next steps or whether additional evaluation is needed.",
  faqs: [
    { question: "Is spinal decompression the same as back exercises?", answer: "No. This service page concerns a supervised therapy conversation. It is distinct from educational articles about home exercises, and online content cannot tell you which exercises or treatment approach is appropriate for you." },
    { question: "Can spinal decompression help my back or neck concern?", answer: "It may be considered for some people, but suitability and outcomes vary. A clinician needs to review your individual history and concerns before discussing whether it may fit." },
    { question: "Does this page diagnose a disc problem?", answer: "No. This page provides general information only. Diagnosis and decisions about evaluation or care require an appropriate clinical assessment." },
    { question: "Should I start exercises from an article before an evaluation?", answer: "Do not use general educational content as a personalized treatment plan. Bring questions about activity or exercise to a qualified healthcare professional, particularly if symptoms are new, worsening, or accompanied by weakness or other concerning changes." },
    { question: "How do I learn whether this may be appropriate for me?", answer: "Schedule a consultation to discuss your goals, health history, and questions. The conversation can help clarify whether further evaluation or another next step is appropriate." },
  ],
  sources: ["American Academy of Orthopaedic Surgeons", "Peer-reviewed literature", "Professional clinical guidance"],
  heroBullets: [
    "A service overview, not a diagnosis or home exercise plan.",
    "Suitability depends on your history, goals, and clinical evaluation.",
    "Discuss alternatives, risks, and expected follow-up before deciding.",
  ],
  faqQuote: "Individual results vary. General website information is not medical advice and does not replace an evaluation.",
  faqButtons: [
    { label: "Book a Consultation", href: "/book" },
    { label: "Contact the Clinic", href: "/contact" },
  ],
  bookingCtaPoints: ["Discuss your goals", "Review appropriate next steps", "Make an informed decision"],
};

export const SERVICE_PAGES = [
  NEUROPATHY_PAGE,
  HORMONE_PAGE,
  PELVIC_PAGE,
  REGENERATIVE_PAGE,
  SPINAL_DECOMPRESSION_PAGE,
] as const;
