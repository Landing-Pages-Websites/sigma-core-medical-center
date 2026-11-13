import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { CONTACT } from "@/content/site";

const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(`Sigma Core Medical Center, ${CONTACT.address}`)}`;

const visitDetails: { label: string; value: React.ReactNode }[] = [
  {
    label: "Address & directions",
    value: (
      <>
        {CONTACT.address}{" "}
        <a href={DIRECTIONS_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">Get directions<span className="sr-only"> (opens in a new tab)</span></a>
      </>
    ),
  },
  { label: "Parking & accessibility", value: `For parking and accessibility questions, call ${CONTACT.phone}.` },
];

export function ContactFacility(): React.ReactElement {
  return (
    <section data-mega-section="facility-image" id="facility-image" className="contact-section contact-facility" aria-labelledby="contact-visit-title">
      <div className="contact-visit-layout">
        <h2 id="contact-visit-title">Before you visit</h2>
        <div className="contact-visit-panel">
          <span className="contact-visit-bracket" aria-hidden="true" />
          <h3>Visit information</h3>
          <dl>{visitDetails.map(({ label, value }) => (
            <div key={label}><dt>{label}</dt><dd>{value}</dd></div>
          ))}</dl>
        </div>
        <div className="contact-photo-source">
          <h3>Clinic photo</h3>
          <p>See our waiting area before you arrive.</p>
          <Link href="/#place-of-care">
            <span>View the clinic photo</span><ArrowUpRight size={24} aria-hidden="true" focusable="false" />
          </Link>
        </div>
      </div>
    </section>
  );
}
