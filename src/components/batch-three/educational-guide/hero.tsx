import Link from "next/link";
import { ArrowDown, ArrowRight, LockKeyhole } from "lucide-react";
export function GuideHero(): React.ReactElement {
  return <section id="resource-hero" className="b3-section b3-ink b3-guide-hero">
    <div className="b3-shell b3-split">
      <div className="b3-bracket b3-guide-intro">
        <h1>Educational guide status</h1>
        <div className="b3-status" id="resource-status"><LockKeyhole size={30} aria-hidden /><div><strong>Resource unavailable</strong><span>No guide or video is available to view or download while its contents and delivery remain unapproved.</span></div></div>
        <Link href="/services" className="b3-action">Explore current services <ArrowRight size={20} aria-hidden /></Link>
      </div>
      <div className="b3-guide-visual">
        <div className="b3-guide-stage" aria-hidden="true">
          <div className="b3-guide-stage-mark"><span /><span /><span /></div>
        </div>
      </div>
    </div>
    <div className="b3-guide-rail"><div className="b3-shell"><span>Source details</span><Link href="#resource-summary">Read the source overview <ArrowDown size={18} aria-hidden /></Link></div></div>
  </section>;
}
