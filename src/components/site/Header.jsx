import { useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import logoWhite from "@/assets/changepond-logo-white.svg";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { NAV, capabilities, hero, startingPoint } from "./content";

const SECTION_IDS = ["capabilities", "approach", "delivery", "engagement", "trust", "insights", "faq"];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileCapsOpen, setMobileCapsOpen] = useState(false);
  const [active, setActive] = useState(null);
  const [progress, setProgress] = useState(0);
  const megaRef = useRef(null);
  const closeTimer = useRef(undefined);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const els = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); }); },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!megaOpen) return;
    const onDown = (e) => { if (megaRef.current && !megaRef.current.contains(e.target)) setMegaOpen(false); };
    const onKey = (e) => e.key === "Escape" && setMegaOpen(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => { document.removeEventListener("mousedown", onDown); document.removeEventListener("keydown", onKey); };
  }, [megaOpen]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    const onKey = (e) => e.key === "Escape" && setMobileOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  const openMega = () => { window.clearTimeout(closeTimer.current); setMegaOpen(true); };
  const scheduleClose = () => { window.clearTimeout(closeTimer.current); closeTimer.current = window.setTimeout(() => setMegaOpen(false), 180); };
  const solid = scrolled || megaOpen;

  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,border-color] duration-500", solid ? "border-b border-paper/10 bg-navy/95 backdrop-blur-md" : "border-b border-transparent bg-transparent")}>
      <div className="on-navy shell flex h-[76px] items-center justify-between gap-6">
        <a href="#top" aria-label="Changepond Canada — back to top" className="flex shrink-0 flex-col gap-1.5 py-2">
          <img src={logoWhite} alt="Changepond" width={168} height={13} className="h-[13px] w-auto sm:h-[14px]" />
          <span className="text-[0.625rem] font-semibold tracking-[0.62em] text-sky">CANADA</span>
        </a>
        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) =>
            item.mega ? (
              <div key={item.label} ref={megaRef} className="relative" onMouseEnter={openMega} onMouseLeave={scheduleClose}>
                <button type="button" aria-expanded={megaOpen} aria-controls="mega-capabilities" onClick={() => setMegaOpen((v) => !v)} className={cn("group relative flex items-center gap-1.5 px-3 py-2 text-[0.9375rem] font-medium text-paper/85 transition-colors hover:text-paper", (active === "capabilities" || megaOpen) && "text-paper")}>
                  {item.label}
                  <ChevronDown className={cn("size-4 transition-transform duration-300", megaOpen && "rotate-180")} />
                  <NavIndicator on={active === "capabilities" || megaOpen} />
                </button>
                <div id="mega-capabilities" className={cn("fixed inset-x-0 top-[76px] origin-top border-b border-paper/10 bg-navy transition-[opacity,transform,visibility] duration-300", megaOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0")}>
                  <div className="shell grid gap-10 py-10 lg:grid-cols-[1fr_2.2fr]">
                    <div className="flex flex-col justify-between gap-6 border-r border-paper/10 pr-10">
                      <div>
                        <p className="eyebrow text-amber">{capabilities.heading}</p>
                        <p className="mt-4 text-[0.9375rem] leading-relaxed text-sky/90">{capabilities.intro}</p>
                      </div>
                      <a href="#starting-point" onClick={() => setMegaOpen(false)} className="link-underline inline-flex w-fit items-center gap-2 text-sm font-semibold text-paper">
                        {startingPoint.heading} <ArrowRight className="size-4" />
                      </a>
                    </div>
                    <ul className="grid grid-cols-2 gap-px bg-paper/10">
                      {capabilities.items.map((c) => (
                        <li key={c.id} className="bg-navy">
                          <a href={`#${c.id}`} onClick={() => setMegaOpen(false)} className="group/item flex h-full flex-col gap-2 p-6 transition-colors hover:bg-paper/5">
                            <span className="flex items-center justify-between gap-4 text-base font-semibold text-paper">
                              {c.name}
                              <ArrowUpRight className="size-4 shrink-0 text-amber opacity-0 transition-all duration-300 group-hover/item:translate-x-0.5 group-hover/item:opacity-100" />
                            </span>
                            <span className="text-sm text-sky/75">{c.heading}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ) : (
              <a key={item.label} href={item.href} className={cn("relative px-3 py-2 text-[0.9375rem] font-medium text-paper/85 transition-colors hover:text-paper", active === item.href.slice(1) && "text-paper")}>
                {item.label}
                <NavIndicator on={active === item.href.slice(1)} />
              </a>
            )
          )}
        </nav>
        <div className="flex items-center gap-3">
          <Button asChild variant="amber" size="pill" className="hidden sm:inline-flex">
            <a href="#enquiry">{hero.cta}<ArrowRight /></a>
          </Button>
          <button type="button" className="inline-flex size-11 items-center justify-center rounded-full border border-paper/30 text-paper lg:hidden" aria-label={mobileOpen ? "Close menu" : "Open menu"} aria-expanded={mobileOpen} aria-controls="mobile-nav" onClick={() => setMobileOpen((v) => !v)}>
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px">
        <div className="h-full origin-left bg-amber transition-transform duration-150" style={{ transform: `scaleX(${progress})` }} />
      </div>
      <div id="mobile-nav" className={cn("on-navy fixed inset-x-0 top-[76px] bottom-0 overflow-y-auto bg-navy transition-[opacity,visibility,transform] duration-300 lg:hidden", mobileOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-3 opacity-0")}>
        <nav aria-label="Mobile" className="shell flex flex-col py-6">
          {NAV.map((item) =>
            item.mega ? (
              <div key={item.label} className="border-b border-paper/10">
                <button type="button" aria-expanded={mobileCapsOpen} onClick={() => setMobileCapsOpen((v) => !v)} className="flex w-full items-center justify-between py-4 text-2xl font-semibold text-paper">
                  {item.label}
                  <ChevronDown className={cn("size-6 transition-transform", mobileCapsOpen && "rotate-180")} />
                </button>
                <div className={cn("grid transition-all duration-300", mobileCapsOpen ? "grid-rows-[1fr] pb-4" : "grid-rows-[0fr]")}>
                  <ul className="overflow-hidden">
                    {capabilities.items.map((c) => (
                      <li key={c.id}><a href={`#${c.id}`} onClick={() => setMobileOpen(false)} className="block py-2.5 pl-4 text-base text-sky">{c.name}</a></li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <a key={item.label} href={item.href} onClick={() => setMobileOpen(false)} className="border-b border-paper/10 py-4 text-2xl font-semibold text-paper">{item.label}</a>
            )
          )}
          <Button asChild variant="amber" size="xl" className="mt-8 w-full">
            <a href="#enquiry" onClick={() => setMobileOpen(false)}>{hero.cta}<ArrowRight /></a>
          </Button>
        </nav>
      </div>
    </header>
  );
}

function NavIndicator({ on }) {
  return <span aria-hidden="true" className={cn("absolute inset-x-3 -bottom-0.5 h-0.5 origin-left bg-amber transition-transform duration-300", on ? "scale-x-100" : "scale-x-0")} />;
}
