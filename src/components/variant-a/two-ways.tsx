import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import { PENDING, WAYS } from "@/content/site";
import { PendingAction } from "@/components/shared/pending-action";
import { outlineButtonA, primaryButtonA } from "@/components/variant-a/buttons";
import styles from "@/components/variant-a/variant-a.module.css";

export function TwoWaysA(): React.ReactElement {
  return (
    <section
      id="next-steps"
      aria-label="Two ways forward"
      className={`${styles.section} ${styles.ways}`}
    >
      <Image
        src="/images/variant-a/sculptural-ways-v2.png"
        alt=""
        fill
        sizes="100vw"
        className={`${styles.background} ${styles.waysBackground}`}
      />
      <div className={styles.waysInner}>
        <h2 className={`${styles.waysTitle} font-display font-semibold`} data-reveal="up">
          {WAYS.headline}
        </h2>
        <div className={styles.waysGrid}>
          <article className={styles.wayPanel} data-reveal="left" data-reveal-delay="1">
            <p className={styles.wayLabel}>{WAYS.guide.label}</p>
            <h3 className={styles.wayHeadline}>{WAYS.guide.headline}</h3>
            <p className={styles.wayBody}>{WAYS.guide.body}</p>
            <PendingAction
              label={WAYS.guide.cta}
              title={PENDING.guide.title}
              message={PENDING.guide.message}
              className={`${outlineButtonA} ${styles.wayAction}`}
            />
          </article>
          <article className={styles.wayPanel} data-reveal="right" data-reveal-delay="2">
            <p className={styles.wayLabel}>{WAYS.booking.label}</p>
            <h3 className={styles.wayHeadline}>{WAYS.booking.headline}</h3>
            <p className={styles.wayBody}>{WAYS.booking.body}</p>
            <PendingAction
              label={WAYS.booking.cta}
              title={PENDING.booking.title}
              message={PENDING.booking.message}
              className={`${primaryButtonA} ${styles.wayAction}`}
            />
          </article>
        </div>
        <div className={styles.waysTrust} data-reveal="fade" data-reveal-delay="3">
          <p className={styles.waysTrustNote}>
            <ShieldCheck aria-hidden className={`${styles.waysTrustIcon} ${styles.waysTrustIconMuted}`} />
            {WAYS.guide.availabilityNote}
          </p>
          <p className={styles.waysTrustNote}>
            <ShieldCheck aria-hidden className={`${styles.waysTrustIcon} ${styles.waysTrustIconFocus}`} />
            {WAYS.privacyNote}
          </p>
        </div>
      </div>
    </section>
  );
}
