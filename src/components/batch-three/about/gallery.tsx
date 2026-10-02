import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function AboutGallery(): React.ReactElement {
  return (
    <section id="facility-gallery" className="about-location" aria-labelledby="about-location-title">
      <div className="about-shell">
        <div className="about-location-intro">
          <h2 id="about-location-title">Location &amp; visit details</h2>
          <p>Address and visiting<br className="about-wide-break" /> arrangements remain unconfirmed.</p>
        </div>
        <div className="about-location-lower">
          <div className="about-location-status">
            <h3>Details pending confirmation</h3>
            <p>Address, hours, directions, parking and accessibility details are not confirmed for publication.</p>
          </div>
          <Link href="/contact#verified-location-details" className="about-location-link">Check location status <ArrowRight aria-hidden="true" /></Link>
        </div>
      </div>
    </section>
  );
}
