import Link from "next/link";

export function HormoneBooking(): React.ReactElement {
  return <section id="form" className="b2-section h-book"><div className="b2-wrap h-book-inner"><div className="h-book-top"><div><h2>Booking status</h2><p>The questions above can help you prepare for a conversation with an appropriate clinician.</p><p className="b2-small">Provider, process, and calendar details are not approved. This page does not establish eligibility or a treatment plan.</p><p className="h-book-related">Exploring a different concern? <Link href="/services">Compare care categories <span aria-hidden="true">↗</span></Link></p></div><div className="h-book-status"><span>Calendar status</span><strong>Online scheduling is unavailable.</strong><p>Provider identity, clinical process, and calendar details require approval. This page has no booking link.</p><p className="b2-serif">Your goals. Our focus.</p></div></div></div></section>;
}
