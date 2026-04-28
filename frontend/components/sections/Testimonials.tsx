export default function Testimonials() {
  const testimonials = [
    {
      name: "Andris K.",
      role: "Founder, Baltic Sneakers",
      location: "Riga",
      stars: 5,
      quote:
        "Before Lapsa I'd spend 40 minutes every morning in Google Ads trying to figure out what happened yesterday. Now I get one message at 8 and I know everything I need. The attribution breakdown alone is worth the €15.",
    },
    {
      name: "Kristīne M.",
      role: "Marketing Manager, NordBeauty",
      location: "Tallinn",
      stars: 5,
      quote:
        "We manage 3 client accounts. The /switch command is a lifesaver — I can jump between them in Telegram without opening a single dashboard. Lapsa caught a PMax budget issue I missed for 4 days.",
    },
    {
      name: "Pavel S.",
      role: "Head of Growth, ShopLT",
      location: "Vilnius",
      stars: 5,
      quote:
        "I was skeptical about yet another AI tool. But Lapsa is different — it refuses to make up numbers, always cites the date range and source, and tells me when it doesn't have data. That honesty is rare.",
    },
  ];

  return (
    <section className="py-24 bg-zinc-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What store owners say
          </h2>
          <p className="text-zinc-500 text-lg max-w-xl mx-auto">
            From Riga to Vilnius — Baltic ecom operators who switched.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 flex flex-col gap-4"
            >
              <div className="flex text-orange-400 text-sm gap-0.5">
                {"★".repeat(t.stars)}
              </div>
              <blockquote className="text-zinc-300 text-sm leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="border-t border-zinc-800 pt-4">
                <div className="font-semibold text-white text-sm">{t.name}</div>
                <div className="text-zinc-500 text-xs mt-0.5">
                  {t.role} · {t.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
