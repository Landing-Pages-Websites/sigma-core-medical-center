import Link from "next/link";
import { InteriorImage } from "../interior-image";
import { NextAction } from "../next-action";

export function ServicesBooking(): React.ReactElement {
  return <section id="form" className="interior-section service-book"><div className="interior-wrap"><div className="service-book-grid"><div className="bracket"><h2>Let’s talk about your next step.</h2><p>Book an appointment to discuss your goals and questions. We’re here to listen and help you consider what comes next.</p><NextAction href="/book">Book an appointment</NextAction><small>Scheduling details will be available when the approved booking integration is supplied.</small></div><InteriorImage slug="services" file="05-booking-cta-01-clinic-reception.png" alt="Reception scene in the approved booking design" className="service-book-photo" /></div>
    <nav className="route-rail" aria-label="More ways to explore"><Link href="/services/neuropathy">Learn about neuropathy →</Link><Link href="/services/pain-relief">Explore pain relief →</Link><Link href="/services">All services →</Link></nav><div className="signal-bars" aria-hidden /></div>
  </section>;
}
