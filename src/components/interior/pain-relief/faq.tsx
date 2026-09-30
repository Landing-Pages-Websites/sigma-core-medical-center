import Link from "next/link";

const ANSWERS = [
  { question: "Why are these concerns together?", answer: "This page gives knee, low-back, neck and joint questions a single home without claiming the same cause or care for each." },
  { question: "Can this page diagnose my pain?", answer: "No. Website information does not assess individual symptoms or recommend treatment." },
  { question: "Can I request an appointment here?", answer: "No. The approved booking calendar has not been connected. You can review questions to bring, then check the current scheduling status." },
  { question: "What information is not yet available?", answer: "Treatment details, costs, insurance and timelines are not confirmed for publication here." },
];

export function PainFaq(): React.ReactElement {
  return (
    <section id="faq" className="interior-section pain-faq">
      <div className="interior-wrap pain-faq-grid"><div className="pain-faq-intro"><h2 className="bracket">Questions, answered.</h2><p>A clear boundary helps you decide what to read now and what to ask a clinician later.</p><div className="pain-faq-rule" aria-hidden="true" /><Link href="#medical-sources" className="pain-text-link">See the medical sources ↓</Link></div><div className="pain-faq-stack"><dl>{ANSWERS.map((item) => <div key={item.question}><dt>{item.question}</dt><dd>{item.answer}</dd></div>)}</dl><div className="pain-faq-action"><strong>Plan your next conversation</strong><p>Keep your own questions close; the booking calendar is not connected yet.</p><Link href="#decision-factors">Review the question list ↑</Link></div></div></div>
    </section>
  );
}
