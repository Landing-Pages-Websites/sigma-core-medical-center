import { InteriorImage } from "../interior-image";
import { NextAction } from "../next-action";

export function NeuropathyHero(): React.ReactElement {
  return <section id="hero" className="interior-section neuro-hero"><div className="interior-wrap"><div className="neuro-hero-grid"><div><p className="eyebrow">Neuropathy care · Richmond area</p><h1>A clearer next step when neuropathy is limiting your day</h1><p>Talk about movement, daily function, independence and quality of life—starting with what matters to you.</p><p className="font-display italic">Care is personalized and outcomes vary.</p><p className="neuro-hero-source">General information drawn from <a href="#medical-sources">NINDS</a>; clinical review is pending.</p></div><InteriorImage slug="neuropathy" file="01-hero-01-person-walking.png" alt="Adult walking outdoors on a tree-lined path; illustrative, not a Sigma Core patient" className="neuro-hero-walk" priority /></div>
    <div id="trust-bar" className="neuro-hero-steps"><span>Understand your goals</span><span>Discuss appropriate options</span><span>Choose an informed next step</span><div><NextAction href="#goals-and-decision-factors">Prepare your questions</NextAction><small>Online appointment scheduling is not available yet.</small></div></div>
  </div></section>;
}
