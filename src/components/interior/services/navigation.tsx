import { InteriorImage } from "../interior-image";
import { PendingAction } from "@/components/shared/pending-action";
import { PENDING } from "@/content/site";
import { NextAction } from "../next-action";

export function ServicesNavigation(): React.ReactElement {
  return <section id="service-navigation" className="interior-section service-navigation">
    <div className="interior-wrap service-navigation-grid"><div className="service-navigation-main"><h2 className="bracket">Service <span>navigation</span></h2>
      <div className="service-pain"><div><h3>Pain relief</h3><p>Explore knee, low-back and neck concerns together, with movement and daily function in mind.</p><NextAction href="/services/pain-relief" pale>Explore pain relief</NextAction></div><InteriorImage slug="services" file="03-service-navigation-01-active-couple.png" alt="Two adults moving along a waterfront path" className="service-pain-image" /></div></div>
      <div className="service-navigation-aside"><div className="service-service-list"><article><h3>Hormone optimization</h3><p>A conversation about energy, recovery and personal goals.</p><PendingAction label="Page in preparation →" title={PENDING.page.title} message={PENDING.page.message} className="service-pending-link" /></article><article><h3>Pelvic floor &amp; incontinence care</h3><p>Private orientation around comfort, confidence and daily life.</p><PendingAction label="Page in preparation →" title={PENDING.page.title} message={PENDING.page.message} className="service-pending-link" /></article><article><h3>Regenerative medicine</h3><p>Explore whether this category belongs in your care conversation.</p><PendingAction label="Page in preparation →" title={PENDING.page.title} message={PENDING.page.message} className="service-pending-link" /></article></div><InteriorImage slug="services" file="03-service-navigation-02-clinic-reception.png" alt="Reception setting in the approved service navigation design" className="service-navigation-reception" /></div>
    </div>
  </section>;
}
