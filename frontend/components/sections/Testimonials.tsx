export default function Testimonials() {
  const notes = [
    {
      label: "Founder quote",
      title: "First beta customer quote",
      body:
        "A short quote about saving morning dashboard time or finally understanding what changed yesterday.",
    },
    {
      label: "Operator quote",
      title: "Ecommerce operator feedback",
      body:
        "Feedback about Telegram delivery, anomaly alerts, or clearer Shopify and GA4 reporting.",
    },
    {
      label: "Agency quote",
      title: "Agency or freelancer feedback",
      body:
        "A useful slot for someone checking multiple stores or client accounts.",
    },
  ];

  return (
    <section className="py-24 bg-zinc-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Early access stories
          </h2>
          <p className="text-zinc-500 text-lg max-w-xl mx-auto">
            We will add real operator quotes here as early access conversations
            turn into repeat usage.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {notes.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 flex flex-col gap-4"
            >
              <div className="text-xs font-semibold text-orange-400 uppercase tracking-wider">
                {item.label}
              </div>
              <h3 className="font-semibold text-white text-lg">{item.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
