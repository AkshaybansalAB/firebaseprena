'use client';

import * as React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
  {
    quote: "Prerna Ma'am's guidance was invaluable. Her personalized approach helped me get into my dream university. I couldn't have done it without her expertise and constant support.",
    name: "Aarav Sharma",
  },
  {
    quote: "The entire process of college applications felt overwhelming, but Prerna Bansal & Co made it manageable and even exciting. Their insights into what top universities look for are second to none.",
    name: "Diya Mehta",
  },
  {
    quote: "From building my profile to acing the interviews, the team was with me at every step. I'm incredibly grateful for their mentorship which went beyond just applications.",
    name: "Rohan Kapoor",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-[#1b2d61] text-[#fefbf1]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
            What Our Students Say
          </h2>
        </div>
        <div className="mx-auto max-w-3xl pt-12">
          <Carousel
            plugins={[
              Autoplay({
                delay: 5000,
                stopOnInteraction: true,
              }),
            ]}
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card className="bg-transparent border-0 shadow-none">
                      <CardContent className="flex flex-col items-center justify-center p-6 text-center space-y-4">
                        <p className="text-lg md:text-xl italic">
                          &ldquo;{testimonial.quote}&rdquo;
                        </p>
                        <span className="font-semibold text-base">- {testimonial.name}</span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-8 text-[#fefbf1] border-[#fefbf1] bg-transparent hover:bg-[#fefbf1]/10 hover:text-[#fefbf1] hidden sm:flex" />
            <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-8 text-[#fefbf1] border-[#fefbf1] bg-transparent hover:bg-[#fefbf1]/10 hover:text-[#fefbf1] hidden sm:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
