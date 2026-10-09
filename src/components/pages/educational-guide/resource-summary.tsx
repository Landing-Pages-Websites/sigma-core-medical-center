import Image from "next/image";
import { BookOpen, FileText, MapPin, UserRound } from "lucide-react";
import { StairSteps, TallBracket } from "@/components/pages/shared/page-motifs";
import { PolicyLink } from "@/components/pages/shared/policy-link";

const RESOURCE_STATUS = [
  { icon: BookOpen, title: "Resource", body: "The educational guide is currently unavailable." },
  { icon: MapPin, title: "Delivery", body: "There is no current download or delivery date." },
  { icon: UserRound, title: "Request access", body: "The guide request form is unavailable." },
] as const;

export function ResourceSummary(): React.ReactElement {
  return (
    <section id="how-it-works" className="relative overflow-hidden bg-royal text-white">
      <div className="grid lg:grid-cols-[60fr_40fr]">
        <div className="relative px-6 pt-14 sm:px-10 lg:pt-16 lg:pl-[max(2.5rem,calc((100vw-90rem)/2+3.5rem))]">
          <p className="flex items-center gap-3 text-sm font-semibold">
            <TallBracket className="h-6 w-1.5 text-white/70" /> Current availability <TallBracket side="right" className="h-6 w-1.5 text-white/70" />
          </p>
          <h2 className="mt-3 font-heading text-[clamp(2.8rem,5.8vw,5.3rem)] leading-none font-bold tracking-[-0.035em]">Resource Status</h2>
          <p className="mt-4 max-w-[36rem] text-lg leading-snug text-white/92">
            The educational guide is currently unavailable. No availability date has been given, and the request form is unavailable.
          </p>
          <p className="relative mt-6 flex max-w-[30rem] items-center gap-4 bg-navy px-8 py-4 text-sm leading-snug">
            <TallBracket className="absolute inset-y-3 left-3 w-2 text-silver" />
            <FileText size={30} strokeWidth={1.4} className="shrink-0" aria-hidden />
            <span>
              <strong className="block font-semibold">The guide is currently unavailable.</strong>
              It is not available for delivery or download.
            </span>
          </p>
          <StairSteps count={4} direction="up" barClassName="bg-navy" className="absolute right-0 bottom-28 hidden text-[0.95rem] lg:flex" />
          <div className="relative mt-10 -mx-6 h-56 sm:-mx-10 sm:h-64 lg:mr-[22%] lg:-ml-[max(2.5rem,calc((100vw-90rem)/2+3.5rem))] lg:[clip-path:polygon(0_0,100%_0,82%_100%,0_100%)]">
            <Image src="/images/pages/hormone-faq-lobby-v3.png" alt="Conceptual warm clinic reception and lounge" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover object-[30%_center]" />
            <Image src="/images/shared/logo.png" alt="" width={240} height={65} className="absolute top-[12%] left-[6%] h-auto w-[34%] drop-shadow-lg" />
          </div>
        </div>
        <StatusPanel />
      </div>
      <TermsStrip />
    </section>
  );
}

function StatusPanel(): React.ReactElement {
  return (
    <div className="relative bg-navy px-6 py-12 sm:px-10 lg:mt-16 lg:py-12 lg:pr-[max(2.5rem,calc((100vw-90rem)/2+2.5rem))] lg:pl-[17%] lg:[clip-path:polygon(14%_0,100%_0,100%_100%,0_100%,0_44%)]">
      <p className="flex items-center gap-3 text-base font-semibold">
        <TallBracket className="h-6 w-1.5 text-silver" /> Current resource status
      </p>
      <ul className="relative mt-5 divide-y divide-white/15 pr-8">
        {RESOURCE_STATUS.map(({ icon: Icon, title, body }) => (
          <li key={title} className="flex gap-5 py-4">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center bg-royal">
              <Icon size={28} strokeWidth={1.5} aria-hidden />
            </span>
            <span>
              <span className="block font-heading text-xl font-bold">{title}</span>
              <span className="mt-1 block text-sm leading-snug text-white/80">{body}</span>
            </span>
          </li>
        ))}
        <TallBracket side="right" className="absolute inset-y-6 right-0 w-3 text-silver" />
      </ul>
      <div className="relative mt-6 border border-white/40 px-10 py-4 text-center">
        <TallBracket className="absolute inset-y-3 left-3 w-2 text-silver" />
        <p className="text-sm text-white/70">[ Important boundary ]</p>
        <p className="mt-1 text-base leading-snug">Information on this page does not provide diagnosis or individualized medical advice.</p>
        <TallBracket side="right" className="absolute inset-y-3 right-3 w-2 text-silver" />
      </div>
    </div>
  );
}

function TermsStrip(): React.ReactElement {
  return (
    <div className="bg-chalk text-ink">
      <div className="mx-auto flex max-w-[90rem] flex-wrap items-center gap-6 px-6 py-5 sm:px-10 lg:pl-[3.5rem]">
        <span className="flex items-center gap-3">
          <TallBracket className="h-12 w-2.5 text-silver" />
          <PolicyLink
            label={
              <>
                <FileText size={22} strokeWidth={1.5} aria-hidden /> Terms status <span aria-hidden>→</span>
              </>
            }
            className="inline-flex h-11 items-center gap-3 border border-royal/60 bg-white/60 px-5 text-base font-semibold text-royal transition-colors hover:bg-royal hover:text-white"
          />
          <TallBracket side="right" className="h-12 w-2.5 text-silver" />
        </span>
        <p className="text-sm text-ink/80">The Terms page is currently unavailable. The link shows its current status.</p>
      </div>
    </div>
  );
}
