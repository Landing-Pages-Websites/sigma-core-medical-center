import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function ContactFacilityArea(): React.ReactElement {
  return (
    <div className="b3-facility-area" id="facility-context">
      <span className="b3-facility-area-label">Confirmed service area</span>
      <strong>Richmond,<br />Virginia area</strong>
      <p>The exact location and entrance are not confirmed for public directions.</p>
      <Link href="/#place-of-care" className="b3-facility-view-link">
        See the client-supplied waiting-room view <ArrowUpRight size={18} aria-hidden="true" />
      </Link>
      <span className="b3-facility-area-rule" aria-hidden="true" />
    </div>
  );
}
