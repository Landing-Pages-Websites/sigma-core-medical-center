import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, HelpCircle, MessageSquareText, Route, ShieldCheck, Target } from "lucide-react";
import type { ServicePageData } from "@/content/pages";
import { BracketMark, BracketMarkEnd, SteppedBars } from "@/components/variant-b/motifs";
import { PageHero } from "@/components/pages/page-hero";
import { FaqSection } from "@/components/pages/faq-section";
import { BookingCta } from "@/components/pages/booking-cta";
import { SourcesSection } from "@/components/pages/sources-section";

type ServiceDetailPageProps = {
  data: ServicePageData;
};

const DECISION_ICONS = [Target, CheckCircle2, MessageSquareText, ShieldCheck];
const ORIENTATION_ICONS = [MessageSquareText, Route, HelpCircle, ShieldCheck];

export function ServiceDetailPage({ data }: ServiceDetailPageProps): React.ReactElement {
  return (
    <main>
      <PageHero
        eyebrow={data.eyebrow}
        title={data.title}
        intro={data.intro}
        image={data.heroImage}
        imageAlt={data.heroAlt}
        quote={data.heroQuote}
        bullets={data.heroBullets}
      />

      <section className="relative overflow-hidden bg-action py-16 text-white sm:py-20">
        <div aria-hidden className="absolute inset-y-0 right-0 hidden w-[32%] bg-charcoal lg:block [clip-path:polygon(24%_0,100%_0,100%_100%,0_100%)]" />
        <div className="relative mx-auto max-w-7xl px-6 sm:px-10">
          <h2 className={`flex items-start gap-4 text-4xl leading-none tracking-tight sm:text-6xl ${data.enhancedLayout ? "font-extrabold" : "font-semibold"}`}>
            <BracketMark className="mt-1 h-10 w-4 text-surface" /> {data.orientationTitle}
          </h2>

          {data.enhancedLayout && data.orientationCallouts && data.orientationImages ? (
            <>
              <div className="mt-8 grid gap-6 lg:grid-cols-[22fr_56fr_22fr] lg:items-stretch">
                <div className="relative hidden min-h-64 overflow-hidden lg:block lg:[clip-path:polygon(0_0,100%_8%,100%_100%,0_92%)]">
                  <Image src={data.orientationImages[0]} alt="Sigma Core reception" fill sizes="22vw" className="object-cover" />
                </div>
                <div className="bg-surface p-7 text-ink shadow-2xl sm:p-9">
                  <BracketMark className="h-8 w-4 text-action" />
                  <p className="mt-3 max-w-2xl text-lg leading-relaxed text-muted">{data.orientationIntro}</p>
                  <div className="mt-6 grid gap-5 sm:grid-cols-2">
                    <div>
                      <p className="text-sm font-semibold text-action">{data.orientationCallouts.leftTitle}</p>
                      <p className="mt-1 text-sm leading-relaxed text-muted">{data.orientationCallouts.leftBody}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-action">{data.orientationCallouts.rightTitle}</p>
                      <p className="mt-1 text-sm leading-relaxed text-muted">{data.orientationCallouts.rightBody}</p>
                    </div>
                  </div>
                  {data.categoryBoundaryItems ? (
                    <div className="mt-6 border-t border-silver pt-5">
                      <p className="text-sm font-semibold text-ink">{data.categoryBoundaryTitle ?? "Category boundary"}</p>
                      <ul className="mt-2 space-y-1.5">
                        {data.categoryBoundaryItems.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-xs leading-relaxed text-muted">
                            <BracketMark className="mt-0.5 h-3 w-2.5 shrink-0 text-action" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                  <Link href={data.categoryBoundaryLinkHref ?? "/about"} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-action hover:underline">
                    {data.categoryBoundaryLinkLabel ?? "Learn more about our approach"} <ArrowRight size={16} aria-hidden />
                  </Link>
                </div>
                <div className="relative hidden min-h-64 overflow-hidden lg:block lg:[clip-path:polygon(0_8%,100%_0,100%_92%,0_100%)]">
                  <Image src={data.orientationImages[1]} alt="Sigma Core reception" fill sizes="22vw" className="object-cover" />
                </div>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {data.orientationCards.map((card, index) => {
                  const Icon = ORIENTATION_ICONS[index % ORIENTATION_ICONS.length];
                  return (
                    <div key={card.title} className="flex min-h-28 items-start gap-3 bg-white/95 p-4 text-ink shadow-md [clip-path:polygon(4%_0,100%_0,96%_100%,0_100%)]">
                      <Icon className="mt-0.5 shrink-0 text-action" size={22} aria-hidden />
                      <div>
                        <p className="text-sm leading-tight font-semibold">{card.title}</p>
                        <p className="mt-1 text-xs leading-relaxed opacity-70">{card.body}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          ) : (
            <>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/85">{data.orientationIntro}</p>
              <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {data.orientationCards.map((card, index) => (
                  <article key={card.title} className={`${index % 2 === 0 ? "bg-surface text-ink" : "bg-charcoal text-white"} relative min-h-56 p-7 shadow-xl`}>
                    <span className="text-sm font-semibold tracking-[0.18em] text-electric uppercase">0{index + 1}</span>
                    <h3 className="mt-5 text-2xl font-semibold tracking-tight">{card.title}</h3>
                    <p className="mt-3 text-base leading-relaxed opacity-75">{card.body}</p>
                    <BracketMarkEnd className="absolute right-5 bottom-5 text-electric" />
                  </article>
                ))}
              </div>
            </>
          )}

          {!(data.enhancedLayout && data.orientationCallouts && data.orientationImages) && (
            <Link href="/about" className="mt-9 inline-flex items-center gap-3 border border-white/50 px-5 py-3 text-sm font-semibold transition-colors hover:bg-white hover:text-action">
              Learn about our approach <ArrowRight size={17} aria-hidden />
            </Link>
          )}
        </div>
      </section>

      <section className="relative overflow-hidden bg-surface py-16 text-ink sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="grid gap-8 lg:grid-cols-[54fr_46fr] lg:items-end">
            <div>
              <h2 className={`text-4xl leading-[1.02] tracking-tight sm:text-6xl ${data.enhancedLayout ? "font-extrabold" : "font-semibold"}`}>{data.decisionTitle}</h2>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{data.decisionIntro}</p>
            </div>
            <SteppedBars className="hidden items-end justify-self-end scale-150 lg:flex" />
          </div>
          {data.enhancedLayout ? (
            <>
              <div className="mt-12 grid gap-4 sm:grid-cols-3">
                {data.decisionCards.map((card, index) => {
                  const Icon = DECISION_ICONS[index % DECISION_ICONS.length];
                  return (
                    <div key={card.title} className="relative flex min-h-20 items-start gap-3 bg-white p-4 shadow-md [clip-path:polygon(3%_0,100%_0,97%_100%,0_100%)]">
                      <Icon size={22} className="mt-0.5 shrink-0 text-action" aria-hidden />
                      <div>
                        <p className="text-sm font-semibold tracking-tight">{card.title}</p>
                        <p className="mt-1 text-xs leading-relaxed text-muted">{card.body}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="mt-8 flex flex-col items-center justify-between gap-4 bg-charcoal px-6 py-5 text-white sm:flex-row sm:px-8">
                <p className="text-base font-semibold">{data.decisionCtaLabel ?? "Ready to start the conversation?"}</p>
                <Link href="/book" className="inline-flex h-11 items-center gap-2 bg-action px-5 text-sm font-semibold text-white transition-colors hover:bg-hover">
                  Book an Appointment <ArrowRight size={16} aria-hidden />
                </Link>
              </div>
            </>
          ) : (
            <>
              <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {data.decisionCards.map((card, index) => {
                  const Icon = DECISION_ICONS[index % DECISION_ICONS.length];
                  return (
                    <article key={card.title} className="relative min-h-64 border border-silver bg-white p-6 pt-8 shadow-[0_14px_35px_rgb(16_30_51/0.08)]">
                      <Icon size={30} className="text-action" aria-hidden />
                      <h3 className="mt-6 text-xl font-semibold tracking-tight">{card.title}</h3>
                      <p className="mt-3 text-base leading-relaxed text-muted">{card.body}</p>
                      <span aria-hidden className="absolute right-4 bottom-0 h-2 w-12 bg-walnut" />
                    </article>
                  );
                })}
              </div>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link href="/about" className="inline-flex h-12 items-center gap-2 border-2 border-action px-5 font-semibold text-action hover:bg-action hover:text-white">About our approach <ArrowRight size={17} /></Link>
                <Link href="/book" className="inline-flex h-12 items-center gap-2 bg-action px-5 font-semibold text-white hover:bg-hover">Book a conversation <ArrowRight size={17} /></Link>
              </div>
            </>
          )}
        </div>
      </section>

      <section className="relative overflow-hidden bg-charcoal text-white">
        <div className="mx-auto grid max-w-[90rem] lg:grid-cols-[46fr_54fr]">
          <div className="px-6 py-16 sm:px-10 sm:py-20 lg:py-24">
            <SteppedBars className="mb-7" />
            <h2 className={`text-4xl leading-none tracking-tight sm:text-6xl ${data.enhancedLayout ? "font-extrabold" : "font-semibold"}`}>{data.expectTitle}</h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">{data.expectBody}</p>
            {data.expectActions ? (
              <div className="mt-8 grid max-w-xl gap-4 sm:grid-cols-2">
                {data.expectActions.map((action) => (
                  <div key={action.title} className="bg-white/5 p-5">
                    <p className="text-sm font-semibold text-focus">{action.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-white/70">{action.body}</p>
                    <Link href={action.href} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white hover:underline">
                      {action.ctaLabel} <ArrowRight size={15} aria-hidden />
                    </Link>
                  </div>
                ))}
              </div>
            ) : (
              <Link href="/book" className="mt-8 inline-flex h-12 items-center gap-3 bg-action px-6 font-semibold text-white hover:bg-hover">Book an Appointment <ArrowRight size={18} /></Link>
            )}
            <p className="mt-5 max-w-lg border-l-2 border-silver pl-4 text-sm text-white/55">General website information is not medical advice. Care options and outcomes vary.</p>
          </div>
          <div className="relative min-h-80 lg:min-h-[34rem] lg:[clip-path:polygon(18%_0,100%_0,100%_100%,0_100%)]">
            <Image src="/images/shared/waiting-room.png" alt="Sigma Core Medical Center waiting area" fill sizes="(min-width: 1024px) 54vw, 100vw" className="object-cover" />
            {data.perspectiveCards ? (
              <div className="absolute inset-0 hidden flex-col items-end justify-center gap-4 p-10 lg:flex">
                {data.perspectiveCards.map((card) => (
                  <div key={card.title} className="max-w-xs bg-ink/90 p-4 shadow-xl">
                    <p className="text-sm font-semibold text-focus">{card.title}</p>
                    <p className="mt-1.5 text-xs leading-relaxed text-white/75">{card.body}</p>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <FaqSection items={data.faqs} quote={data.faqQuote} buttons={data.faqButtons} />
      <BookingCta points={data.bookingCtaPoints} />
      <SourcesSection sources={data.sources} footerCards={data.sourcesFooterCards} />
    </main>
  );
}
