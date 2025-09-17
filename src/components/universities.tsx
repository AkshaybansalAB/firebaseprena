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

const universityLogos1 = [
  "Harvard University", "Stanford University", "MIT", "University of Oxford", "University of Cambridge", "Caltech", "Princeton University", "Yale University", "Columbia University", "UChicago"
];

const universityLogos2 = [
  "UPenn", "Johns Hopkins", "Northwestern", "Duke University", "Cornell University", "UCLA", "UC Berkeley", "University of Michigan", "NYU", "Imperial College London"
];

export function Universities() {
  const [api1, setApi1] = React.useState<CarouselApi>();
  const [api2, setApi2] = React.useState<CarouselApi>();

  React.useEffect(() => {
    if (!api1) {
      return;
    }

    const interval = setInterval(() => {
      if (api1.canScrollNext()) {
        api1.scrollNext();
      } else {
        api1.scrollTo(0);
      }
    }, 3000);

    // Stop autoplay on interaction
    api1.on("pointerDown", () => {
      clearInterval(interval);
    });
    
    return () => clearInterval(interval);
  }, [api1]);

  React.useEffect(() => {
    if (!api2) {
      return;
    }

    const interval = setInterval(() => {
        if (api2.canScrollNext()) {
          api2.scrollNext();
        } else {
          api2.scrollTo(0);
        }
      }, 3000);
  
      // Stop autoplay on interaction
      api2.on("pointerDown", () => {
        clearInterval(interval);
      });
      
      return () => clearInterval(interval);
  }, [api2]);

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
        <div className="py-12 space-y-8">
          <Carousel
            setApi={setApi1}
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent>
              {universityLogos1.map((name, index) => (
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
          <Carousel
            setApi={setApi2}
            opts={{
              align: 'start',
              loop: true,
              direction: 'right',
            }}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent>
              {universityLogos2.map((name, index) => (
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