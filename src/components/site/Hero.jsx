import { useEffect, useRef } from "react";
import { ArrowDown, ArrowRight } from "lucide-react";
import torontoTowers from "@/assets/toronto-towers.webp";
import { Button } from "@/components/ui/button";
import { TileMotif } from "./TileMotif";
import { hero, proof } from "./content";

const heroTiles = [
  ["_"], ["_"], ["qbr", "amber"], ["_"],
  ["_"], ["tl", "electric"], ["sq", "electric"], ["qbl", "sky"],
  ["sq", "sky"], ["sq", "electric"], ["br", "electric"], ["_"],
  ["_"], ["qtr", "electric"], ["_"], ["dot", "amber"],
];

export function Hero() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      el.style.setProperty("--mx", x.toFixed(3));
      el.style.setProperty("--my", y.toFixed(3));
    };
    el.addEventListener("pointermove", onMove);
    return () => el.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <section id="top" aria-labelledby="hero-title" className="on-navy relative overflow-hidden bg-hero text-paper pt-18 lg:pt-20">
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-60" />
      <NetworkLines />
      <div ref={ref} className="shell relative flex min-h-[calc(100svh-4.5rem)] flex-col justify-between gap-8 py-8 lg:min-h-[calc(100svh-5rem)] lg:py-10">
        <div className="my-auto grid items-center gap-8 lg:grid-cols-12 lg:gap-8">
          <div className="relative z-10 lg:col-span-7">
            <p className="fade-up eyebrow flex items-center gap-3 text-sky" style={{ animationDelay: "0.1s" }}>
              <span aria-hidden="true" className="size-3 shrink-0 rounded-bl-full bg-amber" />
              {hero.brand}
            </p>
            <h1 id="hero-title" className="display-hero mt-4 text-paper">
              <span className="mask-line"><span style={{ animationDelay: "0.15s" }}>AI Services</span></span>
              <span className="mask-line"><span style={{ animationDelay: "0.27s" }}>in <span className="text-amber">Canada</span></span></span>
            </h1>
            <p className="fade-up lede mt-5 max-w-xl text-sky" style={{ animationDelay: "0.55s" }}>{hero.subtitle}</p>
            <div className="fade-up mt-7 flex flex-wrap items-center gap-4" style={{ animationDelay: "0.7s" }}>
              <Button asChild variant="amber" size="lg" className="lg:h-12 lg:px-7">
                <a href="#enquiry">{hero.cta}<ArrowRight className="size-4" /></a>
              </Button>
              <a href="#starting-point" className="group inline-flex items-center gap-3 text-sm font-semibold text-paper/85 hover:text-paper">
                <span className="grid size-10 place-items-center rounded-full border border-paper/30 transition-colors group-hover:border-amber group-hover:text-amber">
                  <ArrowDown className="size-4" />
                </span>
                <span className="link-underline">Find Your Starting Point</span>
              </a>
            </div>
          </div>
          <div className="relative lg:col-span-5">
            <div className="relative mx-auto aspect-square max-h-[340px] w-full max-w-sm sm:max-h-[400px] lg:max-h-[440px] lg:max-w-none">
              <div
                className="fade-up absolute inset-y-0 right-0 w-[78%] overflow-hidden rounded-tl-[7rem] lg:rounded-tl-[9rem] shadow-panel"
                style={{ animationDelay: "0.35s", transform: "translate3d(calc(var(--mx,0) * -14px), calc(var(--my,0) * -14px), 0)", transition: "transform 0.6s var(--ease-out)" }}
              >
                <img src={torontoTowers} alt="Glass office towers in Toronto's financial district at dusk" width={1024} height={1536} fetchPriority="high" className="h-[112%] w-full object-cover" data-parallax="0.12" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
              </div>
              <div className="absolute -left-2 bottom-6 w-[42%] sm:-left-6" style={{ transform: "translate3d(calc(var(--mx,0) * 22px), calc(var(--my,0) * 22px), 0)", transition: "transform 0.6s var(--ease-out)" }}>
                <TileMotif tiles={heroTiles} cols={4} className="fade-up" />
              </div>
              <div aria-hidden="true" className="absolute -top-3 right-[70%] size-14 rounded-br-full bg-amber/90 animate-drift" />
            </div>
          </div>
        </div>
        <div className="relative z-10 border-t border-paper/15 pt-5 lg:pt-6">
          <div className="grid gap-6 md:grid-cols-[1.2fr_2fr] md:items-end">
            <div>
              <h2 className="text-base font-semibold text-paper">{proof.heading}</h2>
              <p className="mt-0.5 text-sm italic text-sky/70">{proof.note}</p>
            </div>
            <dl className="grid grid-cols-3 gap-4 sm:gap-8">
              {proof.stats.map((s) => (
                <div key={s.label} className="flex flex-col border-l border-paper/15 pl-4 sm:pl-6">
                  <dt className="order-2 mt-1 text-xs font-medium tracking-wide text-sky/80 sm:text-sm">{s.label}</dt>
                  <dd className="display-md order-1 text-paper tabular-nums">
                    <span data-count={s.value}>{s.value.toLocaleString("en-CA")}</span>
                    <span className="text-amber">{s.suffix}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

function NetworkLines() {
  const nodes = [
    [120, 140], [320, 90], [520, 210], [760, 120], [980, 260], [1220, 150], [1380, 320],
    [220, 420], [460, 520], [700, 430], [940, 560], [1160, 470],
  ];
  const links = [
    [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [0, 7], [7, 8], [8, 9], [9, 10], [10, 11], [2, 8], [4, 10], [3, 9], [5, 11],
  ];
  return (
    <svg aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full opacity-40" viewBox="0 0 1440 700" preserveAspectRatio="xMidYMid slice">
      {links.map(([a, b], i) => {
        const p1 = nodes[a] ?? [0, 0];
        const p2 = nodes[b] ?? [0, 0];
        return <line key={i} x1={p1[0]} y1={p1[1]} x2={p2[0]} y2={p2[1]} stroke="var(--electric)" strokeWidth="1" strokeDasharray="4 8" className="animate-dash" style={{ animationDuration: `${8 + (i % 5)}s` }} />;
      })}
      {nodes.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="3" fill={i % 4 === 0 ? "var(--amber)" : "var(--sky)"} className="animate-pulse-node" style={{ animationDelay: `${(i % 6) * 0.4}s`, transformOrigin: `${x}px ${y}px` }} />
      ))}
    </svg>
  );
}
