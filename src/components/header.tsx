import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { GraduationCap } from 'lucide-react';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import Image from 'next/image';
export function Header() {
  return (
    <header className="fixed top-3 left-4 right-4 z-50 bg-background/80 backdrop-blur-sm shadow-md rounded-xl ">
  <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
    <Link href="#" className="flex items-center" prefetch={false}>
        <div className="relative h-16 w-[180px] md:w-[200px]"> {/* keeps navbar height fixed, adjusts logo width */}
          <Image
            src="/logos FINAL-05.png"
            alt="Prerna Bansal & Co Logo"
            fill // makes Image fill the parent div
            className="object-contain"
          />
        </div>
      </Link>
    <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
      <Link href="#services" className="text-foreground/80 transition-colors hover:text-foreground" prefetch={false}>
        Services
      </Link>
      <Link href="#results" className="text-foreground/80 transition-colors hover:text-foreground" prefetch={false}>
        Results
      </Link>
      <Link href="#faq" className="text-foreground/80 transition-colors hover:text-foreground" prefetch={false}>
        FAQ
      </Link>
      <Link href="#contact-us" className="text-foreground/80 transition-colors hover:text-foreground" prefetch={false}>
        Contact
      </Link>
    </nav>
    <div className='flex items-center gap-4'>
      <Button asChild className="hidden sm:flex bg-primary hover:bg-primary/90">
        <Link href="#contact-us">Get Started</Link>
      </Button>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <nav className="grid gap-6 text-lg font-medium mt-8">
            <Link href="#services" className="text-foreground/80 hover:text-foreground" prefetch={false}>Services</Link>
            <Link href="#results" className="text-foreground/80 hover:text-foreground" prefetch={false}>Results</Link>
            <Link href="#faq" className="text-foreground/80 hover:text-foreground" prefetch={false}>FAQ</Link>
            <Link href="#contact-us" className="text-foreground/80 hover:text-foreground" prefetch={false}>Contact</Link>
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link href="#contact-us">Get Started</Link>
            </Button>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  </div>
</header>

  );
}
