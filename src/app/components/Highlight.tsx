import MadeInUsa from "@/assets/images/MadeInUsa.png";
import USAFlag from "@/assets/images/UsaFlag.jpg";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

export default function Highlight() {
  return (
    <section className="px-4">
      <div className="relative max-w-7xl mx-auto rounded-xl overflow-hidden my-12">
        {/* Background Layer: Gradient + Flag */}
        <div className="absolute inset-0 z-0">
          <Image
            src={USAFlag}
            alt="USA Flag"
            fill
            className="object-cover mix-blend-overlay opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d] to-[#160027] opacity-70" />
        </div>

        {/* Content */}
        <div className="relative z-10 p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-8 text-white">
          {/* Left Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src={MadeInUsa}
              alt="Made in USA"
              width={160}
              height={160}
              className="w-50 h-50 object-cover rounded-full"
            />
          </div>

          {/* Right Content */}
          <div className="w-full md:w-1/2 md:text-left">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 leading-snug">
              Proudly Manufactured in the USA
              <br />
              <span className="text-sm font-normal opacity-90 block mt-1">
                Precision-crafted casegoods & millwork from our U.S. facility —
                delivered with pride and reliability.
              </span>
            </h2>

            <ul className="space-y-2 text-sm sm:text-base text-white/90 mt-4">
              <li className="flex items-start gap-2">
                <CheckCircle className="text-red-500 w-5 h-5 mt-1" />
                U.S.-based manufacturing with fast lead times
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-red-500 w-5 h-5 mt-1" />
                Turnkey solutions from design to installation
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-red-500 w-5 h-5 mt-1" />
                Trusted partner for commercial & multifamily projects
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
