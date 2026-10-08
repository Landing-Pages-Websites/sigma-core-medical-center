import Image from "next/image";
import { PAIN_NAV_ITEMS } from "@/components/pages/pain-relief/content";
import { MiniStairs, StairSteps, TallBracket } from "@/components/pages/shared/page-motifs";

const CARD_COLUMNS = "md:grid-cols-[1.55fr_1fr_0.82fr]";
const NOTE_BARS = ["w-[20%]", "w-[40%]", "w-[60%]", "w-[80%]", "w-full"] as const;

export function PainNavigation(): React.ReactElement {
  return (
    <section id="pain-navigation" className="relative overflow-hidden bg-chalk text-white">
      <div className="bg-royal">
        <div className="mx-auto max-w-[90rem] px-6 pt-10 pb-60 sm:px-10 lg:pt-12 lg:pl-[3.5rem]">
          <div className="flex items-center gap-4">
            <span className="flex items-center bg-chalk px-3 py-2">
              <Image src="/images/shared/logo.png" alt="Sigma Core Medical Center" width={160} height={44} className="h-8 w-auto" />
            </span>
            <span aria-hidden className="h-8 w-px bg-white/40" />
            <span className="text-[0.65rem] leading-tight tracking-[0.2em] text-white/80 uppercase">
              Richmond
              <br />
              Virginia
            </span>
          </div>
          <div className="relative mt-8 flex items-center justify-center gap-4 sm:gap-6">
            <StairSteps count={4} direction="up" barClassName="bg-white/85" className="hidden text-[0.6rem] lg:flex lg:absolute lg:left-0" />
            <TallBracket className="h-24 w-5 shrink-0 text-silver" />
            <div>
              <h2 className="font-heading text-[clamp(2.4rem,5.6vw,5.1rem)] leading-none font-bold tracking-[-0.035em]">Pain Concern Navigation</h2>
              <p className="mt-3 text-lg leading-snug text-white/92">
                Joint pain can show up in different places.
                <br />
                Location alone does not determine cause or care.
              </p>
            </div>
            <TallBracket side="right" className="h-24 w-5 shrink-0 text-silver" />
            <StairSteps count={4} direction="down" barClassName="bg-white/85" className="hidden text-[0.6rem] lg:flex lg:absolute lg:right-0" />
          </div>
        </div>
      </div>

      <div className="mx-auto -mt-52 max-w-[90rem] px-6 sm:px-10 lg:pl-[3.5rem]">
        <ul className={`grid gap-3 ${CARD_COLUMNS}`}>
          {PAIN_NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="group block h-full bg-navy shadow-[0_18px_40px_rgb(16_30_51/0.25)]">
                <span className="relative block h-52 overflow-hidden lg:h-64">
                  <Image src={item.image} alt="" fill sizes="(min-width: 768px) 40vw, 100vw" className="object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
                </span>
                <span className="relative block min-h-36 px-5 pt-5 pb-6 pr-24">
                  <span className="block font-heading text-2xl font-bold group-hover:text-focus">{item.label}</span>
                  <span className="mt-1 block text-sm leading-snug text-white/80">{item.body}</span>
                  <span aria-hidden className="absolute right-0 bottom-0 flex h-24 w-28 items-end justify-end bg-royal p-4 [clip-path:polygon(100%_0,100%_100%,0_100%)]">
                    <MiniStairs className="scale-125 text-white" />
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-between gap-6 py-8 text-ink">
          <p className="relative pl-8 text-sm leading-snug">
            <TallBracket className="absolute inset-y-0 left-0 w-3 text-silver" />
            Each orientation is a different entry point.
            <br />
            Every evaluation is built around you.
          </p>
          <span aria-hidden className="hidden w-72 items-end gap-3 md:flex">
            <span className="flex flex-1 flex-col items-end gap-1.5">
              {NOTE_BARS.map((bar) => (
                <span key={bar} className={`block h-1.5 bg-silver ${bar}`} />
              ))}
            </span>
            <TallBracket side="right" className="h-12 w-3 text-silver" />
          </span>
        </div>
      </div>
    </section>
  );
}
