import { InteriorImage } from "../interior-image";
import { BatchBooking } from "../batch-booking";

export function HormoneHero(): React.ReactElement {
  return <section id="hero" className="b2-section h-hero"><div className="b2-wrap h-hero-grid"><div className="h-hero-copy"><h1>A personalized conversation about hormone health and how you want to feel</h1><p>Talk about what matters to you—function, energy, recovery, and well-being—without assuming a treatment or a result.</p><BatchBooking /><div className="h-hero-points"><span>Personal conversation about your goals</span><span>Topics that matter to you</span><span>Questions for an informed next step</span></div><p className="h-hero-note">Hormone optimization is a Sigma Core service category. Individual care details await clinical review.</p></div><InteriorImage slug="hormone-optimization" file="01-hero-01-man-writing.png" alt="Adult writing down personal goals" priority className="h-hero-photo" /></div></section>;
}
