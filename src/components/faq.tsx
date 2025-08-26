'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqs = [
  {
    question: "What is the best time to start the college application process?",
    answer: "The ideal time to start is at the beginning of your junior year of high school. This allows ample time for profile building, test preparation, and crafting a strong application without the last-minute rush."
  },
  {
    question: "How do you personalize guidance for each student?",
    answer: "We begin with an in-depth assessment of the student's academic record, extracurricular activities, and personal aspirations. Based on this, we create a customized roadmap, including college selection, essay strategy, and interview prep."
  },
  {
    question: "Do you help with scholarship applications?",
    answer: "Yes, we provide guidance on identifying and applying for relevant scholarships. We help students highlight their strengths in scholarship essays and applications to maximize their chances of receiving financial aid."
  },
  {
    question: "What makes your service different from others?",
    answer: "Our key differentiator is Prerna Bansal's direct involvement and over a decade of experience. We focus on holistic development, not just application paperwork, ensuring students are truly prepared for their academic future."
  }
];

export function Faq() {
  return (
    <section id="faq" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto max-w-4xl px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tighter text-primary sm:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Have questions? We have answers. Here are some of the most common inquiries we receive.
            </p>
        </div>
        <div className="pt-12">
            <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-lg font-medium hover:no-underline">{faq.question}</AccordionTrigger>
                        <AccordionContent className="text-base text-foreground/80">
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
