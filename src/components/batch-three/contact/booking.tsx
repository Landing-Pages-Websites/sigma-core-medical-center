import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ContactBooking(): React.ReactElement {
  return (
    <section id="booking-cta" className="b3-section b3-charcoal b3-contact-booking">
      <div className="b3-shell b3-split">
        <div className="b3-booking-copy">
          <h2>Taking the next step</h2>
          <p>Our booking page shows the current scheduling status. If a verified calendar becomes available, appointment request details may appear there.</p>
          <Link href="/book" className="b3-action">
            See scheduling status <ArrowRight size={20} aria-hidden="true" />
          </Link>
          <p className="b3-caption">No public phone, email, or contact form has been confirmed.</p>
        </div>
        <aside className="b3-booking-availability" aria-label="Current online appointment availability">
          <span className="b3-booking-availability-label">Online appointment requests</span>
          <strong>Not available</strong>
          <p>No date or time can be requested or confirmed through this site right now.</p>
        </aside>
      </div>
    </section>
  );
}
