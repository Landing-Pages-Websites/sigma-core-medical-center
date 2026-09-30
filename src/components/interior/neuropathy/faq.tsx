import Link from "next/link";

const QUESTIONS = [
  { question: "Who is this page for?", answer: "Richmond-area visitors seeking general neuropathy information and questions to bring to a qualified healthcare professional." },
  { question: "Does this site diagnose neuropathy?", answer: "No. Similar symptoms can have different causes. Only a qualified healthcare professional can assess your personal concerns." },
  { question: "How can I request an appointment?", answer: "Online appointment requests are not available yet. The booking page shows the current status.", href: "/book", action: "View booking status" },
  { question: "Where is the clinic?", answer: "Sigma Core serves the Richmond, Virginia area. Public address details await reconfirmation.", href: "/about", action: "About Sigma Core" },
  { question: "Why aren't treatments listed here?", answer: "Options depend on an individual assessment. Treatment details have not been approved for publication here." },
];

export function NeuropathyFaq(): React.ReactElement {
  return <section id="faq" className="interior-section neuro-faq"><div className="interior-wrap"><div className="neuro-faq-top"><h2 className="bracket">Frequently asked questions</h2><p>Answers about this page, availability and what remains personal.</p></div><dl className="neuro-faq-rows">{QUESTIONS.map((item) => <div key={item.question}><dt>{item.question}</dt><dd>{item.answer}{item.href && <Link href={item.href}>{item.action} →</Link>}</dd></div>)}</dl></div></section>;
}
