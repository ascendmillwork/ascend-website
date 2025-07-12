"use client";
import Hospitality6 from "@/assets/images/portfolio/Hospitality/Hospitality6.webp";
import Image from "next/image";

export default function WhoWeAreAbout() {
  return (
    <section className="py-20 px-4 sm:px-6 md:px-10 md:pr-28 max-w-7xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-[70%_30%] gap-16 rounded-lg">
      {/* Left Column: Content */}
      <div className="flex flex-col justify-center items-start space-y-6">
        <div className="flex flex-col gap-4 border-b py-6 mb-6">
          <h3 className="heading-two text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug">
            A team driven by{" "}
            <span className="text-color-dark">
              craftsmanship, precision, and purpose.
            </span>
          </h3>
          <p className="text-base leading-relaxed max-w-xl">
            At Ascend Millwork, we&apos;re more than fabricators — we&apos;re
            partners in your project&apos;s success. Our team combines decades
            of hands-on experience with a forward-thinking approach to
            problem-solving, efficiency, and innovation.
          </p>

          <p className="text-base leading-relaxed max-w-xl">
            Whether crafting bespoke cabinetry for a boutique hotel or
            coordinating logistics for a multi-unit housing development, we
            bring an unwavering commitment to detail, timelines, and trust.
            Every piece is made in our U.S.-based facility, ensuring consistency
            and accountability at every stage.
            <br />
            <br />
            <b>
              We don&apos;t just build woodwork — we build confidence,
              relationships, and exceptional spaces.
            </b>
          </p>
        </div>
      </div>

      {/* Right Column: Image */}
      <div className="w-full h-[300px] sm:h-[400px] md:h-full relative rounded-lg overflow-hidden">
        <Image
          src={Hospitality6}
          alt="Custom kitchen millwork and cabinetry - made in USA"
          fill
          className="object-cover object-right"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 30vw"
          priority
        />
      </div>
    </section>
  );
}
