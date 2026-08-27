import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { FOOTER, PENDING } from "@/content/site";
import { PendingAction } from "@/components/shared/pending-action";
import { footerLinkA, primaryButtonA } from "@/components/variant-a/buttons";
import styles from "@/components/variant-a/variant-a.module.css";

export function SiteFooterA(): React.ReactElement {
  return (
    <footer id="footer" aria-label="Footer" className={styles.footer}>
      <Image
        src="/images/variant-a/sculptural-footer-v2.png"
        alt=""
        fill
        sizes="100vw"
        unoptimized
        className={`${styles.background} ${styles.footerBackground}`}
      />
      <div className={styles.footerInner}>
        <div
          className={styles.footerLogoReserve}
          aria-label="Reserved space for the approved Sigma Core logo"
          data-reveal="scale"
        >
          <span>Real logo</span>
          <span>reserve</span>
        </div>
        <div className={styles.footerIdentity} data-reveal="up" data-reveal-delay="1">
          <p className={`${styles.footerTagline} font-display font-normal`}>{FOOTER.tagline}</p>
          <p className={styles.footerLocation}>{FOOTER.location}</p>
        </div>
        <PendingAction
          label={<>{FOOTER.cta} <ArrowRight size={18} aria-hidden /></>}
          title={PENDING.booking.title}
          message={PENDING.booking.message}
          className={`${primaryButtonA} ${styles.footerAction}`}
        />
        <nav
          aria-label="Utility"
          className={styles.footerNav}
          data-reveal="up"
          data-reveal-delay="3"
        >
          <ul className={styles.footerLinks}>
            {FOOTER.nav.map((item) => (
              <li key={item} className={styles.footerLinkItem}>
                <PendingAction
                  label={item}
                  title={PENDING.page.title}
                  message={PENDING.page.message}
                  className={`${footerLinkA} ${styles.footerLink}`}
                />
              </li>
            ))}
          </ul>
          <p className={styles.footerDisclaimer}>{FOOTER.disclaimer}</p>
        </nav>
      </div>
    </footer>
  );
}
