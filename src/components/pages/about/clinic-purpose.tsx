import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { StairSteps, TallBracket } from "@/components/pages/shared/page-motifs";

const SERVICE_LINKS = ["/services", "/services/neuropathy"] as const;

export function ClinicPurpose(): React.ReactElement {
  return (
    <section id="clinic-purpose" className="relative overflow-hidden bg-royal text-white">
      <div className="grid lg:min-h-[35rem] lg:grid-cols-[46fr_54fr]">
        <div className="relative px-6 py-14 sm:px-10 lg:py-16 lg:pl-[max(2.5rem,calc((100vw-90rem)/2+3.5rem))]">
          <TallBracket className="absolute top-14 bottom-12 left-6 w-6 text-white sm:left-10 lg:left-[max(2.5rem,calc((100vw-90rem)/2+3.5rem))]" />
          <div className="pl-10 sm:pl-12">
            <h2 className="font-heading text-[clamp(3rem,6.6vw,6rem)] leading-[0.95] font-bold tracking-[-0.035em]">
              Clinic
              <br />
              Purpose
            </h2>
            <p className="mt-6 max-w-[25rem] text-lg leading-snug text-white/95">
              Sigma Core guides adults seeking clearer next steps across neuropathy, pain, hormone health, pelvic-floor concerns, and regenerative goals.
            </p>
            <p className="mt-6 border-l border-white/70 pl-3 text-lg leading-snug">
              Care is personalized.
              <br />
              Outcomes vary.
            </p>
          </div>
          <StairSteps count={4} direction="up" barClassName="bg-navy/70" className="absolute right-0 bottom-14 hidden text-[0.85rem] lg:flex" />
        </div>
        <div className="relative min-h-[20rem] sm:min-h-[26rem] lg:mt-12 lg:min-h-0">
          <div className="absolute inset-0 lg:[clip-path:polygon(16%_0,100%_0,100%_100%,0_100%)]">
            <Image src="/images/shared/waiting-room.png" alt="Sigma Core waiting room with seating beneath the wall sign" fill sizes="(min-width: 1024px) 54vw, 100vw" className="object-cover object-center" />
          </div>
          <TallBracket side="right" className="absolute top-[18%] right-[6%] h-[62%] w-6 text-white/90" />
        </div>
      </div>
      <MissionStrip />
    </section>
  );
}

function MissionStrip(): React.ReactElement {
  return (
    <div className="grid bg-navy lg:grid-cols-[64fr_36fr]">
      <div className="flex flex-col gap-5 px-6 py-8 sm:flex-row sm:items-center sm:gap-10 sm:px-10 lg:py-10 lg:pl-[max(2.5rem,calc((100vw-90rem)/2+3.5rem))]">
        <h3 className="flex shrink-0 items-center gap-4 font-heading text-3xl font-bold sm:text-4xl">
          <TallBracket className="h-14 w-4 text-royal" /> Our Mission
        </h3>
        <p className="max-w-[26rem] text-base leading-snug text-white/90">
          Provide grounded, personalized care in a calm, professional environment—helping you understand your options and move forward with confidence.
        </p>
        <span aria-hidden className="hidden h-20 w-px bg-white/30 lg:block" />
      </div>
      <div className="bg-royal px-6 py-7 sm:px-10 lg:-ml-16 lg:py-8 lg:pl-[22%] lg:[clip-path:polygon(18%_0,100%_0,100%_100%,0_100%)]">
        <p className="text-xs font-semibold tracking-[0.18em] uppercase">Explore our services</p>
        <div className="mt-3 grid max-w-xs gap-2">
          {SERVICE_LINKS.map((href) => (
            <Link key={href} href={href} className="group flex h-11 items-center justify-between border border-white/80 px-4 text-base font-semibold transition-colors hover:bg-white hover:text-royal">
              {href} <ChevronRight size={18} aria-hidden />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
