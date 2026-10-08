import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { StairSteps, TallBracket } from "@/components/pages/shared/page-motifs";

const LITERACY = [
  { title: "Who", body: "The responsible prescribing provider and credentials must be confirmed." },
  { title: "What", body: "Actual services and the clinical process must be documented." },
  { title: "How", body: "The consultation and next steps are defined before any clinical content goes live." },
] as const;

export function ResponsibleNextStep(): React.ReactElement {
  return (
    <section id="responsible-next-step" className="relative overflow-hidden bg-slate text-white">
      <div className="grid lg:min-h-[36rem] lg:grid-cols-[44fr_31fr_25fr]">
        <div className="relative z-10 px-6 pt-14 pb-12 sm:px-10 lg:pt-16 lg:pl-[max(2.5rem,calc((100vw-90rem)/2+3.5rem))]">
          <h2 className="font-heading text-[clamp(2.8rem,5.6vw,5.1rem)] leading-[0.95] font-bold tracking-[-0.035em]">
            Responsible
            <br />
            Next Step
          </h2>
          <p className="mt-6 max-w-[27rem] border-l-[3px] border-royal pl-4 text-base leading-snug text-white/90">
            The responsible prescribing provider, credentials, actual services, and process must be confirmed before clinical copy goes live.
          </p>
          <p className="mt-4 max-w-[26rem] pl-5 text-base leading-snug text-white/90">Please book only after those facts and the calendar are approved.</p>
          <Link href="/book" className="mt-6 inline-flex h-14 items-center gap-4 bg-royal px-6 text-xl font-semibold transition-colors hover:bg-royal-hover">
            Book an Appointment <ArrowRight size={22} aria-hidden />
          </Link>
          <div className="mt-7 flex flex-wrap items-center gap-6">
            <p className="relative max-w-[15rem] pl-5 text-xs leading-snug text-white/75">
              <TallBracket className="absolute inset-y-0 left-0 w-2 text-silver" />
              You can review process details or ask a general question on our contact page.
            </p>
            <span aria-hidden className="h-10 w-px bg-white/30" />
            <Link href="/contact" className="inline-flex items-center gap-3 text-base font-semibold text-[#4f9bf0] hover:text-white">
              Contact Us <ArrowRight size={20} aria-hidden />
            </Link>
          </div>
        </div>
        <div className="relative min-h-[22rem] lg:my-14 lg:min-h-0">
          <StairSteps count={6} direction="down" className="absolute top-[24%] -left-16 z-20 hidden text-[0.75rem] lg:flex" />
          <div className="absolute inset-0 lg:[clip-path:polygon(14%_0,100%_0,100%_100%,8%_100%,0_88%,0_12%)]">
            <Image src="/images/pages/hormone-consultation-v2.png" alt="An adult reviewing notes in a calm professional lounge" fill sizes="(min-width: 1024px) 31vw, 100vw" className="object-cover object-[30%_center]" />
          </div>
        </div>
        <div className="relative bg-royal px-6 py-10 sm:px-10 lg:my-6 lg:-ml-6 lg:px-8 lg:py-12 lg:[clip-path:polygon(0_0,82%_0,100%_14%,100%_60%,70%_100%,0_100%)]">
          <p className="flex items-center gap-2 text-sm">
            <TallBracket className="h-5 w-1.5 text-white/80" /> Consultation Literacy <TallBracket side="right" className="h-5 w-1.5 text-white/80" />
          </p>
          <ul className="mt-6 space-y-6">
            {LITERACY.map((item) => (
              <li key={item.title} className="relative pl-5">
                <TallBracket className="absolute top-1 left-0 h-12 w-2 text-white/80" />
                <h3 className="font-heading text-xl font-bold">{item.title}</h3>
                <p className="mt-1 max-w-[14rem] text-xs leading-snug text-white/90">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
