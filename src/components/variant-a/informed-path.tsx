import Image from "next/image";
import { PATH } from "@/content/site";
import styles from "@/components/variant-a/variant-a.module.css";

export function InformedPathA(): React.ReactElement {
  return (
    <section
      id="how-it-works"
      aria-label="What happens next"
      className={`${styles.section} ${styles.path}`}
    >
      <Image
        src="/images/variant-a/sculptural-path-steps.png"
        alt=""
        fill
        sizes="100vw"
        className={styles.pathArtwork}
      />
      <Image
        src="/images/variant-a/sculptural-path.png"
        alt=""
        fill
        sizes="100vw"
        className={`${styles.background} ${styles.pathMobileBackground}`}
      />
      <div className={styles.pathInner}>
        <h2
          className={`${styles.pathTitle} font-display text-4xl leading-[1.04] font-semibold sm:text-5xl lg:text-[3.5rem]`}
          data-reveal="up"
        >
          {PATH.headline}
        </h2>
        <ol className={styles.pathSteps}>
          {PATH.steps.map((step, index) => (
            <li
              key={step.title}
              className={styles.pathStep}
              data-reveal="up"
              data-reveal-delay={index + 1}
            >
              <span className="text-xs font-semibold text-action">0{index + 1}</span>
              <h3 className="mt-2 text-lg leading-tight font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed opacity-78">{step.body}</p>
            </li>
          ))}
        </ol>
        <p
          className={`${styles.pathDisclaimer} text-xs text-ink/60`}
          data-reveal="fade"
          data-reveal-delay="4"
        >
          {PATH.disclaimer}
        </p>
      </div>
    </section>
  );
}
