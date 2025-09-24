'use client';

import * as React from 'react';
import Image from 'next/image';

const universityLogos = Array.from({ length: 20 }, (_, i) => `/College Logos/${i + 1}.avif`);
const allLogos = [...universityLogos, ...universityLogos]; // Duplicate for seamless animation

export function Universities() {
  return (
    <section id="universities" className="w-full py-12 bg-primary/5 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter text-primary sm:text-5xl">
            Where Our Students Go
          </h2>
          <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Our students have been accepted into a wide range of top-tier universities across the globe.
          </p>
        </div>

        <div className="relative w-full max-w-7xl mx-auto py-12 flex flex-col gap-8">
            <div className="flex overflow-hidden">
                <div className="flex animate-marquee motion-reduce:animate-none">
                    {allLogos.map((src, index) => (
                        <div key={`forward-${index}`} className="flex-shrink-0 w-80 h-40 mx-4 flex items-center justify-center bg-background/80 border-primary/10 shadow-sm rounded-lg p-6">
                            <Image
                                src={src}
                                alt={`University logo ${index + 1}`}
                                width={200}
                                height={112}
                                className="object-contain"
                            />
                        </div>
                    ))}
                </div>
                 <div className="flex animate-marquee motion-reduce:animate-none" aria-hidden="true">
                    {allLogos.map((src, index) => (
                        <div key={`forward-clone-${index}`} className="flex-shrink-0 w-80 h-40 mx-4 flex items-center justify-center bg-background/80 border-primary/10 shadow-sm rounded-lg p-6">
                            <Image
                                src={src}
                                alt={`University logo ${index + 1}`}
                                width={200}
                                height={112}
                                className="object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex overflow-hidden">
                <div className="flex animate-marquee-reverse motion-reduce:animate-none">
                    {allLogos.map((src, index) => (
                        <div key={`reverse-${index}`} className="flex-shrink-0 w-80 h-40 mx-4 flex items-center justify-center bg-background/80 border-primary/10 shadow-sm rounded-lg p-6">
                            <Image
                                src={src}
                                alt={`University logo ${index + 1}`}
                                width={200}
                                height={112}
                                className="object-contain"
                            />
                        </div>
                    ))}
                </div>
                <div className="flex animate-marquee-reverse motion-reduce:animate-none" aria-hidden="true">
                    {allLogos.map((src, index) => (
                        <div key={`reverse-clone-${index}`} className="flex-shrink-0 w-80 h-40 mx-4 flex items-center justify-center bg-background/80 border-primary/10 shadow-sm rounded-lg p-6">
                            <Image
                                src={src}
                                alt={`University logo ${index + 1}`}
                                width={200}
                                height={112}
                                className="object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
