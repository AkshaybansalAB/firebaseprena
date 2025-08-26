'use client';

import * as React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';

const universityLogos = [
  "Harvard University", "Stanford University", "MIT", "University of Oxford", "University of Cambridge", "Caltech", "Princeton University", "Yale University", "Columbia University", "UChicago"
];

export function Universities() {
  const [api, setApi] = React.useState<CarouselApi>();

  React.useEffect(() => {
    if (!api) {
      return;
    }

    const interval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, 3000);

    // Stop autoplay on interaction
    api.on("pointerDown", () => {
      clearInterval(interval);
    });
    
    return () => clearInterval(interval);
  }, [api]);

  return (
    <section id="universities" className="w-full py-12 md:py-24 lg:py-32 bg-primary/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter text-primary sm:text-5xl">
            Where Our Students Go
          </h2>
          <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Our students have been accepted into a wide range of top-tier universities across the globe.
          </p>
        </div>
        <div className="py-12">
          <Carousel
            setApi={setApi}
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent>
              {universityLogos.map((name, index) => (
                <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/5">
                  <div className="p-1">
                    <Card className="bg-background/80 border-primary/10 shadow-sm">
                      <CardContent className="flex aspect-video items-center justify-center p-6">
                        <span className="text-lg font-semibold text-primary/80 text-center">{name}</span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="text-primary border-primary hover:bg-primary/10" />
            <CarouselNext className="text-primary border-primary hover:bg-primary/10" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
