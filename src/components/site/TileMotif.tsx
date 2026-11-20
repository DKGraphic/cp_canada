import { cn } from "@/lib/utils";

/**
 * Geometric tile motif: a grid of squares, quarter-circles and triangles in brand colours.
 * Inspired by the reference design's maple-leaf tile composition.
 */
type Shape = "sq" | "qtl" | "qtr" | "qbl" | "qbr" | "tl" | "tr" | "bl" | "br" | "dot" | "_";
type Tone = "navy" | "electric" | "amber" | "sky" | "paper";

const toneClass: Record<Tone, string> = {
  navy: "bg-navy",
  electric: "bg-electric",
  amber: "bg-amber",
  sky: "bg-sky",
  paper: "bg-paper",
};

const shapeStyle: Record<Shape, React.CSSProperties> = {
  sq: {},
  qtl: { borderTopLeftRadius: "100%" },
  qtr: { borderTopRightRadius: "100%" },
  qbl: { borderBottomLeftRadius: "100%" },
  qbr: { borderBottomRightRadius: "100%" },
  tl: { clipPath: "polygon(0 0, 100% 0, 0 100%)" },
  tr: { clipPath: "polygon(0 0, 100% 0, 100% 100%)" },
  bl: { clipPath: "polygon(0 0, 100% 100%, 0 100%)" },
  br: { clipPath: "polygon(100% 0, 100% 100%, 0 100%)" },
  dot: { borderRadius: "100%", transform: "scale(0.42)" },
  _: {},
};

export type Tile = [Shape, Tone?];

export function TileMotif({
  tiles,
  cols,
  className,
  tileClassName,
}: {
  tiles: Tile[];
  cols: number;
  className?: string;
  tileClassName?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={cn("grid", className)}
      style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
    >
      {tiles.map(([shape, tone = "electric"], i) => (
        <div key={i} className="aspect-square">
          {shape !== "_" && (
            <div
              className={cn("h-full w-full transition-transform duration-700", toneClass[tone], tileClassName)}
              style={shapeStyle[shape]}
            />
          )}
        </div>
      ))}
    </div>
  );
}
