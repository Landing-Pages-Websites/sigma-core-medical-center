import { InteriorImage } from "../interior-image";
import { NextAction } from "../next-action";

export function NeuropathyHero(): React.ReactElement {
  return <section id="hero" className="interior-section neuro-hero"><div className="interior-wrap"><div className="neuro-hero-grid"><div><p className="eyebrow">Neuropathy care · Richmond area</p><h1>A clearer next step when neuropathy is limiting your day</h1><p>Talk about movement, daily function, independence and quality of life—starting with what matters to you.</p><p className="font-display italic">Care is personalized and outcomes vary.</p></div><InteriorImage slug="neuropathy" file="01-hero-01-person-walking.png" alt="Adult walking down a tree-lined path" className="neuro-hero-walk" priority /></div>
    <div id="trust-bar" className="neuro-hero-steps"><span>Understand your goals</span><span>Discuss appropriate options</span><span>Choose an informed next step</span><div><NextAction href="/book">Book an appointment</NextAction><small>Scheduling integration pending.</small></div></div>
  </div></section>;
}
