"use client";
import { useCallback, useEffect, useRef, type RefObject } from "react";
import type { RecaptchaHandle } from "@/components/lead/RecaptchaWidget";
import type { TurnstileHandle } from "@/components/lead/TurnstileWidget";
import type { CaptchaAction } from "@/lib/captcha/verify";
import { clientVerificationRoute, type RouteKind } from "@/lib/captcha/client-route";
import { withinTokenWait } from "@/lib/captcha/clientScript";

const BYPASS_TOKEN = "staging-bypass";
const TURNSTILE_REFRESH_TIMEOUT_MS = 6_000;
const RECAPTCHA_TOKEN_WAIT_MS = 10_000;
export interface CaptchaHandle {
  getToken: (action: CaptchaAction) => Promise<string | null>;
  reset: () => void;
}
interface CaptchaState {
  route: RouteKind;
  recaptchaRef: RefObject<RecaptchaHandle | null>;
  turnstileRef: RefObject<TurnstileHandle | null>;
  tokenRef: RefObject<string | null>;
  waitingRef: RefObject<((token: string | null) => void) | null>;
}
function takeTurnstileToken(state: CaptchaState): Promise<string | null> {
  const held = state.tokenRef.current;
  if (held !== null) { state.tokenRef.current = null; return Promise.resolve(held); }
  return new Promise((resolve) => {
    state.waitingRef.current = resolve;
    state.turnstileRef.current?.reset();
    window.setTimeout(() => {
      if (state.waitingRef.current === resolve) { state.waitingRef.current = null; resolve(null); }
    }, TURNSTILE_REFRESH_TIMEOUT_MS);
  });
}
export function captchaHandle(state: CaptchaState): CaptchaHandle {
  return {
    getToken: (action) => {
      if (state.route === "bypass") return Promise.resolve(BYPASS_TOKEN);
      if (state.route === "reject") return Promise.resolve(null);
      if (state.route === "turnstile") return takeTurnstileToken(state);
      const token = state.recaptchaRef.current?.getToken(action);
      return token ? withinTokenWait(token, RECAPTCHA_TOKEN_WAIT_MS) : Promise.resolve(null);
    },
    reset: () => {
      if (state.route === "recaptcha") { state.recaptchaRef.current?.reset(); return; }
      state.tokenRef.current = null;
      state.turnstileRef.current?.reset();
    },
  };
}
export function useCaptcha(onReady: (ready: boolean) => void): CaptchaState & { onToken: (token: string | null) => void } {
  const route = clientVerificationRoute();
  const recaptchaRef = useRef<RecaptchaHandle>(null);
  const turnstileRef = useRef<TurnstileHandle>(null);
  const tokenRef = useRef<string | null>(null);
  const waitingRef = useRef<((token: string | null) => void) | null>(null);
  const onToken = useCallback((token: string | null) => {
    const waiting = waitingRef.current;
    if (waiting && token !== null) { waitingRef.current = null; waiting(token); return; }
    tokenRef.current = token;
    onReady(token !== null);
  }, [onReady]);
  useEffect(() => {
    if (route === "bypass" || route === "recaptcha") onReady(true);
    if (route === "reject") onReady(false);
  }, [route, onReady]);
  return { route, recaptchaRef, turnstileRef, tokenRef, waitingRef, onToken };
}
