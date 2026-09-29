import Link from "next/link";
import { ArrowRight } from "lucide-react";
export function ContactHero(): React.ReactElement {
  return <section id="contact-hero" className="b3-section b3-ink b3-contact-hero"><div className="b3-shell b3-split"><div className="b3-bracket"><h1>Visit Sigma Core in the Richmond area</h1><p>We serve the Richmond, Virginia area. The public address and direct contact details still require confirmation.</p><Link href="/book" className="b3-action">Check booking status <ArrowRight size={20} /></Link><div className="b3-status" id="address-status"><strong>Address under review</strong><span>Do not use an onboarding address for directions yet.</span></div></div><div className="b3-contact-hero-art" aria-hidden="true"><span /><span /><span /></div></div></section>;
}
