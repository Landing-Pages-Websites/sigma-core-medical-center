import { ArrowRight } from "lucide-react";
import "./contact.css";

export function ContactHero(): React.ReactElement {
  return (
    <section id="contact-hero" className="contact-section contact-hero" aria-labelledby="contact-title">
      <div className="contact-hero-copy">
        <p className="contact-name">Sigma Core Medical Center</p>
        <h1 id="contact-title">Contact &amp; <span>location status</span></h1>
        <p className="contact-area">Richmond, Virginia area</p>
        <p className="contact-pending">The public address and direct contact details are pending confirmation.</p>
        <a className="contact-aperture" href="#verified-location-details">
          <span>View current details</span><ArrowRight size={28} aria-hidden="true" focusable="false" />
        </a>
      </div>
      <svg className="contact-hero-motif" viewBox="1175 80 361 592" aria-hidden="true" focusable="false">
        <polyline points="1468,86 1315,86 1315,292 1181,425 1181,664 1255,664" fill="none" stroke="var(--color-silver)" strokeWidth="6" />
        <g fill="var(--color-electric)">
          <rect x="1308" y="597" width="72" height="68" />
          <rect x="1388" y="504" width="72" height="161" />
          <rect x="1467" y="344" width="69" height="321" />
        </g>
      </svg>
    </section>
  );
}
