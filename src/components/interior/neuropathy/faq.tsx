import Link from "next/link";

const QUESTIONS = [
  { question: "Who is this page for?", answer: "Richmond-area visitors looking for general information about neuropathy and Sigma Core’s approach.", href: "/services", action: "Explore services" },
  { question: "Does this site diagnose neuropathy?", answer: "No. This page cannot assess your symptoms or provide individual medical guidance.", href: "/services/neuropathy#visitor-orientation", action: "Read orientation" },
  { question: "How can I request an appointment?", answer: "Online appointment requests are not available yet. In the meantime, use the goals and decision questions on this page to prepare for a conversation with a qualified professional.", href: "#goals-and-decision-factors", action: "Prepare questions" },
  { question: "Where is the clinic?", answer: "Sigma Core serves the Richmond, Virginia area. Public address details await reconfirmation.", href: "/", action: "About Sigma Core" },
  { question: "Why aren't treatments listed here?", answer: "Individual options depend on an appropriate clinical conversation. Treatment details have not been approved for this page.", href: "/services/neuropathy#goals-and-decision-factors", action: "Prepare questions" },
];

export function NeuropathyFaq(): React.ReactElement {
  return <section id="faq" className="interior-section neuro-faq"><div className="interior-wrap"><div className="neuro-faq-top"><div><h2 className="bracket">Frequently asked questions</h2><p>Clear answers to help you decide what to ask next.</p></div><nav aria-label="Neuropathy page guide" className="neuro-faq-guide"><strong>Follow the questions</strong><Link href="#visitor-orientation">Understand the concern <span>01</span></Link><Link href="#goals-and-decision-factors">Prepare your priorities <span>02</span></Link><Link href="#medical-sources">Check the source <span>03</span></Link></nav></div><dl className="neuro-faq-rows">{QUESTIONS.map((item) => <div key={item.question}><dt>{item.question}</dt><dd>{item.answer}</dd><dd><Link href={item.href}>{item.action} →</Link></dd></div>)}</dl><p className="neuro-faq-end">Questions help shape better decisions. Explore your next step when you’re ready.</p></div></section>;
}
