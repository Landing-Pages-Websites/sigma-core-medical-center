import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { NEUROPATHY } from "@/content/site";
import { primaryButtonA } from "@/components/variant-a/buttons";
import styles from "@/components/variant-a/variant-a.module.css";

const plaqueImages = [
  "/images/variant-a/neuropathy-plaque-goals.png",
  "/images/variant-a/neuropathy-plaque-options.png",
  "/images/variant-a/neuropathy-plaque-next-step.png",
] as const;

const plaqueLabelLines = [
  ["Understand", "your goals"],
  ["Discuss", "appropriate options"],
  ["Choose an", "informed next step"],
] as const;

export function NeuropathyA(): React.ReactElement {
  return (
    <section
      id="neuropathy"
      aria-label="Neuropathy care"
      className={`${styles.section} ${styles.neuropathy}`}
    >
      <Image
        src="/images/variant-a/sculptural-neuropathy-platforms.png"
        alt=""
        fill
        sizes="100vw"
        className={`${styles.background} ${styles.neuropathyBackground}`}
        data-reveal="fade"
      />
      <div className={styles.neuropathyInner}>
        <div className={styles.neuropathyCopy} data-reveal="left">
          <h2 className="font-display text-5xl leading-[0.95] font-medium text-paper sm:text-6xl lg:text-[5.75rem] xl:text-[6rem]">
            Neuropathy care
          </h2>
          <p className="mt-6 max-w-[32rem] text-2xl leading-tight font-semibold text-white sm:text-3xl lg:text-[2rem]">
            {NEUROPATHY.headline}
          </p>
          <p className="mt-6 max-w-[32rem] text-base leading-relaxed text-white/78 lg:text-[1.15rem] lg:leading-[1.55]">
            {NEUROPATHY.body}
          </p>
        </div>
        <div className={styles.neuropathyMap}>
          <ol className={styles.neuropathySteps}>
            {NEUROPATHY.orientationPoints.map((point, index) => (
              <li
                key={point}
                className={styles.neuropathyStep}
                data-reveal="scale"
                data-reveal-delay={index + 1}
              >
                <Image
                  src={plaqueImages[index] ?? plaqueImages[0]}
                  alt=""
                  fill
                  sizes="(max-width: 639px) calc(100vw - 2.5rem), (max-width: 1399px) 50vw, 34vw"
                  className={styles.neuropathyPlaqueImage}
                />
                <span className={styles.neuropathyStepLabel} aria-label={point}>
                  {(plaqueLabelLines[index] ?? [point]).map((line) => (
                    <span key={line} aria-hidden="true">
                      {line}
                    </span>
                  ))}
                </span>
              </li>
            ))}
          </ol>
          <a
            href="#services"
            className={`${primaryButtonA} ${styles.neuropathyAction}`}
            data-reveal="fade"
            data-reveal-delay="4"
          >
            {NEUROPATHY.cta} <ArrowRight size={18} aria-hidden />
          </a>
        </div>
        <p className={styles.neuropathyDisclaimer} data-reveal="fade" data-reveal-delay="5">
          {NEUROPATHY.disclaimer}
        </p>
      </div>
    </section>
  );
}
