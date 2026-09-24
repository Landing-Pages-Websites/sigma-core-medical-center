import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { DesignPhoto } from "../design-photo";
export function AboutBooking(): React.ReactElement {
  return <section id="booking-cta" className="b3-section b3-blue b3-about-booking"><div className="b3-shell b3-split"><div className="b3-bracket"><h2>Start with your goals.</h2><p>When scheduling becomes available, you can request an appointment to discuss your questions and next steps.</p><Link href="/book" className="b3-action b3-action-light">See booking status <ArrowRight size={20} /></Link></div><DesignPhoto slug="about" file="06-booking-cta-01-clinic-reception.png" className="b3-bevel" /></div></section>;
}
