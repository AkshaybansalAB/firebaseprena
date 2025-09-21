import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function Intro() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16 items-center">
          <div className="space-y-4">
            <h2 className="font-headline text-3xl font-bold tracking-tighter text-primary sm:text-4xl md:text-5xl">
              Meet Prerna Bansal
            </h2>
            <p className="max-w-[600px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              With over a decade of dedicated experience in educational consulting, Prerna Bansal has become a guiding light for students aspiring to attend top-tier universities worldwide. Her personalized approach and deep understanding of the admissions process have empowered countless students to not only achieve their academic goals but also to discover their true potential.
            </p>
            <p className="max-w-[600px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Prerna's philosophy is rooted in the belief that every student's journey is unique. She is committed to providing holistic guidance that extends beyond applications, fostering personal growth and confidence that lasts a lifetime.
            </p>
            <div className="mt-6">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Link href="#contact-us">Get in Touch NOW</Link>
                </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src="https://picsum.photos/seed/prerna/600/600"
              alt="Prerna Bansal"
              data-ai-hint="professional headshot"
              width={400}
              height={400}
              className="rounded-full object-cover w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
