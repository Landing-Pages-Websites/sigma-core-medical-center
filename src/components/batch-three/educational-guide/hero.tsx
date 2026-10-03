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
        <svg className="b3-guide-stage" viewBox="0 0 420 160" fill="none" aria-hidden="true" focusable="false">
          <path className="b3-guide-stage-bracket" d="M35 24H12V136H35" />
          <path className="b3-guide-stage-step" d="M78 48H162V72H308" />
          <path className="b3-guide-stage-step" d="M78 112H162V88H308" />
          <path className="b3-guide-stage-bracket" d="M348 57H372V103H348" />
        </svg>
      </div>
    </div>
    <div className="b3-guide-rail"><div className="b3-shell"><span>Source details</span><Link href="#resource-summary">Read the source overview <ArrowDown size={18} aria-hidden /></Link></div></div>
  </section>;
}
