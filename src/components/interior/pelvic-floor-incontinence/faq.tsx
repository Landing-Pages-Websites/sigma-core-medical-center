import Link from "next/link";
import { InteriorImage } from "../interior-image";

const QUESTIONS = [
  ["Can I discuss my concerns privately?", "You can bring your questions to an individual conversation. Specific privacy and scheduling practices await confirmation."],
  ["How do I book?", "The approved booking experience is not yet available. Please return when scheduling details are published."],
  ["Where does the clinic serve?", "Sigma Core serves the Richmond, Virginia area. Specific address details remain to be reconfirmed."],
  ["Why can't my questions be answered here?", "An appropriate clinician needs your individual context to address questions about a condition or care options."],
];

export function PelvicFaq(): React.ReactElement {
  return <section id="faq" className="b2-section p-faq"><div className="b2-wrap p-faq-grid"><div><h2>Faq</h2><p>General answers about privacy, booking, location, and next steps.</p><InteriorImage slug="pelvic-floor-incontinence" file="05-faq-01-clinic-lounge.png" alt="Lounge interior from the approved FAQ frame" /></div><div><dl>{QUESTIONS.map(([question, answer]) => <div key={question}><dt>{question}</dt><dd>{answer}</dd></div>)}</dl><div className="p-faq-note">Conditions, treatments, eligibility, insurance, price, and timelines await clinical review.</div><nav aria-label="Related care"><Link href="/services/neuropathy">Neuropathy care →</Link><Link href="/services">All services →</Link></nav></div></div></section>;
}
