"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const REVEAL_AFTER_PX = 600;

function returnToTop(): void {
  const heading = document.querySelector<HTMLElement>("h1");
  if (heading) {
    heading.tabIndex = -1;
    heading.focus({ preventScroll: true });
  }
  window.scrollTo({ top: 0, behavior: "auto" });
}

export function BackToTop(): React.ReactElement | null {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const update = (): void => setVisible(window.scrollY > REVEAL_AFTER_PX);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  if (!visible) return null;
  return (
    <button type="button" onClick={returnToTop} aria-label="Back to top"
      className="fixed bottom-6 right-6 z-40 flex size-12 items-center justify-center rounded-sm border border-silver bg-ink text-surface shadow-lg transition-colors duration-200 hover:bg-action focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus motion-reduce:transition-none">
      <ArrowUp size={22} aria-hidden="true" />
    </button>
  );
}
