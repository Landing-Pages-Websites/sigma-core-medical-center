import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { PENDING, SERVICES } from "@/content/site";
import { PendingAction } from "@/components/shared/pending-action";
import { primaryButtonA } from "@/components/variant-a/buttons";
import styles from "@/components/variant-a/variant-a.module.css";

const SERVICE_POSITIONS = [
  styles.servicePain,
  styles.serviceHormone,
  styles.servicePelvic,
  styles.serviceRegenerative,
];

export function ServicesA(): React.ReactElement {
  return (
    <section
      id="services"
      aria-label="Care categories"
      className={`${styles.section} ${styles.services}`}
    >
      <Image
        src="/images/variant-a/sculptural-services-reference.png"
        alt=""
        fill
        sizes="100vw"
        className={`${styles.background} ${styles.servicesBackground}`}
      />
      <div className={styles.servicesInner}>
        <header className={styles.servicesIntro} data-reveal="up">
          <h2 className="font-display text-4xl leading-[1.02] font-semibold sm:text-5xl lg:text-[3.75rem]">
            {SERVICES.headline}
          </h2>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-ink/72">{SERVICES.body}</p>
        </header>
        <article
          className={`${styles.serviceItem} ${styles.servicePrimary}`}
          data-reveal="left"
          data-reveal-delay="1"
        >
          <h3 className="text-4xl leading-tight font-semibold sm:text-5xl lg:text-[3.25rem]">
            {SERVICES.primary.name}
          </h3>
          <p className="mt-3 max-w-sm text-base leading-relaxed text-white/84 lg:text-lg">
            {SERVICES.primary.summary}
          </p>
        </article>
        <PendingAction
          label={
            <>
              {SERVICES.cta} <ArrowRight size={19} aria-hidden />
            </>
          }
          title={PENDING.page.title}
          message={PENDING.page.message}
          className={`${primaryButtonA} ${styles.servicesAction}`}
        />
        {SERVICES.secondary.map((service, index) => (
          <article
            key={service.name}
            className={`${styles.serviceItem} ${SERVICE_POSITIONS[index]}`}
            data-reveal="scale"
            data-reveal-delay={index + 1}
          >
            <h3 className="text-xl leading-tight font-semibold lg:text-2xl">{service.name}</h3>
            <p className="mt-2 text-sm leading-relaxed opacity-85 lg:text-base">
              {service.summary}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
