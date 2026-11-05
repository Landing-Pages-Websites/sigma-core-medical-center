"use client";

import { useRef, useState, type FormEvent, type KeyboardEvent } from "react";
import type { CaptchaHandle } from "@/components/lead/CaptchaWidget";
import { useMegaLeadForm } from "./useMegaLeadForm";
import { createSubmissionGuard, fieldFromEvent, focusFirstError, validateLeadForm } from "@/lib/leadFormState";
import { leadFieldError, type LeadErrors } from "@/lib/leadValidation";
import { runLeadAttempt, type AttemptOutcome } from "@/lib/lead-attempt";
import { megaTagEvent } from "@/lib/megaTag";
import { pushDataLayer, trackEvent } from "@/lib/track";
import { markFormSubmitFailed, markFormSubmitted, markFormSubmitting } from "@/lib/tracking/form-submit";

type Status = "idle" | "sending" | "success" | "error";
type ContactFormState = ReturnType<typeof useFormState>;
type Submit = ReturnType<typeof useMegaLeadForm>["submit"];

function useFormState(formKey: string) {
  const formRef = useRef<HTMLFormElement>(null);
  const captchaRef = useRef<CaptchaHandle>(null);
  const guard = useRef(createSubmissionGuard());
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<LeadErrors>({});
  return { formKey, formRef, captchaRef, guard, status, setStatus, errors, setErrors };
}

function validate(state: ContactFormState, form: HTMLFormElement): boolean {
  const errors = validateLeadForm(form);
  state.setErrors(errors);
  focusFirstError(form, errors);
  const valid = Object.keys(errors).length === 0;
  if (!valid) trackEvent("form_error", { form_key: state.formKey, kind: "validation" });
  return valid;
}

/** Conversion signals, only after the server confirmed the lead; never contact data. */
function reportLead(formKey: string): void {
  pushDataLayer({ event: "form_submission" });
  megaTagEvent("form_submit", { form: "lead" });
  trackEvent("lead_form_submit", { form_key: formKey });
}

/** Dismiss a challenge still open over the success state; the lead is already delivered. */
function releaseCaptcha(state: ContactFormState): void {
  try {
    state.captchaRef.current?.reset();
  } catch {
    // A provider error here must not turn an accepted lead into a failed form.
  }
}

/** Every attempt ends in exactly one of these, for the UI and the tracking signal alike. */
function settle(state: ContactFormState, form: HTMLFormElement, outcome: AttemptOutcome): void {
  if (outcome.kind === "confirmed") {
    state.setStatus("success");
    markFormSubmitted(form);
    releaseCaptcha(state);
    return;
  }
  state.guard.current.release();
  state.setStatus("error");
  trackEvent("form_error", { form_key: state.formKey, kind: outcome.reason });
  markFormSubmitFailed(form);
}

async function send(state: ContactFormState, form: HTMLFormElement, submit: Submit): Promise<void> {
  if (!validate(state, form) || !state.guard.current.acquire()) return;
  const values = Object.fromEntries(new FormData(form));
  state.setStatus("sending");
  markFormSubmitting(form);
  await runLeadAttempt({
    mintToken: async () => state.captchaRef.current?.getToken("lead_submit"),
    // As before this port: the lead is sent without a token and /api/lead
    // decides (the reCAPTCHA route carries a proof-of-work fallback).
    missingToken: () => "",
    send: (captchaToken) => submit({ ...values, captchaToken }),
    settle: (outcome) => settle(state, form, outcome),
    afterConfirmed: () => reportLead(state.formKey),
  });
}

function requestSubmission(state: ContactFormState): void {
  const form = state.formRef.current;
  if (form && validate(state, form)) form.requestSubmit();
}

function updateField(state: ContactFormState, event: FormEvent<HTMLFormElement>, blur: boolean): void {
  const name = fieldFromEvent(event.target);
  if (!name || (!blur && !state.errors[name])) return;
  const error = leadFieldError(name, (event.target as HTMLInputElement).value);
  state.setErrors((previous) => ({ ...previous, [name]: error }));
}

function submitOnEnter(state: ContactFormState, event: KeyboardEvent<HTMLFormElement>): void {
  if (event.key !== "Enter" || event.nativeEvent.isComposing || !fieldFromEvent(event.target)) return;
  event.preventDefault();
  requestSubmission(state);
}

/** `formKey` names the form in tracking events; it matches the form's `data-mega-form`. */
export function useContactForm(formKey: string): {
  formRef: ContactFormState["formRef"];
  captchaRef: ContactFormState["captchaRef"];
  status: Status;
  errors: LeadErrors;
  request: () => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  onBlur: (event: FormEvent<HTMLFormElement>) => void;
  onChange: (event: FormEvent<HTMLFormElement>) => void;
  onKeyDown: (event: KeyboardEvent<HTMLFormElement>) => void;
} {
  const state = useFormState(formKey);
  const { submit } = useMegaLeadForm();
  const { formRef, captchaRef, status, errors } = state;
  return {
    formRef, captchaRef, status, errors, request: () => requestSubmission(state),
    onSubmit: (event) => { event.preventDefault(); void send(state, event.currentTarget, submit); },
    onBlur: (event) => updateField(state, event, true),
    onChange: (event) => updateField(state, event, false),
    onKeyDown: (event) => submitOnEnter(state, event),
  };
}
