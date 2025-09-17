import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ClipboardCheck, Users2, School, MessagesSquare } from 'lucide-react';

const services = [
  {
    icon: <ClipboardCheck className="h-8 w-8 text-accent" />,
    title: 'Board Selection',
    description: 'Expert advice on choosing the right academic board (IB, A-Levels, etc.) to align with your future goals.',
  },
  {
    icon: <Users2 className="h-8 w-8 text-accent" />,
    title: 'Personalized Mentoring',
    description: 'One-on-one mentorship to build a strong profile, from extracurriculars to personal projects.',
  },
  {
    icon: <School className="h-8 w-8 text-accent" />,
    title: 'College Applications',
    description: 'Comprehensive support for crafting compelling applications, including essays and statements of purpose.',
  },
  {
    icon: <MessagesSquare className="h-8 w-8 text-accent" />,
    title: 'Mock Interviews',
    description: 'Rigorous mock interview sessions to build confidence and prepare you for any question.',
  },
];

export function Services() {
  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-[#008682] text-[#fefbf1]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary-foreground">Our Services</div>
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
              How We Help You Succeed
            </h2>
            <p className="max-w-[900px] text-[#fefbf1]/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We offer a suite of services designed to provide holistic support throughout your journey to higher education.
            </p>
          </div>
        </div>
        <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-4 mt-12">
          {services.map((service, index) => (
            <Card key={index} className="bg-[#88c0ae] border-white/20 hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
              <CardHeader className="flex flex-col items-center text-center gap-4">
                {service.icon}
                <CardTitle className="font-headline text-xl text-[#1b2d61]">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-[#fefbf1] flex-grow">
                {service.description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
