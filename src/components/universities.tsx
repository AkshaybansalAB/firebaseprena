'use client';

import * as React from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

const universityLogos1 = Array.from({ length: 10 }, (_, i) => `/College Logos/${i + 1}.avif`);
const universityLogos2 = Array.from({ length: 10 }, (_, i) => `/College Logos/${i + 11}.avif`);

export function Universities() {
  return (
    <section id="universities" className="w-full py-7 bg-primary/5 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter text-primary sm:text-5xl">
            Where Our Students Go
          </h2>
          <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Our students have been accepted into a wide range of top-tier universities across the globe.
          </p>
        </div>

        <div className="relative w-full max-w-7xl mx-auto py-12 space-y-8">
          {/* First row of logos */}
          <Carousel
            plugins={[
              Autoplay({ delay: 2000, stopOnInteraction: false, stopOnMouseEnter: true }),
            ]}
            opts={{ align: 'start', loop: true }}
            className="w-full"
          >
            <CarouselContent>
              {universityLogos1.map((src, index) => (
                <CarouselItem key={index} className="basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <div className="p-2">
                    <Card className="bg-background/80 border-primary/10 shadow-sm">
                      <CardContent className="flex aspect-[2/1] items-center justify-center p-6">
                        <Image
                          src={src}
                          alt={`University logo ${index + 1}`}
                          width={150}
                          height={75}
                          className="object-contain"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Second row of logos */}
          <Carousel
            plugins={[
              Autoplay({ delay: 2000, stopOnInteraction: false, stopOnMouseEnter: true, startDelay: 1000 }),
            ]}
            opts={{ align: 'start', loop: true, direction: 'right' }}
            className="w-full"
          >
            <CarouselContent>
              {universityLogos2.map((src, index) => (
                <CarouselItem key={index} className="basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <div className="p-2">
                    <Card className="bg-background/80 border-primary/10 shadow-sm">
                      <CardContent className="flex aspect-[2/1] items-center justify-center p-6">
                        <Image
                          src={src}
                          alt={`University logo ${index + 11}`}
                          width={150}
                          height={75}
                          className="object-contain"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
