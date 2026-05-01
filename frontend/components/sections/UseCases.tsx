import { Bell, Bot, CalendarDays, Gauge, MessageSquareText, ShoppingBag } from "lucide-react";

const useCases = [
  {
    icon: CalendarDays,
    title: "Daily Telegram Brief",
    body: "A short morning read covering yesterday's revenue, orders, traffic quality, and the one thing worth checking.",
    example: "Main thing: orders were flat, but paid spend climbed 18%.",
  },
  {
    icon: Bell,
    title: "Anomaly Alerts",
    body: "Flags changes that look unusual compared with the store's recent baseline, not generic global thresholds.",
    example: "Alert: conversion rate is 28% below the last 14-day range.",
  },
  {
    icon: ShoppingBag,
    title: "Shopify Revenue Context",
    body: "Turns orders, AOV, returning customer mix, and product movement into a clear read on store health.",
    example: "Top product carried 31% of revenue yesterday.",
  },
  {
    icon: Gauge,
    title: "GA4 Traffic Explanation",
    body: "Explains whether changes came from traffic volume, conversion rate, channel mix, or landing page behavior.",
    example: "Organic sessions rose, but checkout starts did not follow.",
  },
  {
    icon: Bot,
    title: "Ads Performance Context",
    body: "Built to include Google Ads once account access is ready; early access can validate the brief format first.",
    example: "Spend moved to search, but revenue lift came from brand traffic.",
  },
  {
    icon: MessageSquareText,
    title: "Plain-English Followups",
    body: "Telegram keeps the product lightweight: ask what changed, what to check, or which number to trust first.",
    example: "Why did revenue rise if ROAS dropped?",
  },
];

export default function UseCases() {
  return (
    <section id="use-cases" className="bg-zinc-950 py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            More than a dashboard summary.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-zinc-500">
            The brief is designed around daily operating decisions: what moved,
            what looks off, and where to spend attention.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2 lg:grid-cols-3">
          {useCases.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500/10 text-orange-400">
                  <Icon size={20} />
                </div>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-500">{item.body}</p>
                <div className="mt-5 rounded-lg border border-zinc-800 bg-zinc-950 p-3 text-xs leading-relaxed text-zinc-400">
                  {item.example}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
