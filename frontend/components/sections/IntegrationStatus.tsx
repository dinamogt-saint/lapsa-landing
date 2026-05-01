const statuses = [
  {
    name: "Telegram",
    status: "V1 channel",
    body: "Daily briefs and lightweight follow-up questions are designed for Telegram first.",
  },
  {
    name: "Shopify",
    status: "Early access focus",
    body: "Orders, revenue, products, and customer context are the first useful ecommerce signals.",
  },
  {
    name: "GA4",
    status: "Early access integration",
    body: "Traffic, conversion path, and channel context help explain why revenue changed.",
  },
  {
    name: "Google Ads",
    status: "API approval path",
    body: "Ads data is part of the product direction and will be added through the approved access path.",
  },
  {
    name: "Meta Ads",
    status: "Later",
    body: "Useful for broader paid acquisition context after the core daily brief is validated.",
  },
];

export default function IntegrationStatus() {
  return (
    <section id="integrations" className="bg-zinc-900/30 py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Clear integration path.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-zinc-500">
            Early access keeps the delivery channel simple while expanding the
            data sources that make the brief more useful.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-4">
          {statuses.map((item, index) => (
            <div key={item.name} className="grid gap-4 rounded-xl border border-zinc-800 bg-zinc-950 p-5 md:grid-cols-[0.8fr_0.8fr_1.6fr] md:items-center">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white">
                  {index + 1}
                </div>
                <div className="font-semibold text-white">{item.name}</div>
              </div>
              <div className="w-fit rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-xs font-medium text-zinc-300">
                {item.status}
              </div>
              <p className="text-sm leading-relaxed text-zinc-500">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
