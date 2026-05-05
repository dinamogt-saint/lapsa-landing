"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, TrendingUp } from "lucide-react";

function AnimatedHero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => [
      "daily",
      "plain-English",
      "operator-ready",
      "in Telegram",
      "built for ecom",
    ],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="grid gap-12 py-16 md:grid-cols-[1.05fr_0.95fr] md:py-24 md:items-center">
          <div className="flex flex-col items-center gap-7 text-center md:items-start md:text-left">
            <Button variant="outline" size="sm" className="gap-2 border-orange-500/30 text-orange-400 bg-orange-500/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              Early access product for ecommerce operators
            </Button>

            <div className="flex gap-4 flex-col">
              <h1 className="text-5xl md:text-7xl max-w-3xl tracking-tighter font-regular text-white">
                Your ecommerce morning brief,
                <span className="relative flex w-full justify-center overflow-hidden text-center h-[1.2em] mt-2 md:justify-start md:text-left">
                  &nbsp;
                  {titles.map((title, index) => (
                    <motion.span
                      key={index}
                      className="absolute font-semibold gradient-text"
                      initial={{ opacity: 0, y: -100 }}
                      transition={{ type: "spring", stiffness: 50 }}
                      animate={
                        titleNumber === index
                          ? { y: 0, opacity: 1 }
                          : { y: titleNumber > index ? -150 : 150, opacity: 0 }
                      }
                    >
                      {title}
                    </motion.span>
                  ))}
                </span>
              </h1>

              <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl">
                Lapsa turns Shopify, analytics, and ad-performance signals into
                one short Telegram message: what changed, why it matters, and
                what to check next.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button size="lg" variant="outline" className="gap-2 border-zinc-700" onClick={() => {
                document.getElementById("example-brief")?.scrollIntoView({ behavior: "smooth" });
              }}>
                See example brief
              </Button>
              <Button size="lg" className="gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold" onClick={() => {
                document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" });
              }}>
                Join early access
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-2 text-xs text-zinc-500 md:justify-start">
              {["Shopify", "GA4", "Google Ads", "Telegram"].map((tool) => (
                <span key={tool} className="rounded-full border border-zinc-800 bg-zinc-900/70 px-3 py-1">
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div className="mx-auto w-full max-w-md">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 shadow-2xl">
              <div className="flex items-center gap-3 border-b border-zinc-800 px-4 py-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-500 text-white">
                  <MessageCircle size={18} />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">Lapsa</div>
                  <div className="text-xs text-zinc-500">daily brief at 08:00</div>
                </div>
              </div>
              <div className="space-y-3 p-4">
                <div className="rounded-2xl rounded-tl-sm bg-zinc-800 px-4 py-3">
                  <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-white">
                    <TrendingUp size={16} className="text-orange-400" />
                    Yesterday in 30 seconds
                  </div>
                  <p className="text-sm leading-relaxed text-zinc-300">
                    Revenue was stable, but paid traffic got less efficient.
                    The main check today is whether your highest-spend campaign
                    is still bringing qualified visitors.
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  {[
                    ["Revenue", "€4.8k"],
                    ["Orders", "86"],
                    ["ROAS", "3.2x"],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-lg border border-zinc-800 bg-zinc-950/80 p-3">
                      <div className="text-zinc-500">{label}</div>
                      <div className="mt-1 font-semibold text-white">{value}</div>
                    </div>
                  ))}
                </div>
                <div className="rounded-xl border border-orange-500/20 bg-orange-500/10 p-3 text-sm text-orange-100">
                  Next action: compare spend and orders by campaign before
                  increasing today&apos;s budget.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { AnimatedHero };
