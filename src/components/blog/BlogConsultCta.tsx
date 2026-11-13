import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import type { ReactElement } from "react";
import { primaryButtonB } from "@/components/variant-b/buttons";
import { CONTACT } from "@/content/site";

const REQUEST_URL = "https://go.sigmacoremedicalcenter.com/";
const PHONE_HREF = `tel:+1${CONTACT.phone.replaceAll("-", "")}`;

/** The one next step every article ends on: request a Free Consultation online or by phone. */
export default function BlogConsultCta(): ReactElement {
  return (
    <aside aria-labelledby="blog-consult-cta" className="mt-14 border-t-4 border-action bg-white p-6 shadow-[0_8px_24px_rgb(6_29_54/0.08)] sm:p-8">
      <h2 id="blog-consult-cta" className="font-heading text-2xl leading-tight font-bold tracking-[-0.02em]">
        Talk with Sigma Core about your symptoms
      </h2>
      <p className="mt-3 text-base leading-relaxed text-muted">
        Request a Free Consultation online, or call our Richmond office at {CONTACT.phone} to book it directly.
      </p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
        <Link data-mega-cta="book-appointment" href={REQUEST_URL} className={primaryButtonB}>
          Request a Free Consultation <ArrowRight size={18} aria-hidden />
        </Link>
        <a
          data-mega-cta="call-now"
          href={PHONE_HREF}
          className="inline-flex min-h-12 items-center gap-2 px-1 font-semibold text-action underline underline-offset-4 hover:text-hover focus-visible:text-hover motion-safe:transition-colors"
        >
          <Phone size={18} aria-hidden /> Call {CONTACT.phone}
        </a>
      </div>
    </aside>
  );
}
