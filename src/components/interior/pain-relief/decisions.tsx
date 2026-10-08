import Link from "next/link";

const QUESTIONS = [
  "Who would be responsible for my care?", "How would an assessment be specific to me?",
  "What goals are we discussing?", "What are the risks and trade-offs?",
  "What alternatives are available?", "What follow-up could I expect?",
  "What costs should I ask about?", "When might a referral be appropriate?",
];

export function PainDecisions(): React.ReactElement {
  return (
    <section id="decision-factors" className="interior-section pain-decisions">
      <div className="interior-wrap pain-decisions-layout">
        <div className="pain-decisions-intro"><h2>Questions before a care decision</h2><p>Use this list to evaluate what may be appropriate for you. A qualified clinician can address the answers after learning your history and concerns.</p><div className="pain-decision-mark" aria-hidden="true"><span /><span /><span /></div></div>
        <div><h3>Bring these to the conversation</h3><ul className="pain-decisions-questions">{QUESTIONS.map((question) => <li key={question}>{question}</li>)}</ul><p className="pain-decisions-note">No provider, plan, cost or follow-up is confirmed by this page.</p><div className="pain-decisions-links"><Link href="/about">Learn about Sigma Core →</Link><Link href="/services/neuropathy">Explore neuropathy →</Link><Link href="/book">Check scheduling status →</Link></div></div>
      </div>
    </section>
  );
}
