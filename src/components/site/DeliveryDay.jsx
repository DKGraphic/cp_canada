import { useEffect, useState } from "react";
import { Clock3 } from "lucide-react";
import vancouverDawn from "@/assets/vancouver-dawn.webp";
import { cn } from "@/lib/utils";
import { deliveryDay } from "./content";

const kindStyle = {
  india: { bar: "bg-electric", dot: "bg-electric" },
  shared: { bar: "bg-amber", dot: "bg-amber" },
  canada: { bar: "bg-sky", dot: "bg-sky" },
  evening: { bar: "bg-paper/25", dot: "bg-paper/40" },
};

const TICKS = [
  { h: 0, label: "12 am" },
  { h: 6, label: "6 am" },
  { h: 12, label: "12 pm" },
  { h: 18, label: "6 pm" },
  { h: 24, label: "12 am" },
];

function useEasternNow() {
  const [now, setNow] = useState(null);
  useEffect(() => {
    const tick = () => {
      const parts = new Intl.DateTimeFormat("en-CA", { timeZone: "America/Toronto", hour: "numeric", minute: "2-digit", hour12: false }).formatToParts(new Date());
      const h = Number(parts.find((p) => p.type === "hour")?.value ?? 0) % 24;
      const m = Number(parts.find((p) => p.type === "minute")?.value ?? 0);
      const label = new Intl.DateTimeFormat("en-CA", { timeZone: "America/Toronto", hour: "numeric", minute: "2-digit" }).format(new Date());
      setNow({ hours: h + m / 60, label });
    };
    tick();
    const id = window.setInterval(tick, 60_000);
    return () => window.clearInterval(id);
  }, []);
  return now;
}

export function DeliveryDay() {
  const now = useEasternNow();
  const [active, setActive] = useState(null);

  useEffect(() => {
    if (now && active === null) {
      const i = deliveryDay.periods.findIndex((p) => now.hours >= p.start && now.hours < p.end);
      setActive(i >= 0 ? i : 0);
    }
  }, [now, active]);

  const current = active ?? 0;

  return (
    <section id="delivery" aria-labelledby="delivery-title" className="on-navy relative overflow-hidden bg-navy text-paper">
      <div className="relative h-[42vh] min-h-72 overflow-hidden">
        <img src={vancouverDawn} alt="Vancouver waterfront skyline at sunrise" width={1536} height={1024} loading="lazy" className="absolute inset-0 h-[130%] w-full object-cover" data-parallax="0.25" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/10 via-navy/30 to-navy" />
      </div>
      <div className="shell relative -mt-28 pb-[clamp(4.5rem,10vw,9rem)]">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <h2 id="delivery-title" className="display-xl text-paper lg:col-span-7" data-reveal>{deliveryDay.heading}</h2>
          <p className="lede text-sky lg:col-span-5" data-reveal>{deliveryDay.intro}</p>
        </div>
        <div className="mt-16" data-reveal>
          <div className="relative">
            <div className="flex h-14 overflow-hidden rounded-md" role="list" aria-label="24-hour timeline in Eastern Time">
              {deliveryDay.periods.map((p, i) => (
                <button key={p.label} type="button" role="listitem" aria-pressed={current === i} aria-label={`${p.time}: ${p.label}`} onClick={() => setActive(i)} onMouseEnter={() => setActive(i)} className={cn("relative h-full transition-[opacity,filter] duration-500", kindStyle[p.kind].bar, current === i ? "opacity-100" : "opacity-40 hover:opacity-70")} style={{ width: `${((p.end - p.start) / 24) * 100}%` }}>
                  <span className="sr-only">{p.label}</span>
                </button>
              ))}
            </div>
            {now && (
              <div className="pointer-events-none absolute -top-3 bottom-0 flex flex-col items-center" style={{ left: `${(now.hours / 24) * 100}%`, transform: "translateX(-50%)" }}>
                <span className="whitespace-nowrap rounded-full bg-paper px-2 py-0.5 text-[0.6875rem] font-semibold text-navy">{now.label} ET</span>
                <span className="w-0.5 flex-1 bg-paper" />
              </div>
            )}
          </div>
          <div className="relative mt-3 h-5 text-xs text-sky/70">
            {TICKS.map((t) => (
              <span key={t.h + t.label} className="absolute" style={{ left: `${(t.h / 24) * 100}%`, transform: t.h === 0 ? "none" : t.h === 24 ? "translateX(-100%)" : "translateX(-50%)" }}>{t.label}</span>
            ))}
          </div>
        </div>
        <ol className="mt-12 grid gap-px overflow-hidden rounded-md bg-paper/10 md:grid-cols-2 xl:grid-cols-4" data-stagger>
          {deliveryDay.periods.map((p, i) => (
            <li key={p.label}>
              <button type="button" onClick={() => setActive(i)} onMouseEnter={() => setActive(i)} onFocus={() => setActive(i)} aria-pressed={current === i} className={cn("flex h-full w-full flex-col gap-4 p-7 text-left transition-colors duration-500", current === i ? "bg-paper text-navy" : "bg-navy text-paper hover:bg-navy-deep")}>
                <span className="flex items-center gap-3">
                  <span aria-hidden="true" className={cn("size-3 rounded-full", kindStyle[p.kind].dot)} />
                  <span className={cn("text-sm font-semibold tabular-nums", current === i ? "text-electric" : "text-sky")}>{p.time}</span>
                </span>
                <span className={cn("display-md", current === i ? "text-navy" : "text-paper")}>{p.label}</span>
                <span className={cn("body-copy", current === i ? "text-ink" : "text-sky/80")}>{p.body}</span>
              </button>
            </li>
          ))}
        </ol>
        <p className="mt-8 flex max-w-3xl items-start gap-3 text-sm leading-relaxed text-sky/80" data-reveal>
          <Clock3 aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-amber" />
          {deliveryDay.note}
        </p>
      </div>
    </section>
  );
}
