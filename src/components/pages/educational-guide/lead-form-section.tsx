import { ArrowRight, LockKeyhole } from "lucide-react";
import { MiniStairs, TallBracket } from "@/components/pages/shared/page-motifs";
import { PolicyLink } from "@/components/pages/shared/policy-link";
import { ScorecardForm } from "@/components/pages/educational-guide/scorecard-form";

export function LeadFormSection(): React.ReactElement {
  return (
    <section id="form" className="relative overflow-hidden bg-chalk text-ink">
      <div className="mx-auto grid max-w-[90rem] gap-10 px-6 pt-14 pb-10 sm:px-10 lg:grid-cols-[57fr_43fr] lg:gap-8 lg:pt-16 lg:pb-12 lg:pl-[3.5rem]">
        <div>
          <MiniStairs className="scale-150 text-royal" />
          <h2 className="mt-3 font-heading text-[clamp(3rem,6.6vw,6rem)] leading-none font-bold tracking-[-0.035em] text-navy">Get the scorecard</h2>
          <p className="mt-4 max-w-[34rem] text-lg leading-snug text-ink/85">
            The Neuropathy Clarity Scorecard is a 4-page PDF with a 7-minute self-assessment and a 7-day symptom tracker.
          </p>
          <p className="mt-2 max-w-[34rem] text-lg leading-snug font-semibold text-navy">It cannot diagnose neuropathy or its cause.</p>
          <a
            href="#scorecard-form"
            className="mt-6 inline-flex h-auto min-h-14 max-w-full items-center gap-5 bg-royal px-7 py-3 text-left text-lg leading-snug font-semibold text-white transition-colors hover:bg-royal-hover focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-focus"
          >
            <span className="min-w-0">Request the scorecard</span> <ArrowRight size={22} className="shrink-0" aria-hidden />
          </a>
          <p className="mt-4 max-w-[26rem] text-xs leading-snug text-ink/75">
            The download link appears on this page after your contact details are accepted.
          </p>
          <PolicyLink href="/privacy" label={<>Privacy policy status →</>} className="mt-3 text-xs font-semibold text-royal hover:underline" />
          <ScorecardContents />
        </div>
        <ScorecardPanel />
      </div>
      <div className="bg-slate">
        <p className="mx-auto flex max-w-[90rem] items-center justify-end gap-3 px-6 py-5 text-xs text-white/75 sm:px-10">
          <TallBracket className="h-6 w-1.5 text-silver" /> General website information is not medical advice.
          <TallBracket side="right" className="h-6 w-1.5 text-silver" />
        </p>
      </div>
    </section>
  );
}

const SCORECARD_PAGES = [
  { page: "01", title: "When your feet feel different", body: "An introduction to the sensations the scorecard helps you organize." },
  { page: "02", title: "7-minute self-assessment", body: "Yes/no symptom checks, where and how long, and a daily-life impact rating." },
  { page: "03", title: "7-day symptom tracker", body: "Daily notes on your worst symptom, sleep, balance and affected activities." },
  { page: "04", title: "Your next step", body: "A personal summary to bring to Sigma Core or any healthcare professional." },
] as const;

function ScorecardContents(): React.ReactElement {
  return (
    <div className="mt-10 lg:-mr-6">
      <h3 className="flex items-center gap-3 font-heading text-xl font-bold text-navy">
        <TallBracket className="h-8 w-2 text-silver" /> Inside the PDF
      </h3>
      <ol className="mt-4 grid gap-px bg-silver/70 sm:grid-cols-2">
        {SCORECARD_PAGES.map(({ page, title, body }) => (
          <li key={page} className="bg-chalk px-5 py-4 sm:bg-[#ecebe7]">
            <p className="text-xs font-semibold text-royal">Page {page} / 04</p>
            <p className="mt-1 font-heading text-lg leading-tight font-bold text-navy">{title}</p>
            <p className="mt-1.5 text-sm leading-snug text-ink/75">{body}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

function ScorecardPanel(): React.ReactElement {
  return (
    <div className="relative bg-[#ebe8e2] px-6 py-12 shadow-[inset_0_0_0_1px_rgb(16_30_51/0.06)] sm:px-10 lg:my-6">
      <TallBracket className="absolute top-8 bottom-24 -left-4 w-4 text-silver" />
      <TallBracket side="right" className="absolute -right-3 bottom-0 h-1/3 w-4 border-t-0 text-silver" />
      <MiniStairs className="absolute top-6 right-6 scale-150 text-royal" />
      <div className="mx-auto max-w-[32rem]">
        <span className="flex w-fit items-center gap-3 text-navy">
          <TallBracket className="h-16 w-3 text-silver" />
          <LockKeyhole size={34} strokeWidth={2} aria-hidden />
          <TallBracket side="right" className="h-16 w-3 text-silver" />
        </span>
        <h3 id="scorecard-form-title" className="mt-5 font-heading text-3xl leading-tight font-bold text-navy">
          Unlock the Neuropathy Clarity Scorecard
        </h3>
        <div className="mt-3">
          <ScorecardForm />
        </div>
      </div>
    </div>
  );
}
