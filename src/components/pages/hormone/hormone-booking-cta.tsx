import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { StairSteps, TallBracket } from "@/components/pages/shared/page-motifs";

export function HormoneBookingCta(): React.ReactElement {
  return (
    <section data-mega-section="booking-cta" id="booking-cta" className="relative overflow-hidden bg-navy text-white">
      <div className="grid lg:min-h-[34rem] lg:grid-cols-[46fr_24fr_30fr]">
        <div className="relative z-10 px-6 pt-14 pb-12 sm:px-10 lg:pt-14 lg:pl-[max(2.5rem,calc((100vw-90rem)/2+2.5rem))] lg:pr-8">
          <h2 className="font-heading text-[clamp(2rem,3.6vw,3.4rem)] leading-[1.05] font-bold tracking-[-0.03em]">Your Next Chapter Starts With Better Answers.</h2>
          <p className="mt-4 flex items-start gap-4 font-heading text-xl leading-tight font-semibold text-white/90 sm:text-2xl">
            <StairSteps count={3} direction="up" className="mt-1 shrink-0 text-[0.5rem]" /> Discover Whether Personalized Hormone Care May Be Right for You.
          </p>
          <div className="mt-6 max-w-xl space-y-3 text-lg leading-relaxed text-white/88">
            <p>If you&apos;ve noticed changes in your energy, strength, motivation, or overall vitality, we invite you to explore what may be contributing.</p>
            <p>Your first step is simple: connect with Sigma Core Medical Center, tell us what you&apos;ve been experiencing, and learn about the options available.</p>
          </div>
          <Link data-mega-cta="book-appointment" href="https://go.sigmacoremedicalcenter.com/" className="mt-7 inline-flex max-w-full min-h-14 items-center gap-3 bg-white px-6 py-3 text-lg font-semibold text-navy transition-colors hover:bg-chalk focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
            Request My Free Hormone Consultation <ArrowRight size={20} aria-hidden className="shrink-0" />
          </Link>
        </div>
        <div className="relative min-h-[18rem] lg:mt-6 lg:min-h-0">
          <div className="absolute inset-0 lg:[clip-path:polygon(24%_0,100%_0,100%_100%,0_100%,0_70%,10%_70%,10%_50%,20%_50%,20%_30%,24%_30%)]">
            <Image src="/images/pages/hormone-booking-lobby-v3.webp" alt="Conceptual clinic reception with walnut paneling and lounge seating" fill sizes="(min-width: 1024px) 24vw, 100vw" className="object-cover object-[30%_center]" />
            <Image src="/images/shared/logo.webp" alt="" width={240} height={65} className="absolute top-[22%] left-[30%] h-auto w-[44%] drop-shadow-lg" />
          </div>
        </div>
        <div className="relative z-10 flex flex-col justify-center bg-royal px-6 py-12 sm:px-10 lg:mt-12 lg:px-10 lg:pr-[max(2.5rem,calc((100vw-90rem)/2+2.5rem))] lg:[clip-path:polygon(8%_0,100%_0,100%_100%,0_100%)] lg:pl-14">
          <p className="flex items-center gap-2 text-sm font-semibold tracking-[0.1em] uppercase">
            <TallBracket className="h-6 w-1.5 shrink-0 text-white/80" /> PREFER TO SPEAK WITH SOMEONE? <TallBracket side="right" className="h-6 w-1.5 shrink-0 text-white/80" />
          </p>
          <p className="mt-3 font-heading text-[clamp(2rem,3vw,2.8rem)] leading-[1.05] font-bold tracking-[-0.03em]">Let&apos;s Talk About Your Health.</p>
          <p className="mt-4 text-base leading-snug text-white/92">Our team can help you request a consultation and answer general questions about getting started.</p>
          <p className="mt-4 font-heading text-3xl font-bold">804-486-7699</p>
          <a data-mega-cta="call-now" href="tel:+18044867699" className="mt-4 inline-flex min-h-14 w-fit max-w-full items-center gap-3 bg-white px-6 py-3 text-lg font-semibold text-navy transition-colors hover:bg-chalk focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
            Call Sigma Core Medical Center <ArrowRight size={20} aria-hidden className="shrink-0" />
          </a>
        </div>
      </div>
    </section>
  );
}
