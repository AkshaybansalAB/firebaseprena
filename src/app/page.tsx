import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { Services } from '@/components/services';
import { Benefits } from '@/components/benefits';
import { Results } from '@/components/results';
import { Universities } from '@/components/universities';
import { Faq } from '@/components/faq';
import { Footer } from '@/components/footer';
import { ContactForm } from '@/components/contact-form';
import { Testimonials } from '@/components/testimonials';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <Benefits />
        <Results />
        <Universities />
        <ContactForm />
        <Testimonials />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
