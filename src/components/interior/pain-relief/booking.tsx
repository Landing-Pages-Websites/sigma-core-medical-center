import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function PainBooking(): React.ReactElement {
  return (
    <section id="form" className="interior-section pain-book">
      <div className="interior-wrap"><div className="pain-book-grid"><div><h2>Make the next conversation count.</h2><p className="bracket">Start with the daily activity you want to discuss. Bring your questions about evaluation, options, risks and follow-up.</p><Link href="#decision-factors" className="interior-action">Review questions to bring <ArrowUpRight size={20} aria-hidden /></Link><small>The scheduling calendar is not connected. No appointment can be requested here.</small></div><div className="pain-book-prep"><span className="pain-book-prep-label">Your conversation can start with</span><p>What has changed in your day?</p><p>What would you like to understand?</p><p>What matters most to your movement?</p><Link href="/book">Check booking availability <ArrowUpRight size={18} aria-hidden /></Link></div></div><nav className="pain-book-rail" aria-label="Return to a concern"><a href="#knee-concerns">Knee ↑</a><a href="#low-back-concerns">Low back ↑</a><a href="#neck-concerns">Neck ↑</a></nav></div>
    </section>
  );
}
