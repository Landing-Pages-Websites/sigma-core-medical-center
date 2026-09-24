import { InteriorImage } from "../interior-image";
import { NextAction } from "../next-action";
import Link from "next/link";

export function ServicesNavigation(): React.ReactElement {
  return <section id="service-navigation" className="interior-section service-navigation">
    <div className="interior-wrap service-navigation-grid"><div className="service-navigation-main"><h2 className="bracket">Service <span>navigation</span></h2>
      <div className="service-pain"><div><h3>Pain relief</h3><p>Explore knee, low-back and neck concerns together, with movement and daily function in mind.</p><NextAction href="/services/pain-relief" pale>Explore pain relief</NextAction></div><InteriorImage slug="services" file="03-service-navigation-01-active-couple.png" alt="Two adults moving along a waterfront path" className="service-pain-image" /></div></div>
      <div className="service-navigation-aside"><div className="service-service-list"><article><h3>Hormone optimization</h3><p>A conversation about energy, recovery and personal goals.</p><Link href="/services/hormone-optimization" className="service-pending-link">Explore hormone health</Link></article><article><h3>Pelvic floor &amp; incontinence care</h3><p>Private orientation around comfort, confidence and daily life.</p><Link href="/services/pelvic-floor-incontinence" className="service-pending-link">Explore pelvic-floor care</Link></article><article><h3>Regenerative medicine</h3><p>Explore whether this category belongs in your care conversation.</p><Link href="/services/regenerative-medicine" className="service-pending-link">Explore the category</Link></article></div><InteriorImage slug="services" file="03-service-navigation-02-clinic-reception.png" alt="Reception setting in the approved service navigation design" className="service-navigation-reception" /></div>
    </div>
  </section>;
}
