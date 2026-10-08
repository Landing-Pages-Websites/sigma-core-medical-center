import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { StairSteps, TallBracket } from "@/components/pages/shared/page-motifs";

export function PainLowBackSection(): React.ReactElement {
  return (
    <section id="low-back" className="relative scroll-mt-24 overflow-hidden bg-slate text-white">
      <div className="grid lg:min-h-[34rem] lg:grid-cols-[50fr_50fr]">
        <div className="relative z-10 px-6 pt-14 sm:px-10 lg:pt-16 lg:pl-[max(2.5rem,calc((100vw-90rem)/2+3.5rem))]">
          <div className="relative pl-8">
            <TallBracket className="absolute top-0 left-0 h-36 w-4 text-silver sm:h-40" />
            <h2 className="font-heading text-[clamp(2.8rem,5.4vw,5rem)] leading-[0.98] font-bold tracking-[-0.035em]">
              Low Back
              <br />
              Concerns
            </h2>
            <p className="mt-5 max-w-[24rem] text-lg leading-snug text-white/90">Daily tasks like sitting, lifting, sleep, and movement can all bring up questions.</p>
            <p className="mt-4 max-w-[24rem] text-lg leading-snug text-white/90">
              Low-back concerns can have many causes, and our website content cannot diagnose any specific condition.
            </p>
          </div>
          <StairSteps count={5} direction="down" className="absolute top-[32%] right-[-2rem] hidden text-[1.05rem] lg:flex" />
          <div className="relative mt-10 -mx-6 sm:-mx-10 lg:mr-[8%] lg:ml-0">
            <TallBracket className="absolute top-4 bottom-4 -left-0 hidden w-4 text-silver lg:block" />
            <Link
              href="/book"
              className="group block bg-royal px-6 py-7 sm:px-10 lg:ml-8 lg:px-8 lg:[clip-path:polygon(0_0,72%_0,100%_100%,0_100%)]"
            >
              <span className="flex items-center gap-2 text-sm">
                <TallBracket className="h-5 w-1.5 text-white/80" /> Next step <TallBracket side="right" className="h-5 w-1.5 text-white/80" />
              </span>
              <span className="mt-1 block font-heading text-3xl font-bold">Ready to talk?</span>
              <span className="mt-1 block max-w-[17rem] text-sm leading-snug text-white/90">Use the approved GoHighLevel calendar to request your appointment.</span>
              <span className="mt-4 inline-flex h-11 items-center gap-3 bg-white px-5 font-semibold text-royal transition-colors group-hover:bg-chalk">
                Book an Appointment <ArrowRight size={18} aria-hidden />
              </span>
            </Link>
          </div>
        </div>
        <div className="relative min-h-[24rem] lg:mt-14 lg:min-h-0">
          <div className="absolute inset-0 lg:[clip-path:polygon(14%_0,100%_0,100%_100%,0_100%)]">
            <Image src="/images/pages/pain-low-back-v3.png" alt="An adult tending potted plants at a bright home workbench" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover object-[45%_center]" />
          </div>
          <p className="absolute right-0 bottom-0 flex max-w-[20rem] items-center gap-3 bg-slate px-6 py-5 text-xs leading-snug text-white/85 lg:w-[45%] lg:max-w-none lg:[clip-path:polygon(16%_0,100%_0,100%_100%,0_100%)] lg:pl-[20%]">
            <TallBracket className="h-8 w-1.5 shrink-0 text-silver" /> General information only; not medical advice and not a diagnosis.
            <TallBracket side="right" className="h-8 w-1.5 shrink-0 text-silver" />
          </p>
        </div>
      </div>
    </section>
  );
}
