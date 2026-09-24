import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { DesignPhoto } from "../design-photo";
export function ContactDetails(): React.ReactElement {
  return <section id="verified-location-details" className="b3-section b3-blue b3-contact-details"><div className="b3-shell b3-split"><div><h2>Location details are being verified.</h2><p>We are confirming the address, phone, email, hours, directions, parking, and accessibility details before publishing them.</p><div className="b3-location-card" id="location-status"><MapPin size={36} aria-hidden /><div><strong>Richmond, Virginia area</strong><span>Exact location and contact information pending confirmation.</span></div></div><Link href="/services/neuropathy" className="b3-text-link">Explore neuropathy care <ArrowRight size={18} /></Link></div><div className="b3-stacked-media"><DesignPhoto slug="contact" file="02-verified-location-details-01-real-reception.png" className="b3-bevel" /><DesignPhoto slug="contact" file="02-verified-location-details-02-clinic-lounge.png" className="b3-bevel" /></div></div></section>;
}
