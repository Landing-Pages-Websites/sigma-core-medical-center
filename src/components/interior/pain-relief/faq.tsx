import { InteriorImage } from "../interior-image";
import { NextAction } from "../next-action";

const ANSWERS = [
  { question: "Why are these concerns together?", answer: "This page gives knee, low-back and neck questions a single home without claiming the same cause or care for each." },
  { question: "Can this page diagnose my pain?", answer: "No. Website information does not assess individual symptoms or recommend treatment." },
  { question: "How can I request an appointment?", answer: "The approved booking integration has not been supplied yet. The booking page is being prepared." },
  { question: "What information is not yet available?", answer: "Treatment details, costs, insurance and timelines are not confirmed for publication here." },
];

export function PainFaq(): React.ReactElement {
  return <section id="faq" className="interior-section pain-faq"><div className="interior-wrap pain-faq-grid"><div><h2 className="bracket">Questions, answered.</h2><p>What this page can—and cannot—tell you about taking a next step.</p><InteriorImage slug="pain-relief" file="07-faq-01-clinic-interior.png" alt="Clinic interior crop in the approved FAQ design" /></div><div className="pain-faq-stack"><dl>{ANSWERS.map((item) => <div key={item.question}><dt>{item.question}</dt><dd>{item.answer}</dd></div>)}</dl><div className="pain-faq-action"><p>Ready for a conversation?</p><NextAction href="/book" pale>Explore booking</NextAction><small>Booking integration pending.</small></div></div></div></section>;
}
