import { NextAction } from "../next-action";

export function NeuropathyExpect(): React.ReactElement {
  return <section id="what-to-expect" className="interior-section neuro-expect"><div className="interior-wrap neuro-expect-grid"><div className="neuro-expect-copy"><div className="signal-bars" aria-hidden /><h2 className="bracket">What to expect</h2><p>Online scheduling is not available yet. When approved, appointment requests will use Sigma Core’s GoHighLevel scheduling experience.</p><NextAction href="#faq">Read common questions</NextAction></div><div className="neuro-expect-status"><span className="neuro-expect-steps" aria-hidden="true" /><p>The care conversation is personalized; appointment and treatment details are not yet confirmed for publication.</p><small>No date, duration, provider, or treatment is promised here.</small></div></div></section>;
}
