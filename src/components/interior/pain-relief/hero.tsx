import { InteriorImage } from "../interior-image";
import { NextAction } from "../next-action";

export function PainHero(): React.ReactElement {
  return <section id="hero" className="interior-section pain-hero"><div className="interior-wrap pain-hero-grid"><div className="bracket"><h1>Move toward a more informed plan for persistent pain</h1><p>Start with movement, daily function and your questions—not a self-diagnosis.</p><p>Knee, low-back and neck concerns belong together on this page because pain can affect daily life in different ways.</p><NextAction href="/book">Book an appointment</NextAction><small>Approved scheduling integration pending.</small></div><div className="pain-hero-branches" aria-label="Areas of concern"><div><span>Knee</span><span>Low back</span><span>Neck</span></div></div><InteriorImage slug="pain-relief" file="01-hero-01-person-walking.png" alt="Adult walking across a clinic floor in the approved pain design" className="pain-hero-photo" priority /></div></section>;
}
