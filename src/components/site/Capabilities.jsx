import { ArrowRight, ArrowUpRight, Code2, Compass, Database, Workflow } from "lucide-react";
import { cn } from "@/lib/utils";
import { capabilities } from "./content";

const icons = {
  "ai-business-workflows": Workflow,
  "ai-software-engineering": Code2,
  "ai-strategy": Compass,
  "ai-data-engineering": Database,
};

export function Capabilities() {
  return (
    <section id="capabilities" aria-labelledby="cap-title" className="section-y relative overflow-hidden bg-sky">
      <div className="grid-lines-navy pointer-events-none absolute inset-0 opacity-70" />
      <div className="shell relative">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <h2 id="cap-title" className="display-xl text-navy lg:col-span-7" data-reveal>{capabilities.heading}</h2>
          <p className="lede text-ink lg:col-span-5" data-reveal>{capabilities.intro}</p>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-2" data-stagger>
          {capabilities.items.map((c, i) => {
            const Icon = icons[c.id];
            const featured = i === 0 || i === 3;
            return (
              <article key={c.id} id={c.id} className={cn("group relative flex flex-col overflow-hidden rounded-md p-8 transition-[transform,box-shadow] duration-500 hover:-translate-y-1 hover:shadow-panel sm:p-10", featured ? "bg-navy text-paper on-navy" : "bg-paper text-ink")}>
                <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-amber transition-transform duration-700 ease-[var(--ease-out)] group-hover:scale-x-100" />
                <span aria-hidden="true" className={cn("absolute -right-10 -top-10 size-36 rounded-bl-full transition-transform duration-700 group-hover:scale-110", featured ? "bg-electric/25" : "bg-sky")} />
                <div className="relative flex items-start justify-between gap-6">
                  <p className={cn("eyebrow", featured ? "text-amber" : "text-electric")}>{c.name}</p>
                  <span className={cn("grid size-12 shrink-0 place-items-center rounded-full", featured ? "bg-paper/10 text-paper" : "bg-navy text-paper")}>
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                </div>
                <h3 className={cn("display-md relative mt-8 max-w-md", featured ? "text-paper" : "text-navy")}>{c.heading}</h3>
                <div className={cn("relative mt-5 flex flex-col gap-4 body-copy", featured ? "text-sky" : "text-muted-foreground")}>
                  {c.paragraphs.map((p) => <p key={p}>{p}</p>)}
                </div>
                <div className="relative mt-auto pt-10">
                  <a href={c.href} {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})} className={cn("group/cta inline-flex items-center gap-3 text-[0.9375rem] font-semibold", featured ? "text-paper" : "text-navy")}>
                    <span className="link-underline">{c.cta}</span>
                    <span className={cn("grid size-9 shrink-0 place-items-center rounded-full transition-colors duration-300", featured ? "bg-amber text-navy group-hover/cta:bg-paper" : "bg-electric text-paper group-hover/cta:bg-navy")}>
                      {c.external ? <ArrowUpRight className="size-4" /> : <ArrowRight className="size-4" />}
                    </span>
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
