'use client';

import * as React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';
import { Button } from './ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Autoplay from "embla-carousel-autoplay";


const universityLogos1 = [
  "Harvard University", "Stanford University", "MIT", "University of Oxford", "University of Cambridge", "Caltech", "Princeton University", "Yale University", "Columbia University", "UChicago"
];

const universityLogos2 = [
  "UPenn", "Johns Hopkins", "Northwestern", "Duke University", "Cornell University", "UCLA", "UC Berkeley", "University of Michigan", "NYU", "Imperial College London"
];

export function Universities() {
  const [api1, setApi1] = React.useState<CarouselApi>();
  const [api2, setApi2] = React.useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = React.useState(false)
  const [canScrollNext, setCanScrollNext] = React.useState(true)

  const scrollPrev = React.useCallback(() => {
    api1?.scrollPrev()
    api2?.scrollPrev()
  }, [api1, api2])

  const scrollNext = React.useCallback(() => {
    api1?.scrollNext()
    api2?.scrollNext()
  }, [api1, api2])

  React.useEffect(() => {
    if (!api1 || !api2) {
      return;
    }

    const onSelect = (api: CarouselApi) => {
        setCanScrollPrev(api.canScrollPrev())
        setCanScrollNext(api.canScrollNext())
    }

    onSelect(api1);
    api1.on("select", onSelect);
    api1.on("reInit", onSelect);

    return () => {
      if (api1) {
        api1.off("select", onSelect);
        api1.off("reInit", onSelect);
      }
    }

  }, [api1, api2]);

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
        <div className="relative w-full max-w-6xl mx-auto">
            <div className="py-12 space-y-8">
            <Carousel
                setApi={setApi1}
                plugins={[ Autoplay({ delay: 0, stopOnInteraction: true, playOnInit: true }) ]}
                opts={{
                    align: 'start',
                    loop: true,
                }}
                className="w-full"
            >
                <CarouselContent className="animate-marquee">
                {[...universityLogos1, ...universityLogos1].map((name, index) => (
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
            </Carousel>
            <Carousel
                setApi={setApi2}
                plugins={[ Autoplay({ delay: 0, stopOnInteraction: true, playOnInit: true, reverse: true }) ]}
                opts={{
                    align: 'start',
                    loop: true,
                }}
                className="w-full"
            >
                <CarouselContent className="animate-marquee-reverse">
                {[...universityLogos2, ...universityLogos2].map((name, index) => (
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
            </Carousel>
            </div>
            <Button
                variant="outline"
                size="icon"
                className="absolute -left-4 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full text-primary border-primary hover:bg-primary/10 z-10 sm:-left-12"
                onClick={scrollPrev}
                disabled={!canScrollPrev}
            >
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Previous slide</span>
            </Button>
            <Button
                variant="outline"
                size="icon"
                className="absolute -right-4 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full text-primary border-primary hover:bg-primary/10 z-10 sm:-right-12"
                onClick={scrollNext}
                disabled={!canScrollNext}
            >
                <ChevronRight className="h-4 w-4" />
                <span className="sr-only">Next slide</span>
            </Button>
        </div>
      </div>
    </section>
  );
}
