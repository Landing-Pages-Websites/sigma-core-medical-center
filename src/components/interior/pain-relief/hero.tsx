import Link from "next/link";
import { ArrowDownRight } from "lucide-react";

export function PainHero(): React.ReactElement {
  return (
    <section id="hero" className="interior-section pain-hero">
      <div className="interior-wrap pain-hero-grid">
        <div className="pain-hero-copy bracket">
          <p className="pain-kicker">Knee · low back · neck · joints</p>
          <h1>Move toward a more informed plan for persistent pain</h1>
          <p className="pain-hero-lede">Start with how pain affects your movement and daily life, then bring your questions to a qualified healthcare professional.</p>
          <Link href="#pain-concern-navigation" className="interior-action">Find your concern <ArrowDownRight size={20} aria-hidden /></Link>
          <p className="pain-hero-caveat">Explore distinct knee, low-back and neck questions in one place. This page cannot diagnose your symptoms.</p>
        </div>
        <div className="pain-movement" aria-label="Knee, low-back and neck concerns connect through everyday movement">
          <div className="pain-movement-line" aria-hidden="true" />
          <p>Movement is personal.</p>
          <div className="pain-movement-labels"><span>Walking &amp; stairs</span><span>Sitting &amp; lifting</span><span>Turning &amp; looking</span></div>
          <small>Different concerns. Different questions. An informed next step.</small>
        </div>
      </div>
    </section>
  );
}
