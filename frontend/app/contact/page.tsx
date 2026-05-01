import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact | Lapsa",
  description: "Contact Lapsa about early access.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <section className="container mx-auto max-w-3xl px-4 py-20">
        <Link href="/" className="text-sm text-orange-400 hover:text-orange-300">
          Back to Lapsa
        </Link>
        <h1 className="mt-8 text-4xl font-bold">Contact</h1>
        <p className="mt-4 text-zinc-400 leading-relaxed">
          Lapsa is currently onboarding early ecommerce operators. For early
          access, partnerships, or security questions, contact us by email.
        </p>

        <div className="mt-10 rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
          <h2 className="text-xl font-semibold text-white">Email</h2>
          <a
            href="mailto:hello@lapsa.lv"
            className="mt-3 inline-block text-orange-400 hover:text-orange-300"
          >
            hello@lapsa.lv
          </a>
        </div>
      </section>
    </main>
  );
}
