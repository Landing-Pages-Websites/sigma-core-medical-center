"use client";

import posthog from "posthog-js";
import { PostHogProvider as PHProvider } from "posthog-js/react";
import { useEffect } from "react";

const DEFAULT_POSTHOG_HOST = "https://us.i.posthog.com";

type PostHogProviderProps = Readonly<{ children: React.ReactNode }>;

export function PostHogProvider({ children }: PostHogProviderProps): React.ReactElement {
  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
    if (!key) return;

    posthog.init(key, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || DEFAULT_POSTHOG_HOST,
      capture_pageview: true,
      capture_pageleave: true,
      person_profiles: "identified_only",
      disable_session_recording: true,
    });
  }, []);

  return <PHProvider client={posthog}>{children}</PHProvider>;
}
