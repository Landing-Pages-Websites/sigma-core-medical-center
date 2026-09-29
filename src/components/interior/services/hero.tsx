import Link from "next/link";

export function ServicesHero(): React.ReactElement {
  return <section id="hero" className="interior-section service-hero">
    <div className="interior-wrap service-hero-grid">
      <div className="service-hero-copy bracket"><h1>Care organized around what you want to keep doing</h1>
        <p>Explore our services for clear, concise information that helps you decide your next step.</p>
        <p>Each page offers orientation—not a diagnosis or a treatment protocol.</p>
        <p className="interior-emphasis">Start where it matters to you.</p>
      </div>
      <div className="service-hero-focus"><Link href="/services/neuropathy" className="service-hero-feature"><span className="eyebrow">Our primary focus</span><strong>Neuropathy</strong><span>Explore a more informed conversation about movement, function and independence →</span></Link>
        <div className="service-hero-direction" aria-hidden="true"><span /></div>
      </div>
    </div>
    <nav id="trust-bar" aria-label="Other service categories" className="service-hero-rail interior-wrap">
      <Link href="/services/pain-relief">Pain relief <span>Explore pain-related concerns →</span></Link>
      <Link href="/services/hormone-optimization">Hormone optimization</Link><Link href="/services/pelvic-floor-incontinence">Pelvic floor &amp; incontinence care</Link><Link href="/services/regenerative-medicine">Regenerative medicine</Link>
    </nav>
  </section>;
}
