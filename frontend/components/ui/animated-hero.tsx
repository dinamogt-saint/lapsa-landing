"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

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
        <div className="flex gap-8 py-20 items-center justify-center flex-col">
          <div>
            <Button variant="outline" size="sm" className="gap-2 border-orange-500/30 text-orange-400 bg-orange-500/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              Early access now open
            </Button>
          </div>
          <div className="flex gap-4 flex-col items-center">
            <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular text-white">
              AI marketing briefs,
              <span className="relative flex w-full justify-center overflow-hidden text-center h-[1.2em] mt-2">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold gradient-text"
                    initial={{ opacity: 0, y: "-100" }}
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

            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
              Lapsa turns your ecommerce numbers into a short daily Telegram
              brief. Shopify-first validation is live; GA4 and ads reporting are
              next in the rollout.
            </p>
          </div>
          <div className="flex flex-row gap-3">
            <Button size="lg" variant="outline" className="gap-2 border-zinc-700" onClick={() => {
              document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" });
            }}>
              See how it works ↓
            </Button>
            <Button size="lg" className="gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold" onClick={() => {
              document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" });
            }}>
              Join early access
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { AnimatedHero };
