import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import vm from "node:vm";
import ts from "typescript";

function createScheduler({ complete = false, idle = true } = {}) {
  const frames = new Map();
  const tasks = new Map();
  const events = new EventTarget();
  let nextId = 0;
  const enqueue = (queue) => (callback) => { queue.set(++nextId, callback); return nextId; };
  const window = {
    requestAnimationFrame: enqueue(frames), cancelAnimationFrame: (id) => frames.delete(id),
    addEventListener: events.addEventListener.bind(events),
    removeEventListener: events.removeEventListener.bind(events),
  };
  if (idle) Object.assign(window, {
    requestIdleCallback: enqueue(tasks), cancelIdleCallback: (id) => tasks.delete(id),
  });
  const context = { exports: {}, window, document: { readyState: complete ? "complete" : "loading" },
    setTimeout: enqueue(tasks), clearTimeout: (id) => tasks.delete(id) };
  const source = readFileSync(new URL("./schedule-analytics.ts", import.meta.url), "utf8");
  vm.runInNewContext(ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS },
  }).outputText, context);
  return { schedule: context.exports.scheduleAnalytics, frames, tasks, events };
}

function flush(queue) {
  const pending = [...queue.values()];
  queue.clear();
  pending.forEach((callback) => callback());
}

test("SDK work waits for load, two animation frames and idle, then runs once", () => {
  const scheduler = createScheduler();
  let calls = 0;
  scheduler.schedule(() => calls++);
  assert.equal(scheduler.frames.size, 0);
  scheduler.events.dispatchEvent(new Event("load"));
  flush(scheduler.frames);
  assert.equal(scheduler.tasks.size, 0);
  assert.equal(calls, 0);
  flush(scheduler.frames);
  assert.equal(calls, 0);
  flush(scheduler.tasks);
  scheduler.events.dispatchEvent(new Event("load"));
  flush(scheduler.frames);
  flush(scheduler.tasks);
  assert.equal(calls, 1);
});

test("already loaded pages use the same paint boundary with a timer fallback", () => {
  const scheduler = createScheduler({ complete: true, idle: false });
  let calls = 0;
  scheduler.schedule(() => calls++);
  flush(scheduler.frames);
  flush(scheduler.frames);
  assert.equal(calls, 0);
  flush(scheduler.tasks);
  assert.equal(calls, 1);
});

test("unmount cancels each lifecycle stage, including the timer fallback", () => {
  for (const idle of [true, false]) {
    for (const stage of ["load", "first-frame", "second-frame", "idle"]) {
      const scheduler = createScheduler({ idle });
      let calls = 0;
      const cancel = scheduler.schedule(() => calls++);
      if (stage !== "load") scheduler.events.dispatchEvent(new Event("load"));
      if (["second-frame", "idle"].includes(stage)) flush(scheduler.frames);
      if (stage === "idle") flush(scheduler.frames);
      cancel();
      scheduler.events.dispatchEvent(new Event("load"));
      flush(scheduler.frames);
      flush(scheduler.frames);
      flush(scheduler.tasks);
      assert.equal(calls, 0, `${idle}/${stage}`);
    }
  }
});
