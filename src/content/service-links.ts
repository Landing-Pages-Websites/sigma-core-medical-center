import { Activity, Bone, BrainCircuit, HeartPulse, Sparkles } from "lucide-react";

/** The five service pages, in menu order. The header menu and the blog sidebar both read this list. */
export const SERVICE_LINKS = [
  { label: "Neuropathy", href: "/services/neuropathy", body: "Movement, function, and everyday independence.", icon: BrainCircuit },
  { label: "Pain Relief", href: "/services/pain-relief", body: "Care for knee, low-back, and neck concerns.", icon: Bone },
  { label: "Hormone Optimization", href: "/services/hormone-optimization", body: "A conversation about function, energy, and recovery.", icon: Activity },
  { label: "Pelvic Floor & Incontinence", href: "/services/pelvic-floor-incontinence", body: "Private, respectful care centered on daily life.", icon: HeartPulse },
  { label: "Regenerative Medicine", href: "/services/regenerative-medicine", body: "PRP and other options, explained with care.", icon: Sparkles },
] as const;
