import Link from "next/link";
import { ArrowRight, BadgeCheck } from "lucide-react";

type DoctorTrustModuleProps = Readonly<{
  compact?: boolean;
}>;

const DIRECTOR_NAME = "Dr. Jason Hurst, DC";

export function DoctorTrustModule({ compact = false }: DoctorTrustModuleProps): React.ReactElement {
  if (compact) {
    return (
      <section className="bg-chalk px-6 py-12 text-navy sm:px-10 lg:px-14 lg:py-14" aria-labelledby="clinical-leadership-heading">
        <div className="mx-auto grid max-w-[90rem] gap-6 border-l-4 border-royal pl-5 sm:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] sm:items-center sm:gap-10 sm:pl-7">
          <div>
            <p className="text-xs font-bold tracking-[0.18em] text-royal uppercase">Clinical leadership</p>
            <h2 id="clinical-leadership-heading" className="mt-2 font-heading text-[clamp(2rem,4vw,3.3rem)] leading-none font-bold tracking-[-0.035em]">
              {DIRECTOR_NAME}
            </h2>
            <p className="mt-2 text-base font-semibold text-ink/75">Director, Sigma Core Medical Center</p>
          </div>
          <p className="max-w-[42rem] text-base leading-relaxed text-ink/85">
            Sigma Core Medical Center is led by {DIRECTOR_NAME}. Bring your goals and questions to a consultation to discuss whether an evaluation or care option may be appropriate for you.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="clinical-leadership" className="relative overflow-hidden bg-chalk px-6 py-14 text-navy sm:px-10 lg:px-14 lg:py-20" aria-labelledby="clinical-leadership-heading">
      <div className="mx-auto grid max-w-[90rem] gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,0.8fr)] lg:items-center lg:gap-20">
        <div>
          <p className="text-xs font-bold tracking-[0.2em] text-royal uppercase">Clinical leadership</p>
          <h2 id="clinical-leadership-heading" className="mt-3 max-w-[38rem] font-heading text-[clamp(2.8rem,5.5vw,5rem)] leading-[0.95] font-bold tracking-[-0.04em]">
            Meet the director behind your care conversation
          </h2>
          <p className="mt-6 max-w-[36rem] text-lg leading-relaxed text-ink/85">
            Clear provider information helps you decide where to begin. Sigma Core Medical Center is led by {DIRECTOR_NAME}.
          </p>
        </div>
        <div className="bg-navy px-6 py-8 text-white sm:px-8 sm:py-10">
          <BadgeCheck className="text-silver" size={34} strokeWidth={1.5} aria-hidden />
          <h3 className="mt-5 font-heading text-3xl font-bold">{DIRECTOR_NAME}</h3>
          <p className="mt-2 text-base font-semibold text-white/80">Director, Sigma Core Medical Center</p>
          <p className="mt-5 border-l-2 border-royal pl-4 text-base leading-relaxed text-white/85">
            Schedule a consultation to discuss your goals and whether Sigma Core may be an appropriate fit for you.
          </p>
          <Link href="/book" className="mt-7 inline-flex min-h-12 items-center gap-3 bg-royal px-5 text-base font-semibold transition-colors hover:bg-royal-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-navy">
            Check booking status <ArrowRight size={18} aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
