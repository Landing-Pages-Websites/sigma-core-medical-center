import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function BookCalendar(): React.ReactElement {
  return (
    <section id="gohighlevel-calendar" className="b3-section b3-blue b3-book-calendar">
      <div className="b3-shell b3-book-calendar-layout">
        <div className="b3-book-calendar-intro">
          <h2>Scheduling calendar</h2>
          <p>GoHighLevel calendar integration requires an approved URL and verified workflow before appointments can be requested here.</p>
          <Link href="/contact" className="b3-action b3-action-light">Contact &amp; location status <ArrowRight size={20} aria-hidden="true" /></Link>
          <p className="b3-caption">No public phone, email, or alternate booking channel has been confirmed.</p>
        </div>
        <div className="b3-book-calendar-decision">
          <span className="b3-book-calendar-label">Current booking state</span>
          <div className="b3-book-calendar-primary">
            <strong>No booking form is active</strong>
            <span>We cannot confirm appointments until the calendar is connected.</span>
          </div>
          <div className="b3-book-calendar-secondary">
            <strong>Integration reserved</strong>
            <p>The verified calendar will appear here when available. There are no selectable slots today.</p>
          </div>
          <div className="b3-book-calendar-steps" aria-hidden="true"><i /><i /><i /><i /></div>
        </div>
      </div>
    </section>
  );
}
