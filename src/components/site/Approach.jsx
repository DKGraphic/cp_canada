import { ArrowUpRight, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";
import { LINKS, approach } from "./content";

export function Approach() {
  const [identify, ...loop] = approach.steps;
  return (
    <section id="approach" aria-labelledby="approach-title" className="section-y relative bg-paper">
      <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <h2 id="approach-title" className="display-xl text-navy" data-reveal>{approach.heading}</h2>
            <div className="mt-10 rounded-md bg-sky p-7 sm:p-8" data-reveal>
              <p className="body-copy text-ink">{approach.fdeBefore}<strong className="font-semibold text-navy">{approach.fdeStrong}</strong>{approach.fdeAfter}</p>
              <a href={LINKS.services} target="_blank" rel="noopener noreferrer" className="group mt-6 inline-flex items-center gap-3 text-[0.9375rem] font-semibold text-navy">
                <span className="link-underline">{approach.cta}</span>
                <span className="grid size-9 place-items-center rounded-full bg-electric text-paper transition-colors group-hover:bg-navy"><ArrowUpRight className="size-4" /></span>
              </a>
            </div>
          </div>
        </div>
        <div className="relative lg:col-span-6 lg:col-start-7" data-progress-root>
          <div aria-hidden="true" className="absolute bottom-6 left-[1.4rem] top-6 w-px bg-border">
            <div data-progress-line className="h-full w-full origin-top bg-electric" />
          </div>
          <ol className="relative">
            {identify && <Step index={0} title={identify.title} body={identify.body} />}
            <li className="relative">
              <div aria-hidden="true" className="pointer-events-none absolute bottom-[3.5rem] right-0 top-[2.25rem] hidden w-10 rounded-r-2xl border-y-2 border-r-2 border-dashed border-amber sm:block">
                <span className="absolute -top-[7px] -left-1 size-3 rotate-45 border-b-2 border-l-2 border-amber bg-paper" />
                <span className="absolute -right-[13px] top-1/2 grid size-6 -translate-y-1/2 place-items-center rounded-full bg-amber text-navy"><RotateCcw className="size-3.5" /></span>
              </div>
              <ol className="sm:pr-16">
                {loop.map((s, i) => <Step key={s.title} index={i + 1} title={s.title} body={s.body} highlight={i === 0} />)}
              </ol>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

function Step({ index, title, body, highlight }) {
  return (
    <li className="group relative grid grid-cols-[2.8rem_1fr] gap-6 pb-14 last:pb-0" data-reveal>
      <span aria-hidden="true" className={cn("relative z-10 grid size-11 place-items-center rounded-full border-2 bg-paper transition-colors duration-500 group-hover:border-electric group-hover:bg-electric", highlight ? "border-amber" : "border-navy")}>
        <span className={cn("size-3 transition-colors duration-500 group-hover:bg-paper", index % 2 ? "rounded-tl-full bg-electric" : "bg-navy")} />
      </span>
      <div className="pt-1.5">
        <h3 className="display-md text-navy">{title}</h3>
        <p className="body-copy mt-3 max-w-md text-muted-foreground">{body}</p>
      </div>
    </li>
  );
}
