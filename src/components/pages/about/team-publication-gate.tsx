import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import { CornerStripes, TallBracket } from "@/components/pages/shared/page-motifs";

export function TeamPublicationGate(): React.ReactElement {
  return (
    <section id="team" className="relative overflow-hidden bg-navy text-white">
      <CornerStripes className="absolute top-6 right-0 hidden w-[26rem] lg:flex" />
      <div className="grid lg:min-h-[37rem] lg:grid-cols-[50fr_50fr]">
        <div className="relative z-10 px-6 pt-14 pb-12 sm:px-10 lg:pt-24 lg:pb-16 lg:pl-[max(2.5rem,calc((100vw-90rem)/2+3.5rem))]">
          <h2 className="flex items-center gap-4 font-heading text-[clamp(2.3rem,4vw,3.6rem)] leading-none font-bold tracking-[-0.03em]">
            <TallBracket className="h-20 w-4 text-silver sm:h-24" /> Team Publication Gate
          </h2>
          <p className="mt-6 max-w-[30rem] text-lg leading-snug text-white/92">
            Do not render public provider cards until Medical Director, Nurse Practitioner, and team names, photos, roles, credentials, license details, biographies, and review responsibilities are supplied and approved.
          </p>
          <p className="mt-4 max-w-[19rem] text-lg leading-snug text-white/92">Dr. Jason Hurst is not a treating-provider profile.</p>
          <div className="relative mt-8 max-w-[29rem] pl-8">
            <TallBracket className="absolute inset-y-0 left-0 w-4 text-silver" />
            <div className="flex items-center gap-4 border border-royal px-5 py-4">
              <ShieldCheck size={44} strokeWidth={1.4} className="shrink-0 text-royal" aria-hidden />
              <div>
                <p className="font-heading text-lg font-bold text-[#4f9bf0]">Approved information pending</p>
                <p className="text-xs leading-snug text-white/80">Team information will be published only after complete and approved submission.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative min-h-[24rem] lg:min-h-0">
          <div className="absolute inset-x-0 top-0 h-[64%] lg:top-[19%] lg:h-[47%] lg:[clip-path:polygon(10%_0,100%_0,100%_100%,0_100%)]">
            <Image src="/images/pages/hormone-decision-reception-v3.png" alt="Conceptual bright clinic reception and lounge" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover object-[35%_center]" />
          </div>
          <div className="absolute inset-x-0 bottom-0 flex h-[42%] items-center justify-end bg-royal px-6 sm:px-10 lg:h-[46%] lg:[clip-path:polygon(32%_0,100%_0,100%_100%,0_100%)]">
            <div className="max-w-[17rem] lg:mr-8">
              <p className="relative pl-6 font-display text-2xl leading-tight italic sm:text-3xl">
                <TallBracket className="absolute inset-y-1 left-0 w-2.5 text-silver" />
                We publish only what is verified.
              </p>
              <p className="mt-4 text-[0.7rem] font-semibold tracking-[0.06em] uppercase">Accuracy. Privacy. Accountability.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
