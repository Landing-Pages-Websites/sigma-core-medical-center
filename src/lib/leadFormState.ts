import { LEAD_FIELDS, leadErrors, type LeadErrors, type LeadField } from "./leadValidation";

export function validateLeadForm(form: HTMLFormElement): LeadErrors {
  const values = Object.fromEntries(new FormData(form));
  return leadErrors(values);
}

export function focusFirstError(form: HTMLFormElement, errors: LeadErrors): void {
  const name = LEAD_FIELDS.find((field) => errors[field]);
  if (name) (form.elements.namedItem(name) as HTMLInputElement | null)?.focus();
}

/** Native pattern checks and custom checks share the same inline messages. */
export function fieldFromEvent(target: EventTarget | null): LeadField | null {
  if (!(target instanceof HTMLInputElement)) return null;
  return LEAD_FIELDS.find((field) => field === target.name) ?? null;
}

/** Held through accepted success, released only after a recoverable failure. */
export function createSubmissionGuard(): { acquire: () => boolean; release: () => void } {
  let locked = false;
  return {
    acquire: () => {
      if (locked) return false;
      locked = true;
      return true;
    },
    release: () => { locked = false; },
  };
}
