/** Direction B code-native motif system: squared brackets, stepped signal bars, ghost words. */

type MotifProps = { className?: string };

export function BracketMark({ className = "" }: MotifProps): React.ReactElement {
  return (
    <span
      aria-hidden
      className={`inline-block h-5 w-2.5 shrink-0 border-y-2 border-l-2 border-current ${className}`}
    />
  );
}

export function BracketMarkEnd({ className = "" }: MotifProps): React.ReactElement {
  return (
    <span
      aria-hidden
      className={`inline-block h-5 w-2.5 shrink-0 border-y-2 border-r-2 border-current ${className}`}
    />
  );
}

const BAR_STEPS = ["ml-0 w-4", "ml-2 w-6", "ml-4 w-8", "ml-6 w-10"];

export function SteppedBars({ className = "" }: MotifProps): React.ReactElement {
  return (
    <span aria-hidden className={`flex flex-col gap-1 ${className}`}>
      {BAR_STEPS.map((step) => (
        <span key={step} className={`block h-1 bg-electric ${step}`} />
      ))}
    </span>
  );
}

type GhostWordProps = { word: string; className: string };

export function GhostWord({ word, className }: GhostWordProps): React.ReactElement {
  return (
    <span
      aria-hidden
      className={`pointer-events-none absolute leading-none font-semibold tracking-tighter uppercase select-none ${className}`}
    >
      {word}
    </span>
  );
}
