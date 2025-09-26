import Link from 'next/link';
import { Instagram, Youtube, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer id="contact" className="w-full bg-primary/5 py-12 md:py-16 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-10">

          {/* Left: Logo and socials */}
          <div className="flex-1 space-y-4">
            <Link href="#" className="flex items-center" prefetch={false}>
              <div className="relative h-[80px] sm:h-[100px] w-[200px] sm:w-[200px] md:w-[200px] lg:w-[400px] lg:-ml-20 overflow-visible">
                <img
                  src="/logos FINAL-05.png"
                  alt="Prerna Bansal & Co Logo"
                  className="object-contain h-full w-full"
                />
              </div>
            </Link>

            <p className="max-w-full sm:max-w-md text-foreground/80">
              Your trusted partner in navigating the path to higher education. Let's build your future, together.
            </p>

            <div className="flex space-x-4 mt-4">
              <Link href="https://www.instagram.com/prernabansalandco/" target="_blank" className="text-foreground/80 hover:text-primary" prefetch={false}>
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://www.youtube.com/@PrernaBansalandco" target="_blank" className="text-foreground/80 hover:text-primary" prefetch={false}>
                <Youtube className="h-6 w-6" />
                <span className="sr-only">YouTube</span>
              </Link>
              <Link href="https://www.linkedin.com/company/prerna-bansal-and-co-college-admissions/" target="_blank" className="text-foreground/80 hover:text-primary" prefetch={false}>
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          {/* Right: Quick Links */}
          <div className="flex-1 space-y-4">
            <h3 className="font-headline text-xl font-bold text-primary">Explore</h3>
            <p className="text-foreground/80">
              Navigate quickly to important sections of our site or learn more about what we offer.
            </p>
            <ul className="space-y-2">
  <li>
    <Link
      href="#services"
      className="text-foreground/80 hover:text-primary hover:underline font-medium cursor-pointer transition"
    >
      Our Services
    </Link>
  </li>
  <li>
    <Link
      href="#universities"
      className="text-foreground/80 hover:text-primary hover:underline font-medium cursor-pointer transition"
    >
      Where Students Go
    </Link>
  </li>
  <li>
    <Link
      href="#about"
      className="text-foreground/80 hover:text-primary hover:underline font-medium cursor-pointer transition"
    >
      About Us
    </Link>
  </li>
  <li>
    <Link
      href="#contact"
      className="text-foreground/80 hover:text-primary hover:underline font-medium cursor-pointer transition"
    >
      Contact Us
    </Link>
  </li>
</ul>

          </div>

        </div>

        <div className="mt-8 border-t border-primary/20 pt-8 text-center text-sm text-foreground/60">
          © {new Date().getFullYear()} Prerna Bansal & Co. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
