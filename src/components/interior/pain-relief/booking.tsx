import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function PainBooking(): React.ReactElement {
  return (
    <section id="form" className="interior-section pain-book">
      <div className="interior-wrap"><div className="pain-book-grid"><div><h2>Prepare for a conversation.</h2><p className="bracket">Note one daily activity that has changed and when it happens. Bring that context to a qualified clinician.</p><small>The scheduling calendar is not connected. No appointment can be requested here.</small></div><div className="pain-book-prep"><span className="pain-book-prep-label">Two prompts to take with you</span><p>What changed in that activity?</p><p>What would you like to ask first?</p><Link href="/book">View booking status <ArrowUpRight size={18} aria-hidden /></Link></div></div><nav className="pain-book-rail" aria-label="Return to a concern"><a href="#knee-concerns">Knee ↑</a><a href="#low-back-concerns">Low back ↑</a><a href="#neck-concerns">Neck ↑</a></nav></div>
    </section>
  );
}
