"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";
import styles from "./motion.module.css";

type VariantBMotionProps = {
  children: ReactNode;
};

export function VariantBMotion({ children }: VariantBMotionProps): React.ReactElement {
  const rootRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const revealItems = Array.from(root.querySelectorAll<HTMLElement>("[data-b-reveal]"));
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    root.dataset.bMotionReady = "true";

    if (reducedMotion) {
      revealItems.forEach((item) => {
        item.dataset.bVisible = "true";
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const item = entry.target as HTMLElement;
          item.dataset.bVisible = "true";
          observer.unobserve(item);
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={rootRef} className={styles.motionRoot}>
      {children}
    </div>
  );
}
