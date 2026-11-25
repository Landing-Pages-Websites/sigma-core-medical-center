export function NeuropathyLeadership(): React.ReactElement {
  return (
    <section data-mega-section="clinical-leadership" className="bg-chalk px-6 py-12 text-navy sm:px-10 lg:px-14 lg:py-14" aria-labelledby="clinical-leadership-heading">
      <div className="mx-auto grid max-w-[90rem] gap-6 border-l-4 border-royal pl-5 sm:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] sm:items-center sm:gap-10 sm:pl-7">
        <div>
          <p className="text-xs font-bold tracking-[0.18em] text-royal uppercase">MEET YOUR CLINICAL TEAM</p>
          <h2 id="clinical-leadership-heading" className="mt-2 font-heading text-[clamp(2rem,4vw,3.3rem)] leading-none font-bold tracking-[-0.035em]">
            Dr. Nicholas Fleming, DC
          </h2>
          <p className="mt-2 text-base font-semibold text-ink/75">Provider, Sigma Core Medical Center</p>
        </div>
        <div className="max-w-[42rem] space-y-3 text-base leading-relaxed text-ink/85">
          <p>Dr. Nicholas Fleming is part of the clinical team at Sigma Core Medical Center, where patient care begins with understanding your symptoms, health history, and personal goals.</p>
          <p>Our approach emphasizes careful evaluation, individualized recommendations, and helping patients understand their available care options.</p>
        </div>
      </div>
    </section>
  );
}
