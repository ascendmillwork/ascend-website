import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

export default function FAQ() {
  return (
    <section className="py-26 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-10 gap-4">
        <h3 className="heading-two text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug max-w-2xl">
          Looking for some <span className="text-dark">answers</span>?
        </h3>
        <p className="text-lg font-semibold uppercase text-[--color--dark]">
          FAQS
        </p>
      </div>

      {/* Image and Accordion Side by Side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <div className="w-full">
          <Image
            src="https://cdn.prod.website-files.com/6687bb58d107108aa401e5aa/669e2fd65723c943ba75c214_pexels-heyho-6782427%20(1).webp"
            alt="Custom millwork FAQ - cabinetry, vanities, made in USA"
            width={800}
            height={600}
            className="rounded-lg w-full h-[300px] md:h-[400px] object-cover"
          />
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="w-full space-y-4">
          {[
            {
              q: "What services do you offer?",
              a: "We offer kitchen renovations, bathroom upgrades, custom furniture design, flooring solutions, and full building projects.",
            },
            {
              q: "How long does a typical project take?",
              a: "It depends on the scope, but most projects are completed within 2-6 weeks.",
            },
            {
              q: "Do you provide consultations?",
              a: "Yes, we offer free consultations to discuss your project vision and budget.",
            },
          ].map((item, idx) => (
            <AccordionItem
              key={idx}
              value={`item-${idx}`}
              className="border-accent"
            >
              <AccordionTrigger className="text-left text-3xl font-semibold accordian-trigger">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="">{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
