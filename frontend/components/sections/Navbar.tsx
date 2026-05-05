"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { label: "Example", href: "#example-brief" },
    { label: "Features", href: "#features" },
    { label: "Compare", href: "#comparison" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/60 bg-zinc-950/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-lg">
          <span className="text-2xl">🦊</span>
          <span className="text-white">Lapsa</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-zinc-400 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-2">
          <Button variant="ghost" size="sm" className="text-zinc-400 hover:text-white" asChild>
            <Link href="/security">Security</Link>
          </Button>
          <Button
            size="sm"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold"
            onClick={() => {
              document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Join early access
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-zinc-400 hover:text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 top-16 z-40 bg-zinc-950 flex flex-col p-6 gap-6">
          <nav className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-lg text-zinc-300 hover:text-white transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex flex-col gap-3 pt-4 border-t border-zinc-800">
            <Button variant="outline" className="w-full border-zinc-700 text-zinc-300" asChild>
              <Link href="/security">Security</Link>
            </Button>
            <Button
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold"
              onClick={() => {
                setMobileOpen(false);
                document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Join early access
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
