"use client";
import KitchenCabinet1040HodgesAve from "@/assets/images/portfolio/KitchenCabinet1040HodgesAve.jpg";
import Image from "next/image";

export default function WhatWeCanAchieve() {
  return (
    <section className="py-20 px-4 sm:px-6 md:pl-52 md:pr-28 max-w-[1540px] mt-[-200px] relative z-10 grid grid-cols-1 md:grid-cols-[50%_50%] gap-16 light-dark-bg rounded-lg">
      {/* Left Column: Image */}
      <div className="w-full h-[300px] sm:h-[400px] md:h-full relative rounded-lg overflow-hidden">
        <Image
          src={KitchenCabinet1040HodgesAve}
          alt="Kitchen millwork and custom cabinetry - made in USA"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>

      {/* Right Column: Content */}
      <div className="flex flex-col justify-center items-start space-y-6">
        <div className="flex flex-col gap-4 accent-light border-b py-6 mb-6">
          <h3 className="heading-two text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug">
            Our <span className="text-darkest">Mission</span>
          </h3>
          <p className="text-base leading-relaxed max-w-xl">
            To deliver reliable, design-forward millwork solutions tailored to
            the specific needs of our clients across a wide range of industries
            — built in the U.S., delivered on time, and crafted with care.
            <br />
            <br />
            Born from a desire to simplify complex workflows and eliminate
            outsourcing delays, Ascend Millwork integrates design,
            manufacturing, and installation under one roof. Our mission is to
            provide durable, cost-effective, and beautifully engineered
            interiors while ensuring a smooth, stress-free process from initial
            planning to final install.
          </p>
        </div>

        {/* <Button
          ButtonText="Explore Projects"
          ButtonUrl="/portfolio"
          ButtonTextColor="text-white"
        /> */}
      </div>
    </section>
  );
}
