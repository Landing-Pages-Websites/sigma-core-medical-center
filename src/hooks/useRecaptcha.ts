"use client";
import { useEffect, useRef, type RefObject } from "react";
import { loadRecaptcha, renderRecaptcha, resetRecaptcha } from "@/lib/captcha/recaptchaClient";
import { reportCaptchaUnavailable } from "@/lib/captcha/telemetry";

export function useRecaptcha(sitekey: string, action: string, onReady: (ready: boolean) => void): {
  containerRef: RefObject<HTMLDivElement | null>; widgetRef: RefObject<number | null>;
} {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetRef = useRef<number | null>(null);
  useEffect(() => {
    if (!sitekey) { reportCaptchaUnavailable("unconfigured", "recaptcha"); onReady(false); return; }
    let cancelled = false;
    void loadRecaptcha().then(() => {
      if (cancelled) return;
      window.grecaptcha?.enterprise?.ready(() => {
        if (!cancelled && containerRef.current) {
          widgetRef.current = renderRecaptcha(containerRef.current, sitekey, action, onReady);
        }
      });
    }).catch(() => {
      reportCaptchaUnavailable("script_blocked", "recaptcha");
      if (!cancelled) onReady(false);
    });
    return () => { cancelled = true; resetRecaptcha(widgetRef.current); widgetRef.current = null; };
  }, [sitekey, action, onReady]);
  return { containerRef, widgetRef };
}
