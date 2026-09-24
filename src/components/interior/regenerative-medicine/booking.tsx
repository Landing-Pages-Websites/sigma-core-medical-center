import { InteriorImage } from "../interior-image";
import { BatchBooking } from "../batch-booking";

export function RegenBooking(): React.ReactElement {
  return <section id="form" className="b2-section r-book"><div className="b2-wrap"><div className="r-book-main"><div><h2>Booking Cta</h2><div className="r-book-card"><BatchBooking pale /><p>When scheduling opens, discuss your goals and questions. Booking does not establish candidacy or guarantee any procedure.</p></div></div><InteriorImage slug="regenerative-medicine" file="06-booking-cta-01-clinic-reception.png" alt="Reception detail from the approved booking frame" /></div><div className="r-book-rail"><span>Ask clearly</span><span>Discuss what is known</span><span>Decide your next step</span></div></div></section>;
}
