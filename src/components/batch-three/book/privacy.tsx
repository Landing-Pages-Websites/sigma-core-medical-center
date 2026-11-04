import Link from "next/link";

const LEGAL_LINK_CLASS = "font-semibold underline underline-offset-4 transition-colors duration-200 hover:text-action focus-visible:rounded-xs focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-action motion-reduce:transition-none";

export function BookPrivacy(): React.ReactElement {
  return (
    <section data-mega-section="privacy-note" id="privacy-note" className="book-section book-privacy" aria-labelledby="book-privacy-title">
      <div className="book-shell book-privacy-layout">
        <h2 id="book-privacy-title" className="book-bracket">Privacy &amp; legal <br />information</h2>
        <div className="book-pending-note">
          <p className="book-pending-label">Your privacy matters</p>
          <p>
            Review our <Link href="/privacy" className={LEGAL_LINK_CLASS}>Website Privacy Policy</Link>,{" "}
            <Link href="/notice-of-privacy-practices" className={LEGAL_LINK_CLASS}>Notice of Privacy Practices</Link> and{" "}
            <Link href="/terms" className={LEGAL_LINK_CLASS}>Website Terms of Use</Link>. Please share contact details only through public website forms. Do not submit medical records or urgent medical concerns online. For a medical emergency, call 911.
          </p>
        </div>
      </div>
    </section>
  );
}
