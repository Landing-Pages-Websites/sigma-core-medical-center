import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { DesignPhoto } from "../design-photo";
import { AboutGalleryStatusRail } from "./gallery-status-rail";

export function AboutGallery(): React.ReactElement {
  return (
    <section id="facility-gallery" className="b3-section b3-paper b3-about-gallery">
      <div className="b3-shell">
        <div className="b3-split b3-gallery-top">
          <div className="b3-gallery-copy">
            <h2>Facility Gallery</h2>
            <p className="b3-bracket">
              This client-supplied photograph shows a Sigma Core-branded reception.
              The pictured room does not establish a current address or visiting arrangements.
            </p>
            <Link href="/contact#location-status" className="b3-action">
              Check location status <ArrowRight size={20} aria-hidden="true" />
            </Link>
          </div>
          <DesignPhoto
            slug="about"
            file="03-facility-gallery-01-real-reception.png"
            alt="Sigma Core reception desk with the clinic sign behind it"
            className="b3-bevel"
          />
        </div>
        <AboutGalleryStatusRail />
      </div>
    </section>
  );
}
