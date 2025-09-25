import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function Intro() {
  return (
    <section id="about" className="w-full py-12 mt-0">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="font-headline text-3xl font-bold tracking-tighter text-primary sm:text-4xl md:text-5xl">
              Hi, I'm Prerna
            </h2>
            <p className="max-w-[600px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              And I’m here to help you get into that college you’ve been dreaming about, and hit those big career goals, without all the chaos and second-guessing.
            </p>
            <p className="max-w-[600px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              The truth is, things move fast these days. New degrees, new roles, new rules. What worked five years ago, isn’t completely reliable now. It’s no longer just about high scores or perfect resumes. It’s about knowing how to tell your story in a way that allows the colleges to see who you really are.
            </p>
            <p className="max-w-[600px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I’ve been on both sides of this journey. I started out at Google, graduated from London Business School, and took many entrepreneurial detours before setting up Prerna Bansal & Co.
            </p>
            <p className="max-w-[600px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Since then, I’ve worked across 8 industries, stumbled, learned, grown - and helped over 300 people do the same. That one guy who had faced disciplinary action in college? He now works at an Investment Bank in London. The kid without any extracurriculars in school is all set to graduate.
            </p>
            <div className="mt-6">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="#contact-us">Get in Touch NOW</Link>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <div className="w-[400px] md:w-[500px] h-[560px] md:h-[700px] rounded-xl overflow-hidden relative">
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
