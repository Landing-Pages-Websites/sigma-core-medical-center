import assert from "node:assert/strict";
import test from "node:test";
import { recaptchaToken, renderRecaptcha } from "./recaptchaClient";

test("policy widget renders invisible and resets/executes widget ID at submit", async () => {
  const target = globalThis as unknown as { window?: Window };
  const previous = target.window;
  const calls: unknown[] = [];
  try {
    target.window = { grecaptcha: { enterprise: {
      ready: (cb: () => void) => cb(),
      render: (_container: HTMLElement, options: unknown) => { calls.push(options); return 17; },
      reset: (id: number) => { calls.push(["reset", id]); },
      execute: async (id: number, options: unknown) => { calls.push(["execute", id, options]); return "fresh-token"; },
    } } } as Window;
    const id = renderRecaptcha({} as HTMLElement, "real-key-fixture", "lead_submit", () => {});
    assert.equal((calls[0] as { size: string }).size, "invisible");
    assert.equal(await recaptchaToken(id, "lead_submit"), "fresh-token");
    assert.deepEqual(calls.slice(1), [["reset", 17], ["execute", 17, { action: "lead_submit" }]]);
  } finally { target.window = previous; }
});
test("missing widget returns no token and remains eligible for fallback", async () => {
  const target = globalThis as unknown as { window?: Window };
  const previous = target.window;
  try {
    target.window = {} as Window;
    assert.equal(await recaptchaToken(null, "lead_submit"), null);
  } finally { target.window = previous; }
});
