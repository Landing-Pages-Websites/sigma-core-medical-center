import { EMAIL_PATTERN, MAX_NAME_LENGTH, PHONE_PATTERN, type LeadField as FieldName } from "@/lib/leadValidation";

const FIELDS = {
  firstName: { label: "First name", type: "text", autoComplete: "given-name", pattern: ".*\\S.*", maxLength: MAX_NAME_LENGTH },
  lastName: { label: "Last name", type: "text", autoComplete: "family-name", pattern: ".*\\S.*", maxLength: MAX_NAME_LENGTH },
  email: { label: "Email", type: "email", autoComplete: "email", pattern: EMAIL_PATTERN },
  phone: { label: "Phone", type: "tel", autoComplete: "tel-national", pattern: PHONE_PATTERN },
} as const;

export function LeadField({ name, error }: { name: FieldName; error?: string }): React.ReactElement {
  const { label, ...attributes } = FIELDS[name];
  const id = `contact-${name}`;
  const description = [name === "phone" ? "contact-phone-help" : "", error ? `${id}-error` : ""].filter(Boolean).join(" ");
  return (
    <div className="lead-field">
      <label htmlFor={id}>{label}</label>
      <input {...attributes} id={id} name={name} required
        aria-invalid={Boolean(error)} aria-describedby={description || undefined} />
      {name === "phone" && <p id="contact-phone-help" className="lead-hint">10 digits, including area code.</p>}
      {error && <p id={`${id}-error`} className="lead-field-error" role="alert">{error}</p>}
    </div>
  );
}
