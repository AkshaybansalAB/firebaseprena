import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function Intro() {
  return (
    <section id="about" className="w-full py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          {/* Text Content */}
          <div className="space-y-4 sm:space-y-6">
            <h2 className="font-headline text-3xl sm:text-4xl font-bold tracking-tighter text-primary">
              Hi, I'm Prerna
            </h2>
            <p className="text-foreground/80 text-base sm:text-lg md:text-xl leading-relaxed max-w-full">
              And I’m here to help you get into that college you’ve been dreaming about, and hit those big career goals, without all the chaos and second-guessing.
            </p>
            <p className="text-foreground/80 text-base sm:text-lg md:text-xl leading-relaxed max-w-full">
              The truth is, things move fast these days. New degrees, new roles, new rules. What worked five years ago, isn’t completely reliable now. It’s no longer just about high scores or perfect resumes. It’s about knowing how to tell your story in a way that allows the colleges to see who you really are.
            </p>
            <p className="text-foreground/80 text-base sm:text-lg md:text-xl leading-relaxed max-w-full">
              I’ve been on both sides of this journey. I started out at Google, graduated from London Business School, and took many entrepreneurial detours before setting up Prerna Bansal & Co.
            </p>
            <p className="text-foreground/80 text-base sm:text-lg md:text-xl leading-relaxed max-w-full">
              Since then, I’ve worked across 8 industries, stumbled, learned, grown - and helped over 300 people do the same. That one guy who had faced disciplinary action in college? He now works at an Investment Bank in London. The kid without any extracurriculars in school is all set to graduate.
            </p>
            <div className="mt-6">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="#contact-us">Get in Touch NOW</Link>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center mt-6 md:mt-0">
            <div className="w-full max-w-[400px] sm:max-w-[350px] md:max-w-[300px] aspect-[4/5] rounded-xl overflow-hidden relative">
              <img
                src="/Prerna Photos.jpeg"
                alt="Prerna Bansal"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
