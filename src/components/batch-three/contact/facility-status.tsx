import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export function ContactFacilityStatus(): React.ReactElement {
  return (
    <div className="b3-facility-status">
      <span className="b3-facility-rail" aria-hidden="true" />
      <span className="b3-facility-bracket" aria-hidden="true" />
      <div className="b3-facility-status-head">
        <span>Visit information</span>
        <strong>Current status</strong>
      </div>
      <dl className="b3-facility-list">
        <div>
          <dt>Address &amp; directions</dt>
          <dd>Pending confirmation. Please wait for a verified public address before planning a route.</dd>
        </div>
        <div>
          <dt>Hours, parking &amp; accessibility</dt>
          <dd>Pending confirmation. These details have not been published for visits.</dd>
        </div>
        <div>
          <dt>Appointment calendar</dt>
          <dd>Not available yet. <Link href="/book" className="b3-facility-book-link">See booking status <ArrowUpRight size={16} aria-hidden="true" /></Link></dd>
        </div>
      </dl>
      <Link href="/about" className="b3-facility-about">About Sigma Core <ArrowRight size={19} aria-hidden="true" /></Link>
    </div>
  );
}
