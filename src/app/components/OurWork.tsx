import Hospitality12 from "@/assets/images/portfolio/Hospitality/Hospitality12.jpg";
import Hospitality6 from "@/assets/images/portfolio/Hospitality/Hospitality6.webp";
import Hospitality7 from "@/assets/images/portfolio/Hospitality/Hospitality7.jpg";
import Hospitality8 from "@/assets/images/portfolio/Hospitality/Hospitality8.jpg";
import KitchenCabinetHodgesAvenue from "@/assets/images/portfolio/KitchenCabinet1010HodgesAvenue.png";
import LivingRoom from "@/assets/images/portfolio/LivingRoom.jpg";
import Image from "next/image";
import Link from "next/link";
import Button from "../utils/Button";

const galleryImages = [
  {
    src: LivingRoom,
    alt: "Custom living room millwork",
  },
  {
    src: Hospitality8,
    alt: "Hotel kitchen vanities made in USA",
  },
  {
    src: KitchenCabinetHodgesAvenue,
    alt: "Precision kitchen cabinetry at Hodges Avenue",
  },
  {
    src: Hospitality12,
    alt: "Hotel Room",
  },
  {
    src: Hospitality7,
    alt: "Hotel Front Desk",
  },
  {
    src: Hospitality6,
    alt: "Custom bedroom millwork",
  },
];

export default function OurWork() {
  return (
    <section className="py-24 pb-48 sm:px-6 md:px-10 max-w-7xl mx-auto">
      <div className="flex flex-col items-start justify-start gap-12">
        {/* Left Side: Text */}
        <div className="w-full flex flex-col items-start gap-6">
          <h3 className="heading-two text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug">
            Our <span className="text-color-dark">Work</span>
          </h3>
          <p className="text-[--color--dark] text-base leading-relaxed">
            At Ascend Millwork, we specialize in delivering precision-crafted
            interiors tailored to hospitality, multifamily, and commercial
            environments. Every project showcases our commitment to quality
            craftsmanship, timely delivery, and collaborative execution.
          </p>
          <Button
            ButtonText="View Our Portfolio"
            ButtonUrl="/portfolio"
            ButtonTextColor="text-black"
          />
        </div>

        {/* Right Side: Grid Gallery */}
        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((item, i) => (
              <Link
                href={"/portfolio"}
                key={i}
                className="w-full overflow-hidden rounded-xl group aspect-[4/3]"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover rounded-xl transform transition duration-300 group-hover:scale-110 cursor-pointer"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
