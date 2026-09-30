import Link from "next/link";
import { InteriorImage } from "../interior-image";

export function PainNeck(): React.ReactElement {
  return (
    <section id="neck-concerns" className="interior-section pain-neck">
      <div className="interior-wrap">
        <div className="pain-neck-top"><div><h2 className="bracket">Neck concerns</h2><p>Range of motion, comfort at a desk or while driving, and daily function can all be topics for a care conversation. They are not promises of results.</p><div className="signal-bars" aria-hidden="true" /><span className="eyebrow">Questions to bring</span></div><InteriorImage slug="pain-relief" file="05-neck-concerns-01-woman-reading.png" alt="Woman reading beside a laptop" className="pain-neck-reader" /></div>
        <div className="pain-neck-rail"><p>When do turning or looking up and down feel different?</p><p>Which desk, reading or driving tasks matter most to you?</p><p>What would you like a clinician to understand about your daily function?</p></div>
        <Link href="#decision-factors" className="pain-text-link">Compare care questions ↓</Link>
      </div>
    </section>
  );
}
