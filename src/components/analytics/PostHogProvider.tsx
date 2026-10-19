"use client";

import { useEffect } from "react";

const DEFAULT_POSTHOG_HOST = "https://us.i.posthog.com";
const ANALYTICS_IDLE_TIMEOUT_MS = 1500;

async function initializePostHog(key: string): Promise<void> {
  try {
    const { default: posthog } = await import("posthog-js");
    if (posthog.__loaded) return;
    posthog.init(key, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || DEFAULT_POSTHOG_HOST,
      capture_pageview: true,
      capture_pageleave: true,
      person_profiles: "identified_only",
      disable_session_recording: true,
    });
  } catch (error) {
    console.error("[analytics] Unable to initialize PostHog.", error);
  }
}

function schedulePostHog(key: string): () => void {
  let cancel = (): void => {};
  const start = (): void => {
    const initialize = (): void => { void initializePostHog(key); };
    if ("requestIdleCallback" in window) {
      const id = window.requestIdleCallback(initialize, { timeout: ANALYTICS_IDLE_TIMEOUT_MS });
      cancel = () => window.cancelIdleCallback(id);
      return;
    }
    const id = setTimeout(initialize, ANALYTICS_IDLE_TIMEOUT_MS);
    cancel = () => clearTimeout(id);
  };
  if (document.readyState === "complete") start();
  else window.addEventListener("load", start, { once: true });
  return () => { window.removeEventListener("load", start); cancel(); };
}

type PostHogProviderProps = Readonly<{ children: React.ReactNode }>;

export function PostHogProvider({ children }: PostHogProviderProps): React.ReactElement {
  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
    if (!key) return;

    return schedulePostHog(key);
  }, []);

  return <>{children}</>;
}
