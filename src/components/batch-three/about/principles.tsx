import Link from "next/link";
import { ArrowRight } from "lucide-react";
const principles = [
  ["One clear next step.", "General orientation helps you consider where to begin."],
  ["Your care, your conversation.", "Individual questions belong in a care conversation."],
  ["No protocol claims.", "We share what to expect without promising a treatment."],
  ["Outcomes vary.", "Individual needs and results are different."],
];
export function AboutPrinciples(): React.ReactElement {
  return <section id="care-principles" className="b3-section b3-charcoal b3-about-principles"><div className="b3-shell b3-split"><div><h2 className="b3-bracket">Care <span>Principles</span></h2><ul className="b3-principles-list">{principles.map(([title, body]) => <li key={title}><strong>{title}</strong><p>{body}</p></li>)}</ul><div className="b3-inline-links"><Link href="/services" className="b3-action">Explore services <ArrowRight size={20} aria-hidden="true" /></Link><Link href="/book" className="b3-text-link">Booking status <ArrowRight size={18} aria-hidden="true" /></Link></div></div><div className="b3-about-principles-guide"><span className="b3-about-guide-label">Before choosing a service</span><div className="b3-about-guide-questions"><p>What do I want to understand?</p><p>Which questions need an individual conversation?</p><p>What matters most in my next step?</p></div><span className="b3-about-guide-foot">Start with the question that matters to you.</span></div></div></section>;
}
