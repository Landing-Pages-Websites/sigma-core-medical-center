import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const visitDetails = ["Address & directions", "Parking & accessibility"];

export function ContactFacility(): React.ReactElement {
  return (
    <section id="facility-image" className="contact-section contact-facility" aria-labelledby="contact-visit-title">
      <div className="contact-visit-layout">
        <h2 id="contact-visit-title">Before you visit</h2>
        <div className="contact-visit-panel">
          <span className="contact-visit-bracket" aria-hidden="true" />
          <h3>Visit information</h3>
          <dl>{visitDetails.map(label => (
            <div key={label}><dt>{label}</dt><dd>Pending confirmation</dd></div>
          ))}</dl>
          <p>Please wait for a verified public address before planning a route.</p>
        </div>
        <div className="contact-photo-source">
          <h3>Clinic photo</h3>
          <p>The client-supplied interior image is on Home.</p>
          <Link href="/#place-of-care" aria-describedby="contact-photo-caveat">
            <span>See client-supplied clinic photo on Home</span><ArrowUpRight size={24} aria-hidden="true" focusable="false" />
          </Link>
          <p id="contact-photo-caveat">An interior photo does not confirm an address, entrance or visit details.</p>
        </div>
      </div>
    </section>
  );
}
