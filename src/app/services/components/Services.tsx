import { Services } from "@/data/ServicesData";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function ServicesRows() {
  return (
    <section className="pb-26 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto mt-24">
      {/* Vertical Column List */}
      <div className="flex flex-col gap-8">
        {Services.map(({ title, image, description }, index) => (
          <div
            key={index}
            className="relative rounded-lg overflow-hidden h-[500px] cursor-pointer group"
          >
            {/* Background Image */}
            <Image
              src={image}
              alt={title}
              className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              draggable={false}
              width={1000}
              height={600}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            {/* Top-right button */}
            <button
              type="button"
              className="absolute top-4 right-4 w-10 h-10 rounded-full border accent-light flex items-center justify-center border-light accent-light transition-transform duration-300 group-hover:rotate-180 z-10"
            >
              <ArrowUpRight size={20} />
            </button>

            {/* Bottom-left title */}
            <div className="absolute bottom-4 left-4 accent-light text-lg font-semibold drop-shadow-lg z-10 p-6">
              <h3 className="text-5xl">{title}</h3>
              <p className="my-4 max-w-xl">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
