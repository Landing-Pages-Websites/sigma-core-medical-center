import Link from "next/link";
import { InteriorImage } from "../interior-image";
import { BatchBooking } from "../batch-booking";

export function PelvicExpect(): React.ReactElement {
  return <section id="what-to-expect" className="b2-section p-expect"><div className="b2-wrap p-expect-grid"><div><h2>What To Expect</h2><p>Your time and privacy matter. The booking route is still being prepared; please wait for approved scheduling details before making an appointment request.</p><p>Provider identity, examination details, visit length, and care processes are not available for publication yet.</p><BatchBooking /><Link href="/services" className="b2-text-link">Learn about all services →</Link></div><InteriorImage slug="pelvic-floor-incontinence" file="04-what-to-expect-01-real-waiting-room.png" alt="Waiting room photographed for the approved frame" /></div></section>;
}
