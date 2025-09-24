import Link from 'next/link';
import { GraduationCap, Instagram, Youtube, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
export function Footer() {
  return (
    <footer id="contact" className="w-full bg-primary/5 py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
            <div className="space-y-4">
                <Link href="#" className="flex items-center gap-2" prefetch={false}>
                   <div className="relative h-16 w-[400px] md:w-[200px]"> {/* keeps navbar height fixed, adjusts logo width */}
                             <Image
                               src="/logos FINAL-05.png"
                               alt="Prerna Bansal & Co Logo"
                               fill // makes Image fill the parent div
                               className="object-contain"
                             />
                           </div>
                </Link>
                <p className="max-w-md text-foreground/80">
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
            <div className="space-y-4">
                <h3 className="font-headline text-xl font-bold text-primary">Get Started Today</h3>
                <p className="text-foreground/80">
                    Ready to take the next step? Send us a message to schedule your initial consultation.
                </p>
                <form className="flex space-x-2">
                    <Input type="email" placeholder="Enter your email" className="max-w-lg flex-1 bg-background" />
                    <Button type="submit" className="bg-primary hover:bg-primary/90">
                        Send
                    </Button>
                </form>
            </div>
        </div>
        <div className="mt-8 border-t border-primary/20 pt-8 text-center text-sm text-foreground/60">
            © {new Date().getFullYear()} Prerna Bansal & Co. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
