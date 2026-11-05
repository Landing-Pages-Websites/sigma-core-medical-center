import { Phone } from "lucide-react";

export function BookHero(): React.ReactElement {
  return (
    <section data-mega-section="booking-hero" id="booking-hero" className="book-section book-hero" aria-labelledby="book-title">
      <div className="book-shell book-hero-layout">
        <div className="book-hero-copy">
          <h1 id="book-title" className="book-bracket">Appointment <br />scheduling</h1>
          <p className="book-availability">Call to book a Free Consultation.</p>
          <p className="book-orientation">Speak with our team directly to schedule your appointment.</p>
        </div>
        <div className="book-status-panel" role="group" aria-labelledby="book-panel-title">
          <div className="book-status-frame">
            <Phone size={48} strokeWidth={1.3} aria-hidden="true" />
            <h2 id="book-panel-title">Book by phone</h2>
            <a data-mega-cta="call-now" href="tel:+18044867699" className="book-phone-link" aria-label="Call 804-486-7699 to book a Free Consultation">804-486-7699</a>
            <p>Call for a Free Consultation.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
