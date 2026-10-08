import { Activity, Leaf, MessageSquare } from "lucide-react";
import Link from "next/link";

const GOALS = [
  { label: "Movement and daily function", Icon: Activity },
  { label: "Independence and quality of life", Icon: Leaf },
  { label: "Questions for a personalized conversation", Icon: MessageSquare },
];

export function NeuropathyGoals(): React.ReactElement {
  return <section id="goals-and-decision-factors" className="interior-section neuro-goals"><div className="interior-wrap neuro-goals-grid"><div className="neuro-goals-copy"><h2 className="bracket">Goals and decision factors</h2><p>Everyone’s priorities differ. Use these ideas to prepare the questions that matter to you.</p><p><strong>Goals to discuss:</strong> daily function, comfort, balance confidence and activities that matter to you.</p><p><strong>Decisions to discuss:</strong> appropriate evaluation, potential benefits and risks, alternatives, cost and follow-up. Provider qualifications can be reviewed when confirmed.</p><Link href="#medical-sources" className="text-action font-semibold underline underline-offset-4">See the information source →</Link><small>These are discussion topics, not a recommendation for treatment.</small></div><div className="neuro-goals-track"><div className="neuro-goals-items">{GOALS.map(({ label, Icon }) => <div key={label} className="bracket"><Icon aria-hidden="true" size={36} strokeWidth={1.8} /><span>{label}</span></div>)}</div><aside className="neuro-goals-lens"><span>Before choosing an option</span><strong>Ask what applies to you.</strong><ol><li>What evaluation is appropriate?</li><li>What benefits and risks are supported?</li><li>What alternatives, costs, and follow-up matter?</li></ol></aside></div></div></section>;
}
