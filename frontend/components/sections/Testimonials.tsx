export default function Testimonials() {
  const priorities = [
    {
      title: "Brief quality",
      body:
        "Does the morning message explain the one thing worth acting on, or does it feel like another dashboard?",
    },
    {
      title: "Data trust",
      body:
        "Can operators see which source each number came from and where Shopify, GA4, and ads data disagree?",
    },
    {
      title: "Daily habit",
      body:
        "Is Telegram the right lightweight channel for small ecommerce teams to check performance every morning?",
    },
  ];

  return (
    <section className="py-24 bg-zinc-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What early access will validate
          </h2>
          <p className="text-zinc-500 text-lg max-w-xl mx-auto">
            No fake testimonials. These are the product questions we are testing
            with the first ecommerce operators.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {priorities.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 flex flex-col gap-4"
            >
              <div className="text-xs font-semibold text-orange-400 uppercase tracking-wider">
                Validation focus
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
