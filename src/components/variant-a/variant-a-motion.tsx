"use client";

import { useEffect } from "react";

const REVEALED_ATTRIBUTE = "data-revealed";

export function VariantAMotionA(): null {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>("[data-variant-a-root]");
    if (!root) return;

    const elements = Array.from(root.querySelectorAll<HTMLElement>("[data-reveal]"));
    const reveal = (element: HTMLElement): void => {
      element.setAttribute(REVEALED_ATTRIBUTE, "true");
    };

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      elements.forEach(reveal);
      return;
    }

    const loadElements = elements.filter((element) => element.dataset.revealOn === "load");
    const scrollElements = elements.filter((element) => element.dataset.revealOn !== "load");
    const animationFrame = window.requestAnimationFrame(() => loadElements.forEach(reveal));

    if (!("IntersectionObserver" in window)) {
      scrollElements.forEach(reveal);
      return () => window.cancelAnimationFrame(animationFrame);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          reveal(entry.target as HTMLElement);
          observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: "0px 0px 16% 0px",
        threshold: 0.01,
      },
    );

    scrollElements.forEach((element) => observer.observe(element));

    return () => {
      window.cancelAnimationFrame(animationFrame);
      observer.disconnect();
    };
  }, []);

  return null;
}
