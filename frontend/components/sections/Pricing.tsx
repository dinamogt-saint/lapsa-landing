"use client";

import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "Free Trial",
      price: "€0",
      period: "/14 days",
      badge: "No card needed",
      badgeColor: "bg-zinc-700/50 text-zinc-300 border-zinc-700",
      features: [
        "All features included",
        "1 store",
        "2 ad accounts",
        "Morning brief at 8 AM",
        "Ask anything (100 messages)",
      ],
      cta: "Start free trial",
      ctaVariant: "outline" as const,
      highlight: false,
    },
    {
      name: "Starter",
      price: "€29",
      priceStrike: true,
      salePrice: "€15",
      period: "/mo",
      badge: "Most popular",
      badgeColor: "bg-orange-500/20 text-orange-400 border-orange-500/30",
      foundingBadge: "🔥 Founding rate — limited",
      features: [
        "Everything in trial",
        "Unlimited messages",
        "1 store",
        "Up to 3 ad accounts",
        "Anomaly alerts",
      ],
      cta: "Get Starter",
      ctaVariant: "default" as const,
      highlight: true,
    },
    {
      name: "Growth",
      price: "€79",
      period: "/mo",
      badge: null,
      badgeColor: "",
      features: [
        "Everything in Starter",
        "Unlimited stores",
        "Unlimited ad accounts",
        "Slack delivery",
        "Priority support",
        "Custom brief time",
      ],
      cta: "Get Growth",
      ctaVariant: "outline" as const,
      highlight: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-zinc-900/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Simple pricing. No surprises.
          </h2>
          <p className="text-zinc-500 text-lg max-w-xl mx-auto">
            Free for 14 days — no card needed. Cancel anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-12">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-xl border p-6 flex flex-col gap-6 relative ${
                plan.highlight
                  ? "border-orange-500/50 bg-zinc-900 shadow-[0_0_30px_rgba(249,115,22,0.1)]"
                  : "border-zinc-800 bg-zinc-900/50"
              }`}
            >
              {plan.badge && (
                <div className={`inline-flex self-start items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold ${plan.badgeColor}`}>
                  {plan.badge}
                </div>
              )}

              <div>
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="flex items-end gap-2">
                  {plan.priceStrike ? (
                    <>
                      <span className="text-zinc-600 line-through text-2xl">{plan.price}</span>
                      <span className="text-4xl font-bold text-white">{plan.salePrice}</span>
                      <span className="text-zinc-500 mb-1">{plan.period}</span>
                    </>
                  ) : (
                    <>
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-zinc-500 mb-1">{plan.period}</span>
                    </>
                  )}
                </div>
                {plan.foundingBadge && (
                  <div className="mt-2 inline-flex items-center rounded-full bg-orange-500/10 border border-orange-500/20 px-2.5 py-0.5 text-xs font-medium text-orange-400">
                    {plan.foundingBadge}
                  </div>
                )}
              </div>

              <ul className="space-y-3 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-zinc-400">
                    <Check size={16} className="text-orange-400 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.highlight ? "default" : "outline"}
                className={`w-full ${
                  plan.highlight
                    ? "bg-orange-500 hover:bg-orange-600 text-white font-semibold"
                    : "border-zinc-700 text-zinc-300 hover:text-white"
                }`}
                onClick={() => {
                  document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
