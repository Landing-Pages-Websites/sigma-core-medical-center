import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { DesignPhoto } from "../design-photo";
export function ContactBooking(): React.ReactElement {
  return <section id="booking-cta" className="b3-section b3-charcoal b3-contact-booking"><div className="b3-shell b3-split"><div><h2>Taking the next step</h2><p>Appointments will be requested through a verified scheduling calendar. It is not available yet, so no appointment can be confirmed here.</p><Link href="/book" className="b3-action">See scheduling status <ArrowRight size={20} /></Link><p className="b3-caption">No contact form or public phone number is available at this time.</p></div><DesignPhoto slug="contact" file="04-booking-cta-01-clinic-reception.png" className="b3-bevel" /></div></section>;
}
