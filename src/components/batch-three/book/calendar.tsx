import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function BookCalendar(): React.ReactElement {
  return (
    <section id="gohighlevel-calendar" className="b3-section b3-blue b3-book-calendar">
      <div className="b3-shell b3-book-calendar-layout">
        <div className="b3-book-calendar-intro">
          <h2>Scheduling calendar</h2>
          <p>The approved GoHighLevel calendar will appear in this reserved space when integration is complete.</p>
          <Link href="/contact" className="b3-action b3-action-light">Contact &amp; location status <ArrowRight size={20} aria-hidden="true" /></Link>
          <p className="b3-caption">No public phone, email, or alternate booking channel has been confirmed.</p>
        </div>
        <div className="b3-book-calendar-decision">
          <span className="b3-book-calendar-label">Reserved calendar area</span>
          <div className="b3-book-calendar-primary">
            <strong>Booking is not yet available here.</strong>
            <span>Activation requires an approved calendar URL, a verified workflow, and privacy review.</span>
          </div>
          <div className="b3-book-calendar-steps" aria-hidden="true"><i /><i /><i /><i /></div>
        </div>
      </div>
    </section>
  );
}
