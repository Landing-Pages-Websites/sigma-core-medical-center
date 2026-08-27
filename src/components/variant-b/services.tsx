import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { PENDING, SERVICES } from "@/content/site";
import { PendingAction } from "@/components/shared/pending-action";
import { GhostWord } from "@/components/variant-b/motifs";

const MODULE_STYLES = [
  "bg-paper text-ink xl:top-6 xl:left-6 xl:h-[13rem] xl:w-[clamp(18rem,20.6vw,23rem)] 2xl:top-[clamp(1.5rem,1.5vw,2.75rem)] 2xl:left-[1.5vw] 2xl:h-[clamp(13rem,11vw,17rem)] 2xl:w-[20.6vw] xl:[clip-path:polygon(0_0,100%_0,100%_50%,92%_50%,92%_72%,84%_72%,84%_100%,0_100%)]",
  "bg-charcoal text-white xl:top-[11.875rem] xl:right-0 xl:h-[13rem] xl:w-[clamp(20rem,22.7vw,25rem)] 2xl:top-[clamp(11.875rem,10vw,16rem)] 2xl:h-[clamp(13rem,11vw,17rem)] 2xl:w-[22.7vw] xl:[clip-path:polygon(0_0,96%_0,96%_68%,100%_68%,100%_96%,88%_96%,88%_100%,0_100%)]",
  "bg-paper text-ink xl:top-[26rem] xl:left-0 xl:h-[13rem] xl:w-[clamp(17rem,18.6vw,21rem)] 2xl:top-[clamp(26rem,22vw,34.5rem)] 2xl:h-[clamp(13rem,11vw,17rem)] 2xl:w-[18.6vw] xl:[clip-path:polygon(0_0,100%_0,100%_70%,92%_70%,92%_100%,0_100%)]",
  "bg-charcoal text-white xl:top-[27.25rem] xl:right-0 xl:h-[14.5rem] xl:w-[clamp(19.5rem,21.7vw,24rem)] xl:pr-20 2xl:top-[clamp(27.25rem,23.3vw,36.5rem)] 2xl:h-[clamp(14.5rem,12vw,18rem)] 2xl:w-[21.7vw] 2xl:pr-[5vw] xl:[clip-path:polygon(0_0,100%_0,100%_100%,0_100%)]",
];

const MODULE_TEXTURES = [
  {
    backgroundImage:
      "radial-gradient(circle at 20% 20%, rgb(255 255 255 / 0.28) 0 1px, transparent 1.5px), linear-gradient(135deg, rgb(255 255 255 / 0.1), rgb(16 30 51 / 0.04))",
    backgroundSize: "7px 7px, auto",
  },
  {
    backgroundImage:
      "radial-gradient(circle at 70% 28%, rgb(255 255 255 / 0.04) 0 1px, transparent 1.5px), linear-gradient(135deg, rgb(255 255 255 / 0.025), rgb(0 0 0 / 0.12))",
    backgroundSize: "6px 6px, auto",
  },
  {
    backgroundImage:
      "radial-gradient(circle at 70% 48%, rgb(255 255 255 / 0.28) 0 1px, transparent 1.5px), linear-gradient(135deg, rgb(255 255 255 / 0.1), rgb(16 30 51 / 0.04))",
    backgroundSize: "7px 7px, auto",
  },
  {
    backgroundImage:
      "radial-gradient(circle at 32% 62%, rgb(255 255 255 / 0.04) 0 1px, transparent 1.5px), linear-gradient(135deg, rgb(255 255 255 / 0.025), rgb(0 0 0 / 0.12))",
    backgroundSize: "6px 6px, auto",
  },
] as const;

function WalnutSliver({ className }: { className: string }): React.ReactElement {
  return (
    <div aria-hidden className={`overflow-hidden ${className}`}>
      <Image
        src="/images/variant-b/walnut-texture.jpg"
        alt=""
        fill
        sizes="3rem"
        className="scale-[2.4] rotate-90 object-cover"
      />
    </div>
  );
}

export function ServicesB(): React.ReactElement {
  return (
    <section id="services" aria-label="Care categories" className="relative overflow-hidden bg-surface">
      <GhostWord
        word="Care"
        className="-top-5 left-0 text-[7rem] text-silver/45 sm:text-[10rem] lg:text-[12rem] xl:text-[14rem]"
      />
      <div className="relative grid w-full px-6 py-20 sm:px-10 xl:min-h-[clamp(46rem,55.9vw,64rem)] xl:grid-cols-[53fr_47fr] xl:px-[5.7vw] xl:pt-20 xl:pb-10 2xl:pt-[clamp(5rem,4.25vw,6.75rem)] 2xl:pb-[clamp(2.5rem,2vw,3.5rem)]">
        <div data-b-reveal="left">
          <h2 className="max-w-3xl text-4xl leading-[0.96] font-semibold tracking-[-0.05em] text-ink sm:text-5xl lg:text-6xl xl:text-[clamp(3.5rem,5vw,4.5rem)] 2xl:max-w-none 2xl:text-[clamp(4.5rem,4vw,6rem)]">
            Care organized around what you want to keep doing
          </h2>
          <article className="relative mt-8 bg-action p-8 text-white sm:max-w-[56rem] sm:p-10 xl:min-h-[16.5rem] xl:w-[calc(100%+1.75rem)] xl:max-w-none xl:p-12 2xl:min-h-[clamp(16.5rem,14vw,22rem)] 2xl:p-[clamp(3rem,2.6vw,4.25rem)] [clip-path:polygon(0_0,94%_0,94%_12%,100%_12%,100%_65%,94%_65%,94%_100%,0_100%)]">
              <span aria-hidden className="absolute top-6 right-8 h-16 w-16 border-t-4 border-r-4 border-surface" />
              <span aria-hidden className="absolute bottom-6 left-6 h-16 w-4 border-y-4 border-l-4 border-focus" />
              <h3 className="text-4xl font-semibold tracking-tight xl:text-[clamp(3.25rem,4.45vw,4rem)] 2xl:text-[clamp(4rem,3.5vw,5.5rem)]">
                {SERVICES.primary.name}
              </h3>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-white 2xl:max-w-[27vw] 2xl:text-[clamp(1.125rem,1vw,1.5rem)]">{SERVICES.primary.summary}</p>
              <span aria-hidden className="absolute right-[16%] bottom-8 flex h-12 w-20 items-center justify-end border-t-2 border-white/70 pr-1 2xl:right-[14%] 2xl:bottom-[2.6vw] 2xl:h-16 2xl:w-28">
                <ArrowRight size={28} />
              </span>
          </article>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-charcoal/90">{SERVICES.body}</p>
          <PendingAction
            label={
              <>
                <span className="flex items-center gap-3">
                  <span aria-hidden className="inline-block h-8 w-3 border-y-3 border-l-3 border-silver" />
                  {SERVICES.cta}
                </span>
                <ArrowRight size={24} aria-hidden />
              </>
            }
            title={PENDING.page.title}
            message={PENDING.page.message}
            className="mt-3 flex min-h-16 w-full items-center justify-between gap-5 bg-ink px-5 text-lg font-semibold text-white transition-colors hover:bg-charcoal sm:w-auto sm:min-w-[21rem]"
          />
        </div>
        <div className="mt-12 xl:relative xl:mt-0 xl:min-h-[41.75rem]">
          <ul className="grid gap-5 sm:grid-cols-2 xl:block">
            {SERVICES.secondary.map((service, index) => (
              <li
                key={service.name}
                style={MODULE_TEXTURES[index]}
                data-b-reveal="step"
                data-b-delay={String(index + 1)}
                className={`relative min-h-44 p-7 shadow-[10px_10px_0_rgba(16,30,51,0.08)] xl:absolute xl:p-8 2xl:p-[clamp(2rem,2vw,3.25rem)] ${MODULE_STYLES[index]}`}
              >
                {index === SERVICES.secondary.length - 1 && (
                  <WalnutSliver className="absolute inset-y-0 right-0 w-5 xl:w-14 2xl:w-[3.5vw]" />
                )}
                {index !== SERVICES.secondary.length - 1 && (
                  <span aria-hidden className="absolute top-4 right-4 h-8 w-8 border-t-3 border-r-3 border-current opacity-40" />
                )}
                {index !== 1 && (
                  <span aria-hidden className="absolute bottom-4 left-4 h-8 w-3 border-y-3 border-l-3 border-current opacity-40" />
                )}
                <h3 className="max-w-64 text-2xl leading-tight font-semibold xl:text-[clamp(1.5rem,2.2vw,2rem)] 2xl:max-w-[18vw] 2xl:text-[clamp(2rem,1.7vw,2.625rem)]">{service.name}</h3>
                <p className="mt-3 max-w-64 text-base leading-relaxed opacity-80 2xl:max-w-[17vw] 2xl:text-[clamp(1rem,1vw,1.375rem)]">{service.summary}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
