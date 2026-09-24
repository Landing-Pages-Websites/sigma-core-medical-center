import Link from "next/link";
import { InteriorImage } from "../interior-image";

const QUESTIONS = [
  ["Why does individual assessment matter?", "Goals and symptoms can overlap with many health factors. Only an appropriate clinician can consider your individual context."],
  ["Does this page give medical advice?", "No. This is general information to help you prepare questions, not a diagnosis or treatment plan."],
  ["How do I book an appointment?", "Online scheduling is still being prepared. Booking will be available after the clinical details and calendar are approved."],
  ["Where does Sigma Core serve?", "Sigma Core serves the Richmond, Virginia area. Specific location details are being confirmed."],
];

export function HormoneFaq(): React.ReactElement {
  return <section id="faq" className="b2-section h-faq"><div className="b2-wrap h-faq-layout"><div><h2>Faq</h2><p>Answers to common questions about hormone-health conversations.</p><InteriorImage slug="hormone-optimization" file="05-faq-01-clinic-lounge.png" alt="Interior lounge scene from the approved FAQ frame" /></div><div><dl>{QUESTIONS.map(([question, answer]) => <div key={question}><dt>{question}</dt><dd>{answer}</dd></div>)}</dl><div className="h-faq-links"><Link href="/services">All services →</Link><Link href="/services/neuropathy">Neuropathy care →</Link></div></div></div></section>;
}
