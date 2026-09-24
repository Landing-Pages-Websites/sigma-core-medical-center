import Link from "next/link";
import { InteriorImage } from "../interior-image";

const QUESTIONS = [
  { name: "Goals & fit", prompt: "What are my goals, and what would an appropriate next step mean for me?" },
  { name: "Evidence & status", prompt: "What is the exact product or procedure? What is its FDA status and evidence for this use?" },
  { name: "Alternatives", prompt: "What alternatives exist, including the option of no procedure?" },
  { name: "Uncertainty & risk", prompt: "What benefits, risks, unknowns, and costs should I understand?" },
  { name: "Next steps", prompt: "Who is the responsible provider? What follow-up is needed if it is or is not appropriate?" },
];

export function RegenQuestions(): React.ReactElement {
  return <section id="questions-for-a-consultation" className="b2-section r-questions"><div className="b2-wrap"><h2>Questions For A Consultation</h2><p className="r-questions-lead">Use these questions to evaluate the exact product or procedure, the provider, evidence, alternatives, and follow-up. They are not claims about a Sigma Core offering.</p><div className="r-question-cards">{QUESTIONS.map((item) => <article key={item.name}><h3>{item.name}</h3><p>{item.prompt}</p></article>)}</div><div className="r-questions-base"><InteriorImage slug="regenerative-medicine" file="03-questions-for-a-consultation-01-clinic-interior-strip.png" alt="Narrow interior strip from the approved consultation questions frame" /><div><Link href="/services">All services →</Link><Link href="/services/neuropathy">Neuropathy care →</Link></div></div></div></section>;
}
