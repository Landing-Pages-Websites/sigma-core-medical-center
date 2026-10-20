"use client";

import { useRef, useState, type FormEvent, type KeyboardEvent } from "react";
import type { CaptchaHandle } from "@/components/lead/CaptchaWidget";
import { useMegaLeadForm } from "./useMegaLeadForm";
import { createSubmissionGuard, fieldFromEvent, focusFirstError, validateLeadForm } from "@/lib/leadFormState";
import { leadFieldError, type LeadErrors } from "@/lib/leadValidation";
import { trackLeadSuccess } from "@/lib/leadAnalytics";

type Status = "idle" | "sending" | "success" | "error";
type ContactFormState = ReturnType<typeof useFormState>;

function useFormState() {
  const formRef = useRef<HTMLFormElement>(null);
  const captchaRef = useRef<CaptchaHandle>(null);
  const guard = useRef(createSubmissionGuard());
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<LeadErrors>({});
  return { formRef, captchaRef, guard, status, setStatus, errors, setErrors };
}

function validate(state: ContactFormState, form: HTMLFormElement): boolean {
  const errors = validateLeadForm(form);
  state.setErrors(errors);
  focusFirstError(form, errors);
  return Object.keys(errors).length === 0;
}

async function send(state: ContactFormState, form: HTMLFormElement, submit: ReturnType<typeof useMegaLeadForm>["submit"]): Promise<void> {
  if (!validate(state, form) || !state.guard.current.acquire()) return;
  const values = Object.fromEntries(new FormData(form));
  state.setStatus("sending");
  try {
    const captchaToken = await state.captchaRef.current?.getToken("lead_submit");
    await submit({ ...values, captchaToken });
    state.setStatus("success");
    trackLeadSuccess();
  } catch {
    state.guard.current.release();
    state.setStatus("error");
  }
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

export function useContactForm(): {
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
  const state = useFormState();
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
