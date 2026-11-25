import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { StairSteps, TallBracket } from "@/components/pages/shared/page-motifs";

export function VisitorOrientation(): React.ReactElement {
  return (
    <section data-mega-section="visitor-orientation" id="visitor-orientation" className="relative overflow-hidden bg-royal text-white">
      <div className="grid lg:min-h-[40rem] lg:grid-cols-[40fr_33fr_27fr]">
        <div className="relative z-10 flex flex-col lg:col-span-1">
          <h2 className="px-6 pt-12 font-heading text-[clamp(2rem,3.4vw,3.4rem)] leading-[1.05] font-bold tracking-[-0.03em] sm:px-10 lg:pt-14 lg:pl-[max(2.5rem,calc((100vw-90rem)/2+2.5rem))]">
            Feeling Different Lately? There May Be More to the Story.
          </h2>
          <div className="mt-4 space-y-3 px-6 text-base leading-snug text-white/92 sm:px-10 lg:pl-[max(2.5rem,calc((100vw-90rem)/2+2.5rem))] lg:pr-8">
            <p>Low energy. Poor recovery. Changes in sleep, mood, strength, or sexual wellness.</p>
            <p>It&apos;s easy to dismiss these changes as just another part of getting older. But sometimes, there&apos;s more going on beneath the surface.</p>
            <p>Hormonal changes may play a role — and a comprehensive evaluation can help clarify whether hormones or other health factors deserve attention.</p>
            <p>At Sigma Core Medical Center, we believe understanding the bigger picture is the foundation of personalized care.</p>
          </div>
          <div className="relative mt-8 flex-1 bg-chalk px-6 pt-8 pb-8 text-ink sm:px-10 lg:mr-[-3rem] lg:pl-[max(2.5rem,calc((100vw-90rem)/2+2.5rem))] lg:[clip-path:polygon(0_0,82%_0,82%_10%,88%_10%,88%_22%,92%_22%,92%_34%,96%_34%,96%_100%,0_100%)]">
            <p className="flex items-center gap-2 text-sm font-semibold tracking-[0.14em] text-royal uppercase">
              <TallBracket className="h-6 w-1.5" /> WHY IT&apos;S WORTH TAKING A CLOSER LOOK <TallBracket side="right" className="h-6 w-1.5" />
            </p>
            <p className="mt-4 max-w-[25rem] font-heading text-2xl leading-tight font-bold text-navy">
              You Don&apos;t Have to Guess What&apos;s Behind the Changes You&apos;re Experiencing.
            </p>
            <p className="mt-4 max-w-[24rem] text-sm leading-snug text-ink/85">
              Your symptoms, health history, and appropriate clinical testing can help qualified providers determine whether hormonal factors or other conditions may be contributing.
            </p>
            <div className="relative mt-6 w-fit px-5 py-1">
              <TallBracket className="absolute inset-y-0 left-0 w-2 text-royal" />
              <Link href="#decision-factors" className="flex items-center gap-3 font-heading text-xl leading-tight font-bold text-royal hover:text-navy focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:[clip-path:none]">
                Explore Hormone Health Options <ArrowRight size={22} aria-hidden className="shrink-0" />
              </Link>
              <TallBracket side="right" className="absolute inset-y-0 right-0 w-2 text-royal" />
            </div>
            <p className="mt-5 max-w-[24rem] text-xs leading-snug text-ink/70">
              Information on this site is general and educational. It is not intended to establish a diagnosis, determine treatment eligibility, or replace a conversation with a licensed clinician.
            </p>
          </div>
        </div>
        <div className="relative min-h-[22rem] lg:mt-28 lg:min-h-0">
          <StairSteps count={6} direction="down" className="absolute top-[12%] -left-10 z-20 hidden text-[0.85rem] lg:flex" />
          <div className="absolute inset-0 lg:[clip-path:polygon(28%_0,100%_0,100%_100%,0_100%,0_18%)]">
            <Image src="/images/pages/services-runners-v2.webp" alt="A woman and man jogging along a riverside path" fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover object-[45%_center]" />
          </div>
        </div>
        <OrientationAside />
      </div>
      <div className="bg-navy">
        <div className="mx-auto flex max-w-[90rem] flex-wrap items-center gap-x-8 gap-y-4 px-6 py-6 sm:px-10 lg:pl-[max(2.5rem,calc((100vw-90rem)/2+2.5rem))]">
          <p className="font-heading text-xl leading-tight font-bold">Ready to Find Out What May Be Affecting Your Vitality?</p>
          <Link data-mega-cta="book-appointment" href="https://go.sigmacoremedicalcenter.com/" className="inline-flex min-h-12 items-center gap-3 bg-royal px-6 text-base font-semibold transition-colors hover:bg-royal-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
            Request My Free Hormone Consultation <ArrowRight size={18} aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}

function OrientationAside(): React.ReactElement {
  return (
    <div className="bg-slate px-6 py-10 sm:px-10 lg:mt-12 lg:px-8 lg:py-14 lg:[clip-path:polygon(10%_0,100%_0,100%_100%,0_100%,0_6%)]">
      <h3 className="flex items-start gap-3 text-sm font-semibold tracking-[0.12em] uppercase">
        <TallBracket className="h-10 w-2 shrink-0 text-silver" /> MORE THAN JUST A HORMONE NUMBER
      </h3>
      <p className="mt-4 max-w-[19rem] pl-5 text-sm leading-snug text-white/85">
        Good hormone care isn&apos;t about chasing a laboratory number. It&apos;s about understanding your symptoms, health history, individual needs, and the potential benefits and risks of available treatments.
      </p>
      <span aria-hidden className="my-7 block h-px bg-white/30" />
      <h3 className="flex items-start gap-3 text-sm font-semibold tracking-[0.12em] uppercase">
        <TallBracket className="h-10 w-2 shrink-0 text-silver" /> A PERSONALIZED APPROACH TO YOUR HEALTH
      </h3>
      <p className="mt-4 max-w-[19rem] pl-5 text-sm leading-snug text-white/85">
        No two patients are exactly alike. When hormone treatment is clinically appropriate, recommendations should be based on your individual findings, medical history, and health goals.
      </p>
    </div>
  );
}
