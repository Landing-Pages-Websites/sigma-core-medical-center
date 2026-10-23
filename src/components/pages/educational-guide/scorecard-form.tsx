"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, FileDown } from "lucide-react";
import CaptchaWidget from "@/components/lead/CaptchaWidget";
import HoneypotField from "@/components/lead/HoneypotField";
import { useContactForm } from "@/hooks/useContactForm";
import { EMAIL_PATTERN, LEAD_FIELDS, MAX_NAME_LENGTH, PHONE_PATTERN, type LeadField } from "@/lib/leadValidation";
import { SCORECARD_PURPOSE } from "@/lib/leadSubmit";

/** Served only to the signed entitlement cookie set by an accepted scorecard submission. */
const SCORECARD_PDF_PATH = "/api/lead?resource=scorecard";
const PHONE_HELP_ID = "scorecard-phone-help";

/** Mirrors LeadField's attributes; that component hard-codes contact-* ids and contact-page styles. */
const FIELDS = {
  firstName: { label: "First name", type: "text", autoComplete: "given-name", pattern: ".*\\S.*", maxLength: MAX_NAME_LENGTH },
  lastName: { label: "Last name", type: "text", autoComplete: "family-name", pattern: ".*\\S.*", maxLength: MAX_NAME_LENGTH },
  email: { label: "Email", type: "email", autoComplete: "email", pattern: EMAIL_PATTERN },
  phone: { label: "Phone", type: "tel", autoComplete: "tel-national", pattern: PHONE_PATTERN },
} as const;

function ignoreReadiness(): void {}

function ScorecardField({ name, error }: { name: LeadField; error?: string }): React.ReactElement {
  const { label, ...attributes } = FIELDS[name];
  const id = `scorecard-${name}`;
  const description = [name === "phone" ? PHONE_HELP_ID : "", error ? `${id}-error` : ""].filter(Boolean).join(" ");
  return (
    <div className="min-w-0">
      <label htmlFor={id} className="block text-sm font-semibold text-navy">
        {label} <span className="font-normal text-ink/70">(required)</span>
      </label>
      <input {...attributes} id={id} name={name} required aria-invalid={Boolean(error)} aria-describedby={description || undefined}
        className="mt-2 block min-h-12 w-full min-w-0 rounded-[2px] border-2 border-silver bg-surface px-4 py-2.5 text-base text-ink transition-colors duration-200 hover:border-electric focus-visible:border-royal focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-focus aria-invalid:border-[#b42318] motion-reduce:transition-none" />
      {name === "phone" && <p id={PHONE_HELP_ID} className="mt-1.5 text-xs text-ink/70">10 digits, including area code.</p>}
      {error && <p id={`${id}-error`} className="mt-1.5 text-sm leading-snug text-[#b42318]" role="alert">{error}</p>}
    </div>
  );
}

function ScorecardDownload(): React.ReactElement {
  const linkRef = useRef<HTMLAnchorElement>(null);
  useEffect(() => { linkRef.current?.focus(); }, []);
  return (
    <div className="mt-5 border-l-[3px] border-royal bg-surface px-5 py-4">
      <p className="text-sm leading-snug text-ink/85">Thank you. Your details were received. Your scorecard is ready below.</p>
      <a ref={linkRef} href={SCORECARD_PDF_PATH} download type="application/pdf"
        className="mt-3 inline-flex min-h-12 max-w-full items-center gap-3 bg-royal px-5 py-3 text-base leading-snug font-semibold text-white transition-colors duration-200 hover:bg-royal-hover focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-focus motion-reduce:transition-none">
        <FileDown size={22} className="shrink-0" aria-hidden /> Download the Neuropathy Clarity Scorecard
      </a>
      <p className="mt-2 text-xs text-ink/70">PDF, 4 pages. This does not confirm an appointment.</p>
    </div>
  );
}

function sendLabel(sending: boolean, success: boolean): string {
  if (success) return "Details received";
  return sending ? "Sending your details…" : "Get my scorecard";
}

export function ScorecardForm(): React.ReactElement {
  const { formRef, captchaRef, status, errors, request, ...events } = useContactForm();
  const sending = status === "sending";
  const success = status === "success";
  return (
    <form id="scorecard-form" action="/api/lead" method="post" ref={formRef} {...events}
      noValidate aria-labelledby="scorecard-form-title" aria-describedby="scorecard-form-note" aria-busy={sending} className="relative scroll-mt-32 text-left">
      <p id="scorecard-form-note" className="text-sm leading-relaxed text-ink/80">
        All four fields are required. Share contact details only—please don&apos;t include symptoms or medical history.
      </p>
      <fieldset disabled={sending || success} className="mt-5 grid min-w-0 gap-5 sm:grid-cols-2">
        <legend className="sr-only">Your contact details</legend>
        {LEAD_FIELDS.map((name) => <ScorecardField key={name} name={name} error={errors[name]} />)}
      </fieldset>
      <input type="hidden" name="purpose" value={SCORECARD_PURPOSE} />
      <div className="sr-only">
        <HoneypotField />
      </div>
      <CaptchaWidget ref={captchaRef} onReady={ignoreReadiness} />
      <button type="button" disabled={sending || success} onClick={request}
        className="mt-6 inline-flex min-h-14 w-full items-center justify-between gap-5 bg-royal px-6 py-3 text-left text-lg font-semibold text-white transition-colors duration-200 hover:bg-royal-hover focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-focus disabled:cursor-default disabled:bg-silver disabled:text-ink motion-reduce:transition-none">
        {sendLabel(sending, success)} <ArrowRight size={22} className="shrink-0" aria-hidden />
      </button>
      <div aria-live="polite" aria-atomic="true">
        {success && <ScorecardDownload />}
        {status === "error" && (
          <p className="mt-4 text-sm leading-snug text-[#b42318]">Your details could not be confirmed, so the scorecard is not available yet. Please check your connection and try again.</p>
        )}
      </div>
    </form>
  );
}
