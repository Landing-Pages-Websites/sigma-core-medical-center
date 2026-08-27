import Image from "next/image";
import { Compass, Footprints, UserRound } from "lucide-react";
import { PLACE } from "@/content/site";
import styles from "@/components/variant-a/variant-a.module.css";

const PRINCIPLE_ICONS = [UserRound, Compass, Footprints];

export function PlaceOfCareA(): React.ReactElement {
  return (
    <section
      id="place-of-care"
      aria-label="The Sigma Core clinic"
      className={`${styles.section} ${styles.clinic}`}
    >
      <div className={styles.clinicInner}>
        <div className={styles.clinicCopy} data-reveal="left">
          <h2 className="font-display text-5xl leading-[1.02] font-semibold text-paper sm:text-[3.0625rem]">
            {PLACE.eyebrow}
          </h2>
          <div aria-hidden className="mt-5 h-1 w-12 bg-electric" />
          <p className={`${styles.clinicHeadline} mt-6 text-xl font-semibold text-white`}>
            {PLACE.headline}
          </p>
          <p className={`${styles.clinicBody} mt-4 text-lg leading-relaxed text-white/72`}>
            {PLACE.body}
          </p>
          <p
            className={`${styles.clinicOpening} mt-7 border-l-2 border-electric py-1 pl-5 text-base leading-relaxed text-white/80`}
          >
            <span className="block font-semibold text-focus">{PLACE.openingNote}</span>
            {PLACE.facilityCaption}
          </p>
          <ul className={styles.clinicPrinciples}>
            {PRINCIPLE_ICONS.map((Icon, index) => {
              const principle = PLACE.principles[index];
              return (
                <li key={principle} className={styles.clinicPrinciple}>
                  <span className={styles.clinicPrincipleIcon}>
                    <Icon size={22} strokeWidth={1.7} aria-hidden />
                  </span>
                  {principle}
                </li>
              );
            })}
            <li className={styles.clinicOutcome}>{PLACE.principles[3]}</li>
          </ul>
        </div>
        <div className={styles.clinicPhoto} data-reveal="right" data-reveal-delay="1">
          <div className="relative h-full w-full overflow-hidden [clip-path:inherit]">
            <Image
              src="/images/shared/reception-2.png"
              alt="Sigma Core Medical Center reception desk and logo wall"
              fill
              sizes="(min-width: 1024px) 70vw, 112vw"
              className="object-cover"
            />
          </div>
        </div>
        <div className={styles.clinicInset} data-reveal="scale" data-reveal-delay="3">
          <Image
            src="/images/shared/waiting-room.png"
            alt="Sigma Core Medical Center waiting room"
            fill
            sizes="(min-width: 1200px) 32.5vw, (min-width: 640px) 48vw, 72vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
