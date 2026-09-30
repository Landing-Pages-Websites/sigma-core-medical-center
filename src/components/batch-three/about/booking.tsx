import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function AboutBooking(): React.ReactElement {
  return <section id="booking-cta" className="b3-section b3-blue b3-about-booking">
    <div className="b3-shell b3-split">
      <div className="b3-bracket">
        <h2>Start with your goals.</h2>
        <p>See the current appointment status before planning your next step.</p>
        <Link href="/book" className="b3-action b3-action-light">See booking status <ArrowRight size={20} aria-hidden="true" /></Link>
      </div>
      <div className="b3-about-booking-status">
        <strong>Scheduling is not available yet.</strong>
        <p>No appointment can be requested or confirmed online at this time.</p>
      </div>
    </div>
  </section>;
}
