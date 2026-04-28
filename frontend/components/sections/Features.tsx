export default function Features() {
  const features = [
    {
      icon: "📊",
      title: "Morning Brief",
      headline: "Know your numbers before your coffee gets cold",
      body: "Every morning at 8 AM, Lapsa sends your daily brief: yesterday's revenue, ROAS, top campaign, and anything that looks off. No login, no dashboard — just the signal.",
    },
    {
      icon: "💬",
      title: "Ask Anything",
      headline: "Your data, in plain language",
      body: '"Which campaign should I pause?" "Why did spend spike on Tuesday?" "Top 5 products this month?" Lapsa gives you specific answers backed by actual numbers — not generic advice.',
    },
    {
      icon: "🎯",
      title: "Honest Attribution",
      headline: "Google Ads, GA4, and Shopify all disagree. We explain why.",
      body: "Lapsa shows you all three numbers side by side and explains the gap — view-through conversions, last-click vs data-driven, cross-device stitching. The most defensible ROAS, not the most flattering.",
    },
  ];

  return (
    <section id="features" className="py-24 bg-zinc-900/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Everything you need. Nothing you don&apos;t.
          </h2>
          <p className="text-zinc-500 text-lg max-w-xl mx-auto">
            Built for ecom operators who want answers, not more dashboards.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 flex flex-col gap-3 hover:border-orange-500/30 transition-colors"
            >
              <div className="text-3xl">{feature.icon}</div>
              <div className="text-xs font-semibold text-orange-400 uppercase tracking-wider">
                {feature.title}
              </div>
              <h3 className="font-semibold text-white text-lg leading-snug">
                {feature.headline}
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{feature.body}</p>
            </div>
          ))}
        </div>

        {/* Full-width read-only card */}
        <div className="max-w-5xl mx-auto">
          <div className="rounded-xl border border-zinc-700 bg-zinc-900/80 p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="text-3xl shrink-0">🔒</div>
            <div>
              <h3 className="font-semibold text-white text-lg mb-1">
                Read-only. Always.
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Lapsa never touches your campaigns. It can&apos;t pause, edit, or spend anything. It just reads your data and tells you the truth. Read-only OAuth scopes, verified on every request.
              </p>
            </div>
            <div className="shrink-0">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-green-500/10 border border-green-500/20 px-3 py-1 text-xs font-medium text-green-400">
                <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                Read-only verified
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
