import { AlertTriangle, CheckCircle2, Clock, LineChart } from "lucide-react";

const metrics = [
  { label: "Revenue", value: "€4,812", detail: "+6% vs 7-day avg" },
  { label: "Orders", value: "86", detail: "flat vs yesterday" },
  { label: "AOV", value: "€55.95", detail: "healthy range" },
  { label: "Paid ROAS", value: "3.2x", detail: "down from 3.9x" },
];

const sources = [
  { name: "Shopify", status: "Orders and revenue" },
  { name: "GA4", status: "Traffic and conversion path" },
  { name: "Google Ads", status: "Spend and campaign context" },
];

export default function ExampleBrief() {
  return (
    <section id="example-brief" className="bg-zinc-900/30 py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <div className="mb-4 inline-flex rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-orange-400">
            Example brief
          </div>
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            The product is the morning message.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-zinc-500">
            Lapsa is built around one daily read: the key change, the numbers
            behind it, and the next check an operator should make.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-5 md:p-6">
            <div className="mb-5 flex items-center justify-between gap-4 border-b border-zinc-800 pb-4">
              <div>
                <p className="text-sm font-semibold text-white">Daily Brief - Tue 08:00</p>
                <p className="text-xs text-zinc-500">Example store, last completed day</p>
              </div>
              <div className="rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-xs text-green-400">
                Delivered in Telegram
              </div>
            </div>

            <div className="space-y-5">
              <div className="rounded-xl border border-orange-500/20 bg-orange-500/10 p-4">
                <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-orange-300">
                  <AlertTriangle size={16} />
                  Main thing
                </div>
                <p className="text-sm leading-relaxed text-zinc-200">
                  Revenue held up, but the paid traffic mix got weaker. Google
                  spend increased while orders stayed flat, so today is a good
                  day to check whether the highest-spend campaign is pulling in
                  the right visitors.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {metrics.map((metric) => (
                  <div key={metric.label} className="rounded-lg border border-zinc-800 bg-zinc-900/70 p-4">
                    <div className="text-xs text-zinc-500">{metric.label}</div>
                    <div className="mt-1 text-xl font-bold text-white">{metric.value}</div>
                    <div className="mt-1 text-xs text-zinc-500">{metric.detail}</div>
                  </div>
                ))}
              </div>

              <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4">
                <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-white">
                  <CheckCircle2 size={16} className="text-green-400" />
                  Suggested next step
                </div>
                <p className="text-sm leading-relaxed text-zinc-400">
                  Compare campaign spend against orders before increasing
                  budget. If spend rose without more add-to-carts, check
                  search terms, product match, and landing page load speed.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-5">
              <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-white">
                <LineChart size={16} className="text-orange-400" />
                Sources shown clearly
              </div>
              <div className="space-y-3">
                {sources.map((source) => (
                  <div key={source.name} className="flex items-center justify-between gap-4 rounded-lg bg-zinc-900/70 px-4 py-3">
                    <span className="font-medium text-white">{source.name}</span>
                    <span className="text-right text-xs text-zinc-500">{source.status}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-5">
              <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-white">
                <Clock size={16} className="text-orange-400" />
                Built for repeated use
              </div>
              <p className="text-sm leading-relaxed text-zinc-400">
                The brief stays short on purpose. Operators should be able to
                read it between tasks, spot the risk, and decide whether to dig
                deeper that day.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
