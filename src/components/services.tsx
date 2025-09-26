import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
  {
    image: 'Success/1.png',
    title: 'Board Selection',
    description:
      'Expert advice on choosing the right academic board (IB, A-Levels, etc.) to align with your future goals.',
  },
  {
    image: '/Success/2.png',
    title: 'Personalized Mentoring',
    description:
      'One-on-one mentorship to build a strong profile, from extracurriculars to personal projects.',
  },
  {
    image: '/Success/3.png',
    title: 'College Applications',
    description:
      'Comprehensive support for crafting compelling applications, including essays and statements of purpose.',
  },
  {
    image: '/Success/4.png',
    title: 'Mock Interviews',
    description:
      'Rigorous mock interview sessions to build confidence and prepare you for any question.',
  },
];

export function Services() {
  return (
    <section id="services" className="w-full py-10 bg-[#008682] text-[#fefbf1] pb-[7rem]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary-foreground">
              Our Services
            </div>
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
              How We Help You Succeed
            </h2>
            <p className="max-w-[800px] text-[#fefbf1]/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We offer a suite of services designed to provide holistic support throughout your journey to higher education.
            </p>
          </div>
        </div>

        {/* Grid with 2 cards per row */}
        <div className="mx-auto grid items-start gap-10 sm:max-w-3xl sm:grid-cols-2 md:max-w-4xl lg:max-w-5xl mt-12">
          {services.map((service, index) => (
  <div key={index} className="relative">
    {/* First card extra image top-left */}
    {index === 0 && (
    <img
  src="/a1.png"
  alt="Decoration"
  className="absolute -top-28 -left-28 w-72 h-72 z-0 opacity-90"
/>

    )}

    {/* Fourth card extra image bottom-right */}
    {index === 3 && (
      <img
  src="/a1.png"
  alt="Decoration"
  className="absolute -bottom-28 -right-28 w-72 h-72 z-0 opacity-90"
/>

    )}

    <Card
      className="relative z-10 bg-[#88c0ae] border border-white/40 hover:shadow-lg transition-shadow duration-300 flex flex-col items-center p-3 w-110 h-full rounded-[4rem]"

    >
      <CardHeader className="flex flex-col items-center text-center gap-4">
        {/* Top circle image */}
        <div className="w-20 h-20  overflow-hidden relative">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
        </div>

        <CardTitle className="font-headline text-xl text-[#1b2d61]">
          {service.title}
        </CardTitle>
      </CardHeader>

      <CardContent className="text-center text-[#fefbf1] flex-grow">
        {service.description}
      </CardContent>
    </Card>
  </div>
))}

        </div>
      </div>
    </section>
  );
}
