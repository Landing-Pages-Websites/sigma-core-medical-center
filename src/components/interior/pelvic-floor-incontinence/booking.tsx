import Link from "next/link";
import { PelvicBookingAction } from "./booking-action";

export function PelvicBooking(): React.ReactElement {
  return <section id="form" className="b2-section p-book"><div className="b2-wrap p-book-panel"><div className="p-book-main"><h2>Booking status</h2><p>Online scheduling is unavailable. Appointment requests cannot be submitted here.</p><p className="b2-serif">Respectful. Personal. Richmond.</p><PelvicBookingAction pale /><p className="b2-small">No fit or result is promised.</p></div><aside className="p-book-status"><span>For your conversation</span><strong>Bring your questions.</strong><p>Explore current service information and note what you would want to ask an appropriate clinician.</p><Link href="/services">Explore all services →</Link></aside></div></section>;
}
