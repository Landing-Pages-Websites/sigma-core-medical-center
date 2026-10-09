import { CalendarOff } from "lucide-react";

export function BookHero(): React.ReactElement {
  return (
    <section id="booking-hero" className="book-section book-hero" aria-labelledby="book-title">
      <div className="book-shell book-hero-layout">
        <div className="book-hero-copy">
          <h1 id="book-title" className="book-bracket">Appointment <br />scheduling</h1>
          <p className="book-availability">Online booking is not yet available.</p>
          <p className="book-orientation">Explore service information and contact status below.</p>
        </div>
        <div className="book-status-panel" aria-labelledby="book-panel-title">
          <div className="book-status-frame">
            <CalendarOff size={48} strokeWidth={1.3} aria-hidden="true" />
            <h2 id="book-panel-title">Online booking is not yet available</h2>
            <p>Calendar connection pending.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
