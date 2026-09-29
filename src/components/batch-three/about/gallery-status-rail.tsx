export function AboutGalleryStatusRail(): React.ReactElement {
  return (
    <div className="b3-gallery-lower">
      <div className="b3-gallery-source">
        <span className="b3-gallery-source-mark" aria-hidden="true" />
        <div>
          <span className="b3-gallery-label">Client-supplied</span>
          <strong>Reception view</strong>
        </div>
      </div>
      <div className="b3-gallery-status">
        <span className="b3-gallery-label">Location verification</span>
        <strong>Details under review</strong>
        <p>The Contact status covers address, hours, directions, parking and accessibility.</p>
      </div>
    </div>
  );
}
