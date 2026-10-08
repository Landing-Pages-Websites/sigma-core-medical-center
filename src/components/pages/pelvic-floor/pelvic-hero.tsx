import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PELVIC_PAGE } from "@/content/pages";
import { CornerStripes, TallBracket } from "@/components/pages/shared/page-motifs";

export function PelvicHero(): React.ReactElement {
  return (
    <section id="hero" className="relative overflow-hidden bg-navy text-white">
      <CornerStripes className="absolute top-0 right-0 z-20 hidden w-[24rem] lg:flex" />
      <div className="grid lg:min-h-[45rem] lg:grid-cols-[50fr_50fr]">
        <div className="relative z-10 flex flex-col justify-center px-6 pt-14 pb-12 sm:px-10 lg:py-16 lg:pl-[max(2.5rem,calc((100vw-90rem)/2+3.5rem))]">
          <TallBracket className="mb-6 h-12 w-3 text-silver" />
          <h1 className="font-heading text-[clamp(2.4rem,4.2vw,4rem)] leading-[1.02] font-bold tracking-[-0.03em]">
            Private, respectful support for pelvic-floor <span className="block text-[0.86em]">and incontinence concerns</span>
          </h1>
          <p className="mt-5 max-w-[30rem] text-base leading-snug text-white/88">
            Pelvic floor and incontinence care is an approved service category. We use respectful, plain language—centered on comfort, confidence, and daily life—to guide a private care conversation, on your terms.
          </p>
          <Link href="/book" className="mt-7 inline-flex h-16 w-fit items-center gap-6 border border-white/80 bg-royal px-8 text-xl font-semibold transition-colors hover:bg-royal-hover">
            Book an Appointment <ArrowRight size={22} aria-hidden />
          </Link>
        </div>

        <div className="relative min-h-[26rem] sm:min-h-[32rem] lg:mt-24 lg:mb-0 lg:min-h-0">
          <div aria-hidden className="absolute top-0 left-[13%] hidden h-[58%] w-[56%] bg-[#d5cdbf] lg:block" />
          <div className="absolute inset-0 lg:top-[8%] lg:right-[7%] lg:left-[18%]">
            <Image src={PELVIC_PAGE.heroImage} alt={PELVIC_PAGE.heroAlt} fill priority sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover object-[62%_center]" />
          </div>
          <div aria-hidden className="absolute inset-y-0 right-0 hidden w-[7%] bg-[#1d1f22] lg:block" />
          <div className="absolute bottom-0 left-0 flex h-[42%] w-[56%] items-end bg-[#2a2c30] p-6 lg:w-[52%] lg:[clip-path:polygon(0_0,62%_0,62%_30%,100%_30%,100%_100%,0_100%)]">
            <p className="relative mb-4 ml-2 pl-6 font-display text-lg leading-snug text-white/85 italic">
              <TallBracket className="absolute inset-y-0 left-0 w-2.5 text-silver" />
              Your care,
              <br />
              your privacy.
            </p>
          </div>
        </div>
      </div>
      <div aria-hidden className="h-8 bg-royal" />
    </section>
  );
}
