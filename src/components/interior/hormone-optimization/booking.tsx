import Link from "next/link";

export function HormoneBooking(): React.ReactElement {
  return <section id="form" className="b2-section h-book"><div className="b2-wrap h-book-inner"><div className="h-book-top"><div><h2>Booking status</h2><p>The questions above can help you prepare for a conversation with an appropriate clinician.</p><p className="b2-small">Provider, process, and calendar details are not approved. This page does not establish eligibility or a treatment plan.</p><Link className="b2-button" href="#goals-and-decision-factors">Prepare your questions <span aria-hidden="true">↗</span></Link></div><div className="h-book-status"><span>Calendar status</span><strong>Online scheduling is unavailable.</strong><p>Provider identity, clinical process, and calendar details require approval. This page has no booking link.</p><Link href="#faq">Read the booking answer →</Link><p className="b2-serif">Your goals. Our focus.</p></div></div></div></section>;
}
