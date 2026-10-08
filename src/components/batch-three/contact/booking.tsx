import { ArrowRight } from "lucide-react";
import Link from "next/link";

const informationRoutes = [
  { label: "Explore services", href: "/services", description: "Browse service categories." },
  { label: "About Sigma Core", href: "/about#clinic-purpose", description: "Read about the practice." },
  { label: "See scheduling status", href: "/book#booking-hero", description: "Online booking is not yet available." },
];

export function ContactBooking(): React.ReactElement {
  return (
    <section id="booking-cta" className="contact-section contact-close" aria-labelledby="contact-continue-title">
      <div className="contact-close-layout">
        <h2 id="contact-continue-title">Continue with information<span aria-hidden="true" /></h2>
        <nav className="contact-routes" aria-label="Continue with information">
          {informationRoutes.map(({ label, href, description }, index) => (
            <div key={href}>
              <Link className={index === 0 ? "contact-aperture" : undefined} href={href} aria-describedby={`contact-route-note-${index}`}>
                <span>{label}</span><ArrowRight size={32} aria-hidden="true" focusable="false" />
              </Link>
              <p id={`contact-route-note-${index}`}>{description}</p>
            </div>
          ))}
        </nav>
      </div>
    </section>
  );
}
