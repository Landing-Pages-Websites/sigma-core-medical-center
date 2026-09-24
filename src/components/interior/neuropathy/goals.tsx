import { InteriorImage } from "../interior-image";
import { Activity, Leaf, MessageSquare } from "lucide-react";

const GOALS = [
  { label: "Movement and daily function", Icon: Activity },
  { label: "Independence and quality of life", Icon: Leaf },
  { label: "Questions for a personalized conversation", Icon: MessageSquare },
];

export function NeuropathyGoals(): React.ReactElement {
  return <section id="goals-and-decision-factors" className="interior-section neuro-goals"><div className="interior-wrap neuro-goals-grid"><div className="neuro-goals-copy"><h2 className="bracket">Goals and decision factors</h2><p>Everyone’s priorities differ. Use these ideas to prepare the questions that matter to you.</p><p><strong>Goals to discuss:</strong> daily function, comfort, balance confidence and activities that matter to you.</p><p><strong>Decisions to discuss:</strong> appropriate evaluation, potential benefits and risks, alternatives, cost and follow-up. Provider qualifications can be reviewed when confirmed.</p><a href="/book" className="text-action font-semibold underline underline-offset-4">Discuss your questions →</a><small>Booking integration pending.</small></div><div className="neuro-goals-track"><div className="neuro-goals-items">{GOALS.map(({ label, Icon }) => <div key={label} className="bracket"><Icon aria-hidden="true" size={36} strokeWidth={1.8} /><span>{label}</span></div>)}</div><div className="neuro-goals-photos"><InteriorImage slug="neuropathy" file="03-goals-and-decision-factors-01-clinic-reception.png" alt="Reception scene from approved goals frame" /><InteriorImage slug="neuropathy" file="03-goals-and-decision-factors-02-visitor-in-lounge.png" alt="Visitor in a lounge from approved goals frame" /></div></div></div></section>;
}
