import Image from "next/image";
import { FileText } from "lucide-react";
import { RisingBars, TallBracket } from "@/components/pages/shared/page-motifs";
import { PolicyLink } from "@/components/pages/shared/policy-link";

const PAGE_PROVIDES = [
  "Burning, tingling, or pins and needles",
  "Numbness or reduced feeling in your feet",
  "Cold sensations or unusual sensitivity",
  "Unsteadiness or trouble with balance",
] as const;

const NEEDS_CONVERSATION = [
  "A personalized look at your symptoms",
  "Advanced therapeutic technologies",
  "An integrated approach to care",
  "A plan based on your clinical findings",
] as const;

export function NeuropathyOrientation(): React.ReactElement {
  return (
    <section data-mega-section="visitor-orientation" id="visitor-orientation" className="relative overflow-hidden bg-royal text-white">
      <div className="mx-auto grid max-w-[90rem] gap-10 px-6 pt-14 pb-12 sm:px-10 lg:grid-cols-[47fr_53fr] lg:gap-6 lg:pt-14 lg:pb-0 lg:pl-[3.5rem] lg:pr-6">
        <div className="lg:pb-12">
          <h2 className="relative z-10 flex items-center gap-5 font-heading text-[clamp(2rem,3.6vw,3.6rem)] leading-[1.05] font-bold tracking-[-0.03em]">
            <TallBracket className="h-20 w-5 shrink-0 text-silver sm:h-28" /> Neuropathy Is More Than Just Numbness or Tingling.
          </h2>
          <div className="mt-8 max-w-[29rem] space-y-5 text-base leading-snug text-white/92 sm:ml-12">
            <p>It may start with a little tingling in your toes. A burning sensation at night. Feet that feel cold even when they&apos;re warm. Or the unsettling feeling that your balance isn&apos;t what it used to be.</p>
            <p>For some people, these symptoms become a constant frustration — interrupting sleep, making everyday activities uncomfortable, and creating concerns about staying active and independent.</p>
            <p>If this sounds familiar, you already know how much neuropathy can affect your life.</p>
            <p className="font-semibold text-white">The important question isn&apos;t just what&apos;s causing your symptoms. It&apos;s also what treatment options may be appropriate for you.</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:mt-16 lg:grid-cols-1 lg:self-end xl:grid-cols-2">
          <OrientationCard title="Do these symptoms sound familiar?" items={PAGE_PROVIDES} light />
          <OrientationCard title="What makes our approach different?" items={NEEDS_CONVERSATION} />
        </div>
      </div>
      <p className="mx-auto max-w-[90rem] px-6 pt-6 pb-8 text-sm text-white/75 sm:px-10 lg:pl-[3.5rem]">
        Neuropathy symptoms can have different underlying causes and require appropriate medical evaluation. Having one or more of these symptoms does not mean you have neuropathy, and not everyone will qualify for treatment.
      </p>

      <div className="grid lg:grid-cols-[54fr_46fr]">
        <div className="relative min-h-56 lg:min-h-[13rem]">
          <Image src="/images/pages/neuropathy-orientation-lobby-v2.webp" alt="Conceptual clinic reception and waiting lounge" fill sizes="(min-width: 1024px) 54vw, 100vw" className="object-cover object-[20%_center]" />
          <Image src="/images/shared/logo.webp" alt="" width={240} height={65} className="absolute top-[14%] left-[5%] h-auto w-[30%] drop-shadow-lg" />
        </div>
        <div className="relative flex items-center gap-6 bg-navy px-6 py-8 sm:px-10 lg:-ml-2 lg:pl-8 lg:[clip-path:polygon(0_0,100%_0,100%_100%,0_100%)]">
          <FileText size={44} strokeWidth={1.3} className="shrink-0 self-start" aria-hidden />
          <span aria-hidden className="h-24 w-px self-start bg-royal" />
          <div>
            <p className="font-heading text-xl font-bold tracking-[0.02em] uppercase">Legal information</p>
            <p className="mt-1 max-w-[17rem] text-sm leading-snug text-white/80">Read the terms that apply to using this website.</p>
            <PolicyLink
              label={
                <>
                  <TallBracket className="h-8 w-2 text-white" /> Terms of Use
                </>
              }
              className="mt-4 inline-flex h-12 items-center gap-4 bg-royal pr-14 pl-4 font-heading text-2xl font-bold transition-colors [clip-path:polygon(0_0,100%_0,88%_100%,0_100%)] hover:bg-royal-hover focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:[clip-path:none]"
            />
          </div>
          <RisingBars count={5} className="absolute right-8 bottom-6 hidden h-24 text-[0.85rem] sm:flex" />
        </div>
      </div>
    </section>
  );
}

type OrientationCardProps = { title: string; items: readonly string[]; light?: true };

function OrientationCard({ title, items, light }: OrientationCardProps): React.ReactElement {
  const tone = light ? "bg-[#ecebe7] text-navy" : "bg-slate text-white";
  const accent = light ? "text-royal" : "text-silver";
  return (
    <article className={`${tone} relative px-7 pt-9 pb-8 md:[clip-path:polygon(0_0,90%_0,100%_8%,100%_100%,0_100%)]`}>
      <div className={`flex items-center gap-3 ${accent}`}>
        <RisingBars count={4} className="hidden h-9 shrink-0 text-[0.5rem] md:max-lg:flex" barClassName={light ? "bg-royal" : "bg-silver"} />
        <TallBracket className="h-14 w-2.5" />
        <h3 className={`font-heading text-xl leading-tight font-bold uppercase ${light ? "text-royal" : "text-white"}`}>{title}</h3>
      </div>
      <ul className={`mt-5 divide-y text-sm leading-snug ${light ? "divide-royal/40 text-ink/85" : "divide-white/25 text-white/85"}`}>
        {items.map((item) => (
          <li key={item} className="py-2.5">{item}</li>
        ))}
      </ul>
      <TallBracket side="right" className={`absolute right-5 bottom-6 h-10 w-2 ${accent}`} />
    </article>
  );
}
