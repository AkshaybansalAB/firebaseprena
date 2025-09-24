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
    quote: "Working with Prerana has been an amazing experience, it was much more personal and in depth than I had anticipated. With Prerna, you have someone that is 100% genuine, reliable and focused on what’s best for you. She was able to guide me and give me the push I needed to get me motivated and on the right path. She’s very professional in her work ethic while also having a real personal touch that makes her stand out. I wholeheartedly vouch for her to be able to take anyone through their admissions journey.",
    name: "AG, Harvard Ed. M, 2024",
  },
  {
    quote: "We had the privilege of working with Prerna during our daughter Anika’s college application journey, and we’re so grateful. She guided us through college and major selection, and essay writing - with both expertise and heart. What stood out was her deep understanding of our cultural background and Anika’s personality, which helped us find the right-fit colleges. Her warmth, energy, and care made a stressful process feel manageable. Anika received offers from top universities along with a $150,000 scholarship. We couldn’t have done it without her. Highly recommend her to anyone looking for a counsellor who truly cares.",
    name: "HU, whose daughter received a full-ride scholarship to UT Dallas",
  },
  // {
  //   quote: "Thank you so much, I got into my dream college NC State!",
  //   name: "TR, Computer Science Major, NC State, Class of 2028",
  // },
  {
    quote: "Working with Prerna during my son Akash’s college application process was a wonderful experience. Her deep knowledge of colleges across the US, UK, and Canada helped us identify the right-fit options based on his strengths. She supported everything - from essays and profile building to competitive exams and internship planning. Prerna’s patience, clear communication, and organised approach made the process smooth and effective. She goes above and beyond, and I’d wholeheartedly recommend her to anyone looking for a supportive, experienced, and genuinely invested admissions counsellor.",
    name: "KC, whose son got offers from IU Bloomington, ASU & Multiple UCs",
  },
  {
    quote: "Prerna has mastered the art of helping one dig deeper and crafting stories that are authentic to oneself. Her calm, positive and reassuring ‘we’ve got this’ attitude is really what stood out to me the most and made the otherwise regarded as ‘stressful’ experience, an exciting one. I would strongly recommend her to anyone not only looking for an essay/CV review, but also to help you think from a different perspective and translate your essence onto paper with precision.",
    name: "ID, Masters in Education, Columbia University",
  },
  {
    quote: "I had a low CGPA which made my choices limited. Prerna was the one who guided me and suggested to me what kinds of Universities I can apply for. She helped me in every step of the way - from shortlisting universities to tailoring SOPs for each of them and then to finalising the right people for the recommendation. With her help I was able to get into Kingston University that comes in the top 40 universities in the UK. I am so glad that I had reached out to her for her help and guidance.",
    name: "SS, Kingston University",
  },
  {
    quote: "My application process was complicated due to COVID and a few personal hurdles, but Prerna made the entire journey feel manageable and even enjoyable. She helped transform my SOP into a genuine reflection of my story - not just a list of achievements. What I appreciated most was how approachable and encouraging she was, while still being detail-oriented and fully committed. She was happy to do as many revisions as needed to get things just right. I always felt supported, and truly enjoyed working with her every step of the way.",
    name: "SM, King's University, M.Sc. Data Science",
  },
  {
    quote: "I was extremely confused regarding my future and the subjects I wanted to pick when I consulted Prerna. She was very very comfortable to work with and extremely approachable, she curated a plan that was suitable for both of us. She asked me questions and gave me space to explore and research on my own while guiding me simultaneously. She gave me an insight into different subjects and finally helped me pick the right one. She was super friendly and calm throughout all our sessions, a perfect shoulder to fall upon!",
    name: "DL",
  },
  // {
  //   quote: "You are so committed to your work... I'm really impressed with the way you work. All the best",
  //   name: "Mother of SP, whose daughter received offers from OP Jindal & Edinburgh",
  // },
  {
    quote: "My experience with Prerna was filled with learning, reflection, and growth. Even though I was applying to niche, non-traditional master’s programs, she took the time to deeply understand the field - and made the process feel thoughtful and personalised. Her guidance was steady, her feedback honest, and her storytelling instincts spot on. I truly appreciated her patience, perspective, and ability to simplify a stressful process. Thanks to her creativity and insight, I cleared the first rounds at every college I applied to. It was a pleasure working with her!",
    name: "SJ, received offers from CIIS, San Francisco & Royal Academy of Arts, London",
  },
  {
    quote: "When we started working with Prerna, we knew very little about the US college application process. She quickly put us at ease, providing clarity and support at every step. Over six months, she guided us through essays, forms, and deadlines with dedication and quick turnarounds. Her detailed feedback - especially on the Common App and supplementary essays - made a huge difference. Amit’s final application was strong, clear, and timely, thanks to her help. It’s been a real pleasure working with her, and we’d gladly recommend her to any future college applicants.",
    name: "Parents of AM, whose son is pursuing CS at UIUC",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="w-full py-10 bg-[#27316c] text-[#fefbf1]">
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
                    <Card className="bg-transparent border-0 shadow-none text-[#fefbf1]">
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
