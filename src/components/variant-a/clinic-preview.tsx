"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { useId, useRef, useState } from "react";
import styles from "@/components/variant-a/variant-a.module.css";

type ClinicPreviewAProps = {
  className: string;
};

const CLINIC_IMAGES = [
  {
    src: "/images/shared/reception-1.png",
    alt: "Sigma Core Medical Center reception with the illuminated logo wall",
    label: "Reception and welcome desk",
  },
  {
    src: "/images/shared/reception-2.png",
    alt: "Alternate view of the Sigma Core Medical Center reception",
    label: "Reception from the main entrance",
  },
  {
    src: "/images/shared/waiting-room.png",
    alt: "Sigma Core Medical Center waiting room with walnut wall details",
    label: "Waiting room",
  },
] as const;

export function ClinicPreviewA({ className }: ClinicPreviewAProps): React.ReactElement {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = CLINIC_IMAGES[activeIndex];

  const changeImage = (direction: number): void => {
    setActiveIndex((current) => (current + direction + CLINIC_IMAGES.length) % CLINIC_IMAGES.length);
  };

  const closeOnBackdrop = (event: React.MouseEvent<HTMLDialogElement>): void => {
    if (event.target === dialogRef.current) dialogRef.current.close();
  };

  return (
    <>
      <button
        type="button"
        className={`${className} ${styles.facilityTrigger}`}
        onClick={() => dialogRef.current?.showModal()}
        aria-haspopup="dialog"
        data-reveal="fade"
        data-reveal-on="load"
        data-reveal-delay="5"
      >
        <span className="relative block aspect-[4/3] overflow-hidden">
          <Image
            src={CLINIC_IMAGES[0].src}
            alt=""
            fill
            sizes="14rem"
            className={`object-cover ${styles.facilityImage}`}
          />
          <span className={styles.facilityLabel}>
            <span>View the clinic</span>
            <Maximize2 size={15} aria-hidden />
          </span>
        </span>
      </button>
      <dialog
        ref={dialogRef}
        aria-labelledby={titleId}
        className={styles.clinicDialog}
        onClick={closeOnBackdrop}
      >
        <div className={styles.clinicDialogPanel}>
          <header className={styles.clinicDialogHeader}>
            <div>
              <h2 id={titleId} className="font-display text-2xl font-semibold text-paper sm:text-3xl">
                Inside Sigma Core
              </h2>
              <p className="mt-1 text-sm text-white/65">{activeImage.label}</p>
            </div>
            <button
              type="button"
              onClick={() => dialogRef.current?.close()}
              className={styles.clinicIconButton}
              aria-label="Close clinic gallery"
              title="Close gallery"
            >
              <X size={20} aria-hidden />
            </button>
          </header>
          <div className={styles.clinicDialogImage}>
            <Image
              key={activeImage.src}
              src={activeImage.src}
              alt={activeImage.alt}
              fill
              sizes="(min-width: 1024px) 70rem, 94vw"
              className="object-contain"
            />
          </div>
          <footer className={styles.clinicDialogControls}>
            <button
              type="button"
              onClick={() => changeImage(-1)}
              className={styles.clinicIconButton}
              aria-label="Previous clinic photo"
              title="Previous photo"
            >
              <ChevronLeft size={22} aria-hidden />
            </button>
            <p className="text-sm text-white/70" aria-live="polite">
              {activeIndex + 1} of {CLINIC_IMAGES.length}
            </p>
            <button
              type="button"
              onClick={() => changeImage(1)}
              className={styles.clinicIconButton}
              aria-label="Next clinic photo"
              title="Next photo"
            >
              <ChevronRight size={22} aria-hidden />
            </button>
          </footer>
        </div>
      </dialog>
    </>
  );
}
