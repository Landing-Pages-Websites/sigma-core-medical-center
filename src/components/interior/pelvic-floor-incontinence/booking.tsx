import { InteriorImage } from "../interior-image";
import { BatchBooking } from "../batch-booking";

export function PelvicBooking(): React.ReactElement {
  return <section id="form" className="b2-section p-book"><div className="b2-wrap p-book-panel"><div><h2>Booking Cta</h2><p>A private conversation about your concerns and goals—when scheduling becomes available.</p><p className="b2-serif">Respectful. Personal. Richmond.</p><BatchBooking pale /><p className="b2-small">No fit or result is promised. Booking details await approval.</p></div><div className="p-book-images"><InteriorImage slug="pelvic-floor-incontinence" file="06-booking-cta-01-clinic-reception.png" alt="Interior reception detail from the approved booking frame" /><InteriorImage slug="pelvic-floor-incontinence" file="06-booking-cta-02-clinic-lounge.png" alt="Separate lounge detail from the approved booking frame" /></div></div></section>;
}
