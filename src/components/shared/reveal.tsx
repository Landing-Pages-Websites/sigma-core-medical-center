"use client";

import { useEffect, useRef } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  from?: "up" | "left";
};

/** Fades content in on first scroll into view; CSS disables it under prefers-reduced-motion. */
export function Reveal({
  children,
  className = "",
  delay = 0,
  from = "up",
}: RevealProps): React.ReactElement {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        element.classList.add("is-visible");
        observer.disconnect();
      },
      { threshold: 0.1, rootMargin: "0px 0px -32px 0px" },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${from === "left" ? "reveal-from-left" : ""} ${className}`}
      style={delay > 0 ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
