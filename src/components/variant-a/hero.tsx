import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";
import { HERO, PENDING } from "@/content/site";
import { PendingAction } from "@/components/shared/pending-action";
import { primaryButtonA, secondaryButtonA } from "@/components/variant-a/buttons";
import { ClinicPreviewA } from "@/components/variant-a/clinic-preview";
import styles from "@/components/variant-a/variant-a.module.css";

export function HeroA(): React.ReactElement {
  return (
    <section id="hero" aria-label="Introduction" className={`${styles.section} ${styles.hero}`}>
      <Image
        src="/images/variant-a/sculptural-hero.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className={`${styles.background} ${styles.heroBackground}`}
        data-reveal="zoom"
        data-reveal-on="load"
      />
      <div className={styles.heroInner}>
        <div className={styles.heroCopy}>
          <p
            className="text-sm font-semibold text-ink/75"
            data-reveal="up"
            data-reveal-on="load"
            data-reveal-delay="1"
          >
            {HERO.eyebrow}
          </p>
          <h1
            className={`${styles.heroHeadline} mt-3 font-display text-[2.55rem] leading-[1.02] font-semibold text-ink sm:text-[3.35rem] lg:text-[3.75rem] xl:text-[4rem]`}
            data-reveal="up"
            data-reveal-on="load"
            data-reveal-delay="2"
          >
            <span className="xl:hidden">{HERO.headline}</span>
            <span className="hidden xl:block">
              Focused care for
              <br />
              movement, function, and life
            </span>
          </h1>
          <p
            className="mt-5 max-w-[31rem] text-base leading-relaxed text-ink/80"
            data-reveal="up"
            data-reveal-on="load"
            data-reveal-delay="3"
          >
            {HERO.body}
          </p>
          <div
            className="mt-7 flex flex-col gap-3 md:flex-row"
            data-reveal="up"
            data-reveal-on="load"
            data-reveal-delay="4"
          >
            <PendingAction
              label={<>{HERO.primaryCta} <ArrowRight size={18} aria-hidden /></>}
              title={PENDING.booking.title}
              message={PENDING.booking.message}
              className={primaryButtonA}
            />
            <a href="#neuropathy" className={secondaryButtonA}>
              {HERO.secondaryCta} <ArrowRight size={18} aria-hidden />
            </a>
          </div>
          <p
            className="mt-9 flex items-center gap-2 text-sm font-semibold text-ink/75"
            data-reveal="up"
            data-reveal-on="load"
            data-reveal-delay="5"
          >
            <MapPin size={17} aria-hidden className="text-action" />
            {HERO.locationLabel}
          </p>
        </div>
        <ClinicPreviewA className={styles.heroFacility} />
      </div>
    </section>
  );
}
