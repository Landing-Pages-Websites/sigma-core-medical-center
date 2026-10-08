import Link from "next/link";

export function RegenBooking(): React.ReactElement {
  return <section id="form" className="b2-section r-book"><div className="b2-wrap r-book-main">
    <div className="r-book-copy"><h2>Booking status</h2><p>Online scheduling is unavailable on this page. Provider, calendar, and specific service details have not been verified for publication.</p><p>If those details and a calendar are confirmed, a consultation could address your goals and questions. Booking would not establish candidacy or guarantee a procedure.</p><Link className="b2-button b2-button-pale" href="/services">Compare care categories <span aria-hidden="true">↗</span></Link></div>
    <div className="r-book-information"><span>Before an appointment request</span><strong>Keep the conversation specific.</strong><p>Ask what option is proposed, who is responsible for care, and what evidence and alternatives apply to your situation.</p><p className="r-book-availability">No appointment can be confirmed on this page.</p></div>
  </div></section>;
}
