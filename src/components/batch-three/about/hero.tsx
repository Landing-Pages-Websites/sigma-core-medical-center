import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { DesignPhoto } from "../design-photo";
export function AboutHero(): React.ReactElement {
  return <section id="hero" className="b3-section b3-ink b3-about-hero"><div className="b3-shell b3-split b3-hero-grid">
    <div className="b3-bracket b3-hero-copy"><p className="b3-kicker">About Sigma Core · Richmond area</p><h1>A modern Richmond clinic <span>built around your next chapter</span></h1><p>Sigma Core is a new medical center serving the Richmond, Virginia area. Our focus is movement, function, recovery, and quality of life.</p><Link href="/book" className="b3-action">Explore appointment options <ArrowRight size={20} aria-hidden /></Link><p className="b3-caption">Team and booking details are pending verification.</p></div>
    <DesignPhoto slug="about" file="01-hero-01-real-reception.png" className="b3-bevel b3-hero-media" priority />
  </div></section>;
}
