import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { KNEE_STEPS } from "@/components/pages/pain-relief/content";
import { MiniStairs, TallBracket } from "@/components/pages/shared/page-motifs";

export function PainKneeSection(): React.ReactElement {
  return (
    <section id="knee" className="relative scroll-mt-24 overflow-hidden bg-chalk text-ink">
      <div className="mx-auto grid max-w-[90rem] gap-10 px-6 pt-12 sm:px-10 lg:grid-cols-[44fr_56fr] lg:gap-6 lg:pt-16 lg:pl-[3.5rem]">
        <div className="lg:pb-20">
          <h2 className="font-heading text-[clamp(2.8rem,5.6vw,5.1rem)] leading-none font-bold tracking-[-0.035em] text-navy">Knee Concerns</h2>
          <p className="relative mt-6 max-w-[30rem] py-1 pl-8 text-base leading-relaxed text-ink/85">
            <TallBracket className="absolute inset-y-0 left-0 w-3 text-silver" />
            Knee pain can make everyday movement—walking, stairs, standing, or the activities you value—more challenging. This page offers general orientation, not an assessment of the cause.
          </p>
        </div>
        <ol className="relative z-10 grid gap-3 sm:grid-cols-3">
          {KNEE_STEPS.map((step) => (
            <li key={step.title} className="relative flex flex-col bg-[#e9e6e0] shadow-[0_12px_28px_rgb(16_30_51/0.12)]">
              <div className="relative flex-1 px-5 pt-6 pb-5">
                <MiniStairs className="absolute top-3 right-4 scale-125 text-royal" />
                <h3 className="flex gap-2 font-heading text-xl leading-tight font-bold text-navy">
                  <TallBracket className="mt-0.5 h-12 w-2 shrink-0 text-silver" />
                  <span className="max-w-[9rem]">{step.title}</span>
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-ink/70">{step.body}</p>
              </div>
              <div aria-hidden className="flex h-12 items-end">
                <span className="block h-2 flex-1 bg-[#9a6b47]" />
                <span className="block h-12 w-[34%] bg-[#24272b]" />
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className="relative mt-6 h-[17rem] sm:h-[20rem] lg:-mt-16 lg:h-[24rem]">
        <div className="absolute inset-0 lg:left-[2%] lg:[clip-path:polygon(0_6%,48%_6%,52%_0,100%_0,100%_100%,6%_100%,0_70%)]">
          <Image src="/images/pages/pain-knee-walk-v3.png" alt="An adult walking along a planted courtyard path" fill sizes="100vw" className="object-cover object-[60%_center]" />
        </div>
        <Link href="/book" className="absolute bottom-10 left-6 inline-flex max-w-full min-h-12 items-center gap-8 bg-royal px-7 font-heading text-xl font-bold text-white transition-colors hover:bg-royal-hover sm:left-10 lg:left-[max(2.5rem,calc((100vw-90rem)/2+3.5rem))] focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:[clip-path:none]">
          Check booking status <ArrowRight size={22} aria-hidden className="shrink-0" />
        </Link>
        <p className="absolute top-4 right-4 flex items-center gap-3 bg-chalk/90 px-3 py-2 text-xs text-ink sm:top-auto sm:right-10 sm:bottom-6">
          <TallBracket className="h-6 w-1.5 text-navy" /> General website information is not medical advice.
          <TallBracket side="right" className="h-6 w-1.5 text-navy" />
        </p>
      </div>
    </section>
  );
}
