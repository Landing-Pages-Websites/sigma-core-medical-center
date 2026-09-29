import { InteriorImage } from "../interior-image";
import { NextAction } from "../next-action";
import Link from "next/link";

const OTHER_SERVICES = [
  { name: "Pain relief", href: "/services/pain-relief" },
  { name: "Hormone optimization", href: "/services/hormone-optimization" },
  { name: "Pelvic floor & incontinence care", href: "/services/pelvic-floor-incontinence" },
  { name: "Regenerative medicine", href: "/services/regenerative-medicine" },
];

export function ServicesNeuropathy(): React.ReactElement {
  return <section id="neuropathy" className="interior-section service-neuropathy">
    <div className="interior-wrap"><div className="service-neuro-top"><div><h2>Neuropathy <span>comes first.</span></h2><p>Our primary focus of care is framed around movement, daily function and independence. Start with a personalized conversation about what matters most to you.</p></div>
      <InteriorImage slug="services" file="02-neuropathy-feature-01-walking-figure.png" alt="Figure walking beside a pale architectural wall" className="service-neuro-walk" /></div>
      <div className="service-neuro-panel bracket"><div><span className="eyebrow">Primary path of focus</span><h3>Neuropathy</h3></div><ul><li>Movement and daily function</li><li>Activities you value</li><li>Questions worth discussing</li></ul><NextAction href="/services/neuropathy" pale>Explore neuropathy care</NextAction></div>
      <div className="service-neuro-bottom"><nav aria-label="Other areas of care" className="service-neuro-other"><span>Other areas of care</span><div>{OTHER_SERVICES.map((service) => <Link key={service.href} href={service.href}>{service.name} <span aria-hidden="true">↗</span></Link>)}</div></nav></div>
    </div>
  </section>;
}
