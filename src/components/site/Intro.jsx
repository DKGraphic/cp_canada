import { ArrowRight } from "lucide-react";
import teamWorkshop from "@/assets/team-workshop.webp";
import { intro, startingPoint } from "./content";

export function Intro() {
  return (
    <section aria-labelledby="intro-title" className="section-y relative bg-paper">
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6">
            <h2 id="intro-title" className="display-xl text-navy" data-mask>
              {intro.heading.split(" ").reduce((acc, w, i) => {
                const line = Math.floor(i / 3);
                (acc[line] = acc[line] || []).push(w);
                return acc;
              }, []).map((words, i) => (
                <span key={i} className="block overflow-hidden pb-[0.06em]">
                  <span data-mask-line className="block">{words.join(" ")}</span>
                </span>
              ))}
            </h2>
          </div>
          <div className="flex flex-col gap-6 lg:col-span-5 lg:col-start-8 lg:pt-4" data-stagger>
            <p className="lede text-ink">{intro.paragraphs[0]}</p>
            <p className="display-md border-l-2 border-amber pl-5 text-navy">{intro.paragraphs[1]}</p>
            <p className="body-copy text-muted-foreground">{intro.paragraphs[2]}</p>
          </div>
        </div>
        <div id="starting-point" className="mt-20 grid gap-10 lg:mt-28 lg:grid-cols-12 lg:gap-8">
          <figure className="img-zoom relative order-2 overflow-hidden rounded-br-[6rem] lg:order-1 lg:col-span-5" data-reveal>
            <img src={teamWorkshop} alt="A Canadian team reviewing a workflow diagram in a Toronto office" width={1536} height={1024} loading="lazy" className="aspect-[4/5] h-full w-full object-cover lg:aspect-auto" />
            <div aria-hidden="true" className="absolute left-0 top-0 h-16 w-16 bg-amber" style={{ clipPath: "polygon(0 0,100% 0,0 100%)" }} />
          </figure>
          <div className="order-1 lg:order-2 lg:col-span-7 lg:pl-8">
            <h3 className="display-lg text-navy" data-reveal>{startingPoint.heading}</h3>
            <div className="mt-10">
              <div aria-hidden="true" className="hidden grid-cols-[1.15fr_1fr_auto] gap-6 border-b-2 border-navy pb-3 sm:grid">
                <span className="eyebrow text-navy">{startingPoint.colA}</span>
                <span className="eyebrow text-navy">{startingPoint.colB}</span>
                <span aria-hidden="true" className="w-10" />
              </div>
              <div data-stagger>
                {startingPoint.rows.map((r) => (
                  <a key={r.target} href={`#${r.target}`} className="group relative grid grid-cols-[1fr_auto] items-center gap-x-6 gap-y-2 border-b border-border py-6 transition-colors sm:grid-cols-[1.15fr_1fr_auto]">
                    <span aria-hidden="true" className="absolute inset-0 -z-0 origin-left scale-x-0 bg-sky transition-transform duration-500 ease-[var(--ease-out)] group-hover:scale-x-100 group-focus-visible:scale-x-100" />
                    <span className="relative col-span-2 text-lg font-medium text-ink sm:col-span-1">{r.want}</span>
                    <span className="relative text-base font-semibold text-electric sm:pl-0">{r.explore}</span>
                    <span aria-hidden="true" className="relative grid size-10 place-items-center rounded-full border border-navy/20 text-navy transition-all duration-300 group-hover:border-navy group-hover:bg-navy group-hover:text-paper">
                      <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
