import Link from "next/link";
import { InteriorImage } from "../interior-image";

const GOALS = [
  { name: "Function", question: "What would meaningful progress in daily life look like for me?" },
  { name: "Energy", question: "What may or may not change, and how would we know?" },
  { name: "Recovery", question: "What are the potential risks, alternatives, and follow-up questions?" },
  { name: "Personal goals", question: "How do options fit my priorities and preferences?" },
];

export function HormoneGoals(): React.ReactElement {
  return <section id="goals-and-decision-factors" className="b2-section h-goals"><div className="b2-wrap"><div className="h-goals-head"><h2>Goals And<br />Decision Factors</h2><p>Bring questions about provider licensure, evidence, benefits, risks, alternatives, monitoring, follow-up, and cost to an individualized conversation.</p></div><div className="h-goals-panels">{GOALS.map((goal) => <article key={goal.name}><h3>{goal.name}</h3><p>{goal.question}</p></article>)}</div><div className="h-goals-bottom"><InteriorImage slug="hormone-optimization" file="03-goals-and-decision-factors-01-clinic-interior-strip.png" alt="Architectural interior strip from the approved goals frame" /><div><Link href="/services/neuropathy">Explore neuropathy care →</Link><Link href="/services">Compare all services →</Link></div></div></div></section>;
}
