import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms | Lapsa",
  description: "Terms for using the Lapsa website and early access program.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <section className="container mx-auto max-w-3xl px-4 py-20">
        <Link href="/" className="text-sm text-orange-400 hover:text-orange-300">
          Back to Lapsa
        </Link>
        <h1 className="mt-8 text-4xl font-bold">Terms</h1>
        <p className="mt-4 text-zinc-400">Last updated: May 2026</p>

        <div className="mt-10 space-y-8 text-zinc-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white">Early access status</h2>
            <p className="mt-3">
              Lapsa is in early development. Website descriptions may describe
              planned product behavior, and availability can change as we
              validate the service with early users.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">No financial advice</h2>
            <p className="mt-3">
              Lapsa is intended to help ecommerce operators understand marketing
              data. Briefs and insights are informational and should not be
              treated as financial, legal, or guaranteed performance advice.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">Acceptable use</h2>
            <p className="mt-3">
              You agree not to abuse the website, submit false information, or
              attempt to access systems or data you are not authorized to use.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">Contact</h2>
            <p className="mt-3">
              Questions about these terms can be sent to hello@lapsa.lv.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
