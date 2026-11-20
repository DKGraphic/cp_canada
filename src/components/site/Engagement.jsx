import { Accessibility, FileCheck2, Lock, MailCheck, MapPinned, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { TileMotif } from "./TileMotif";
import { engagement, perspectives, trust, why } from "./content";

const glyphs = [
  { cls: "bg-navy" },
  { cls: "bg-electric rounded-tl-full" },
  { cls: "bg-amber", clip: "polygon(0 0,100% 100%,0 100%)" },
];

export function Engagement() {
  return (
    <section id="engagement" aria-labelledby="eng-title" className="section-y bg-paper">
      <div className="shell">
        <div className="grid gap-6 lg:grid-cols-12">
          <h2 id="eng-title" className="display-xl text-navy lg:col-span-6" data-reveal>{engagement.heading}</h2>
        </div>
        <ul className="mt-14 border-b border-border" data-stagger>
          {engagement.items.map((m, i) => {
            const glyph = glyphs[i % glyphs.length] ?? { cls: "bg-navy" };
            return (
              <li key={m.title} className="group relative grid gap-4 overflow-hidden border-t border-border py-10 sm:grid-cols-[4rem_1fr] lg:grid-cols-[5rem_1.1fr_1fr] lg:items-center lg:gap-10">
                <span aria-hidden="true" className="absolute inset-0 origin-bottom scale-y-0 bg-sky transition-transform duration-500 ease-[var(--ease-out)] group-hover:scale-y-100" />
                <span aria-hidden="true" className={cn("relative size-10 transition-transform duration-500 group-hover:rotate-90", glyph.cls)} style={glyph.clip ? { clipPath: glyph.clip } : undefined} />
                <h3 className="display-lg relative text-navy">{m.title}</h3>
                <p className="lede relative text-muted-foreground sm:col-start-2 lg:col-start-auto">{m.body}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

const trustIcons = {
  pipeda: ShieldCheck,
  law25: FileCheck2,
  casl: MailCheck,
  aoda: Accessibility,
  residency: MapPinned,
  security: Lock,
};

export function Trust() {
  return (
    <section id="trust" aria-labelledby="trust-title" className="section-y relative overflow-hidden bg-sky">
      <div className="shell">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <h2 id="trust-title" className="display-xl text-navy lg:col-span-7" data-reveal>{trust.heading}</h2>
          <p className="lede text-ink lg:col-span-5" data-reveal>{trust.intro}</p>
        </div>
        <ul className="mt-16 grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2 lg:grid-cols-3" data-stagger>
          {trust.items.map((t) => {
            const Icon = trustIcons[t.key] ?? ShieldCheck;
            return (
              <li key={t.key} className="group relative flex flex-col gap-5 bg-paper p-8 transition-colors duration-500 hover:bg-navy">
                <Icon aria-hidden="true" className="size-7 text-electric transition-colors duration-500 group-hover:text-amber" strokeWidth={1.6} />
                <h3 className="text-xl font-semibold text-navy transition-colors duration-500 group-hover:text-paper">{t.title}</h3>
                <p className="body-copy text-muted-foreground transition-colors duration-500 group-hover:text-sky">{t.body}</p>
                {t.placeholder && <p className="placeholder-box p-3 text-sm text-muted-foreground transition-colors duration-500 group-hover:text-sky">{t.placeholder}</p>}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

const whyTiles = [
  ["sq", "electric"], ["qtr", "electric"], ["_"],
  ["sq", "electric"], ["sq", "sky"], ["qbr", "amber"],
  ["bl", "electric"], ["_"], ["dot", "sky"],
];

export function Why() {
  return (
    <section aria-labelledby="why-title" className="on-navy section-y relative overflow-hidden bg-navy-gradient text-paper">
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-50" />
      <div className="shell relative grid gap-14 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <h2 id="why-title" className="display-xl text-paper" data-reveal>{why.heading}</h2>
          <div className="mt-14 hidden w-56 lg:block" data-parallax="0.3">
            <TileMotif tiles={whyTiles} cols={3} />
          </div>
        </div>
        <ul className="grid gap-px bg-paper/10 sm:grid-cols-2 lg:col-span-7" data-stagger>
          {why.items.map((w) => (
            <li key={w.title} className="group relative bg-navy p-8 transition-colors duration-500 hover:bg-navy-deep sm:p-10">
              <span aria-hidden="true" className="block h-1 w-10 bg-amber transition-[width] duration-500 ease-[var(--ease-out)] group-hover:w-20" />
              <h3 className="display-md mt-8 text-paper">{w.title}</h3>
              <p className="body-copy mt-4 text-sky/85">{w.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Perspectives() {
  return (
    <section aria-labelledby="persp-title" className="section-y bg-paper">
      <div className="shell">
        <h2 id="persp-title" className="eyebrow text-electric" data-reveal>{perspectives.heading}</h2>
        <ul className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4" data-stagger>
          {perspectives.logos.map((l, i) => (
            <li key={i} className="placeholder-box grid h-24 place-items-center text-sm font-medium text-muted-foreground transition-colors hover:text-navy">{l}</li>
          ))}
        </ul>
        <figure className="mt-16 grid gap-10 lg:grid-cols-12" data-reveal>
          <span aria-hidden="true" className="display-hero text-amber lg:col-span-1">"</span>
          <div className="lg:col-span-10">
            <blockquote className="display-lg text-navy">{perspectives.quote}</blockquote>
            <figcaption className="mt-8 flex items-center gap-4">
              <span aria-hidden="true" className="size-12 shrink-0 rounded-tl-full bg-sky" />
              <span>
                <span className="block font-semibold text-navy">{perspectives.name}</span>
                <span className="block text-sm text-muted-foreground">{perspectives.role}</span>
              </span>
            </figcaption>
          </div>
        </figure>
      </div>
    </section>
  );
}
