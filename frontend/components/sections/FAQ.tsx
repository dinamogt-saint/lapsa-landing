import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is Lapsa read-only?",
    answer:
      "The product is designed around read-only access. During early access, we will explain every permission before asking you to connect anything and will not request campaign-editing permissions.",
  },
  {
    question: "Which platforms does it support right now?",
    answer:
      "Early access starts Shopify-first, with GA4 and ads reporting added through the available account access path. Google Ads support depends on API approval and account eligibility.",
  },
  {
    question: "How does attribution work across three platforms?",
    answer:
      "The goal is to show Shopify, GA4, and ad-platform numbers side by side and explain why they differ. Early versions may use Shopify and GA4 first, with ad-platform data added once the connection path is available.",
  },
  {
    question: "Is my data safe?",
    answer:
      "Lapsa will request the minimum useful access and will document how data is stored before early users connect accounts. See the privacy and security pages for the current policy.",
  },
  {
    question: "What happens after the 14-day trial?",
    answer:
      "There is no paid trial yet. Joining early access only means we can contact you about onboarding and product updates.",
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
