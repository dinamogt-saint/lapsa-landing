import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Security | Lapsa",
  description: "Security principles for Lapsa early access and integrations.",
};

export default function SecurityPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <section className="container mx-auto max-w-3xl px-4 py-20">
        <Link href="/" className="text-sm text-orange-400 hover:text-orange-300">
          Back to Lapsa
        </Link>
        <h1 className="mt-8 text-4xl font-bold">Security</h1>
        <p className="mt-4 text-zinc-400">Current principles for early access.</p>

        <div className="mt-10 space-y-8 text-zinc-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white">Read-only by design</h2>
            <p className="mt-3">
              Lapsa is being designed as a reporting assistant. The product goal
              is to read ecommerce and marketing data, explain it clearly, and
              avoid requesting permissions that edit campaigns, products, or
              budgets.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">Minimum useful access</h2>
            <p className="mt-3">
              We will ask only for the access needed to generate useful briefs.
              During early access, each requested data source will be explained
              before connection.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">Operational safeguards</h2>
            <p className="mt-3">
              Production integrations should use OAuth state validation, webhook
              signature checks, encrypted token storage, structured logs, and
              least-privilege credentials. These are implementation requirements
              before broader rollout.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">Report an issue</h2>
            <p className="mt-3">
              Security questions or reports can be sent to hello@lapsa.lv.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
