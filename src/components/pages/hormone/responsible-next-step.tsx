import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { StairSteps } from "@/components/pages/shared/page-motifs";

export function ResponsibleNextStep(): React.ReactElement {
  return (
    <section data-mega-section="responsible-next-step" id="responsible-next-step" className="relative overflow-hidden bg-slate text-white">
      <div className="grid lg:min-h-[32rem] lg:grid-cols-[58fr_42fr]">
        <div className="relative z-10 px-6 pt-14 pb-12 sm:px-10 lg:pt-16 lg:pl-[max(2.5rem,calc((100vw-90rem)/2+3.5rem))] lg:pr-10">
          <h2 className="max-w-2xl font-heading text-[clamp(2.2rem,4vw,3.8rem)] leading-[1.03] font-bold tracking-[-0.03em]">
            What If You Didn&apos;t Have to Keep Feeling This Way?
          </h2>
          <div className="mt-6 max-w-2xl space-y-4 text-lg leading-relaxed text-white/90">
            <p>Low energy, declining stamina, poor recovery, or changes in sexual wellness can leave you wondering what happened to the person you used to be.</p>
            <p className="font-semibold text-white">You don&apos;t have to settle for guessing.</p>
            <p>Discover how a personalized hormone-health evaluation may help uncover contributing factors and identify appropriate next steps.</p>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Link data-mega-cta="book-appointment" href="https://go.sigmacoremedicalcenter.com/" className="inline-flex max-w-full min-h-14 items-center gap-4 bg-royal px-6 text-xl font-semibold transition-colors hover:bg-royal-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
              Request My Free Consultation <ArrowRight size={22} aria-hidden className="shrink-0" />
            </Link>
            <Link href="#decision-factors" className="inline-flex items-center gap-3 text-lg font-semibold text-[#7fb2f0] underline-offset-4 hover:text-white hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
              Explore Hormone Health Options <ArrowRight size={20} aria-hidden className="shrink-0" />
            </Link>
          </div>
          <p className="mt-8 max-w-2xl border-l-[3px] border-royal pl-4 text-base leading-snug text-white/85">
            Understanding your health is the first step toward making meaningful decisions about your care.
          </p>
        </div>
        <div className="relative min-h-[22rem] lg:my-14 lg:min-h-0">
          <StairSteps count={6} direction="down" className="absolute top-[24%] -left-16 z-20 hidden text-[0.75rem] lg:flex" />
          <div className="absolute inset-0 lg:[clip-path:polygon(14%_0,100%_0,100%_100%,8%_100%,0_88%,0_12%)]">
            <Image src="/images/pages/consultation-concerned-adult.webp" alt="A tired, worried man seated in a clinic lounge, rubbing his temple" fill sizes="(min-width: 1024px) 42vw, 100vw" className="object-cover object-[30%_center]" />
          </div>
        </div>
      </div>
    </section>
  );
}
