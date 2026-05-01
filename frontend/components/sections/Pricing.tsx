"use client";

import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "Early Access",
      price: "€0",
      period: "",
      badge: "Open now",
      badgeColor: "bg-zinc-700/50 text-zinc-300 border-zinc-700",
      features: [
        "Short onboarding call",
        "Telegram brief setup",
        "Shopify-first onboarding",
        "No card required",
        "Manual setup support",
      ],
      cta: "Join early access",
      ctaVariant: "outline" as const,
      highlight: false,
    },
    {
      name: "Starter",
      price: "€29",
      priceStrike: false,
      salePrice: null,
      period: "/mo",
      badge: "Early plan",
      badgeColor: "bg-orange-500/20 text-orange-400 border-orange-500/30",
      foundingBadge: "For early access feedback",
      features: [
        "Daily Telegram brief",
        "1 store",
        "Shopify + GA4 reporting",
        "Ads reporting path",
        "Anomaly alerts",
      ],
      cta: "Get notified",
      ctaVariant: "default" as const,
      highlight: true,
    },
    {
      name: "Growth",
      price: "€79",
      period: "/mo",
      badge: "Expansion",
      badgeColor: "bg-zinc-700/50 text-zinc-300 border-zinc-700",
      features: [
        "Multiple stores",
        "More ad accounts",
        "Team delivery options",
        "Priority support",
        "Custom brief time",
      ],
      cta: "Join waitlist",
      ctaVariant: "outline" as const,
      highlight: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-zinc-900/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Start with early access.
          </h2>
          <p className="text-zinc-500 text-lg max-w-xl mx-auto">
            Join the first group, see the brief, and help shape the product
            before standard pricing is turned on.
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
                      {plan.period && <span className="text-zinc-500 mb-1">{plan.period}</span>}
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
