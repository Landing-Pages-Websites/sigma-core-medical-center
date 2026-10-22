"use client";

import { useEffect, useRef } from "react";

export function ScrollProgress(): React.ReactElement {
  const bar = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const update = (): void => {
      const distance = document.documentElement.scrollHeight - window.innerHeight;
      const progress = distance > 0 ? Math.min(1, Math.max(0, window.scrollY / distance)) : 0;
      if (bar.current) bar.current.style.transform = `scaleX(${progress})`;
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);
  return <div ref={bar} aria-hidden="true" className="pointer-events-none fixed inset-x-0 top-0 z-50 h-1 origin-left scale-x-0 bg-electric" />;
}
