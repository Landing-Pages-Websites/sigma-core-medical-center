export const RICHMOND_LOCAL_CONTEXT =
  "Sigma Core Medical Center serves the Richmond, Virginia area. Explore the care category that best matches your questions, then choose an informed next step.";

export const RICHMOND_SERVICE_LINKS = [
  {
    label: "Neuropathy care",
    href: "/services/neuropathy",
    body: "Movement, function, and everyday independence.",
  },
  {
    label: "Pain relief",
    href: "/services/pain-relief",
    body: "Knee, low-back, neck, and joint concerns.",
  },
  {
    label: "Hormone optimization",
    href: "/services/hormone-optimization",
    body: "Function, energy, recovery, and personal goals.",
  },
  {
    label: "Pelvic floor and incontinence",
    href: "/services/pelvic-floor-incontinence",
    body: "Private, respectful support centered on daily life.",
  },
  {
    label: "Regenerative medicine",
    href: "/services/regenerative-medicine",
    body: "Category-level questions about options and uncertainty.",
  },
] as const;

export const RICHMOND_NEXT_STEP_LINKS = [
  { label: "Explore all services", href: "/services" },
  { label: "Learn about Sigma Core", href: "/about" },
  { label: "Contact the center", href: "/contact" },
  { label: "Book an appointment", href: "/book" },
] as const;
