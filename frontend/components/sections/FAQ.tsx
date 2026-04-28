import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is Lapsa really read-only? Can it accidentally change my campaigns?",
    answer:
      "Yes, 100% read-only. We request only read scopes from Google Ads and Shopify. Lapsa has no write access and cannot make any changes to your account. The system prompt literally refuses to try.",
  },
  {
    question: "Which platforms does it support right now?",
    answer:
      "Shopify (orders, products, sessions), Google Ads (campaigns, keywords, spend), and GA4 (sessions, attribution). Meta Ads and TikTok are on the roadmap for v1.1 — sign up and you'll get notified.",
  },
  {
    question: "How does attribution work across three platforms?",
    answer:
      "Google Ads, GA4, and Shopify all report different revenue for the same conversions — usually 20–40% apart. Lapsa shows you all three, explains the gaps (view-through conversions, last-click vs data-driven, cross-device stitching), and gives you the most defensible number to use for budget decisions.",
  },
  {
    question: "Is my data safe?",
    answer:
      "We request read-only OAuth tokens, store them encrypted, and never share your data with third parties. Your store data is used exclusively to answer your questions. We're GDPR-compliant and based in Latvia (EU).",
  },
  {
    question: "What happens after the 14-day trial?",
    answer:
      "Nothing happens automatically — Lapsa pauses and waits for you. No surprise charges. If you want to keep going, pick a plan. If you don't, your data is deleted after 30 days.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-zinc-900/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Questions we get a lot.
          </h2>
          <p className="text-zinc-500 text-lg max-w-xl mx-auto">
            Honest answers, no marketing fluff.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="space-y-0">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-white hover:text-orange-400 text-left no-underline hover:no-underline text-base font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-zinc-400 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
