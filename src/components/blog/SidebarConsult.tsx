import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import type { ReactElement } from "react";
import { PHONE_HREF, REQUEST_URL } from "@/components/blog/consult-links";
import { TallBracket } from "@/components/pages/shared/page-motifs";
import { CONTACT } from "@/content/site";

const COPY = {
  full: { heading: "Questions about this topic?", body: "Talk them through with our Richmond team in a Free Consultation." },
  compact: { heading: "Ready to talk?", body: null },
} as const;

interface SidebarConsultProps {
  /** "full" opens the sidebar; "compact" stays pinned in view through the rest of a long article. */
  variant: keyof typeof COPY;
}

/** The sidebar's booking card: request online or call the office. */
export default function SidebarConsult({ variant }: SidebarConsultProps): ReactElement {
  const { heading, body } = COPY[variant];
  const headingId = `sidebar-consult-${variant}`;
  return (
    <aside aria-labelledby={headingId} className="relative bg-navy p-7 text-white shadow-[0_12px_32px_rgb(6_29_54/0.18)]">
      <TallBracket className="absolute top-7 bottom-7 left-0 w-2.5 text-royal" />
      <h2 id={headingId} className="font-heading text-2xl leading-tight font-bold tracking-[-0.02em]">{heading}</h2>
      {body ? <p className="mt-3 text-base leading-relaxed text-white/80">{body}</p> : null}
      <Link
        data-mega-cta="book-appointment"
        href={REQUEST_URL}
        className="mt-5 flex min-h-12 items-center justify-between gap-2 bg-action px-4 font-semibold text-white transition-colors hover:bg-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        Request a Free Consultation <ArrowRight size={18} aria-hidden className="shrink-0" />
      </Link>
      <a
        data-mega-cta="call-now"
        href={PHONE_HREF}
        className="mt-3 flex min-h-12 items-center justify-center gap-2 border border-white/40 px-5 font-semibold transition-colors hover:bg-white hover:text-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        <Phone size={18} aria-hidden /> Call {CONTACT.phone}
      </a>
    </aside>
  );
}
