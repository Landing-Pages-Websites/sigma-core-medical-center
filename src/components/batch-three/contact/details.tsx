const contactDetails = [
  { label: "Public address", value: "Pending confirmation" },
  { label: "Phone & email", value: "Not confirmed" },
  { label: "Opening hours", value: "Pending confirmation" },
];

export function ContactDetails(): React.ReactElement {
  return (
    <section id="verified-location-details" className="contact-section contact-details" aria-labelledby="contact-details-title">
      <div className="contact-register">
        <h2 id="contact-details-title">Contact details</h2>
        <dl>
          {contactDetails.map(({ label, value }) => (
            <div key={label}><dt>{label}</dt><dd>{value}</dd></div>
          ))}
        </dl>
        <svg className="contact-register-steps" viewBox="0 0 108 42" aria-hidden="true" focusable="false">
          <path d="M0 38h47 M30 21h47 M60 4h47" fill="none" stroke="var(--color-silver)" strokeWidth="6" />
        </svg>
      </div>
    </section>
  );
}
