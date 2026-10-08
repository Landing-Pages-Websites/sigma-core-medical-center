import Image from "next/image";
import Link from "next/link";
import { TallBracket } from "@/components/pages/shared/page-motifs";

const GOAL_BARS = ["h-3 bg-royal", "h-4 bg-royal", "h-5 bg-[#2f7fe0]", "h-6 bg-[#4f9bf0]", "h-7 bg-[#7fb3f2]", "h-8 bg-[#aecdf5]"] as const;

export function PainNeckSection(): React.ReactElement {
  return (
    <section id="neck" className="relative scroll-mt-24 overflow-hidden bg-navy text-white">
      <p className="mx-auto max-w-[90rem] px-6 pt-3 text-xs text-white/80 sm:px-10 lg:pl-[3.5rem]">
        <span className="inline-flex items-center gap-2 border-b border-white/25 pb-2">
          <TallBracket className="h-4 w-1.5 text-royal" /> Content for educational use. Not intended to replace professional evaluation.
          <TallBracket side="right" className="h-4 w-1.5 text-royal" />
        </span>
      </p>
      <div className="grid lg:min-h-[28rem] lg:grid-cols-[43fr_57fr]">
        <div className="relative z-10 px-6 pt-10 pb-10 sm:px-10 lg:pt-12 lg:pl-[max(2.5rem,calc((100vw-90rem)/2+3.5rem))]">
          <div className="flex items-start gap-5">
            <TallBracket className="h-36 w-5 shrink-0 text-silver sm:h-40" />
            <h2 className="font-heading text-[clamp(2.8rem,5.6vw,5.2rem)] leading-[0.95] font-bold tracking-[-0.035em]">
              Neck
              <br />
              Concerns
            </h2>
          </div>
          <p className="mt-5 max-w-[24rem] border-l-2 border-royal pl-4 text-base leading-relaxed text-white/88 sm:ml-10">
            Range of motion, desk and driving comfort, and daily function are possible goals to discuss. We focus on keeping your neck moving well so you can stay active in work and life.
          </p>
          <div className="mt-6 sm:ml-10">
            <span aria-hidden className="flex items-end gap-1.5">
              {GOAL_BARS.map((bar) => (
                <span key={bar} className={`block w-8 ${bar}`} />
              ))}
            </span>
            <p className="mt-3 text-xs font-semibold tracking-[0.2em] text-white/70 uppercase">Possible goals to discuss</p>
          </div>
        </div>
        <div className="relative min-h-[22rem] lg:mt-10 lg:min-h-0">
          <span aria-hidden className="absolute top-[10%] left-[5%] z-10 hidden h-[56%] w-[22%] border-t-2 border-l-2 border-royal [transform:skewX(-28deg)] lg:block" />
          <div className="absolute inset-0 lg:[clip-path:polygon(20%_0,100%_0,100%_100%,0_100%,0_58%)]">
            <Image src="/images/pages/pain-neck-v3.png" alt="An adult reading a book beside a laptop in a calm home workspace" fill sizes="(min-width: 1024px) 57vw, 100vw" className="object-cover object-[45%_center]" />
          </div>
        </div>
      </div>
      <RouteStrip />
    </section>
  );
}

function RouteStrip(): React.ReactElement {
  return (
    <div className="grid border-t-[6px] border-navy md:grid-cols-[61fr_39fr]">
      <div className="relative min-h-44">
        <Image src="/images/pages/hormone-sources-lobby-v3.png" alt="Conceptual clinic reception and waiting lounge" fill sizes="(min-width: 768px) 61vw, 100vw" className="object-cover object-[40%_center]" />
      </div>
      <div className="grid grid-cols-[1fr_1fr] bg-slate">
        <div className="relative flex flex-col justify-center py-6 pr-4 pl-10">
          <TallBracket className="absolute top-6 bottom-6 left-4 w-3 text-silver" />
          <p className="text-sm font-semibold tracking-[0.2em] uppercase">Your route</p>
          <p className="mt-2 text-sm leading-relaxed tracking-[0.14em] text-white/70 uppercase">
            One system.
            <br />
            Three focuses.
            <br />
            Movement first.
          </p>
        </div>
        <Link href="/book" className="group flex flex-col justify-center bg-royal px-8 py-6 transition-colors [clip-path:polygon(0_0,100%_0,100%_100%,0_100%,14%_50%)] hover:bg-royal-hover sm:pl-14">
          <span className="font-heading text-4xl font-bold">/book</span>
          <span className="mt-2 text-xs font-semibold tracking-[0.2em] uppercase">
            Start your
            <br />
            conversation
          </span>
        </Link>
      </div>
    </div>
  );
}
