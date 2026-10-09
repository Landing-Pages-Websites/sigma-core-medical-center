import Image from "next/image";
import { FileText } from "lucide-react";
import { RisingBars, TallBracket } from "@/components/pages/shared/page-motifs";
import { PolicyLink } from "@/components/pages/shared/policy-link";

const PAGE_PROVIDES = [
  "General orientation to peripheral neuropathy.",
  "An overview of common symptoms and general causes.",
  "Status of unavailable provider and evaluation details.",
  "Pathways to related resources and educational content.",
] as const;

const NEEDS_CONVERSATION = [
  "Your unique medical history and current concerns.",
  "Detailed symptoms, patterns, and triggers.",
  "Potential causes and next steps for your situation.",
  "Any questions about evaluation or interpretation.",
] as const;

export function NeuropathyOrientation(): React.ReactElement {
  return (
    <section id="visitor-orientation" className="relative overflow-hidden bg-royal text-white">
      <div className="mx-auto grid max-w-[90rem] gap-10 px-6 pt-14 pb-12 sm:px-10 lg:grid-cols-[47fr_53fr] lg:gap-6 lg:pt-14 lg:pb-0 lg:pl-[3.5rem] lg:pr-6">
        <div className="lg:pb-12">
          <h2 className="relative z-10 flex items-center gap-5 font-heading text-[clamp(2.6rem,5vw,4.8rem)] leading-none font-bold tracking-[-0.035em] lg:whitespace-nowrap">
            <TallBracket className="h-20 w-5 text-silver sm:h-28" /> Visitor Orientation
          </h2>
          <div className="mt-8 max-w-[29rem] space-y-5 text-[0.95rem] leading-snug text-white/92 sm:ml-12">
            <p>
              <strong className="font-semibold text-white">Peripheral neuropathy</strong> describes a broad set of conditions that affect the peripheral nerves—often in the hands and feet. Symptoms can include changes in sensation, pain, weakness, or balance.
            </p>
            <p>These symptoms can have different causes and different impacts for each person. This page provides general information and orientation to our approach.</p>
            <p className="font-semibold text-white">Individualized questions belong in a clinical appointment with a qualified healthcare professional.</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:mt-16 lg:self-end">
          <OrientationCard title="What this page can provide" items={PAGE_PROVIDES} light />
          <OrientationCard title="What requires a personal conversation" items={NEEDS_CONVERSATION} />
        </div>
      </div>

      <div className="grid lg:grid-cols-[54fr_46fr]">
        <div className="relative min-h-56 lg:min-h-[13rem]">
          <Image src="/images/pages/neuropathy-orientation-lobby-v2.png" alt="Conceptual clinic reception and waiting lounge" fill sizes="(min-width: 1024px) 54vw, 100vw" className="object-cover object-[20%_center]" />
          <Image src="/images/shared/logo.png" alt="" width={240} height={65} className="absolute top-[14%] left-[5%] h-auto w-[30%] drop-shadow-lg" />
        </div>
        <div className="relative flex items-center gap-6 bg-navy px-6 py-8 sm:px-10 lg:-ml-2 lg:pl-8 lg:[clip-path:polygon(0_0,100%_0,100%_100%,0_100%)]">
          <FileText size={44} strokeWidth={1.3} className="shrink-0 self-start" aria-hidden />
          <span aria-hidden className="h-24 w-px self-start bg-royal" />
          <div>
            <p className="font-heading text-xl font-bold tracking-[0.02em] uppercase">Legal information status</p>
            <p className="mt-1 max-w-[17rem] text-sm leading-snug text-white/80">Website legal terms are not yet available.</p>
            <PolicyLink
              label={
                <>
                  <TallBracket className="h-8 w-2 text-white" /> Terms status
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
        <RisingBars count={4} className="h-9 shrink-0 text-[0.5rem]" barClassName={light ? "bg-royal" : "bg-silver"} />
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
