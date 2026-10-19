const MEGA_BOOTSTRAP =
  "window.MEGA_TAG_CONFIG={siteKey:'49774b7nqtttt6ue'};" +
  "window.API_ENDPOINT='https://optimizer.gomega.ai';" +
  "window.TRACKING_API_ENDPOINT='https://events-api.gomega.ai';";

export function MegaSnippet(): React.ReactElement {
  return (
    <>
      <script id="mega-tag-config" dangerouslySetInnerHTML={{ __html: MEGA_BOOTSTRAP }} />
      {/* itemProp prevents React 19 from hoisting this async script before its config. */}
      <script src="https://cdn.gomega.ai/scripts/optimizer.min.js" async itemProp="" />
    </>
  );
}
