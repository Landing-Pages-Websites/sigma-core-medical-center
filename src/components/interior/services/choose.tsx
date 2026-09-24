import Link from "next/link";
import { InteriorImage } from "../interior-image";
import { NextAction } from "../next-action";

export function ServicesChoose(): React.ReactElement {
  return <section id="how-it-works" className="interior-section service-choose"><div className="interior-wrap"><div className="service-choose-grid">
    <div className="bracket"><h2>How to choose your next step</h2><div className="signal-bars" aria-hidden /><p>These service pages offer general orientation. Your individual questions deserve a conversation with a clinical professional to consider an appropriate next step.</p><p className="interior-emphasis">Start with a conversation. We’ll listen and help you explore your questions.</p></div>
    <div className="service-choose-media"><InteriorImage slug="services" file="04-how-to-choose-next-step-01-clinic-reception.png" alt="Reception detail from the approved decision frame" className="service-choose-photo" /><div className="service-choose-cta"><NextAction href="/book">Book an appointment</NextAction><small>Booking integration is not yet available.</small></div></div>
    </div><nav className="route-rail" aria-label="Explore related pages"><Link href="/services/neuropathy">About neuropathy →</Link><Link href="/services/pain-relief">Pain relief →</Link><Link href="/">Back to home →</Link></nav>
  </div></section>;
}
