import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function AboutGalleryStatusRail(): React.ReactElement {
  return (
    <div className="b3-gallery-lower">
      <div className="b3-gallery-source">
        <span className="b3-gallery-source-mark" aria-hidden="true" />
        <div>
          <span className="b3-gallery-label">Client-supplied</span>
          <strong>Reception view</strong>
          <span className="b3-gallery-source-note">A photograph of the supplied room.</span>
        </div>
      </div>
      <div className="b3-gallery-status">
        <span className="b3-gallery-label">Location verification</span>
        <strong>Pending confirmation</strong>
        <p>Address and visiting details cannot be confirmed from this image.</p>
        <Link href="/contact#location-status" className="b3-gallery-status-link">
          See what is being verified <ArrowRight size={18} aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
