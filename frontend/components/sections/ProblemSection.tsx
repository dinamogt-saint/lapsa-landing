export default function ProblemSection() {
  const pains = [
    {
      icon: "🕐",
      title: "You check 5 dashboards every morning",
      body: "Spending 45 minutes piecing together yesterday's numbers from Shopify, Google Ads, and GA4. Each shows different revenue. You're not even sure which one to believe.",
    },
    {
      icon: "💸",
      title: "You're not sure which campaign is bleeding budget",
      body: "PMax spending €800 this week with suspicious ROAS, but you can't tell if it's creative fatigue or audience saturation. You've been meaning to dig in all week.",
    },
    {
      icon: "🤷",
      title: "You're making gut-feel decisions on serious ad spend",
      body: "€8K/mo in Google Ads and you're optimizing based on vibes, not data. You know you should know better. You just don't have the time to do it right.",
    },
  ];

  return (
    <section className="py-24 bg-zinc-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Sound familiar?
          </h2>
          <p className="text-zinc-500 text-lg max-w-xl mx-auto">
            Most ecom operators are flying partially blind. Not because they don&apos;t care — because the data is scattered everywhere.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {pains.map((pain) => (
            <div
              key={pain.title}
              className="rounded-xl border border-red-900/40 bg-red-950/10 p-6 flex flex-col gap-3"
            >
              <div className="text-3xl">{pain.icon}</div>
              <h3 className="font-semibold text-white text-lg leading-snug">
                {pain.title}
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{pain.body}</p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 mt-16">
          <div className="h-px flex-1 max-w-xs bg-zinc-800" />
          <p className="text-orange-400 font-semibold text-lg whitespace-nowrap">
            There&apos;s a better way →
          </p>
          <div className="h-px flex-1 max-w-xs bg-zinc-800" />
        </div>
      </div>
    </section>
  );
}
