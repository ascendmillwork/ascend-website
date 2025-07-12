import { Services } from "@/data/ServicesData";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Button from "../utils/Button";

export default function OurServices() {
  const delays = ["delay-0", "delay-75", "delay-150", "delay-200", "delay-250"];

  return (
    <section className="pb-24 lg:pt-14 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto">
      {/* Heading Row */}
      <div className="flex sm:flex-row justify-between items-center mb-10 gap-4 sm:gap-0">
        <div className="max-w-4xl">
          <h3 className="heading-two text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug">
            Our <span className="text-color-dark">Services</span>
          </h3>
        </div>
        <Button
          ButtonText="View Our Services"
          ButtonUrl="/services"
          ButtonTextColor="black"
        />
      </div>

      {/* Hover Sections */}
      <div className="flex flex-col md:flex-row gap-2 h-auto md:h-[640px] overflow-visible">
        {Services.map(({ title, image }, index) => (
          <div
            key={index}
            className={`group flex-1 transition-all duration-400 ease-in-out cursor-pointer relative rounded-md overflow-hidden
              md:hover:flex-[1.5] ${delays[index]} min-h-[550px] md:h-auto`}
          >
            {/* Use Next.js Image instead of backgroundImage */}
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              placeholder="blur"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-30"></div>

            {/* Arrow button */}
            <Link
              href={"/services"}
              type="button"
              className="absolute top-4 right-4 w-10 h-10 rounded-full border accent-light flex items-center justify-center border-light accent-light transition-transform duration-300 group-hover:rotate-180 z-10"
            >
              <ArrowUpRight size={20} />
            </Link>

            {/* Title */}
            <div className="absolute bottom-4 left-4 accent-light text-lg font-semibold drop-shadow-lg z-10">
              {title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
