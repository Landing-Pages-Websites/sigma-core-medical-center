import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Leaf, MessageSquareMore, PersonStanding } from "lucide-react";
import { TallBracket } from "@/components/pages/shared/page-motifs";

const FACTOR_CARDS = [
  { title: "Move With Greater Confidence", icon: PersonStanding },
  { title: "Protect Your Independence", icon: Leaf },
  { title: "Explore a Different Approach to Care", icon: MessageSquareMore },
] as const;

const HEADING_BARS = ["h-2 bg-silver", "h-3 bg-silver", "h-4 bg-[#8d949c]", "h-5 bg-[#5b636c]", "h-6 bg-navy", "h-7 bg-navy"] as const;

export function NeuropathyDecisions(): React.ReactElement {
  return (
    <section data-mega-section="decision-factors" id="decision-factors" className="relative overflow-hidden bg-chalk text-ink">
      <div className="grid lg:grid-cols-[66fr_34fr]">
        <div className="relative min-w-0 px-6 pt-14 sm:px-10 lg:pt-16 lg:pl-[max(2.5rem,calc((100vw-90rem)/2+3.5rem))]">
          <div className="grid grid-cols-[minmax(0,1fr)] gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-4">
            <div className="lg:pb-8">
              <div className="flex items-start gap-4">
                <TallBracket className="h-28 w-4 text-royal sm:h-32" />
                <h2 className="font-heading text-[clamp(1.9rem,3vw,3rem)] leading-[1.02] font-bold tracking-[-0.03em] text-navy">
                  It&apos;s Not Just About Your Feet. It&apos;s About Your Life.
                </h2>
              </div>
              <span aria-hidden className="mt-4 flex items-end gap-1 pl-8">
                {HEADING_BARS.map((bar) => (
                  <span key={bar} className={`block w-3 ${bar}`} />
                ))}
              </span>
              <div className="mt-6 max-w-[27rem] space-y-3 text-sm leading-snug text-ink/85">
                <p>When neuropathy affects your comfort, sleep, balance, or confidence, it can begin changing how you live.</p>
                <p>Maybe you&apos;ve stopped taking longer walks. Maybe you&apos;re more cautious on stairs. Or maybe you&apos;re simply tired of dealing with uncomfortable sensations every day.</p>
                <p>You deserve the opportunity to explore what options may be available.</p>
              </div>
              <ul className="mt-6 max-w-[27rem] space-y-5 text-sm leading-snug text-ink/85">
                <li className="relative pl-6">
                  <span aria-hidden className="absolute top-1 left-0 h-3 w-3 border-t-2 border-l-2 border-royal" />
                  <strong className="font-semibold text-royal">Imagine feeling more confident in your everyday activities.</strong> The goals are personal: greater comfort, improved mobility, better sleep, and more confidence doing the things you enjoy.
                </li>
                <li className="relative pl-6">
                  <span aria-hidden className="absolute top-1 left-0 h-3 w-3 border-t-2 border-l-2 border-royal" />
                  <strong className="font-semibold text-royal">That&apos;s why a personalized approach matters.</strong> Your symptoms, medical history, and clinical findings help determine which available therapies may be appropriate.
                </li>
              </ul>
            </div>
            <ul className="grid content-start gap-3 lg:-mr-16">
              {FACTOR_CARDS.map(({ title, icon: Icon }) => (
                <li key={title} className="relative z-10 flex min-h-32 items-center gap-4 bg-[#e6e1d8] px-6 py-5 sm:gap-6 shadow-[0_10px_24px_rgb(16_30_51/0.08)] sm:[clip-path:polygon(9%_0,100%_0,91%_100%,0_100%)] sm:px-14">
                  <Icon size={46} strokeWidth={1.5} className="shrink-0 text-royal" aria-hidden />
                  <span className="min-w-0 max-w-[10rem] font-heading text-xl leading-tight font-bold text-navy">{title}</span>
                  <TallBracket side="right" className="ml-auto h-14 w-2.5 text-royal" />
                </li>
              ))}
            </ul>
          </div>
          <div className="relative -mx-6 mt-10 flex flex-wrap items-center gap-4 bg-royal px-6 py-5 text-white sm:-mx-10 sm:px-10 lg:mr-[38%] lg:-ml-[max(2.5rem,calc((100vw-90rem)/2+3.5rem))] lg:pl-[max(2.5rem,calc((100vw-90rem)/2+3.5rem))] lg:[clip-path:polygon(0_0,94%_0,100%_100%,0_100%)]">
            <TallBracket className="h-10 w-2 text-white" />
            <p className="max-w-[15rem] text-sm leading-snug">You don&apos;t have to keep wondering what other options may be available.</p>
            <Link data-mega-cta="book-appointment" href="https://go.sigmacoremedicalcenter.com/" className="inline-flex max-w-full min-h-12 items-center gap-2 bg-white px-5 text-base font-semibold text-royal transition-colors hover:bg-chalk focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:[clip-path:none]">
              Request My Free Consultation <ArrowRight size={18} aria-hidden />
            </Link>
            <Link href="/about" className="inline-flex max-w-full min-h-12 items-center gap-2 border border-white px-5 text-base font-semibold transition-colors hover:bg-white hover:text-royal focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:[clip-path:none]">
              Discover Our Approach <ArrowRight size={18} aria-hidden />
            </Link>
          </div>
        </div>
        <div className="grid min-h-[30rem] grid-rows-2 gap-1.5 bg-navy lg:min-h-0">
          <div className="relative">
            <Image src="/images/pages/neuropathy-decisions-hand-pain.webp" alt="An older man in a clinic waiting area, wincing as he massages his tingling hand" fill sizes="(min-width: 1024px) 34vw, 100vw" className="object-cover object-[70%_center]" />
            <Image src="/images/shared/logo.webp" alt="" width={240} height={65} className="absolute top-[14%] left-[12%] h-auto w-[44%] drop-shadow-lg" />
          </div>
          <div className="relative">
            <Image src="/images/pages/pain-sources-lounge-v4.webp" alt="Conceptual clinic lounge with leather sofa and lounge chairs" fill sizes="(min-width: 1024px) 34vw, 100vw" className="object-cover object-center" />
          </div>
        </div>
      </div>
    </section>
  );
}
