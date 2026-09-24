import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { DesignPhoto } from "../design-photo";
export function AboutPurpose(): React.ReactElement {
  return <section id="clinic-purpose" className="b3-section b3-blue b3-about-purpose"><div className="b3-shell b3-split b3-purpose-top">
    <div className="b3-bracket"><h2>Clinic<br />Purpose</h2><p>We help adults explore clearer next steps across <Link href="/services/neuropathy">neuropathy</Link>, pain, hormone health, pelvic-floor concerns, and regenerative goals.</p><p>Care is personalized. Outcomes vary.</p></div>
    <DesignPhoto slug="about" file="02-clinic-purpose-01-real-waiting-room.png" className="b3-bevel" />
  </div><div id="our-mission" className="b3-mission"><div className="b3-shell"><h3>Our Mission</h3><p>Help you understand your options and move forward with a clear next step.</p><div className="b3-mission-links"><Link href="/services">Explore services <ArrowRight size={16} /></Link><Link href="/services/neuropathy">Neuropathy care <ArrowRight size={16} /></Link></div></div></div>
  <div className="b3-principle-rail b3-shell" aria-label="Grounded principles"><strong>Grounded principles</strong><span>You are at the center.</span><span>We listen first.</span><span>Options explained clearly.</span><span>Next steps stay practical.</span></div></section>;
}
