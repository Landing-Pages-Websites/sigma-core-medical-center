import { InteriorImage } from "../interior-image";
import { NextAction } from "../next-action";

export function NeuropathyExpect(): React.ReactElement {
  return <section id="what-to-expect" className="interior-section neuro-expect"><div className="interior-wrap neuro-expect-grid"><div><div className="signal-bars" aria-hidden /><h2 className="bracket">What to expect</h2><p>Appointments will be requested through Sigma Core’s approved GoHighLevel scheduling experience. The care conversation is personalized; appointment and treatment details are not yet confirmed for publication.</p><NextAction href="/book">Book an appointment</NextAction><small>The approved scheduling integration has not been supplied yet.</small></div><InteriorImage slug="neuropathy" file="04-what-to-expect-01-real-waiting-room.png" alt="Waiting-room photograph supplied for this section" className="neuro-expect-photo" /></div></section>;
}
