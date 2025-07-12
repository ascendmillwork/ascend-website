import LivingRoom from "@/assets/images/portfolio/LivingRoom.jpg";
import Image, { StaticImageData } from "next/image";

interface EntrySectionProps {
  title?: string;
  headline?: string;
  backgroundImage?: string | StaticImageData;
  height?: string;
  bottomSpacing?: string;
}

export default function EntrySection({
  title,
  headline,
  backgroundImage,
  height,
  bottomSpacing,
}: EntrySectionProps) {
  const imageSource =
    typeof backgroundImage === "string"
      ? backgroundImage
      : backgroundImage?.src ?? LivingRoom;

  return (
    <div className="px-4 py-4 sm:px-6 md:px-8">
      <section
        className={`relative w-full ${
          height ?? "h-[50dvh]"
        } rounded-md overflow-hidden`}
      >
        {/* Background Image */}
        <Image
          src={imageSource}
          alt="Background"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Black tint overlay */}
        <div className="absolute inset-0 dark-bg opacity-70"></div>

        {/* Content container */}
        <div
          className={`absolute ${
            bottomSpacing ?? "bottom-14"
          } left-0 right-0 px-4 sm:px-6 md:px-10 flex flex-col lg:flex-row justify-between items-end max-w-7xl mx-auto z-20 gap-6`}
        >
          <div className="w-full lg:w-[790px] flex flex-col gap-5">
            <p className="text-xs sm:text-sm uppercase tracking-widest opacity-80 font-semibold text-white">
              {headline ??
                `American-Made Millwork, Cabinetry & Interior Woodwork Solutions`}
            </p>

            <h1 className="text-white text-4xl sm:text-3xl md:text-4xl lg:text-7xl font-bold leading-snug">
              {title ?? "Our Work"}
            </h1>
          </div>
        </div>
      </section>
    </div>
  );
}
