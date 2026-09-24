import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { DesignPhoto } from "../design-photo";
export function ContactFacility(): React.ReactElement {
  return <section id="facility-image" className="b3-section b3-paper b3-contact-facility"><div className="b3-shell"><h2>Facility Image</h2><p>A Sigma Core-branded interior shown in the approved design reference. This image does not establish the final address, entrance, or accessibility arrangements.</p><DesignPhoto slug="contact" file="03-facility-image-01-real-waiting-room.png" className="b3-bevel b3-facility-wide" /><div className="b3-facility-label" id="facility-context"><strong>Richmond, Virginia area</strong><span>Location details pending confirmation.</span><Link href="/about">About Sigma Core <ArrowRight size={17} /></Link></div></div></section>;
}
