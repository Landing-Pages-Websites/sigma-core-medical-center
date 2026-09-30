import Link from "next/link";
import { BatchBooking } from "../batch-booking";

export function PelvicBooking(): React.ReactElement {
  return <section id="form" className="b2-section p-book"><div className="b2-wrap p-book-panel"><div className="p-book-main"><h2>Booking Cta</h2><p>A private conversation about your concerns and goals—when scheduling becomes available.</p><p className="b2-serif">Respectful. Personal. Richmond.</p><BatchBooking pale /><p className="b2-small">No fit or result is promised. Booking details await approval.</p></div><aside className="p-book-status"><span>Appointment access</span><strong>Online scheduling is being prepared.</strong><p>Approved booking details are not available yet. You can review the current service overview while this route is pending.</p><Link href="/services">Explore all services →</Link></aside></div></section>;
}
