import KitchenCabinetHodgesAvenue from "@/assets/images/portfolio/KitchenCabinet1010HodgesAvenue.png";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function ViewOurWork() {
  return (
    <section className="px-4 py-4 sm:px-6 md:px-8">
      <div className="relative w-full min-h-auto sm:h-[70vh] rounded-md overflow-hidden">
        {/* Optimized Background Image using next/image */}
        <Image
          src={KitchenCabinetHodgesAvenue}
          alt="Kitchenette millwork with custom cabinetry and stone tops - made in USA"
          fill
          priority
          placeholder="blur"
          className="object-cover object-center z-0"
        />

        {/* Black tint overlay */}
        <div className="absolute inset-0 dark-bg opacity-70 z-10"></div>

        {/* Content container */}
        <div className="relative lg:absolute inset-0 flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 md:px-10 z-20 gap-6 py-16 sm:py-24">
          {/* Left content */}
          <div className="w-full lg:w-[70%] flex flex-col gap-5">
            <p className="text-xs sm:text-sm uppercase tracking-widest opacity-80 font-semibold accent-light">
              Bespoke Joiner, Carpenter & Woodworking Services
            </p>

            <h1 className="accent-light text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug">
              We&apos;ve delivered excellence across a wide range of spaces.
            </h1>

            {/* Glass Card */}
            <div className="w-full sm:w-auto max-w-lg bg-white/10 backdrop-blur-md rounded-lg py-8 px-6 text-black flex flex-col items-end gap-4 shadow-lg group border border-light accent-light cursor-pointer mt-10">
              <div className="w-10 h-10 rounded-full border border-light accent-light flex items-center justify-center transition-transform duration-300">
                <ArrowUpRight className="accent-light group-hover:rotate-180 transition-transform duration-300" />
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-1 heading-four accent-light">
                  Take a look at some of our previous work.
                </h3>
              </div>
            </div>
          </div>

          {/* Right paragraph */}
          <div className="w-full lg:w-[30%] flex items-start lg:items-center">
            <p className="leading-relaxed text-sm sm:text-base accent-light max-w-3xl">
              Take a look at some of our custom-crafted millwork and cabinetry
              projects — designed to elevate every environment.
              <br />
              <br />
              From luxury hotels and multi-family residences to commercial
              interiors, our portfolio reflects precision, creativity, and
              attention to detail. Every piece is a reflection of our commitment
              to quality craftsmanship and client satisfaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
