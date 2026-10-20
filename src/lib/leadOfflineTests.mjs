// Test bootstrap: no test may accidentally submit a real request.
globalThis.fetch = async () => {
  throw new Error("Network disabled in lead tests; install an explicit mock.");
};
