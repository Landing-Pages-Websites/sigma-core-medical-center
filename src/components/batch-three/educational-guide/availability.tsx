import Link from "next/link";
import { ArrowRight, LockKeyhole } from "lucide-react";
export function GuideAvailability(): React.ReactElement {
  return <section id="lead-form" className="b3-section b3-paper b3-guide-availability">
    <div className="b3-shell"><div className="b3-split">
      <div><p className="b3-kicker">Access status</p><h2>No requests are being collected.</h2><p>This page cannot accept guide requests or personal details.</p></div>
      <div className="b3-reserved" id="form-status"><LockKeyhole size={40} aria-hidden /><strong>No active form</strong><p>The resource and delivery workflow still need approval.</p></div>
    </div><div className="b3-availability-foot"><div><strong>Choose a starting point</strong><p>Learn about care areas, beginning with neuropathy.</p></div><Link href="/services/neuropathy" className="b3-text-link">Neuropathy <ArrowRight size={17} /></Link></div></div>
  </section>;
}
