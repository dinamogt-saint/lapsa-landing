import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Lapsa",
  description: "How Lapsa handles early access signup and product data.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <section className="container mx-auto max-w-3xl px-4 py-20">
        <Link href="/" className="text-sm text-orange-400 hover:text-orange-300">
          Back to Lapsa
        </Link>
        <h1 className="mt-8 text-4xl font-bold">Privacy Policy</h1>
        <p className="mt-4 text-zinc-400">Last updated: May 2026</p>

        <div className="mt-10 space-y-8 text-zinc-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white">What we collect now</h2>
            <p className="mt-3">
              During early access, Lapsa collects the email address you submit
              through the website, plus basic technical metadata such as IP
              address and request time for spam prevention and reliability.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">How we use it</h2>
            <p className="mt-3">
              We use signup information to contact you about early access,
              product onboarding, and relevant product updates. We do not sell
              personal data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">Store and analytics data</h2>
            <p className="mt-3">
              Lapsa is a read-only reporting assistant. Before asking an early
              user to connect a store, analytics account, or ad account, we will
              explain which data is requested, why it is needed, and how it is
              stored.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">Your choices</h2>
            <p className="mt-3">
              You can ask us to remove your early access signup information by
              contacting us at hello@lapsa.lv.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
