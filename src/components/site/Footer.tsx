import { ArrowUp, ArrowUpRight } from "lucide-react";

import logoWhite from "@/assets/changepond-logo-white.svg";
import { TileMotif, type Tile } from "./TileMotif";
import { LINKS, NAV, capabilities, footer, hero } from "./content";

const band: Tile[] = [
  ["sq", "electric"], ["qtr", "electric"], ["_"], ["bl", "amber"], ["sq", "sky"], ["qbl", "electric"],
  ["_"], ["sq", "electric"], ["tr", "electric"], ["dot", "amber"], ["qtl", "sky"], ["sq", "electric"],
  ["br", "electric"], ["_"], ["qbr", "amber"], ["sq", "electric"], ["_"], ["tl", "sky"],
  ["sq", "electric"], ["qtl", "electric"], ["_"], ["sq", "sky"],
];

export function Footer() {
  return (
    <footer className="on-navy relative overflow-hidden bg-navy-deep text-paper">
      <div className="shell grid gap-14 pt-20 pb-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="eyebrow text-amber">{footer.contactHeading}</p>
          <img src={logoWhite} alt="Changepond" width={198} height={15} loading="lazy" className="mt-8 h-4 w-auto" />
          <p className="mt-6 text-sm font-semibold tracking-[0.2em] text-paper">{footer.brand}</p>
          <p className="mt-2 text-xs font-medium tracking-[0.28em] text-sky/70">{footer.tagline}</p>
          <a
            href="#enquiry"
            className="group mt-10 inline-flex items-center gap-3 text-[0.9375rem] font-semibold text-paper"
          >
            <span className="link-underline">{hero.cta}</span>
            <span className="grid size-9 place-items-center rounded-full bg-amber text-navy transition-colors group-hover:bg-paper">
              <ArrowUpRight className="size-4" />
            </span>
          </a>
        </div>

        <nav aria-label="Capabilities" className="lg:col-span-3 lg:col-start-6">
          <p className="eyebrow text-sky/60">{capabilities.heading}</p>
          <ul className="mt-6 flex flex-col gap-3">
            {capabilities.items.map((c) => (
              <li key={c.id}>
                <a href={`#${c.id}`} className="link-underline text-[0.9375rem] text-sky hover:text-paper">
                  {c.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="On this page" className="lg:col-span-2">
          <p className="eyebrow text-sky/60">Changepond Canada</p>
          <ul className="mt-6 flex flex-col gap-3">
            {NAV.map((n) => (
              <li key={n.label}>
                <a href={n.href} className="link-underline text-[0.9375rem] text-sky hover:text-paper">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Legal" className="lg:col-span-2">
          <p className="eyebrow text-sky/60">Changepond</p>
          <ul className="mt-6 flex flex-col gap-3">
            {[
              { label: "changepond.com", href: LINKS.global },
              { label: "Privacy Policy", href: LINKS.privacy },
              { label: "Cookie Policy", href: LINKS.cookies },
              { label: "Terms & Conditions", href: LINKS.terms },
            ].map((l) => (
              <li key={l.label}>
                <a href={l.href} target="_blank" rel="noopener noreferrer" className="link-underline text-[0.9375rem] text-sky hover:text-paper">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="shell flex flex-col-reverse items-start justify-between gap-6 border-t border-paper/10 py-8 sm:flex-row sm:items-center">
        <p className="text-sm text-sky/60">© {new Date().getFullYear()} Changepond. All rights reserved.</p>
        <a href="#top" className="group inline-flex items-center gap-2 text-sm font-semibold text-sky hover:text-paper">
          Back to top
          <span className="grid size-8 place-items-center rounded-full border border-paper/25 transition-colors group-hover:border-amber group-hover:text-amber">
            <ArrowUp className="size-4" />
          </span>
        </a>
      </div>

      <TileMotif tiles={band} cols={22} className="opacity-90" />
    </footer>
  );
}
