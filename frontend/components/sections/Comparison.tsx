import { Check, Minus } from "lucide-react";

const rows = [
  {
    option: "Dashboards",
    bestFor: "Deep analysis and historical reporting",
    weakness: "Too much work for a daily check",
    lapsa: false,
  },
  {
    option: "Agency reports",
    bestFor: "Monthly review and strategy calls",
    weakness: "Usually too slow for yesterday's changes",
    lapsa: false,
  },
  {
    option: "Spreadsheets",
    bestFor: "Custom tracking and one-off analysis",
    weakness: "Manual maintenance and fragile formulas",
    lapsa: false,
  },
  {
    option: "Lapsa",
    bestFor: "Daily operating decisions in Telegram",
    weakness: "Early access product; designed for focused briefs first",
    lapsa: true,
  },
];

export default function Comparison() {
  return (
    <section id="comparison" className="bg-zinc-950 py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Not another place to stare at charts.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-zinc-500">
            Lapsa sits between heavy analytics platforms and manual reporting:
            light enough to read daily, specific enough to be useful.
          </p>
        </div>

        <div className="mx-auto max-w-5xl overflow-hidden rounded-xl border border-zinc-800">
          <div className="grid grid-cols-[1fr_1.3fr_1.3fr_0.6fr] bg-zinc-900/80 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-zinc-500">
            <div>Option</div>
            <div>Best for</div>
            <div>Tradeoff</div>
            <div className="text-center">Daily fit</div>
          </div>
          {rows.map((row) => (
            <div key={row.option} className={`grid grid-cols-[1fr_1.3fr_1.3fr_0.6fr] items-center border-t border-zinc-800 px-4 py-4 text-sm ${row.lapsa ? "bg-orange-500/10" : "bg-zinc-950"}`}>
              <div className="font-semibold text-white">{row.option}</div>
              <div className="text-zinc-400">{row.bestFor}</div>
              <div className="text-zinc-500">{row.weakness}</div>
              <div className="flex justify-center">
                {row.lapsa ? (
                  <Check size={18} className="text-orange-400" />
                ) : (
                  <Minus size={18} className="text-zinc-600" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
