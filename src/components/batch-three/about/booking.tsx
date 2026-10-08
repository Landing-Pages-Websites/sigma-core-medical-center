import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function AboutBooking(): React.ReactElement {
  return (
    <section id="booking-cta" className="about-booking" aria-labelledby="about-booking-title">
      <div className="about-shell">
        <h2 id="about-booking-title">Start with your goals.</h2>
        <p className="about-booking-intro">See the current appointment status before planning your next step.</p>
        <Link href="/book" className="about-action about-booking-action">See booking status <ArrowRight aria-hidden="true" /></Link>
        <div className="about-booking-notice">
          <svg className="about-booking-bracket" viewBox="0 0 40 200" preserveAspectRatio="none" aria-hidden="true"><path d="M3 0 V88 H37 V197 H0" /></svg>
          <div className="about-booking-status">
            <h3>Online booking is not yet available.</h3>
            <p>No appointment can be requested or confirmed online at this time.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
