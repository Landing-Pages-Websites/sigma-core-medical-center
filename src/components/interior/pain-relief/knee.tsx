import { NextAction } from "../next-action";

export function PainKnee(): React.ReactElement {
  return (
    <section id="knee-concerns" className="interior-section pain-knee">
      <div className="interior-wrap">
        <div className="pain-knee-top">
          <div><h2>Knee concerns</h2><p className="bracket">Walking, stairs, standing or the activities you value can become harder when your knee hurts. Bring your questions to a qualified healthcare professional.</p></div>
          <div className="pain-knee-prompts">
            <div><strong>Notice your concerns</strong><span>Think about when movement or daily activities feel different.</span></div>
            <div><strong>Ask about warning signs</strong><span>Discuss any concerning symptoms with a qualified clinician; this site does not provide triage.</span></div>
            <div><strong>Plan your next step</strong><span>Ask what kind of evaluation may be appropriate for you.</span></div>
          </div>
        </div>
        <div className="pain-knee-activities"><strong>What feels different in your day?</strong><ul aria-label="Activities to consider"><li>Walking</li><li>Stairs</li><li>Standing</li></ul><NextAction href="#decision-factors">Review care questions</NextAction></div>
        <small>General information only, not medical advice. Scheduling is not connected.</small>
      </div>
    </section>
  );
}
