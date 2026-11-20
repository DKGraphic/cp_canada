import { ArrowUpRight } from "lucide-react";

import montrealFacade from "@/assets/montreal-facade.webp";
import { LINKS, caseStudies, industries } from "./content";

export function Industries() {
  return (
    <section id="industries" aria-labelledby="ind-title" className="on-navy relative overflow-hidden bg-navy-gradient text-paper">
      <div className="grid lg:grid-cols-12">
        <div className="relative h-72 overflow-hidden sm:h-96 lg:col-span-5 lg:h-auto">
          <img
            src={montrealFacade}
            alt="Geometric facade of a modern building in Montréal"
            width={1024}
            height={1536}
            loading="lazy"
            className="absolute inset-0 h-[120%] w-full object-cover"
            data-parallax="0.18"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-navy/80 lg:to-navy" />
        </div>
        <div className="section-y px-[clamp(1.25rem,4vw,3rem)] lg:col-span-7 lg:pl-16 xl:pr-[max(3rem,calc((100vw-84rem)/2+3rem))]">
          <h2 id="ind-title" className="display-xl text-paper" data-reveal>
            {industries.heading}
          </h2>
          <p className="lede placeholder-box mt-8 max-w-2xl p-5 text-sky" data-reveal>
            {industries.intro}
          </p>
          <ul className="mt-12 divide-y divide-paper/15 border-y border-paper/15" data-stagger>
            {industries.items.map((it, i) => (
              <li key={i} className="group grid gap-3 py-7 sm:grid-cols-[3rem_1fr_1.4fr] sm:items-baseline sm:gap-6">
                <span aria-hidden="true" className="size-3 rounded-tr-full bg-amber transition-transform duration-500 group-hover:rotate-90" />
                <h3 className="text-xl font-semibold text-paper">{it.name}</h3>
                <p className="text-sky/80">{it.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function CaseStudies() {
  return (
    <section id="case-studies" aria-labelledby="cs-title" className="section-y overflow-hidden bg-paper">
      <div className="shell">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 id="cs-title" className="display-xl max-w-2xl text-navy" data-reveal>
            {caseStudies.heading}
          </h2>
          <span aria-hidden="true" className="flex gap-1.5">
            <span className="size-4 bg-navy" />
            <span className="size-4 rounded-tr-full bg-electric" />
            <span className="size-4 rounded-full bg-amber" />
          </span>
        </div>
      </div>
      <div className="mt-14 overflow-x-auto pb-4 [scrollbar-width:none] lg:overflow-visible">
        <ol
          data-hscroll
          className="shell flex snap-x snap-mandatory gap-6 lg:grid lg:grid-cols-3 lg:snap-none"
        >
          {caseStudies.items.map((c, i) => (
            <li
              key={c.title}
              className="group relative flex min-w-[82%] snap-start flex-col justify-between overflow-hidden rounded-md border border-border bg-paper p-8 transition-[border-color,background-color] duration-500 hover:border-navy hover:bg-sky sm:min-w-[60%] lg:min-w-0 lg:p-10"
              style={{ minHeight: "26rem" }}
            >
              <div
                aria-hidden="true"
                className="absolute right-0 top-0 h-24 w-24 transition-transform duration-700 group-hover:scale-125"
              >
                <div
                  className={
                    i === 0
                      ? "h-full w-full rounded-bl-full bg-sky group-hover:bg-paper"
                      : i === 1
                        ? "h-full w-full bg-sky group-hover:bg-paper"
                        : "h-full w-full bg-sky group-hover:bg-paper"
                  }
                  style={i === 1 ? { clipPath: "polygon(0 0,100% 0,100% 100%)" } : i === 2 ? { borderBottomLeftRadius: "100%", borderTopLeftRadius: "0" } : undefined}
                />
              </div>
              <div className="relative">
                <p className="eyebrow text-electric">{c.meta}</p>
                <h3 className="display-md mt-6 text-navy">{c.title}</h3>
                <p className="body-copy placeholder-box mt-6 p-4 text-muted-foreground">{c.body}</p>
              </div>
              <a
                href={LINKS.caseStudies}
                target="_blank"
                rel="noopener noreferrer"
                className="relative mt-10 inline-flex items-center gap-3 text-[0.9375rem] font-semibold text-navy"
              >
                <span className="link-underline">{c.cta}</span>
                <span className="grid size-9 place-items-center rounded-full bg-navy text-paper transition-colors group-hover:bg-electric">
                  <ArrowUpRight className="size-4" />
                </span>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
