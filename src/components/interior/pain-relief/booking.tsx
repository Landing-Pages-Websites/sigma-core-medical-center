import { InteriorImage } from "../interior-image";
import { NextAction } from "../next-action";

export function PainBooking(): React.ReactElement {
  return <section id="form" className="interior-section pain-book"><div className="interior-wrap"><div className="pain-book-grid"><div><h2>Let’s have a conversation.</h2><p className="bracket">Share your questions and what you’re working toward. A clinical conversation can help you understand what comes next.</p><NextAction href="/book">Book an appointment</NextAction><small>Approved booking integration pending. No appointment is booked on this page.</small></div><InteriorImage slug="pain-relief" file="08-booking-cta-01-clinic-reception.png" alt="Reception scene in the approved booking frame" /></div><nav className="pain-book-rail" aria-label="Jump to a concern"><a href="#knee-concerns">Knee ↑</a><a href="#low-back-concerns">Low back ↑</a><a href="#neck-concerns">Neck ↑</a></nav></div></section>;
}
