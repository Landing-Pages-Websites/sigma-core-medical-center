"use client";
import { useEffect, useRef, type RefObject } from "react";
import { loadTurnstile, renderTurnstile, removeTurnstile } from "@/lib/captcha/turnstileClient";
import { reportCaptchaUnavailable } from "@/lib/captcha/telemetry";

export function useTurnstile(onToken: (token: string | null) => void): {
  containerRef: RefObject<HTMLDivElement | null>; widgetRef: RefObject<string | null>;
} {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetRef = useRef<string | null>(null);
  useEffect(() => {
    const sitekey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY?.trim();
    if (!sitekey) { reportCaptchaUnavailable("unconfigured", "turnstile"); onToken(null); return; }
    let cancelled = false;
    void loadTurnstile().then(() => {
      if (!cancelled && containerRef.current) widgetRef.current = renderTurnstile(containerRef.current, sitekey, onToken);
    }).catch(() => {
      reportCaptchaUnavailable("script_blocked", "turnstile");
      if (!cancelled) onToken(null);
    });
    return () => { cancelled = true; removeTurnstile(widgetRef.current); widgetRef.current = null; };
  }, [onToken]);
  return { containerRef, widgetRef };
}
