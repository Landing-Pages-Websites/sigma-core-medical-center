import Link from "next/link";
import { InteriorImage } from "../interior-image";

export function PelvicOrientation(): React.ReactElement {
  return <section id="private-orientation" className="b2-section p-orientation"><div className="b2-wrap p-orientation-grid"><aside>Share only what you feel comfortable discussing.</aside><div className="p-orientation-center"><h2>Private Orientation</h2><p>Pelvic-floor and incontinence concerns vary. An individualized conversation is a more useful starting point than assumptions drawn from a webpage.</p><p>This page does not assess a condition, establish eligibility, or describe an approved treatment plan.</p><Link href="/services" className="b2-text-link">Explore the service overview →</Link><InteriorImage slug="pelvic-floor-incontinence" file="02-private-orientation-01-clinic-lounge.png" alt="Interior ribbon from the approved private orientation frame" /></div><aside>Questions about your situation belong in an appropriate clinical conversation.</aside></div></section>;
}
