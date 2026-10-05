import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { InteriorImage } from "../interior-image";

export function PelvicHero(): React.ReactElement {
  return (
    <section id="hero" className="b2-section p-hero">
      <div className="b2-wrap p-hero-grid">
        <div className="p-hero-copy">
          <h1>Private, respectful support for pelvic-floor and incontinence concerns</h1>
          <div className="p-hero-details">
            <p>Pelvic floor and incontinence care is an approved service category. Start with a conversation about comfort, confidence, and daily life—on your terms.</p>
            <p className="p-hero-status">Online scheduling is unavailable. Appointment requests cannot be submitted here.</p>
            <Link href="/services" className="b2-button">Explore all services <ArrowUpRight size={21} aria-hidden /></Link>
          </div>
        </div>
        <div className="p-hero-art">
          <InteriorImage src="/images/design/pelvic-floor-incontinence/01-hero-02-seated-person.png" alt="Adult taking a quiet moment outdoors" priority />
          <p className="b2-serif">Your care,<br />your privacy.</p>
        </div>
      </div>
    </section>
  );
}
