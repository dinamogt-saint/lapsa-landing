import { BriefcaseBusiness, Megaphone, Store, Users } from "lucide-react";

const operators = [
  {
    icon: Store,
    title: "Shopify founders",
    body: "For owners who check performance themselves and need a fast morning read before the day takes over.",
  },
  {
    icon: Megaphone,
    title: "Small marketing teams",
    body: "For teams running ads but without a full-time analyst to translate scattered data into daily decisions.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Freelancers and agencies",
    body: "For operators managing several stores who need consistent briefs without building reports manually.",
  },
  {
    icon: Users,
    title: "Baltic ecommerce teams",
    body: "For lean teams that want practical performance context in English before expanding into heavier BI tooling.",
  },
];

const tools = [
  { name: "Shopify", mark: "S", className: "bg-emerald-500/15 text-emerald-300 border-emerald-500/20" },
  { name: "GA4", mark: "G", className: "bg-yellow-500/15 text-yellow-300 border-yellow-500/20" },
  { name: "Google Ads", mark: "A", className: "bg-blue-500/15 text-blue-300 border-blue-500/20" },
  { name: "Telegram", mark: "T", className: "bg-sky-500/15 text-sky-300 border-sky-500/20" },
  { name: "Meta Ads", mark: "M", className: "bg-indigo-500/15 text-indigo-300 border-indigo-500/20" },
];

export default function BuiltFor() {
  return (
    <section id="built-for" className="bg-zinc-900/30 py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Built for operators, not analysts.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-zinc-500">
            Lapsa is for ecommerce teams that already have data, but do not
            want another place to check every morning.
          </p>
        </div>

        <div className="mx-auto mb-10 flex max-w-4xl flex-wrap justify-center gap-3">
          {tools.map((tool) => (
            <div key={tool.name} className={`flex items-center gap-2 rounded-full border px-3 py-2 text-sm ${tool.className}`}>
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-zinc-950/70 text-xs font-bold">
                {tool.mark}
              </span>
              <span className="font-medium">{tool.name}</span>
            </div>
          ))}
        </div>

        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2 lg:grid-cols-4">
          {operators.map((operator) => {
            const Icon = operator.icon;
            return (
              <div key={operator.title} className="rounded-xl border border-zinc-800 bg-zinc-950 p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-900 text-orange-400">
                  <Icon size={20} />
                </div>
                <h3 className="text-base font-semibold text-white">{operator.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-500">{operator.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
