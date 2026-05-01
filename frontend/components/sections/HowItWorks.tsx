"use client";

export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Join",
      body: "Tell us about your store and what you want to understand each morning. Early access starts with a short onboarding path.",
    },
    {
      number: "2",
      title: "Connect carefully",
      body: "Lapsa starts with the smallest useful data set, then adds analytics and ads context as the account access path is ready.",
    },
    {
      number: "3",
      title: "Read the brief",
      body: "Open Telegram each morning for a concise read on what changed, what matters, and what to check next.",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Up and running in 3 minutes.
          </h2>
          <p className="text-zinc-500 text-lg max-w-xl mx-auto">
            No engineering required. No agency handholding. Just connect and go.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="flex flex-col gap-0">
            {steps.map((step, i) => (
              <div key={step.number} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-500 text-white font-bold text-sm shrink-0">
                    {step.number}
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-px flex-1 bg-zinc-800 my-2 min-h-[32px]" />
                  )}
                </div>
                <div className="pb-10">
                  <h3 className="font-semibold text-white text-xl mb-2">{step.title}</h3>
                  <p className="text-zinc-500 leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mock Telegram chat */}
        <div className="max-w-sm mx-auto">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 overflow-hidden shadow-2xl">
            {/* Chat header */}
            <div className="flex items-center gap-3 px-4 py-3 border-b border-zinc-800 bg-zinc-900/80">
              <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-sm">
                🦊
              </div>
              <div>
                <div className="text-white text-sm font-semibold">Lapsa</div>
                <div className="text-zinc-500 text-xs">online</div>
              </div>
            </div>

            {/* Chat messages */}
            <div className="p-4 flex flex-col gap-3 bg-zinc-950/50">
              {/* User message */}
              <div className="flex justify-end">
                <div className="bg-orange-500/20 border border-orange-500/20 rounded-2xl rounded-tr-sm px-4 py-2 max-w-[80%]">
                  <p className="text-white text-sm">How was yesterday?</p>
                  <p className="text-zinc-500 text-xs mt-1 text-right">08:01</p>
                </div>
              </div>

              {/* Bot response */}
              <div className="flex justify-start">
                <div className="bg-zinc-800 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[90%]">
                  <p className="text-zinc-300 text-sm font-semibold mb-2">Daily Brief - Mon 28 Apr</p>
                  <div className="space-y-1.5 text-xs text-zinc-400">
                    <div className="mt-2 pb-2 border-b border-zinc-700">
                      <span className="text-orange-400">Main thing: revenue held steady, but paid traffic became less efficient.</span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span>Revenue (Shopify)</span>
                      <span className="text-white font-medium">€4,812</span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span>Ad spend (Google)</span>
                      <span className="text-white font-medium">€847</span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span>ROAS (attributed)</span>
                      <span className="text-green-400 font-medium">5.68×</span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span>Top campaign</span>
                      <span className="text-white font-medium">Brand Search</span>
                    </div>
                    <div className="mt-2 pt-2 border-t border-zinc-700">
                      <span className="text-orange-400">Next check: review the campaign that spent more while orders stayed flat.</span>
                    </div>
                  </div>
                  <p className="text-zinc-600 text-xs mt-2 text-right">08:01</p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center text-zinc-600 text-xs mt-3">
            Example format. Numbers above are illustrative.
          </p>
        </div>
      </div>
    </section>
  );
}
