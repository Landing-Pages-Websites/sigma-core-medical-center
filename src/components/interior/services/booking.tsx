import Link from "next/link";
import { NextAction } from "../next-action";

export function ServicesBooking(): React.ReactElement {
  return <section id="form" className="interior-section service-book"><div className="interior-wrap"><div className="service-book-grid"><div className="bracket"><h2>Prepare for your next step.</h2><p>Explore the service information and note your goals and questions for a conversation with a qualified professional.</p><NextAction href="/book">See booking status</NextAction><small>Online scheduling is unavailable. No appointment can be confirmed here.</small></div><div className="service-book-direction" aria-hidden="true" /></div>
    <nav className="route-rail" aria-label="More ways to explore"><Link href="/services/neuropathy">Learn about neuropathy →</Link><Link href="/services/pain-relief">Explore pain relief →</Link><Link href="/services">All services →</Link></nav></div>
  </section>;
}
