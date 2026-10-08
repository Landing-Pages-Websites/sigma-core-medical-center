import Image from "next/image";
import { MessageSquareText } from "lucide-react";
import { TallBracket } from "@/components/pages/shared/page-motifs";

const SOURCE_DETAILS = [
  { mark: "NIH", name: "National Institute of Neurological Disorders and Stroke (NINDS)", url: "nih.gov/ninds" },
  { mark: "CDC", name: "Centers for Disease Control and Prevention", url: "cdc.gov" },
  { mark: "NASS", name: "North American Spine Society (NASS)", url: "spine.org" },
] as const;

const SIDE_BARS = ["w-3 h-2", "w-5 h-2", "w-7 h-2.5", "w-9 h-3", "w-9 h-24"] as const;

export function NeuropathySources(): React.ReactElement {
  return (
    <section id="medical-sources" className="relative overflow-hidden bg-chalk text-ink">
      <div className="mx-auto max-w-[90rem] px-6 py-14 sm:px-10 lg:py-14 lg:pl-[3.5rem]">
        <div className="relative grid gap-8 lg:grid-cols-[50fr_50fr] lg:pl-16">
          <span aria-hidden className="absolute top-12 left-0 hidden flex-col items-end gap-1.5 lg:flex">
            {SIDE_BARS.map((bar, index) => (
              <span key={bar} className={`block ${bar} ${index > 2 ? "bg-royal" : "bg-[#7fa9d8]"}`} />
            ))}
          </span>
          <div className="lg:pt-6">
            <h2 className="font-heading text-[clamp(2.8rem,5.2vw,4.8rem)] leading-none font-bold tracking-[-0.035em] text-navy">Medical Sources</h2>
            <p className="mt-4 max-w-[30rem] text-lg leading-snug text-ink/85">
              The following authoritative sources inform the education on this site and the decisions we support.
            </p>
          </div>
          <div className="relative min-h-52 lg:min-h-56 lg:[clip-path:polygon(14%_0,100%_0,100%_100%,0_100%)]">
            <Image src="/images/pages/services-lobby-v2.png" alt="Conceptual clinic reception and waiting lounge" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover object-[60%_center]" />
          </div>
        </div>

        <ul className="mt-6 grid gap-3 md:grid-cols-3 lg:pl-16">
          {SOURCE_DETAILS.map((source) => (
            <li key={source.mark} className="flex min-h-24 items-center gap-5 bg-navy px-7 py-4 text-white md:[clip-path:polygon(7%_0,100%_0,93%_100%,0_100%)] md:px-10">
              <span className="flex h-12 min-w-16 items-center justify-center border-2 border-white px-2 font-heading text-lg font-bold tracking-[0.02em]">{source.mark}</span>
              <span>
                <span className="block text-sm leading-snug font-semibold">{source.name}</span>
                <span className="mt-0.5 block text-xs text-white/65 italic">{source.url}</span>
              </span>
            </li>
          ))}
        </ul>

        <div className="relative mt-4 flex items-center gap-5 bg-[#e3ddd1] px-8 py-4 lg:mx-16 lg:ml-28">
          <TallBracket className="absolute inset-y-0 left-0 w-2.5 text-silver" />
          <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-navy text-white">
            <MessageSquareText size={24} strokeWidth={1.5} aria-hidden />
          </span>
          <div className="text-sm leading-snug">
            <p className="font-semibold tracking-[0.04em] text-navy uppercase">Source and review status</p>
            <p className="text-ink/80">Content is based on current authoritative sources and reviewed for accuracy at the time of publication.</p>
            <p className="text-ink/80 italic">We do not imply endorsement by any source.</p>
          </div>
          <TallBracket side="right" className="absolute inset-y-0 right-0 w-2.5 text-silver" />
        </div>
      </div>
    </section>
  );
}
