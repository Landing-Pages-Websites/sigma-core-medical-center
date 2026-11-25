import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MiniStairs, TallBracket } from "@/components/pages/shared/page-motifs";

const FEATURE_CARDS = [
  "Understand Your Energy & Vitality",
  "Explore Hormone Health Options",
  "Discover a Personalized Approach",
] as const;

export function HormoneDecisionFactors(): React.ReactElement {
  return (
    <section data-mega-section="decision-factors" id="decision-factors" className="relative overflow-hidden bg-chalk text-ink">
      <div className="mx-auto grid max-w-[90rem] gap-10 px-6 py-14 sm:px-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 lg:py-16 lg:pl-[3.5rem] lg:pr-14">
        <div>
          <h2 className="flex items-start gap-4 font-heading text-[clamp(2rem,3.6vw,3.4rem)] leading-[1.05] font-bold tracking-[-0.03em] text-navy">
            <TallBracket className="h-20 w-4 shrink-0 text-royal sm:h-24" /> Remember When You Had More Energy, Drive, and Motivation?
          </h2>
          <div className="mt-6 max-w-2xl space-y-4 text-lg leading-relaxed text-ink/85">
            <p>Maybe you don&apos;t have the stamina you once did. Your workouts take longer to recover from. Your motivation has slipped, your sleep isn&apos;t what it used to be, or you&apos;ve noticed changes in your mood or sexual health.</p>
            <p>It&apos;s easy to assume these changes are simply part of getting older.</p>
            <p className="font-semibold text-navy">But age isn&apos;t the only possible explanation.</p>
            <p>Changes in hormones, sleep, metabolism, medications, and other health factors can influence how you feel.</p>
          </div>
          <h3 className="mt-8 font-heading text-2xl leading-tight font-bold text-royal sm:text-3xl">It&apos;s Time to Understand What&apos;s Changed.</h3>
          <p className="mt-3 max-w-2xl text-lg leading-relaxed text-ink/85">
            At Sigma Core Medical Center, we believe the first step is looking at your overall health rather than simply assuming how you feel is normal for your age.
          </p>
          <p className="mt-3 max-w-2xl text-lg leading-relaxed text-ink/85">
            When appropriate, a clinical evaluation can help determine whether hormones or other health factors may be contributing to your concerns.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="relative min-h-56 lg:min-h-64">
            <Image src="/images/pages/services-active-life.webp" alt="A man and woman walking together on a riverside path in the morning" fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover object-[60%_center] lg:[clip-path:polygon(10%_0,100%_0,100%_100%,0_100%)]" />
          </div>
          <ol className="grid gap-3">
            {FEATURE_CARDS.map((title) => (
              <li key={title} className="relative bg-[#ecebe7] px-6 py-5 shadow-[0_10px_24px_rgb(16_30_51/0.1)] sm:[clip-path:polygon(0_0,100%_0,97%_100%,0_100%)]">
                <MiniStairs className="absolute top-4 right-6 text-royal" />
                <p className="flex items-center gap-3 pr-12 font-heading text-xl leading-tight font-bold text-navy">
                  <TallBracket className="h-8 w-2 shrink-0 text-royal" /> {title}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
      <div className="bg-royal text-white">
        <div className="mx-auto flex max-w-[90rem] flex-wrap items-center justify-between gap-x-8 gap-y-4 px-6 py-6 sm:px-10 lg:pl-[3.5rem] lg:pr-14">
          <p className="max-w-2xl font-heading text-xl leading-tight font-bold sm:text-2xl">Stop guessing about why you don&apos;t feel like yourself. Start exploring answers.</p>
          <Link data-mega-cta="book-appointment" href="https://go.sigmacoremedicalcenter.com/" className="inline-flex min-h-14 items-center gap-3 bg-white px-6 text-lg font-semibold text-royal transition-colors hover:bg-chalk focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
            Request My Free Hormone Consultation <ArrowRight size={20} aria-hidden className="shrink-0" />
          </Link>
        </div>
      </div>
    </section>
  );
}
