"use client";
import { forwardRef, useImperativeHandle, type ReactElement } from "react";
import { useTurnstile } from "@/hooks/useTurnstile";
import { resetTurnstile } from "@/lib/captcha/turnstileClient";

export interface TurnstileHandle { reset: () => void }
interface TurnstileWidgetProps { onToken: (token: string | null) => void }
const TurnstileWidget = forwardRef<TurnstileHandle, TurnstileWidgetProps>(
  function TurnstileWidget({ onToken }, ref): ReactElement {
    const { containerRef, widgetRef } = useTurnstile(onToken);
    useImperativeHandle(ref, () => ({ reset: () => resetTurnstile(widgetRef.current) }));
    return <div ref={containerRef} />;
  },
);
export default TurnstileWidget;
