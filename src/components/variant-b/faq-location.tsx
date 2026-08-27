import { ChevronDown } from "lucide-react";
import { FAQ, PENDING } from "@/content/site";
import { PendingAction } from "@/components/shared/pending-action";
import { GhostWord } from "@/components/variant-b/motifs";
import { primaryButtonB } from "@/components/variant-b/buttons";

const ITEM_LAYOUTS = [
  "md:ml-0 md:w-full xl:ml-0 xl:w-[35rem]",
  "md:ml-[8%] md:w-[92%] xl:ml-[9.25rem] xl:w-[34rem]",
  "md:ml-[16%] md:w-[84%] xl:ml-[15rem] xl:w-[34rem]",
  "md:ml-[24%] md:w-[76%] xl:ml-[19rem] xl:w-[33rem]",
];

export function FaqLocationB(): React.ReactElement {
  return (
    <section id="faq" aria-label="Questions and location" className="relative overflow-hidden bg-surface">
      <GhostWord
        word="Richmond"
        className="-top-3 left-0 text-[5.75rem] text-silver/75 sm:text-[9rem] lg:text-[11rem] xl:-top-2 xl:left-[0.5%] xl:text-[clamp(14.5rem,18vw,20rem)]"
      />

      <div className="relative w-full px-5 pt-24 pb-14 sm:px-8 sm:pt-32 lg:grid lg:min-h-[48rem] lg:grid-cols-[minmax(0,1.55fr)_minmax(18rem,0.85fr)] lg:gap-10 lg:px-10 lg:py-24 xl:block xl:min-h-[50.25rem] xl:px-0 xl:py-0">
        <div className="xl:contents">
          <div data-b-reveal="up" className="relative inline-block xl:absolute xl:top-[10rem] xl:left-[8.75%]">
            <span
              aria-hidden
              className="absolute -top-3 -left-3 h-20 w-5 border-y-4 border-l-4 border-electric sm:-left-5 sm:h-24 xl:-top-2 xl:-left-12 xl:h-[8rem] xl:w-8 xl:border-y-[7px] xl:border-l-[7px]"
            />
            <h2 className="max-w-[42rem] text-4xl leading-[0.98] font-semibold tracking-[-0.04em] text-ink sm:text-5xl lg:text-[3.5rem] xl:max-w-[39rem] xl:text-[4rem]">
              {FAQ.headline}
            </h2>
          </div>

          <div className="mt-10 xl:absolute xl:top-[18.8rem] xl:left-[5.25%] xl:mt-0">
            {FAQ.items.map((item, index) => (
              <details
                key={item.question}
                open
                data-b-reveal="step"
                data-b-delay={String(index + 1)}
                className={`group w-full border border-silver/65 bg-ink text-white ${ITEM_LAYOUTS[index]}`}
              >
                <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-4 border-l-4 border-electric px-4 py-2 text-left text-base font-semibold transition-colors hover:bg-charcoal sm:text-lg">
                  {item.question}
                  <span
                    aria-hidden
                    className="flex size-8 shrink-0 items-center justify-center border-2 border-silver/80"
                  >
                    <ChevronDown size={18} />
                  </span>
                </summary>
                <div className="relative border-t border-silver/65">
                  <span
                    aria-hidden
                    className="absolute top-2 bottom-2 left-3 w-4 border-y-[3px] border-l-[3px] border-silver"
                  />
                  <p className="px-12 py-1.5 text-sm leading-snug text-white/85 sm:text-base">
                    {item.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>

        <div data-b-reveal="right" data-b-delay="2" className="mt-12 md:ml-auto md:w-[64%] lg:mt-16 lg:w-auto xl:absolute xl:top-[14.25rem] xl:right-[2.5%] xl:mt-0 xl:w-[29.75%]">
          <div
            className="relative min-h-[24rem] bg-ink p-8 sm:min-h-[28rem] lg:min-h-[30rem] lg:p-10 xl:h-[34rem] xl:min-h-0 xl:p-14"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.035) 1px, transparent 0)",
              backgroundSize: "4px 4px",
            }}
          >
            <span
              aria-hidden
              className="absolute top-5 left-4 h-16 w-7 border-t-[7px] border-l-[7px] border-electric"
            />
            <h3 className="max-w-xs text-4xl leading-[0.96] font-semibold tracking-tight text-white lg:text-[3rem] xl:text-[3.25rem]">
              {FAQ.locationLabel}
            </h3>

            <span
              aria-hidden
              className="absolute top-[10.6rem] left-5 hidden h-40 w-7 border-y-4 border-l-4 border-silver sm:block"
            />
            <span
              aria-hidden
              className="absolute top-[10.6rem] right-8 hidden h-40 w-7 border-y-4 border-r-4 border-silver sm:block"
            />
            <p className="mt-10 max-w-64 border-l-2 border-silver/60 pl-4 text-lg leading-relaxed text-white/75 sm:ml-5 sm:border-l-0 sm:pl-0 xl:absolute xl:top-[13.6rem] xl:left-[3.75rem] xl:mt-0">
              {FAQ.addressNote}
            </p>

            <PendingAction
              label={FAQ.cta}
              title={PENDING.booking.title}
              message={PENDING.booking.message}
              className={`${primaryButtonB} mt-14 w-full sm:text-lg xl:absolute xl:right-9 xl:bottom-[3.7rem] xl:left-9 xl:mt-0 xl:min-h-[5.75rem] xl:w-auto xl:text-[1.4rem]`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
