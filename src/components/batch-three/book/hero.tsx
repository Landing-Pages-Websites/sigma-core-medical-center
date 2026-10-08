export function BookHero(): React.ReactElement {
  return (
    <section id="booking-hero" className="book-section book-hero" aria-labelledby="book-title">
      <svg className="book-hero-geometry" viewBox="0 0 1536 864" preserveAspectRatio="none" aria-hidden="true" focusable="false">
        <polyline points="1536,106 1364,106 1142,331 1329,516" />
        <rect x="1280" y="574" width="55" height="46" />
        <rect x="1356" y="537" width="55" height="83" />
        <rect x="1431" y="486" width="56" height="134" />
      </svg>
      <div className="book-shell book-hero-copy">
        <h1 id="book-title" className="book-bracket">Appointment <br />scheduling</h1>
        <p className="book-availability">Online booking is not yet available.</p>
        <p className="book-orientation">Explore service information and contact status below.</p>
      </div>
    </section>
  );
}
