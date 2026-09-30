import Link from "next/link";

const QUESTIONS = [
  ["Can I discuss my concerns privately?", "You can bring your questions to an individual conversation. Specific privacy and scheduling practices await confirmation."],
  ["How do I book?", "Online scheduling is unavailable; appointment requests cannot be submitted here."],
  ["Where does the clinic serve?", "Sigma Core serves the Richmond, Virginia area. Specific address details remain to be reconfirmed."],
  ["Why can't my questions be answered here?", "An appropriate clinician needs your individual context to address questions about a condition or care options."],
];

export function PelvicFaq(): React.ReactElement {
  return <section id="faq" className="b2-section p-faq"><div className="b2-wrap p-faq-grid"><div className="p-faq-intro"><h2>Common questions</h2><p>General answers about privacy, booking, location, and next steps.</p><div className="p-faq-boundary"><strong>Start with a question.</strong><p>Individual care questions need your own clinical context.</p></div></div><div><dl>{QUESTIONS.map(([question, answer]) => <div key={question}><dt>{question}</dt><dd>{answer}</dd></div>)}</dl><div className="p-faq-note">Conditions, treatments, eligibility, insurance, price, and timelines await clinical review.</div><nav aria-label="Related care"><Link href="/services">Explore all services →</Link></nav></div></div></section>;
}
