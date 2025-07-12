import KitchenCabinetHodgesAvenue from "@/assets/images/portfolio/KitchenCabinet1010HodgesAvenue.png";
import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="pb-24 pt-36 lg:pt-0 px-4 sm:px-6 md:px-4 mx-auto flex flex-col lg:flex-row items-stretch gap-10">
      {/* Left Content */}
      <div className="w-full lg:w-[65%] flex flex-col gap-5 justify-center md:px-42">
        <p className="text-xs sm:text-sm uppercase tracking-widest opacity-80 font-semibold">
          High-Quality, American-Made Millwork & Cabinetry Solutions
        </p>

        <h1 className="text-4xl sm:text-3xl md:text-4xl lg:text-7xl font-bold leading-snug">
          Ascend Millwork <span className="text-dark">History</span>
        </h1>

        <div className="flex flex-col justify-start items-start gap-5">
          <p className="leading-relaxed text-sm sm:text-base">
            Since 2017, Ascend Millwork has specialized in crafting interior
            components for both commercial and residential projects across the
            United States.
          </p>

          {/* <Button
            ButtonText="Get A Quote"
            ButtonUrl="/contact"
            ButtonTextColor="text-black"
          /> */}
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full lg:w-[75%] h-[500px] md:h-[700px] lg:h-[1080px]">
        <div className="h-full w-full relative rounded-lg overflow-hidden">
          <Image
            src={KitchenCabinetHodgesAvenue}
            alt="Custom millwork and cabinetry for living room - made in USA"
            className="object-cover h-full w-full"
            priority
            height={1024}
            width={1536}
          />
        </div>
      </div>
    </section>
  );
}
