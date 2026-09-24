import Link from "next/link";
import { InteriorImage } from "../interior-image";

export function ServicesHero(): React.ReactElement {
  return <section id="hero" className="interior-section service-hero">
    <div className="interior-wrap service-hero-grid">
      <div className="service-hero-copy bracket"><h1>Care organized around what you want to keep doing</h1>
        <p>Explore our services for clear, concise information that helps you decide your next step.</p>
        <p>Each page offers orientation—not a diagnosis or a treatment protocol.</p>
        <p className="interior-emphasis">Start where it matters to you.</p>
      </div>
      <div className="service-hero-focus"><Link href="/services/neuropathy" className="service-hero-feature"><span className="eyebrow">Our primary focus</span><strong>Neuropathy</strong><span>Explore a more informed conversation about movement, function and independence →</span></Link>
        <InteriorImage slug="services" file="01-hero-01-reception.png" alt="Reception scene in the approved services design" className="service-hero-image" priority />
      </div>
    </div>
    <nav id="trust-bar" aria-label="Other service categories" className="service-hero-rail interior-wrap">
      <Link href="/services/pain-relief">Pain relief <span>Explore pain-related concerns →</span></Link>
      <span>Hormone optimization</span><span>Pelvic floor &amp; incontinence care</span><span>Regenerative medicine</span>
    </nav>
  </section>;
}
