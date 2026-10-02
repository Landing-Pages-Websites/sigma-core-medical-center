import Link from "next/link";
import { ArrowRight } from "lucide-react";

const principles = [
  ["One clear next step.", "General orientation helps you consider where to begin."],
  ["Your care, your conversation.", "Individual questions belong in a care conversation."],
  ["Clear expectations.", "We share what to expect without promising a treatment."],
  ["Outcomes vary.", "Individual needs and results are different."],
];

export function AboutPrinciples(): React.ReactElement {
  return (
    <section id="care-principles" className="about-care" aria-labelledby="about-care-title">
      <div className="about-care-main">
        <h2 id="about-care-title">Care Principles</h2>
        <ul className="about-care-grid">{principles.map(([title, body]) => (
          <li key={title}><h3>{title}</h3><p>{body}</p></li>
        ))}</ul>
      </div>
      <aside className="about-questions" aria-labelledby="about-questions-title">
        <h3 id="about-questions-title">Before choosing a service</h3>
        <p>Which concern should I explore first?</p>
        <p>What would help me decide if a visit is right for me?</p>
        <div className="about-question-actions">
          <Link href="/services" className="about-action">Explore services <ArrowRight aria-hidden="true" /></Link>
          <Link href="/book" className="about-action about-action-outline">Booking status <ArrowRight aria-hidden="true" /></Link>
        </div>
      </aside>
    </section>
  );
}
