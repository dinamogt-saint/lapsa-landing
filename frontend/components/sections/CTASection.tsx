"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function CTASection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!isValidEmail(email)) {
      setErrorMsg("Please enter a valid email address.");
      setStatus("error");
      return;
    }
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMsg("Something went wrong — try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Something went wrong — try again.");
    }
  }

  return (
    <section id="cta" className="py-32 bg-zinc-950 relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(249,115,22,0.1) 0%, rgba(10,10,10,0) 70%)",
        }}
      />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
          Join the early access list
        </h2>
        <p className="text-zinc-400 text-lg md:text-xl max-w-xl mx-auto mb-10">
          We are onboarding a small group of ecommerce operators to validate the
          daily Telegram brief before expanding the full integration set.
        </p>

        {status === "success" ? (
          <div className="flex flex-col items-center gap-3">
            <div className="rounded-xl border border-green-500/30 bg-green-500/10 px-8 py-6 max-w-md mx-auto">
              <p className="text-green-400 text-xl font-semibold">You&apos;re in.</p>
              <p className="text-zinc-400 text-sm mt-2">We&apos;ll be in touch with early access details.</p>
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto"
          >
            <Input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-zinc-900 border-zinc-700 text-white placeholder:text-zinc-600 h-12 flex-1 focus-visible:ring-orange-500"
              required
              disabled={status === "loading"}
            />
            <Button
              type="submit"
              disabled={status === "loading"}
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold h-12 px-6 shrink-0"
            >
              {status === "loading" ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Joining...
                </span>
              ) : (
                "Join early access"
              )}
            </Button>
          </form>
        )}

        {status === "error" && (
          <p className="text-red-400 text-sm mt-3">{errorMsg}</p>
        )}

        {status !== "success" && (
          <p className="text-zinc-600 text-sm mt-4">
            No card needed. We will contact you before any data connection.
          </p>
        )}
      </div>
    </section>
  );
}
