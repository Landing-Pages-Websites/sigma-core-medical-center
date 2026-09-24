import Link from "next/link";
import { InteriorImage } from "../interior-image";

const QUESTIONS = [
  ["Why aren't specific options listed?", "Actual products, procedures, and indications have not been verified for publication. This page discusses only the category."],
  ["Why does an appropriate provider matter?", "Questions about suitability, risks, and alternatives require a qualified clinician with your full personal context."],
  ["How can I book a consultation?", "The approved booking experience is still being prepared. No calendar integration is available yet."],
  ["Where does the clinic serve?", "Sigma Core serves the Richmond, Virginia area. Address and operational details await confirmation."],
];

export function RegenFaq(): React.ReactElement {
  return <section id="faq" className="b2-section r-faq"><div className="b2-wrap r-faq-grid"><div><h2>Faq</h2><p>Common questions about the consultation and what this page can—and cannot—tell you.</p><dl>{QUESTIONS.map(([question, answer]) => <div key={question}><dt>{question}</dt><dd>{answer}</dd></div>)}</dl><nav aria-label="Related services"><Link href="/services">All services →</Link><Link href="/services/neuropathy">Neuropathy care →</Link></nav></div><InteriorImage slug="regenerative-medicine" file="05-faq-01-clinic-reception.png" alt="Reception detail from the approved FAQ frame" /></div></section>;
}
