"use client";

import Member1 from "@/assets/images/team/Member1.png";
import Member2 from "@/assets/images/team/Member2.png";
import Member3 from "@/assets/images/team/Member3.jpeg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const slidesData = [
  {
    img: Member1,
    title: "Carlos",
    description:
      "A breathtaking forest filled with tall trees and fresh air, perfect for nature lovers.",
    job: "Dowel Machine Operator",
  },
  {
    img: Member2,
    title: "Denny",
    description:
      "A peaceful lake reflecting the surrounding mountains and sky.",
    job: "Project Manager",
  },
  {
    img: Member3,
    title: "Imelda",

    description: "Enjoy stunning sunsets over rolling hills and calm skies.",
    job: "Edge Banding",
  },
];

export function AboutSlider() {
  return (
    <section className="relative max-w-[1200px] mx-auto px-4 py-24">
      <Carousel
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
      >
        <CarouselContent>
          {slidesData.map(({ img, title, job }, index) => (
            <CarouselItem key={index}>
              <div
                className="w-full sm:w-[600px] flex flex-col items-start rounded-lg overflow-hidden p-6 sm:p-10"
                style={{ minWidth: "300px" }}
              >
                <Image
                  src={img}
                  alt={title}
                  height={600}
                  width={600}
                  className="w-full h-80 object-cover rounded-lg"
                />
                <h3 className="text-xl font-semibold mt-6">{title}</h3>
                <p>{job}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Desktop Absolute Info Panel */}
        <div className="hidden lg:flex flex-col justify-center w-[460px] h-[500px] absolute top-1/2 right-0 -translate-y-1/2 px-6 py-8 backdrop-blur-md rounded-lg border border-accent bg-white/60">
          <div className="flex flex-col justify-center items-center">
            <div>
              <p className="text-sm uppercase tracking-wide font-semibold">
                Meet The Team
              </p>
              <h3 className="heading-two text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug max-w-2xl">
                The Face Behind The <span className="text-dark">Magic</span>
              </h3>
              <p className="text-sm leading-relaxed">
                At Ascend Millwork, our team is the heart of everything we do.
                From the drawing board to installation day, we bring passion,
                expertise, and a deep commitment to quality in every detail we
                touch.
              </p>
            </div>

            {/* <Button
              ButtonText="Learn More"
              ButtonUrl="/"
              ButtonTextColor="text-black"
            /> */}
          </div>

          <div className="flex gap-4 mt-6">
            <CarouselPrevious className="underline text-sm font-semibold cursor-pointer sliderButtons">
              ← Prev
            </CarouselPrevious>
            <CarouselNext className="underline text-sm font-semibold cursor-pointer sliderButtons">
              Next →
            </CarouselNext>
          </div>
        </div>

        {/* Mobile Bottom Controls */}

        <div className="lg:hidden relative">
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-6 z-20 top-3.5">
            <CarouselPrevious className="underline text-sm font-semibold cursor-pointer sliderButtons">
              ← Prev
            </CarouselPrevious>
            <CarouselNext className="underline text-sm font-semibold cursor-pointer sliderButtons">
              Next →
            </CarouselNext>
          </div>
        </div>
      </Carousel>
    </section>
  );
}
