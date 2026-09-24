import { InteriorImage } from "../interior-image";

const QUESTIONS = ["Who would be responsible for my care?", "How would an assessment be specific to me?", "What goals are we discussing?", "What are the risks and trade-offs?", "What alternatives are available?", "What follow-up could I expect?", "What costs should I ask about?", "When might a referral be appropriate?"];

export function PainDecisions(): React.ReactElement {
  return <section id="decision-factors" className="interior-section pain-decisions"><div className="interior-wrap"><div className="pain-decisions-top"><div><h2>Decision factors</h2><p className="bracket">A thoughtful conversation starts with the right questions. Use these considerations to evaluate what may be appropriate for you.</p></div><InteriorImage slug="pain-relief" file="06-decision-factors-01-clinic-reception.png" alt="Reception scene in the approved decision design" /></div><ul className="pain-decisions-questions">{QUESTIONS.map((question) => <li key={question}>{question}</li>)}</ul><p className="pain-decisions-note">Answers belong in a personal conversation, after verification by a qualified clinician.</p><div className="route-rail"><a href="/services/neuropathy">Explore neuropathy →</a><a href="/book">Booking page →</a></div></div></section>;
}
