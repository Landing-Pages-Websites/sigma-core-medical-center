import Link from "next/link";
import { NextAction } from "../next-action";

export function ServicesBooking(): React.ReactElement {
  return <section id="form" className="interior-section service-book"><div className="interior-wrap"><div className="service-book-grid"><div className="bracket"><h2>Let’s talk about your next step.</h2><p>Book an appointment to discuss your goals and questions. We’re here to listen and help you consider what comes next.</p><NextAction href="/book">Book an appointment</NextAction><small>Scheduling details will be available when the approved booking integration is supplied.</small></div><div className="service-book-direction" aria-hidden="true"><span /><span /><span /><span /></div></div>
    <nav className="route-rail" aria-label="More ways to explore"><Link href="/services/neuropathy">Learn about neuropathy →</Link><Link href="/services/pain-relief">Explore pain relief →</Link><Link href="/services">All services →</Link></nav><div className="signal-bars" aria-hidden /></div>
  </section>;
}
