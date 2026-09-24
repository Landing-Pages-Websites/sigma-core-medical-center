import { InteriorImage } from "../interior-image";
import { NextAction } from "../next-action";

export function NeuropathyBooking(): React.ReactElement {
  return <section id="form" className="interior-section neuro-book"><div className="interior-wrap neuro-book-grid"><div><h2>Let’s talk about your goals.</h2><p className="bracket">We’re here to listen to your questions and help you explore what makes sense for you.</p><div className="neuro-book-path"><span>Start a conversation</span><span>Consider your options</span><span>Plan next steps</span></div></div><div className="neuro-book-right"><InteriorImage slug="neuropathy" file="06-booking-cta-01-visitor-in-clinic.png" alt="Visitor walking through a clinic in the approved booking frame" /><div><NextAction href="/book" pale>Book an appointment</NextAction><p>Care is personalized. Outcomes vary. Scheduling integration pending.</p></div></div></div></section>;
}
