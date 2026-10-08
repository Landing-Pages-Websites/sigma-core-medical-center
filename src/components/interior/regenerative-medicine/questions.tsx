import Link from "next/link";
import { Target, FileText, Signpost, CircleHelp, Route } from "lucide-react";

const QUESTIONS = [
  { name: "Goals & fit", Icon: Target, prompt: "What are my goals, and what would an appropriate next step mean for me?" },
  { name: "Evidence & status", Icon: FileText, prompt: "What is the exact product or procedure? What is its FDA status and evidence for this use?" },
  { name: "Alternatives", Icon: Signpost, prompt: "What alternatives exist, including the option of no procedure?" },
  { name: "Uncertainty & risk", Icon: CircleHelp, prompt: "What benefits, risks, unknowns, and costs should I understand?" },
  { name: "Next steps", Icon: Route, prompt: "Who is the responsible provider? What follow-up is needed if it is or is not appropriate?" },
];

export function RegenQuestions(): React.ReactElement {
  return <section id="questions-for-a-consultation" className="b2-section r-questions"><div className="b2-wrap">
    <h2>Questions For A Consultation</h2>
    <p className="r-questions-lead">Use these questions to evaluate the exact product or procedure, the provider, evidence, alternatives, and follow-up. They are not claims about a Sigma Core offering.</p>
    <div className="r-question-cards">{QUESTIONS.map((item) => <article key={item.name}><item.Icon aria-hidden="true" size={36} strokeWidth={1.7} /><h3>{item.name}</h3><p>{item.prompt}</p></article>)}</div>
    <div className="r-questions-base"><div className="r-questions-context"><strong>Bring the specifics into focus.</strong><span>Evidence and regulatory status only make sense for an exact option and intended use.</span></div><nav aria-label="Related care categories"><Link href="/services">All services →</Link><Link href="/services/neuropathy">Neuropathy care →</Link></nav></div>
  </div></section>;
}
