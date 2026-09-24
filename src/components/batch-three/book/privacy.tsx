import Link from "next/link";
import { ArrowRight } from "lucide-react";
export function BookPrivacy(): React.ReactElement {
  return <section id="privacy-note" className="b3-section b3-paper b3-book-privacy"><div className="b3-shell b3-split"><div><h2>Privacy Note</h2><p>No appointment or health information is collected on this page. The scheduling workflow and its privacy review are pending.</p><p id="privacy-links">Privacy policy, notice of privacy practices, and other legal content will be linked when approved.</p><Link href="/services/neuropathy" className="b3-text-link">Read about neuropathy care <ArrowRight size={18} /></Link></div><div className="b3-reserved"><strong>When booking is ready</strong><p>A verified calendar will show the available next steps directly. This page does not promise a date or time.</p></div></div></section>;
}
