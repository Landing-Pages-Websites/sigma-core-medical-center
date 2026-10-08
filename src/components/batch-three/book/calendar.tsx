import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function BookCalendar(): React.ReactElement {
  return (
    <section id="gohighlevel-calendar" className="book-section book-calendar" aria-labelledby="book-calendar-title">
      <div className="book-shell book-calendar-layout">
        <div className="book-reserve">
          <h2 id="book-calendar-title">Scheduling <br />calendar</h2>
          <p>Calendar connection pending.</p>
          <div className="book-reserve-rule" aria-hidden="true" />
          <svg className="book-reserve-steps" viewBox="0 0 180 66" aria-hidden="true" focusable="false">
            <path d="M0 58H54 M38 33H100 M84 8H179" />
          </svg>
        </div>
        <div className="book-routes">
          <div>
            <Link href="/services" className="book-services-link"><span>Explore services</span><ArrowRight aria-hidden="true" /></Link>
            <p>Browse service information.</p>
          </div>
          <div className="book-contact-route">
            <Link href="/contact" className="book-contact-link"><span>Contact &amp; location status</span><ArrowRight aria-hidden="true" /></Link>
            <p>Contact is for status information only.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
