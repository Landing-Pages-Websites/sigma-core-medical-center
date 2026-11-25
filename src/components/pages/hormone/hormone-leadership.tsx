export function HormoneLeadership(): React.ReactElement {
  return (
    <section data-mega-section="clinical-leadership" className="bg-chalk px-6 py-12 text-navy sm:px-10 lg:px-14 lg:py-14" aria-labelledby="clinical-leadership-heading">
      <div className="mx-auto grid max-w-[90rem] gap-6 border-l-4 border-royal pl-5 sm:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] sm:items-center sm:gap-10 sm:pl-7">
        <div>
          <p className="text-xs font-bold tracking-[0.18em] text-royal uppercase">GET TO KNOW YOUR CARE TEAM</p>
          <h2 id="clinical-leadership-heading" className="mt-2 font-heading text-[clamp(1.8rem,3.2vw,2.8rem)] leading-[1.05] font-bold tracking-[-0.03em]">
            Personalized Care Begins With the Right Team.
          </h2>
          <p className="mt-3 text-lg font-semibold text-navy">Dr. Nicholas Fleming, DC</p>
          <p className="text-base font-semibold text-ink/75">Provider, Sigma Core Medical Center</p>
        </div>
        <div className="max-w-[42rem] space-y-3 text-base leading-relaxed text-ink/85">
          <p>At Sigma Core Medical Center, we believe better healthcare starts with listening, understanding your concerns, and looking at the bigger picture.</p>
          <p>Our integrative approach brings together individualized assessments, modern medical options, and a coordinated care team focused on helping you make informed decisions about your health.</p>
        </div>
      </div>
    </section>
  );
}
