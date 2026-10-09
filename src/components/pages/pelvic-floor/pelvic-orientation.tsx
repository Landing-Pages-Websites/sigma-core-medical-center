import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { StairSteps, TallBracket } from "@/components/pages/shared/page-motifs";
import { PolicyLink } from "@/components/pages/shared/policy-link";

type SideNoteProps = { title: string; body: string; className?: string };

function SideNote({ title, body, className = "" }: SideNoteProps): React.ReactElement {
  return (
    <div className={`relative bg-slate px-6 py-8 text-white lg:flex lg:items-center lg:px-5 ${className}`}>
      <div className="relative pl-5">
        <TallBracket className="absolute inset-y-0 left-0 w-2.5 text-silver" />
        <p className="font-heading text-lg leading-tight font-bold">{title}</p>
        <p className="mt-2 text-xs leading-snug text-white/80">{body}</p>
      </div>
    </div>
  );
}

export function PelvicOrientation(): React.ReactElement {
  return (
    <section id="private-orientation" className="relative overflow-hidden bg-royal text-white">
      <div className="mx-auto grid max-w-[90rem] lg:min-h-[34rem] lg:grid-cols-[12fr_17fr_42fr_12fr_17fr]">
        <SideNote title="Privacy information." body="Privacy policy and visit confidentiality details are not yet available." className="order-2 lg:order-none lg:mt-0" />
        <div className="relative order-3 min-h-60 lg:order-none lg:mt-14">
          <Image src="/images/pages/services-lobby-v2.png" alt="Conceptual clinic lounge with sofa and walnut paneling" fill sizes="(min-width: 1024px) 17vw, 100vw" className="object-cover object-[20%_center]" />
        </div>
        <div className="relative order-1 px-6 pt-12 pb-10 sm:px-10 lg:order-none lg:px-6 lg:pt-12">
          <h2 className="text-center font-heading text-[clamp(2.6rem,4.9vw,4.6rem)] leading-none font-bold tracking-[-0.035em] lg:-mx-24">Private Orientation</h2>
          <div className="relative mt-8 bg-chalk px-10 py-10 text-ink lg:[clip-path:polygon(0_0,96%_0,100%_6%,100%_100%,4%_100%,0_94%)]">
            <TallBracket className="absolute top-8 bottom-8 left-5 w-3 text-silver" />
            <TallBracket side="right" className="absolute top-8 bottom-8 right-5 w-3 text-silver" />
            <p className="text-lg leading-snug">Pelvic-floor and incontinence concerns vary from person to person and deserve an individualized conversation.</p>
            <p className="mt-5 text-lg leading-snug">Treatment and provider details are unavailable. This page cannot assess your individual situation.</p>
          </div>
          <StairSteps count={3} direction="down" barClassName="bg-royal" className="absolute top-[52%] -left-8 hidden text-[0.6rem] lg:flex" />
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm">
            <TallBracket className="h-8 w-2 text-white/80" />
            <Link href="/about" className="inline-flex max-w-full items-center gap-2 font-semibold hover:text-chalk/80 focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:[clip-path:none]">
              Learn more about our approach <ArrowRight size={16} aria-hidden className="shrink-0" />
            </Link>
            <PolicyLink label="Terms status" className="font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:[clip-path:none]" />
            <TallBracket side="right" className="h-8 w-2 text-white/80" />
          </div>
        </div>
        <div className="relative order-4 min-h-60 lg:mt-24">
          <Image src="/images/shared/reception-2.png" alt="Sigma Core reception desk beneath the illuminated wall sign" fill sizes="(min-width: 1024px) 12vw, 100vw" className="object-cover object-[30%_40%]" />
          <StairSteps count={4} direction="down" barClassName="bg-royal" className="absolute bottom-10 -left-12 hidden text-[0.6rem] lg:flex" />
        </div>
        <SideNote
          title="Clear limits."
          body="This site offers information only. It is not medical advice or a substitute for a personalized conversation."
          className="order-5 lg:mt-0"
        />
      </div>
    </section>
  );
}
