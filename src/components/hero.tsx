import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function Hero() {
  return (
    <section id="home" className="w-full pt-24 md:pt-32 lg:pt-40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-4">
              <h1 className="font-headline text-3xl font-bold tracking-tighter text-primary sm:text-4xl md:text-5xl xl:text-6xl/none">
                Unlock Your Academic Future with Expert Guidance
              </h1>
              <p className="max-w-[600px] text-foreground/80 md:text-xl">
                Prerna Bansal, with over a decade of experience, is dedicated to helping students navigate the complexities of college admissions and achieve their dreams.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="#services">Our Services</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5 hover:text-primary">
                <Link href="#contact">Contact Us</Link>
              </Button>
            </div>
          </div>
          <Image
            src="https://picsum.photos/600/600"
            width={600}
            height={600}
            alt="Prerna Bansal"
            data-ai-hint="professional woman portrait"
            className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full"
          />
        </div>
      </div>
    </section>
  );
}
