import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { DesignPhoto } from "../design-photo";
export function GuidePrivacy(): React.ReactElement {
  return <section id="privacy-note" className="b3-section b3-charcoal b3-guide-privacy"><div className="b3-shell b3-split"><div><h2 className="b3-bracket">Privacy Note</h2><p>There is no guide signup or collection of personal or health information on this page. Privacy and patient-notice content is being reviewed.</p><div className="b3-status" id="privacy-status"><strong>Policy publication pending</strong><span>Do not share personal health information through this page.</span></div><Link href="/contact" className="b3-text-link">See contact status <ArrowRight size={18} /></Link></div><DesignPhoto slug="educational-guide" file="04-privacy-note-01-clinic-reception.png" className="b3-bevel" /></div></section>;
}
