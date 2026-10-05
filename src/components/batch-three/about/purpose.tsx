import Link from "next/link";
import { ArrowRight } from "lucide-react";

const values = [["You at", "the center."], ["Questions", "first."], ["Clear", "information."], ["Practical", "next steps."]];

export function AboutPurpose(): React.ReactElement {
  return (
    <section id="clinic-purpose" className="about-purpose" aria-labelledby="about-purpose-title">
      <div className="about-purpose-top about-shell">
        <h2 id="about-purpose-title">Neuropathy<br />first.</h2>
        <div className="about-purpose-copy">
          <p>Start with general information about neuropathy, then explore pain, hormone health, pelvic-floor concerns and regenerative goals.</p>
          <p className="about-purpose-note">Individual needs and outcomes vary.</p>
        </div>
      </div>
      <div id="our-mission" className="about-mission">
        <div className="about-shell about-mission-grid">
          <h3>Our Mission</h3>
          <div><p>Help you understand the topics and consider a clear next step.</p>
            <div className="about-mission-actions">
              <Link href="/services/neuropathy" className="about-action">Explore neuropathy <ArrowRight aria-hidden="true" /></Link>
              <Link href="/services" className="about-action about-action-outline">Explore all services <ArrowRight aria-hidden="true" /></Link>
            </div>
          </div>
        </div>
      </div>
      <div className="about-values"><div className="about-shell"><h3>Grounded principles</h3>
        <ul>{values.map(([first, last]) => <li key={first}><span>{first}<br />{last}</span></li>)}</ul>
      </div></div>
    </section>
  );
}
