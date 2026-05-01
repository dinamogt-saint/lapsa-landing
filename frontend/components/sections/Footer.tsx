import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Left: Brand */}
          <div className="flex flex-col gap-3">
            <Link href="/" className="flex items-center gap-2 font-bold text-lg w-fit">
              <span className="text-2xl">🦊</span>
              <span className="text-white">Lapsa</span>
            </Link>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Daily ecommerce marketing briefs in Telegram.
            </p>
            <p className="text-zinc-600 text-xs">
              © 2026 Lapsa. All rights reserved.
            </p>
          </div>

          {/* Middle: Links */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-white font-semibold text-sm mb-4">Product</h4>
              <ul className="space-y-3">
                {[
                  { label: "Features", href: "#features" },
                  { label: "Pricing", href: "#pricing" },
                  { label: "How it works", href: "#how-it-works" },
                  { label: "Contact", href: "/contact" },
                ].map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-zinc-500 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm mb-4">Legal</h4>
              <ul className="space-y-3">
                {[
                  { label: "Privacy Policy", href: "/privacy" },
                  { label: "Terms", href: "/terms" },
                  { label: "Security", href: "/security" },
                ].map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-zinc-500 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-3">
            <p className="text-zinc-400 text-sm font-medium">
              Built in Riga for Baltic ecom
            </p>
            <p className="text-zinc-600 text-xs">
              Currently onboarding early stores
            </p>
            <div className="flex items-center gap-2 mt-2">
              <div className="h-1.5 w-1.5 rounded-full bg-green-400" />
              <span className="text-zinc-600 text-xs">All systems operational</span>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-zinc-600 text-xs">
            EU-based · Read-only by design · Early access
          </p>
          <p className="text-zinc-700 text-xs">
            Lapsa is being built to explain data, not edit campaigns.
          </p>
        </div>
      </div>
    </footer>
  );
}
