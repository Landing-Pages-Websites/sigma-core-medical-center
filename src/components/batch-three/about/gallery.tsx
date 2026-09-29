import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { DesignPhoto } from "../design-photo";
export function AboutGallery(): React.ReactElement {
  return <section id="facility-gallery" className="b3-section b3-paper b3-about-gallery"><div className="b3-shell"><div className="b3-split b3-gallery-top">
    <div className="b3-gallery-copy"><h2>Facility Gallery</h2><p className="b3-bracket">These design references show Sigma Core-branded reception and waiting-area scenes. Physical location details are being verified.</p><Link href="/contact" className="b3-action">Location updates <ArrowRight size={20} /></Link></div>
    <DesignPhoto slug="about" file="03-facility-gallery-01-real-reception.png" alt="Sigma Core reception desk with the clinic sign behind it" className="b3-bevel" /></div><div className="b3-gallery-lower"><span aria-hidden="true" /><DesignPhoto slug="about" file="03-facility-gallery-02-client-waiting-room.png" alt="Sigma Core waiting room with five chairs and the clinic sign" className="b3-gallery-waiting" /></div>
  </div></section>;
}
