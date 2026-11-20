import { cn } from "@/lib/utils";

const toneClass = {
  navy: "bg-navy",
  electric: "bg-electric",
  amber: "bg-amber",
  sky: "bg-sky",
  paper: "bg-paper",
};

const shapeStyle = {
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

export function TileMotif({ tiles, cols, className, tileClassName }) {
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
