/** Code-native motif kit for the interior page designs: tall brackets, stair steps, stripes, rising bars. */

type MotifProps = { className?: string };

type TallBracketProps = MotifProps & { side?: "left" | "right" };

/** Square bracket drawn with borders. Size and color come from className (h-*, w-*, text-*). */
export function TallBracket({ className = "", side = "left" }: TallBracketProps): React.ReactElement {
  const edge = side === "left" ? "border-l-[3px]" : "border-r-[3px]";
  return <span aria-hidden className={`pointer-events-none block shrink-0 border-y-[3px] border-current ${edge} ${className}`} />;
}

const STRIPE_ROWS = [
  "w-[22%] ml-auto",
  "w-[42%] ml-auto mr-[8%]",
  "w-[60%] ml-auto mr-[3%]",
  "w-[100%] ml-auto mr-[14%]",
  "w-[40%] ml-auto",
] as const;

/** Offset horizontal stripes used in the top-right corner of dark hero sections. */
export function CornerStripes({ className = "" }: MotifProps): React.ReactElement {
  return (
    <span aria-hidden className={`pointer-events-none flex flex-col gap-[0.55rem] ${className}`}>
      {STRIPE_ROWS.map((row) => (
        <span key={row} className={`block h-3 bg-royal ${row}`} />
      ))}
    </span>
  );
}

type StairStepsProps = MotifProps & {
  count?: number;
  /** "down" descends left-to-right (top step leftmost); "up" ascends left-to-right. */
  direction?: "down" | "up";
  barClassName?: string;
};

/** Diagonal staircase of offset bars. */
export function StairSteps({
  className = "",
  count = 5,
  direction = "down",
  barClassName = "bg-royal",
}: StairStepsProps): React.ReactElement {
  const steps = Array.from({ length: count }, (_, index) => index);
  return (
    <span aria-hidden className={`pointer-events-none flex flex-col gap-[0.45em] ${className}`}>
      {steps.map((step) => {
        const offset = direction === "down" ? step : count - 1 - step;
        return (
          <span
            key={step}
            className={`block h-[0.9em] w-[3.6em] ${barClassName}`}
            style={{ marginLeft: `${offset * 1.4}em` }}
          />
        );
      })}
    </span>
  );
}

/** Small three-bar stair used as a card accent. */
export function MiniStairs({ className = "" }: MotifProps): React.ReactElement {
  return (
    <span aria-hidden className={`pointer-events-none inline-flex flex-col items-end gap-[3px] ${className}`}>
      <span className="block h-[4px] w-4 bg-current" />
      <span className="mr-3 block h-[4px] w-4 bg-current" />
      <span className="mr-6 block h-[4px] w-4 bg-current" />
    </span>
  );
}

type RisingBarsProps = MotifProps & { count?: number; barClassName?: string };

/** Ascending bar chart motif. Height of the tallest bar follows the container height. */
export function RisingBars({ className = "", count = 5, barClassName = "bg-royal" }: RisingBarsProps): React.ReactElement {
  const bars = Array.from({ length: count }, (_, index) => index);
  return (
    <span aria-hidden className={`pointer-events-none flex items-end gap-[0.3em] ${className}`}>
      {bars.map((bar) => (
        <span key={bar} className={`block w-[0.8em] ${barClassName}`} style={{ height: `${((bar + 1) / count) * 100}%` }} />
      ))}
    </span>
  );
}

/** Thin horizontal dashes in a row, used under headings. */
export function DashRule({ className = "" }: MotifProps): React.ReactElement {
  return (
    <span aria-hidden className={`pointer-events-none flex gap-1.5 ${className}`}>
      <span className="block h-2 w-16 bg-royal" />
      {[0, 1, 2, 3, 4].map((dash) => (
        <span key={dash} className="block h-2 w-5 bg-royal" />
      ))}
    </span>
  );
}
