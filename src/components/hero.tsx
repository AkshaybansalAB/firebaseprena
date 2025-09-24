import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function Hero() {
  return (
    <section id="home" className="relative w-full h-[80vh] md:h-screen flex items-center justify-center text-center mt-10 ">
        <div className="absolute inset-0 z-0 flex justify-center ">
  <div className="relative w-[95%] h-[95%] rounded-xl overflow-hidden">
  <Image
    src="/Hero Section Image.jpg"
    fill
    alt="Background"
    className="object-cover"
  />
  <div className="absolute inset-0 bg-black/50" />
</div>

</div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4">
            <div className="space-y-4">
              <h1 className="font-headline text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl xl:text-6xl/none">
                Unlock Your Academic Future with Expert Guidance
              </h1>
              <p className="max-w-[600px] text-white/80 mx-auto md:text-xl">
                Prerna Bansal, with over a decade of experience, is dedicated to helping students navigate the complexities of college admissions and achieve their dreams.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="#services">Our Services</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white bg-transparent text-white hover:bg-white/10 hover:text-white">
                <Link href="#contact-us">Contact Us</Link>
              </Button>
            </div>
          </div>
      </div>
    </section>
  );
}
