import { ArrowUpRight } from "lucide-react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { TileMotif, type Tile } from "./TileMotif";
import { LINKS, faqs, insights } from "./content";

const articleTiles: Tile[] = [
  ["sq", "navy"], ["sq", "navy"], ["qtr", "navy"], ["_"], ["_"],
  ["sq", "electric"], ["sq", "electric"], ["sq", "electric"], ["qbl", "amber"], ["_"],
  ["tl", "navy"], ["sq", "electric"], ["br", "electric"], ["_"], ["dot", "electric"],
  ["_"], ["qbr", "navy"], ["_"], ["sq", "sky"], ["qtl", "electric"],
];

export function Insights() {
  return (
    <section id="insights" aria-labelledby="ins-title" className="section-y bg-sky">
      <div className="shell">
        <h2 id="ins-title" className="display-xl max-w-3xl text-navy" data-reveal>
          {insights.heading}
        </h2>
        <a
          href={LINKS.blog}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-14 grid overflow-hidden rounded-md bg-paper transition-shadow duration-500 hover:shadow-panel lg:grid-cols-12"
          data-reveal
        >
          <div className="relative flex items-center justify-center overflow-hidden bg-paper p-10 lg:col-span-5 lg:border-r lg:border-border">
            <div className="w-full max-w-xs transition-transform duration-1000 ease-[var(--ease-out)] group-hover:scale-105">
              <TileMotif tiles={articleTiles} cols={5} />
            </div>
          </div>
          <div className="flex flex-col justify-between gap-10 p-8 sm:p-12 lg:col-span-7">
            <div>
              <h3 className="display-lg text-navy">{insights.title}</h3>
              <p className="lede mt-6 text-muted-foreground">{insights.body}</p>
            </div>
            <span className="inline-flex items-center gap-3 text-[0.9375rem] font-semibold text-navy">
              <span className="link-underline">{insights.cta}</span>
              <span className="grid size-10 place-items-center rounded-full bg-navy text-paper transition-colors duration-300 group-hover:bg-electric">
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </span>
          </div>
        </a>
      </div>
    </section>
  );
}

export function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="section-y bg-paper">
      <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-4">
          <h2 id="faq-title" className="display-xl text-navy lg:sticky lg:top-32" data-reveal>
            {faqs.heading}
          </h2>
        </div>
        <Accordion type="single" collapsible defaultValue="faq-0" className="border-t border-navy lg:col-span-7 lg:col-start-6" data-reveal>
          {faqs.items.map((f, i) => (
            <AccordionItem key={f.q} value={`faq-${i}`} className="border-border">
              <AccordionTrigger className="gap-6 py-7 text-left text-lg font-semibold text-navy hover:no-underline sm:text-xl [&>svg]:size-5 [&>svg]:text-electric">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="body-copy max-w-2xl pb-8 text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
