import { Reveal } from "@/components/Reveal";
import { ChevronRight } from "lucide-react";

export default function FAQ() {
  const faqs = [
    {
      q: "How much does an appraisal cost?",
      a: "Our property appraisals are completely free and carry no obligation. We provide this service to help you understand your property's current market value."
    },
    {
      q: "How long does the appraisal take?",
      a: "A typical physical inspection takes about 15-30 minutes depending on the size of your property. We'll then provide you with a comprehensive report within 24-48 hours."
    },
    {
      q: "Do I need to clean up before you arrive?",
      a: "While a tidy home helps us see its full potential, please don't stress about making it show-ready. We look past the clutter to assess the bones and value of the property."
    },
    {
      q: "Are your appraisals accurate?",
      a: "Yes, we use recent comparable sales, current market trends, and our extensive local knowledge to provide a highly accurate and realistic price guide."
    },
    {
      q: "Do I have to sell if I get an appraisal?",
      a: "Absolutely not. Many of our clients get appraisals just for refinancing purposes, insurance, or simply out of curiosity. There is never any pressure to list."
    },
    {
      q: "What areas do you service?",
      a: "We provide appraisal services across the entire metropolitan area and surrounding suburbs. Contact us if you're unsure whether we cover your specific location."
    }
  ];

  return (
    <div className="bg-[#2b2b2b] min-h-screen py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal direction="up" className="text-center mb-16">
          <h1 className="text-3xl font-extrabold uppercase text-white md:text-4xl mb-4">
            Frequently Asked Questions
          </h1>
          <h2 className="text-xl font-bold text-brand-teal uppercase tracking-wide">
            You've got questions, we've got answers!
          </h2>
        </Reveal>

        <div className="grid gap-x-12 gap-y-10 md:grid-cols-2">
          {faqs.map((faq, i) => (
            <Reveal 
              key={i} 
              direction={i % 2 === 0 ? "left" : "right"} 
              delay={i * 0.1}
              className="flex gap-4"
            >
              <div className="mt-1 flex-shrink-0">
                <ChevronRight className="h-6 w-6 text-brand-green" />
              </div>
              <div>
                <h3 className="mb-2 text-lg font-bold text-brand-teal">
                  {faq.q}
                </h3>
                <p className="text-sm text-[#b8b8b8] leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
