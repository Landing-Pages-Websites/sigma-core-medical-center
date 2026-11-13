import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function BookCalendar(): React.ReactElement {
  return (
    <section data-mega-section="gohighlevel-calendar" id="gohighlevel-calendar" className="book-section book-calendar" aria-labelledby="book-calendar-title">
      <div className="book-shell book-calendar-layout">
        <div className="book-reserve">
          <h2 id="book-calendar-title">Schedule <br />by phone</h2>
          <p>Call <a data-mega-cta="call-now" href="tel:+18044867699" className="book-inline-phone">804-486-7699</a> to book your Free Consultation directly with our team.</p>
          <div className="book-reserve-rule" aria-hidden="true" />
          <svg className="book-reserve-steps" viewBox="0 0 180 66" aria-hidden="true" focusable="false">
            <path d="M0 58H54 M38 33H100 M84 8H179" />
          </svg>
        </div>
        <div className="book-routes">
          <div>
            <Link data-mega-cta="book-appointment" href="https://go.sigmacoremedicalcenter.com/" className="book-services-link"><span>Request online</span><ArrowRight aria-hidden="true" /></Link>
            <p>Prefer not to call? Request a Free Consultation online.</p>
          </div>
          <div className="book-route-gap">
            <Link href="/services" className="book-services-link"><span>Explore services</span><ArrowRight aria-hidden="true" /></Link>
            <p>Browse service information.</p>
          </div>
          <div className="book-contact-route">
            <Link data-mega-cta="contact" href="/contact#contact-form" className="book-contact-link"><span>Request contact</span><ArrowRight aria-hidden="true" /></Link>
            <p>Send an inquiry. This does not confirm an appointment.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
