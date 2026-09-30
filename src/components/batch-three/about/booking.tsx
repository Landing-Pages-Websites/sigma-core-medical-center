import Link from "next/link";
import { ArrowRight } from "lucide-react";
export function AboutBooking(): React.ReactElement {
  return <section id="booking-cta" className="b3-section b3-blue b3-about-booking"><div className="b3-shell b3-split"><div className="b3-bracket"><h2>Start with your goals.</h2><p>When scheduling becomes available, you can request an appointment to discuss your questions and next steps.</p><Link href="/book" className="b3-action b3-action-light">See booking status <ArrowRight size={20} aria-hidden="true" /></Link></div><div className="b3-about-booking-path"><span className="b3-about-booking-label">Your path forward</span><div className="b3-about-booking-steps"><span>Your goals</span><span>Your questions</span><strong>Booking status</strong></div><p>The calendar is not connected yet. No appointment can be requested or confirmed on the booking page.</p></div></div></section>;
}
