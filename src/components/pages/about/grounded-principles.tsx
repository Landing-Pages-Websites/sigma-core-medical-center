import { AlignJustify, SquareCheckBig, Search, UserRound } from "lucide-react";
import { TallBracket } from "@/components/pages/shared/page-motifs";

const PRINCIPLES = [
  { lines: ["You are", "at the center."], icon: UserRound },
  { lines: ["We listen", "first."], icon: Search },
  { lines: ["Options are", "explained clearly."], icon: SquareCheckBig },
  { lines: ["Next steps", "are practical."], icon: AlignJustify },
] as const;

export function GroundedPrinciples(): React.ReactElement {
  return (
    <section id="trust-bar" className="bg-chalk text-ink">
      <div className="mx-auto grid max-w-[90rem] items-center gap-6 px-6 py-8 sm:px-10 lg:grid-cols-[auto_1fr] lg:gap-0 lg:py-7 lg:pl-[3.5rem]">
        <h2 className="flex items-center gap-3 text-base font-semibold tracking-[0.14em] text-royal uppercase sm:text-lg lg:border-r lg:border-ink/15 lg:pr-10">
          <TallBracket className="h-10 w-2.5 text-royal" /> Grounded principles <TallBracket side="right" className="h-10 w-2.5 text-royal" />
        </h2>
        <ul className="grid grid-cols-2 gap-5 md:grid-cols-4 md:gap-0">
          {PRINCIPLES.map(({ lines, icon: Icon }) => (
            <li key={lines[0]} className="flex items-center gap-4 md:border-r md:border-ink/15 md:px-6 md:last:border-r-0 lg:px-8">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-royal text-white sm:h-14 sm:w-14">
                <Icon size={26} strokeWidth={1.6} aria-hidden />
              </span>
              <span className="text-sm leading-snug sm:text-base">
                {lines[0]}
                <br />
                {lines[1]}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
