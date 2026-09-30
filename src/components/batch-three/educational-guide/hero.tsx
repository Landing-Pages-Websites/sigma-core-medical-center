import Link from "next/link";
import { ArrowDown, LockKeyhole } from "lucide-react";
export function GuideHero(): React.ReactElement {
  return <section id="resource-hero" className="b3-section b3-ink b3-guide-hero">
    <div className="b3-shell b3-split">
      <div className="b3-bracket b3-guide-intro">
        <h1>Get the Sigma Core educational guide</h1>
        <p>The educational resource is still under review. There is no video or guide available to view or download yet.</p>
        <div className="b3-status" id="resource-status"><LockKeyhole size={30} aria-hidden /><div><strong>Resource pending approval</strong><span>We’ll share it here after its contents and delivery are confirmed.</span></div></div>
      </div>
      <div className="b3-guide-visual">
        <div className="b3-guide-stage">
          <div className="b3-guide-stage-mark" aria-hidden="true"><span /><span /><span /></div>
          <div className="b3-guide-stage-copy"><span>Educational resource</span><strong>Availability pending</strong><span>Content and delivery under review</span></div>
        </div>
        <div className="b3-guide-aside"><h2>What this page will offer</h2><p>Once approved, this page will explain what the resource contains and how to access it. No personal information is collected here today.</p></div>
      </div>
    </div>
    <div className="b3-guide-rail"><div className="b3-shell"><span>Not available yet</span><Link href="#resource-summary">Read the status and scope <ArrowDown size={18} /></Link></div></div>
  </section>;
}
