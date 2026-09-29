import { CalendarClock } from "lucide-react";

export function BookHero(): React.ReactElement {
  return (
    <section id="booking-hero" className="b3-section b3-ink b3-book-hero">
      <div className="b3-shell b3-book-hero-layout">
        <div className="b3-book-intro">
          <h1 className="b3-bracket">Book your appointment with Sigma Core</h1>
          <p>The approved scheduling calendar has not been connected. No appointment can be requested or confirmed on this page yet.</p>
          <ol id="booking-steps" className="b3-book-steps">
            <li>Explore your goals</li>
            <li>Review care options</li>
            <li>Return when scheduling opens</li>
          </ol>
        </div>
        <div id="integration-status" className="b3-book-status-stage">
          <div className="b3-book-status-top">
            <span>Booking status</span>
            <CalendarClock size={32} strokeWidth={1.5} aria-hidden="true" />
          </div>
          <div className="b3-book-status-message">
            <strong>Calendar integration pending</strong>
            <span>No dates, times, or availability are shown.</span>
          </div>
          <div className="b3-book-status-steps" aria-hidden="true"><i /><i /><i /><i /></div>
        </div>
      </div>
    </section>
  );
}
