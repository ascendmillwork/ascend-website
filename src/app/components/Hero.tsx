import LivingRoom from "@/assets/images/portfolio/LivingRoom.jpg";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="px-4 py-4 sm:px-6 md:px-8">
      <section
        className="relative w-full min-h-[auto] md:min-h-[96vh] bg-center bg-cover bg-fixed rounded-md overflow-hidden"
        style={{ paddingTop: "70px" }}
      >
        {/* Optimized Background Image */}
        <Image
          src={LivingRoom}
          alt="Custom millwork background"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />

        {/* Black tint overlay */}
        <div className="absolute inset-0 dark-bg opacity-70"></div>

        {/* Content container */}
        <div className="relative lg:absolute inset-0 flex flex-col lg:flex-row justify-between items-end max-w-7xl mx-auto px-4 sm:px-6 md:px-10 z-10 gap-6 pt-36 pb-12 sm:pt-36 sm:pb-16">
          {" "}
          {/* Left content */}
          <div className="w-full lg:w-[790px] flex flex-col gap-5">
            <p className="text-xs sm:text-sm uppercase tracking-widest opacity-80 font-semibold accent-light">
              High-Quality, Precision-Crafted Casegoods, Millwork & Interior
              Solutions
            </p>

            <h1 className="accent-light text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-snug">
              Dreams to Reality
            </h1>

            <div className="flex flex-col justify-start items-start gap-5">
              <p className="leading-relaxed text-sm sm:text-base accent-light">
                From concept to reality, Ascend Millwork creates custom
                commercial Casegoods & Millwork solutions for hotels,
                multifamily properties and restaurants across the US. We provide
                full turnkey services to include manufacturing, logistics and
                installation.
              </p>

              {/* <Button
                ButtonText="Get A Quote"
                ButtonUrl="/contact"
                ButtonTextColor="text-white"
              /> */}
            </div>
          </div>
          {/* Right glass card */}
          {/* <div className="w-full sm:w-auto max-w-sm mt-6 lg:mt-0 bg-white/10 backdrop-blur-md rounded-lg py-8 px-6 text-black flex flex-col items-end gap-4 shadow-lg group self-end border border-light accent-light cursor-pointer">
            <div className="w-10 h-10 rounded-full border border-light accent-light flex items-center justify-center transition-transform duration-300">
              <ArrowUpRight className="accent-light group-hover:rotate-180 transition-transform duration-300" />
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-1 heading-four accent-light">
                Take a look at some of our previous work.
              </h3>
              <p className="text-sm opacity-80 accent-light">
                Explore our portfolio of custom millwork and cabinetry
                projects—crafted with precision, tailored for function, and
                built to elevate every space.
              </p>
            </div>
          </div> */}
        </div>
      </section>
    </div>
  );
}
