import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CONTACT, PROVIDER } from "@/content/site";
import { StairSteps, TallBracket } from "@/components/pages/shared/page-motifs";

const LITERACY = [
  { title: "Who", body: `${PROVIDER.name} leads Sigma Core Medical Center.` },
  { title: "What", body: "Your goals, symptoms, health history, and medications are reviewed before any option is discussed." },
  { title: "How", body: `Call ${CONTACT.phone} to book a Free Consultation with our team.` },
] as const;

export function ResponsibleNextStep(): React.ReactElement {
  return (
    <section data-mega-section="responsible-next-step" id="responsible-next-step" className="relative overflow-hidden bg-slate text-white">
      <div className="grid lg:min-h-[36rem] lg:grid-cols-[44fr_31fr_25fr]">
        <div className="relative z-10 px-6 pt-14 pb-12 sm:px-10 lg:pt-16 lg:pl-[max(2.5rem,calc((100vw-90rem)/2+3.5rem))]">
          <h2 className="font-heading text-[clamp(2.8rem,5.6vw,5.1rem)] leading-[0.95] font-bold tracking-[-0.035em]">
            Responsible
            <br />
            Next Step
          </h2>
          <p className="mt-6 max-w-[27rem] border-l-[3px] border-royal pl-4 text-base leading-snug text-white/90">
            Start with a Free Consultation to talk through your goals and whether hormone care may be a fit.
          </p>
          <p className="mt-4 max-w-[26rem] pl-5 text-base leading-snug text-white/90">Call {CONTACT.phone} to book. There is no online calendar.</p>
          <Link data-mega-cta="book-appointment" href="/book" className="mt-6 inline-flex max-w-full min-h-14 items-center gap-4 bg-royal px-6 text-xl font-semibold transition-colors hover:bg-royal-hover focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:[clip-path:none]">
            See booking details <ArrowRight size={22} aria-hidden className="shrink-0" />
          </Link>
          <div className="mt-7 flex flex-wrap items-center gap-6">
            <p className="relative max-w-[15rem] pl-5 text-xs leading-snug text-white/75">
              <TallBracket className="absolute inset-y-0 left-0 w-2 text-silver" />
              The contact page lists our address, phone, email and office hours.
            </p>
            <span aria-hidden className="h-10 w-px bg-white/30" />
            <Link data-mega-cta="contact" href="/contact" className="inline-flex max-w-full items-center gap-3 text-base font-semibold text-[#4f9bf0] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:[clip-path:none]">
              Contact us <ArrowRight size={20} aria-hidden className="shrink-0" />
            </Link>
          </div>
        </div>
        <div className="relative min-h-[22rem] lg:my-14 lg:min-h-0">
          <StairSteps count={6} direction="down" className="absolute top-[24%] -left-16 z-20 hidden text-[0.75rem] lg:flex" />
          <div className="absolute inset-0 lg:[clip-path:polygon(14%_0,100%_0,100%_100%,8%_100%,0_88%,0_12%)]">
            <Image src="/images/pages/consultation-concerned-adult.webp" alt="A tired, worried man seated in a clinic lounge, rubbing his temple" fill sizes="(min-width: 1024px) 31vw, 100vw" className="object-cover object-[30%_center]" />
          </div>
        </div>
        <div className="relative bg-royal px-6 py-10 sm:px-10 lg:my-6 lg:-ml-6 lg:px-8 lg:py-12 lg:[clip-path:polygon(0_0,82%_0,100%_14%,100%_60%,70%_100%,0_100%)]">
          <p className="flex items-center gap-2 text-sm">
            <TallBracket className="h-5 w-1.5 text-white/80" /> Your consultation <TallBracket side="right" className="h-5 w-1.5 text-white/80" />
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
