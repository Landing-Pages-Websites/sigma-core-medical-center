import { PATH } from "@/content/site";
import { MiniStairs, TallBracket } from "@/components/pages/shared/page-motifs";

type PlinthCardsProps = { className?: string };

const CARD_LIFT = ["lg:mb-10", "lg:mb-4", "lg:mb-0"] as const;

/** Paper cards standing on stone plinths: the "simple path" steps rendered as a gallery display. */
export function PlinthCards({ className = "" }: PlinthCardsProps): React.ReactElement {
  return (
    <ol className={`relative grid gap-4 sm:grid-cols-3 sm:items-end sm:gap-5 ${className}`}>
      {PATH.steps.map((step, index) => (
        <li key={step.title} className={`relative ${CARD_LIFT[index]}`}>
          <div className="relative z-10 bg-[#ecebe7] px-5 pt-5 pb-6 text-navy shadow-[0_14px_30px_rgb(16_30_51/0.16)]">
            <MiniStairs className="absolute top-3 right-4 text-royal" />
            <h3 className="flex gap-2 font-heading text-lg leading-tight font-bold sm:text-xl">
              <TallBracket className="mt-0.5 h-10 w-2 text-silver" />
              <span className="max-w-[10rem]">{step.title}</span>
            </h3>
            <p className="mt-2 pl-4 text-xs leading-snug text-ink/70">{step.body}</p>
          </div>
          <div aria-hidden className="relative flex h-10 items-end">
            <span className="block h-full flex-1 bg-gradient-to-b from-[#dedbd4] to-[#cbc7bf]" />
            <span className="block h-[160%] w-[28%] -translate-y-[40%] bg-gradient-to-b from-[#3a3c40] to-[#1f2124]" />
          </div>
        </li>
      ))}
    </ol>
  );
}
