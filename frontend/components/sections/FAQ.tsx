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
    question: "What happens after I join early access?",
    answer:
      "We will contact you about onboarding and product updates. There is no paid plan or automatic charge. Plans will start from €29/mo after the early access period.",
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
