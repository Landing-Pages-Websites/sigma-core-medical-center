"use client";

import { useEffect } from "react";
import { scheduleAnalytics } from "./schedule-analytics";

const DEFAULT_POSTHOG_HOST = "https://us.i.posthog.com";

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

type PostHogProviderProps = Readonly<{ children: React.ReactNode }>;

export function PostHogProvider({ children }: PostHogProviderProps): React.ReactElement {
  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
    if (!key) return;

    return scheduleAnalytics(() => { void initializePostHog(key); });
  }, []);

  return <>{children}</>;
}
