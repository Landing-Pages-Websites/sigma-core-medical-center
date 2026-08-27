"use client";

import Image from "next/image";
import { ArrowRight, Minus, Plus } from "lucide-react";
import { FAQ, PENDING } from "@/content/site";
import { useAccordion } from "@/lib/use-accordion";
import { PendingAction } from "@/components/shared/pending-action";
import { primaryButtonA } from "@/components/variant-a/buttons";
import styles from "@/components/variant-a/variant-a.module.css";

export function FaqLocationA(): React.ReactElement {
  const accordion = useAccordion();
  return (
    <section
      id="faq"
      aria-label="Questions and location"
      className={`${styles.section} ${styles.faq}`}
    >
      <Image
        src="/images/variant-a/sculptural-location-v2.png"
        alt=""
        fill
        sizes="100vw"
        className={`${styles.background} ${styles.faqBackground}`}
      />
      <div className={styles.faqInner}>
        <div className={styles.faqList} data-reveal="left">
          <h2 className={`${styles.faqTitle} font-display font-semibold`}>
            {FAQ.headline}
          </h2>
          <div className={styles.faqItems}>
            {FAQ.items.map((item, index) => {
              const open = accordion.isOpen(index);
              return (
                <div key={item.question} className={styles.faqItem}>
                  <h3>
                    <button
                      type="button"
                      {...accordion.triggerProps(index)}
                      className={styles.faqTrigger}
                    >
                      <span>{item.question}</span>
                      {open ? <Minus size={17} aria-hidden /> : <Plus size={17} aria-hidden />}
                    </button>
                  </h3>
                  <div {...accordion.panelProps(index)}>
                    <p className={styles.faqAnswer}>{item.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <PendingAction
            label={<>{FAQ.cta} <ArrowRight size={18} aria-hidden /></>}
            title={PENDING.booking.title}
            message={PENDING.booking.message}
            className={`${primaryButtonA} ${styles.faqAction}`}
          />
          <p className={styles.faqBookingNote}>{FAQ.items[1].answer}</p>
        </div>
        <div className={styles.locationCopy} data-reveal="right" data-reveal-delay="2">
          <p className={`${styles.locationTitle} font-display font-medium`}>{FAQ.locationLabel}</p>
          <div aria-hidden className={styles.locationRule} />
          <p className={styles.locationNote}>{FAQ.addressNote}</p>
        </div>
      </div>
    </section>
  );
}
