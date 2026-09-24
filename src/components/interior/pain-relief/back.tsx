import { InteriorImage } from "../interior-image";
import { NextAction } from "../next-action";

export function PainBack(): React.ReactElement {
  return <section id="low-back-concerns" className="interior-section pain-back"><div className="interior-wrap pain-back-grid"><div><h2 className="bracket">Low-back concerns</h2><p>Daily tasks like sitting, lifting, sleeping and moving can all prompt questions.</p><p>Low-back concerns have many possible causes. This website cannot diagnose your specific situation.</p><div className="pain-back-action"><span className="eyebrow">Next step</span><h3>Ready to talk?</h3><p>Bring your questions to a personal care conversation.</p><NextAction href="/book" pale>Book an appointment</NextAction><small>Scheduling integration pending.</small></div></div><InteriorImage slug="pain-relief" file="04-low-back-concerns-01-man-at-home.png" alt="Man gardening at home beside a window" className="pain-back-photo" /></div><p className="interior-wrap pain-back-note">Educational content only; it cannot replace professional evaluation.</p></section>;
}
