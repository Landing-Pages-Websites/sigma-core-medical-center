const PHONE = "804-486-7699";
const EMAIL = "front.desk@sigmacoremedicalcenter.com";
// Desktop value column is ~0.37vw wide; the address is ~17.5em, so 1.9vw keeps it on one line.
const EMAIL_FIT_CLASS = "min-[761px]:text-[length:clamp(15px,1.9vw,30px)]";
const LINK_CLASS = "underline decoration-1 underline-offset-4 transition-[text-decoration-thickness] duration-200 hover:decoration-2 motion-reduce:transition-none";

const contactDetails = [
  {
    label: "Address",
    value: (
      <address className="not-italic">
        <span className="block">Sigma Core Medical Center</span>
        <span className="block">9020 Stony Point Pkwy #100</span>
        <span className="block">Richmond, VA 23235</span>
      </address>
    ),
  },
  {
    label: "Phone & email",
    value: (
      <>
        <a className={`block w-fit ${LINK_CLASS}`} href={`tel:+1${PHONE.replaceAll("-", "")}`}>{PHONE}</a>
        <a className={`block w-fit break-all ${EMAIL_FIT_CLASS} ${LINK_CLASS}`} href={`mailto:${EMAIL}`}>{EMAIL}</a>
      </>
    ),
  },
  {
    label: "Opening hours",
    value: (
      <>
        <span className="block">Monday-Thursday</span>
        <span className="block">8:00-12:00 and 12:30-5:30</span>
      </>
    ),
  },
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
