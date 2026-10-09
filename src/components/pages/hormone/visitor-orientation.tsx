import Image from "next/image";
import { Globe } from "lucide-react";
import { StairSteps, TallBracket } from "@/components/pages/shared/page-motifs";
import { PolicyLink } from "@/components/pages/shared/policy-link";

export function VisitorOrientation(): React.ReactElement {
  return (
    <section id="visitor-orientation" className="relative overflow-hidden bg-royal text-white">
      <div className="grid lg:min-h-[40rem] lg:grid-cols-[40fr_33fr_27fr]">
        <div className="relative z-10 flex flex-col lg:col-span-1">
          <h2 className="px-6 pt-12 font-heading text-[clamp(3rem,6.4vw,5.9rem)] leading-[0.95] font-bold tracking-[-0.035em] sm:px-10 lg:pt-14 lg:pl-[max(2.5rem,calc((100vw-90rem)/2+2.5rem))] lg:whitespace-nowrap">
            Visitor
            <br />
            Orientation
          </h2>
          <div className="relative mt-8 flex-1 bg-chalk px-6 pt-8 pb-8 text-ink sm:px-10 lg:mr-[-3rem] lg:pl-[max(2.5rem,calc((100vw-90rem)/2+2.5rem))] lg:[clip-path:polygon(0_0,82%_0,82%_10%,88%_10%,88%_22%,92%_22%,92%_34%,96%_34%,96%_100%,0_100%)]">
            <p className="flex items-center gap-2 text-sm font-semibold tracking-[0.14em] text-royal uppercase">
              <TallBracket className="h-6 w-1.5" /> Important to know <TallBracket side="right" className="h-6 w-1.5" />
            </p>
            <p className="mt-4 max-w-[25rem] font-heading text-2xl leading-tight font-bold text-navy">
              Symptoms and goals can overlap with many health factors and require an appropriate licensed clinician’s individualized assessment.
            </p>
            <p className="mt-4 max-w-[24rem] text-xs leading-snug text-ink/80">
              Information on this site is general and educational. It is not intended to establish a diagnosis, determine treatment eligibility, or replace a conversation with a licensed clinician.
            </p>
            <div className="relative mt-6 w-fit px-5 py-1">
              <TallBracket className="absolute inset-y-0 left-0 w-2 text-royal" />
              <PolicyLink
                label={
                  <>
                    <span className="flex h-10 w-10 items-center justify-center border border-royal">
                      <Globe size={22} strokeWidth={1.5} aria-hidden />
                    </span>
                    <span className="text-left">
                      <span className="block text-[0.65rem] font-semibold tracking-[0.1em] uppercase">Legal information</span>
                      <span className="block font-heading text-xl leading-none font-bold">Terms status</span>
                    </span>
                  </>
                }
                className="flex items-center gap-3 text-royal hover:text-navy focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:[clip-path:none]"
              />
              <TallBracket side="right" className="absolute inset-y-0 right-0 w-2 text-royal" />
            </div>
          </div>
        </div>
        <div className="relative min-h-[22rem] lg:mt-28 lg:min-h-0">
          <StairSteps count={6} direction="down" className="absolute top-[12%] -left-10 z-20 hidden text-[0.85rem] lg:flex" />
          <div className="absolute inset-0 lg:[clip-path:polygon(28%_0,100%_0,100%_100%,0_100%,0_18%)]">
            <Image src="/images/pages/hormone-orientation-lobby-v3.png" alt="Conceptual clinic reception with a navy feature wall and marble desk" fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover object-[30%_center]" />
            <Image src="/images/shared/logo.png" alt="" width={240} height={65} className="absolute top-[18%] left-[24%] h-auto w-[46%] drop-shadow-lg" />
          </div>
        </div>
        <OrientationAside />
      </div>
    </section>
  );
}

function OrientationAside(): React.ReactElement {
  return (
    <div className="bg-slate px-6 py-10 sm:px-10 lg:mt-12 lg:px-8 lg:py-14 lg:[clip-path:polygon(10%_0,100%_0,100%_100%,0_100%,0_6%)]">
      <h3 className="flex items-center gap-3 text-sm font-semibold tracking-[0.12em] uppercase">
        <TallBracket className="h-8 w-2 text-silver" /> General information <TallBracket side="right" className="h-8 w-2 text-silver" />
      </h3>
      <p className="mt-5 max-w-[17rem] pl-5 text-sm leading-snug text-white/85">Content on this site provides general information about wellness topics and human performance.</p>
      <span aria-hidden className="my-7 block h-px bg-white/30" />
      <h3 className="flex items-start gap-3 text-sm font-semibold tracking-[0.12em] uppercase">
        <TallBracket className="h-10 w-2 text-silver" /> Your individual conversation
      </h3>
      <p className="mt-4 max-w-[17rem] pl-5 text-sm leading-snug text-white/85">
        Your personal health story, experiences, and goals require a private conversation and individualized assessment with a licensed clinician.
      </p>
    </div>
  );
}
