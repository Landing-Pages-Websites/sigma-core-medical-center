const ANALYTICS_IDLE_TIMEOUT_MS = 1500;

function scheduleIdle(callback: () => void): () => void {
  if ("requestIdleCallback" in window) {
    const id = window.requestIdleCallback(callback, { timeout: ANALYTICS_IDLE_TIMEOUT_MS });
    return () => window.cancelIdleCallback(id);
  }
  const id = setTimeout(callback, 0);
  return () => clearTimeout(id);
}

/** Load can fire before rendering. Yield a paint opportunity before SDK work. */
export function scheduleAnalytics(callback: () => void): () => void {
  let frame = 0;
  let cancelIdle = (): void => {};
  const afterLoad = (): void => {
    frame = window.requestAnimationFrame(() => {
      frame = window.requestAnimationFrame(() => {
        cancelIdle = scheduleIdle(callback);
      });
    });
  };
  if (document.readyState === "complete") afterLoad();
  else window.addEventListener("load", afterLoad, { once: true });
  return () => {
    window.removeEventListener("load", afterLoad);
    window.cancelAnimationFrame(frame);
    cancelIdle();
  };
}
