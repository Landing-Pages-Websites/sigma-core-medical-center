import { InteriorImage } from "../interior-image";
import { BatchBooking } from "../batch-booking";

export function HormoneBooking(): React.ReactElement {
  return <section id="form" className="b2-section h-book"><div className="b2-wrap h-book-inner"><div className="h-book-top"><div><h2>Booking Cta</h2><p>When booking opens, bring your goals and questions to a conversation about what comes next.</p><BatchBooking /><p className="b2-small">Scheduling is pending approval. Booking does not establish eligibility or a treatment plan.</p></div><div><InteriorImage slug="hormone-optimization" file="06-booking-cta-01-clinic-reception.png" alt="Reception detail from the approved booking frame" /><p className="b2-serif">Your goals. Our focus.</p></div></div><div className="h-book-steps"><span>Share your priorities</span><span>Discuss your questions</span><span>Choose an informed next step</span></div></div></section>;
}
