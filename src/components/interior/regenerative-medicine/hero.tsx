import { InteriorImage } from "../interior-image";
import { BatchBooking } from "../batch-booking";

export function RegenHero(): React.ReactElement {
  return <section id="hero" className="b2-section r-hero"><div className="b2-wrap r-hero-grid"><div><h1>Explore whether regenerative medicine belongs in your care conversation</h1><p>Regenerative medicine is a broad service category. This page is a starting point for questions, not a recommendation for a particular procedure.</p><p>Specific offerings and responsible providers await written verification and clinical review. No outcome or procedure is promised.</p><BatchBooking /></div><div className="r-hero-art"><InteriorImage slug="regenerative-medicine" file="01-hero-01-clinic-reception.png" alt="Reception concept from the approved regenerative consultation frame" priority /><p>This is a starting point for informed questions.</p></div></div></section>;
}
