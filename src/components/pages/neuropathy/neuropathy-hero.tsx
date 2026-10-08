import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ServicePageData } from "@/content/pages";
import { CornerStripes, TallBracket } from "@/components/pages/shared/page-motifs";

type NeuropathyHeroProps = { data: ServicePageData };

const HERO_STEPS = [
  { label: "Understand your goals", tone: "bg-[#d9d2c4] text-navy", bracket: "text-silver", offset: "lg:left-0 lg:top-0" },
  { label: "Discuss appropriate options", tone: "bg-[#2a2c2f] text-white", bracket: "text-silver", offset: "lg:left-[34%] lg:top-[1.75rem]" },
  { label: "Choose an informed next step", tone: "bg-[#d9d2c4] text-navy", bracket: "text-silver", offset: "lg:left-[68%] lg:top-[3.5rem]" },
] as const;

export function NeuropathyHero({ data }: NeuropathyHeroProps): React.ReactElement {
  return (
    <section id="neuropathy-hero" className="relative overflow-hidden bg-navy text-white">
      <CornerStripes className="absolute top-0 right-0 z-20 hidden w-[23rem] lg:flex" />
      <div className="grid lg:min-h-[47rem] lg:grid-cols-[50fr_50fr]">
        <div className="relative z-10 px-6 pt-14 pb-10 sm:px-10 lg:pt-16 lg:pb-0 lg:pl-[max(2.5rem,calc((100vw-90rem)/2+3.5rem))]">
          <p className="text-base font-semibold text-[#2f7fe0]">{data.eyebrow}</p>
          <h1 className="mt-3 max-w-[38rem] font-heading text-[clamp(2.6rem,4.6vw,4.4rem)] leading-[1] font-bold tracking-[-0.03em]">{data.title}</h1>
          <p className="mt-5 max-w-[30rem] text-lg leading-snug text-white/90">
            We focus on movement, daily function, independence, and quality of life — so you can get back to what matters.
          </p>
          <p className="mt-5 font-display text-base text-white/75 italic">Care is personalized and outcomes vary.</p>
          <ol className="relative mt-9 grid gap-3 sm:grid-cols-3 lg:block lg:h-44 lg:w-[118%]">
            {HERO_STEPS.map((step) => (
              <li
                key={step.label}
                className={`${step.tone} ${step.offset} flex min-h-24 items-center gap-3 px-5 py-4 shadow-[0_14px_30px_rgb(0_0_0/0.3)] lg:absolute lg:w-[36%]`}
              >
                <TallBracket className={`h-8 w-2 ${step.bracket}`} />
                <span className="font-heading text-lg leading-tight font-bold">{step.label}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="relative min-h-[24rem] sm:min-h-[30rem] lg:mt-24 lg:min-h-0">
          <div className="absolute inset-0 lg:bottom-0 lg:[clip-path:polygon(28%_0,100%_0,100%_100%,0_100%)]">
            <Image src={data.heroImage} alt={data.heroAlt} fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover object-[62%_center]" />
          </div>
          <div aria-hidden className="absolute right-0 bottom-0 h-[34%] w-[78%] bg-royal [clip-path:polygon(24%_0,100%_0,100%_100%,0_100%)]" />
          <Link
            href="/book"
            className="absolute right-6 bottom-8 z-10 inline-flex h-14 items-center gap-4 border border-white bg-royal/20 px-6 text-lg font-semibold text-white transition-colors hover:bg-white hover:text-royal sm:right-10 lg:bottom-[9%]"
          >
            Book an Appointment <ArrowRight size={18} aria-hidden />
          </Link>
        </div>
      </div>
      <div aria-hidden className="h-5 bg-royal lg:h-6" />
    </section>
  );
}
