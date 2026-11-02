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
// The submission stops waiting at 10 seconds and the fallback sends the lead,
// so the execute deadline must not outlast it and report a lead that arrived.
for (const row of [
  { name: "an execute that never settles gives up at the submission's wait", settleMs: null, want: null, atMs: 10_000, reports: 1 },
  { name: "an execute that settles inside the wait returns its token", settleMs: 9_000, want: "slow-token", atMs: 9_000, reports: 0 },
]) {
  test(row.name, async (t) => {
    t.mock.timers.enable({ apis: ["setTimeout"] });
    const target = globalThis as unknown as { window?: Window };
    const previous = target.window;
    try {
      const dataLayer: unknown[] = [];
      target.window = { dataLayer, grecaptcha: { enterprise: {
        reset: () => {},
        execute: () => new Promise<string>((resolve) => {
          if (row.settleMs !== null) setTimeout(() => resolve("slow-token"), row.settleMs);
        }),
      } } } as unknown as Window;
      let outcome: string | null | undefined;
      void recaptchaToken(17, "lead_submit").then((token) => { outcome = token; });
      let elapsed = 0;
      while (outcome === undefined && elapsed < 30_000) {
        t.mock.timers.tick(1_000);
        elapsed += 1_000;
        await new Promise((r) => setImmediate(r));
      }
      assert.equal(outcome, row.want);
      assert.equal(elapsed, row.atMs);
      // Nothing may report after the outcome either: run well past the wait.
      t.mock.timers.tick(30_000);
      await new Promise((r) => setImmediate(r));
      const reports = dataLayer.filter((e) => (e as { event?: string }).event === "captcha_unavailable");
      assert.equal(reports.length, row.reports);
    } finally { target.window = previous; }
  });
}

// Drive the real caller: the form submits the moment captchaHandle's token
// resolves, so this attempt's report must already exist then, and none after.
test("through useCaptcha, the report precedes the null token and nothing reports later", async (t) => {
  t.mock.timers.enable({ apis: ["setTimeout"] });
  const { captchaHandle } = await import("../../hooks/useCaptcha");
  const target = globalThis as unknown as { window?: Window };
  const previous = target.window;
  try {
    const dataLayer: unknown[] = [];
    let late: ((token: string) => void) | undefined;
    target.window = { dataLayer, setTimeout, grecaptcha: { enterprise: {
      reset: () => {},
      execute: () => new Promise<string>((resolve) => { late = resolve; }),
    } } } as unknown as Window;
    const count = () => dataLayer.filter((e) => (e as { event?: string }).event === "captcha_unavailable").length;
    const handle = captchaHandle({
      route: "recaptcha",
      recaptchaRef: { current: { getToken: (action: string) => recaptchaToken(17, action), reset: () => {} } },
      turnstileRef: { current: null }, tokenRef: { current: null }, waitingRef: { current: null },
    } as unknown as Parameters<typeof captchaHandle>[0]);
    let reportsWhenSettled: number | undefined;
    const token = handle.getToken("lead_submit").then((value) => { reportsWhenSettled = count(); return value; });
    for (let elapsed = 0; elapsed < 10_000; elapsed += 1_000) {
      t.mock.timers.tick(1_000);
      await new Promise((r) => setImmediate(r));
    }
    assert.equal(await token, null);
    assert.equal(reportsWhenSettled, 1);
    late?.("too-late");
    t.mock.timers.tick(30_000);
    await new Promise((r) => setImmediate(r));
    assert.equal(count(), 1);
  } finally { target.window = previous; }
});
