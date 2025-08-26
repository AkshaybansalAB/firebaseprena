import { CircleCheck } from 'lucide-react';
import Image from 'next/image';

const benefits = [
    { title: "Personalized Strategy", description: "Crafting a unique path for each student." },
    { title: "Decade of Experience", description: "Leveraging 10+ years of admission insights." },
    { title: "Holistic Development", description: "Focusing on academic and personal growth." },
    { title: "Proven Track Record", description: "Success stories from students worldwide." },
]

export function Benefits() {
  return (
    <section id="benefits" className="w-full py-12 md:py-24 lg:py-32 bg-primary/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="font-headline text-3xl font-bold tracking-tighter text-primary sm:text-5xl">
              The Prerna Bansal & Co Advantage
            </h2>
            <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our approach is designed to give you a competitive edge and make the application process seamless.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <ul className="grid gap-6">
              {benefits.map((benefit, index) => (
                <li key={index}>
                  <div className="grid gap-1">
                    <div className="flex items-center gap-2">
                      <CircleCheck className="h-5 w-5 text-accent" />
                      <h3 className="text-xl font-bold">{benefit.title}</h3>
                    </div>
                    <p className="text-foreground/80">{benefit.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <Image
            src="https://picsum.photos/550/310"
            width="550"
            height="310"
            alt="Benefits"
            data-ai-hint="students collaborating"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
          />
        </div>
      </div>
    </section>
  );
}
