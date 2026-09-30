import Link from "next/link";

export function RegenBooking(): React.ReactElement {
  return <section id="form" className="b2-section r-book"><div className="b2-wrap r-book-main">
    <div className="r-book-copy"><h2>Booking status</h2><p>Online scheduling is unavailable. A verified provider, clinical process, and calendar are needed before an appointment can be requested here.</p><p>When scheduling opens, a conversation can cover your goals and questions. It will not establish candidacy or guarantee a procedure.</p><Link className="b2-button b2-button-pale" href="/services">Compare care categories <span aria-hidden="true">↗</span></Link></div>
    <div className="r-book-information"><span>While scheduling is being prepared</span><strong>Keep the conversation specific.</strong><p>Ask what option is proposed, who is responsible for care, and what evidence and alternatives apply to your situation.</p><p className="r-book-availability">No appointment can be confirmed on this page.</p></div>
  </div></section>;
}
