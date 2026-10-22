import assert from "node:assert/strict";
import test from "node:test";
import { NextRequest } from "next/server";
import { POST } from "../app/api/lead/route";
import { allowedLeadOrigins, leadOriginAllowed } from "../src/lib/leadOrigin";
import { SITE_URL } from "../src/content/site";

function withEnvironment(values: Record<string, string>, check: () => void): void {
  const previous = { ...process.env };
  try { Object.assign(process.env, values); check(); }
  finally { process.env = previous; }
}

test("production origin allowlist derives only from canonical site identity", () => {
  withEnvironment({ VERCEL_ENV: "production", VERCEL_URL: "unrelated.vercel.app", NEXT_PUBLIC_SITE_URL: "https://legacy.example" }, () => {
    assert.deepEqual([...allowedLeadOrigins()], [SITE_URL]);
    assert.ok(leadOriginAllowed(SITE_URL));
    for (const origin of ["null", "https://sigmacoremedicalcenter.com", "https://www.sigmacoremedicalcenter.com.evil.test", "https://unrelated.vercel.app"]) {
      assert.equal(leadOriginAllowed(origin), false, origin);
    }
  });
});

test("Preview permits only configured deployment origins alongside canonical", () => {
  withEnvironment({ VERCEL_ENV: "preview", VERCEL_URL: "sigma-123.vercel.app", VERCEL_BRANCH_URL: "sigma-branch.vercel.app" }, () => {
    assert.ok(leadOriginAllowed("https://sigma-123.vercel.app"));
    assert.ok(leadOriginAllowed("https://sigma-branch.vercel.app"));
    assert.equal(leadOriginAllowed("https://other.vercel.app"), false);
  });
});

test("foreign browser origins refuse before parsing, verification or forwarding", async () => {
  const response = await POST(new NextRequest(`${SITE_URL}/api/lead`, {
    method: "POST", headers: { Origin: "https://unrelated.example" }, body: "{}",
  }));
  assert.equal(response.status, 403);
  assert.deepEqual(await response.json(), { ok: false, error: "Invalid request origin." });
});
