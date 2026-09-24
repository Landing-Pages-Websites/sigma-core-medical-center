import { InteriorImage } from "../interior-image";
import { BatchBooking } from "../batch-booking";

export function PelvicHero(): React.ReactElement {
  return <section id="hero" className="b2-section p-hero"><div className="b2-wrap p-hero-grid"><div><h1>Private, respectful support for pelvic-floor and incontinence concerns</h1><p>Pelvic floor and incontinence care is an approved service category. Start with a conversation about comfort, confidence, and daily life—on your terms.</p><BatchBooking /></div><div className="p-hero-art"><InteriorImage slug="pelvic-floor-incontinence" file="01-hero-01-person-in-garden.png" alt="Adult taking a quiet moment outdoors" priority /><p className="b2-serif">Your care,<br />your privacy.</p></div></div></section>;
}
