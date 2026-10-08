import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { TallBracket } from "@/components/pages/shared/page-motifs";

export function AboutHero(): React.ReactElement {
  return (
    <section id="hero" className="relative overflow-hidden bg-navy text-white">
      <div className="grid lg:min-h-[46rem] lg:grid-cols-[50fr_50fr]">
        <div className="relative z-10 px-6 pt-14 pb-12 sm:px-10 lg:pt-16 lg:pb-14 lg:pl-[max(2.5rem,calc((100vw-90rem)/2+3.5rem))]">
          <div className="flex items-start gap-4">
            <TallBracket className="mt-1 h-36 w-6 text-silver sm:h-48 lg:h-[11.5rem]" />
            <h1 className="font-heading text-[clamp(2.5rem,4.6vw,4.4rem)] leading-[0.98] font-bold tracking-[-0.03em]">
              A modern Richmond clinic <span className="text-royal">built around your next chapter</span>
            </h1>
          </div>
          <div className="mt-6 max-w-[27rem] space-y-4 text-base leading-relaxed text-white/85 sm:ml-10">
            <p>Sigma Core is a new medical center serving Richmond, Virginia and the surrounding market.</p>
            <p>We focus on movement, function, recovery, and quality of life—so you can keep doing what matters.</p>
          </div>
          <Link href="/book" className="mt-6 inline-flex h-12 items-center gap-4 bg-royal px-6 text-base font-semibold transition-colors hover:bg-royal-hover sm:ml-10">
            Book an Appointment <ChevronRight size={18} aria-hidden />
          </Link>
          <div className="mt-7 max-w-[19rem] border-l-[3px] border-royal pl-3 sm:ml-10">
            <p className="text-[0.7rem] font-bold tracking-[0.06em] uppercase">Our team publication policy</p>
            <p className="mt-1 text-[0.72rem] leading-snug text-white/70">
              Medical Director, Nurse Practitioner, and additional team names, photos, biographies, and credentials are unavailable. Dr. Jason Hurst must not be presented as a treating provider or included in the public clinical team section.
            </p>
          </div>
        </div>

        <div className="relative min-h-[22rem] sm:min-h-[30rem] lg:mt-16 lg:min-h-0">
          <div className="absolute inset-0 lg:[clip-path:polygon(20%_0,100%_0,100%_100%,0_100%)]">
            <Image src="/images/shared/reception-1.png" alt="Sigma Core Medical Center reception desk with illuminated wall sign" fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover object-[50%_40%]" />
          </div>
          <div aria-hidden className="absolute bottom-0 left-0 hidden h-[52%] w-[34%] bg-[#22262d] [clip-path:polygon(0_100%,22%_70%,52%_70%,52%_48%,72%_48%,72%_28%,86%_28%,86%_10%,100%_10%,100%_100%)] lg:block" />
        </div>
      </div>
    </section>
  );
}
