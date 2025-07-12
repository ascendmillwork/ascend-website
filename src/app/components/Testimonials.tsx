"use client";

import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Button from "../utils/Button";

const testimonials = [
  {
    quote:
      "AscendMillwork absolutely smashed it out of the park. The work was both timely and faultless, I have zero complaints.",
    name: "Mark Evans",
    project: "Kitchen Project",
  },
  {
    quote:
      "Highly professional and attentive to every detail. Would recommend to anyone looking for bespoke joinery.",
    name: "Sarah Johnson",
    project: "Bathroom Remodel",
  },
  {
    quote:
      "Exceptional craftsmanship and excellent communication throughout the entire project.",
    name: "David Lee",
    project: "Furniture Design",
  },
];

export default function Testimonials() {
  return (
    <section className="py-26 px-12 sm:px-6 md:px-10 accent-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {" "}
        {/* added horizontal padding */}
        <p className="text-center font-bold text-sm sm:text-base uppercase tracking-widest text-[--color--dark] mb-10">
          Testimonials
        </p>
        <div>
          <Carousel
            plugins={[
              Autoplay({
                delay: 4000,
              }),
            ]}
          >
            <CarouselContent>
              {testimonials.map(({ quote, name, project }, index) => (
                <CarouselItem key={index}>
                  <div className="flex flex-col items-center justify-center px-4 sm:px-12 text-center space-y-4 mx-auto max-w-[90vw] sm:max-w-full">
                    {/* Reduced horizontal padding on small screens, max width for better text wrapping */}
                    <h3 className="heading-three text-xl sm:text-3xl text-[--color--dark-600] leading-relaxed">
                      &quot;{quote}&quot;
                    </h3>
                    <div className="mt-10">
                      <p className="font-semibold">{name}</p>
                      <p className="text-sm">{project}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <div className="w-full flex items-center justify-center mt-20">
          <Button
            ButtonText="Get A Quote Now"
            ButtonUrl="/contact"
            ButtonTextColor="text-black"
          />
        </div>
      </div>
    </section>
  );
}
