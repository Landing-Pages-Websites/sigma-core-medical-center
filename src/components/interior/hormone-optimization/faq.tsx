import Link from "next/link";

const QUESTIONS = [
  ["Why does individual assessment matter?", "Goals and symptoms can overlap with many health factors. Only an appropriate clinician can consider your individual context."],
  ["Does this page give medical advice?", "No. This is general information to help you prepare questions, not a diagnosis or treatment plan."],
  ["How do I book an appointment?", "Online scheduling is unavailable. Provider identity, clinical process, and calendar details are not approved, so this page has no booking link."],
  ["Where does Sigma Core serve?", "Sigma Core serves the Richmond, Virginia area. Specific location details are being confirmed."],
];

export function HormoneFaq(): React.ReactElement {
  return <section id="faq" className="b2-section h-faq"><div className="b2-wrap h-faq-layout"><div><h2>FAQ</h2><p>Answers to common questions about hormone-health conversations.</p><div className="h-faq-guide"><strong>Keep the decision personal</strong><p>These answers explain the page’s limits and booking status. Only an appropriate clinician can consider your context, including risks, alternatives, and follow-up.</p><Link href="#medical-sources">See the source-review status →</Link></div></div><div><dl>{QUESTIONS.map(([question, answer]) => <div key={question}><dt>{question}</dt><dd>{answer}</dd></div>)}</dl><div className="h-faq-links"><Link href="/services">All services →</Link><Link href="/services/neuropathy">Neuropathy care →</Link><Link href="/terms">Terms of Use →</Link></div></div></div></section>;
}
