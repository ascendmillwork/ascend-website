import CustomButton from "@/app/utils/Button";
import KitchenCabinetHodgesAvenue from "@/assets/images/portfolio/KitchenCabinet1010HodgesAvenue.png";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function CtaSection() {
  const items = [
    { title: "Concept" },
    { title: "Design Development" },
    { title: "Manufacturing" },
    { title: "Quality Control" },
    { title: "Professional Installation" },
  ];

  return (
    <section
      className="relative"
      style={{
        background: `linear-gradient(transparent 50%, rgb(62 40 40) 50%)`,
      }}
    >
      <div className="relative py-24 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto overflow-hidden rounded-lg">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden rounded-lg">
          <Image
            src={KitchenCabinetHodgesAvenue}
            alt="Hotel kitchenette millwork with custom cabinetry and stone tops - made in USA"
            className="w-full h-full object-cover"
            width={1200}
            height={1200}
          />
          <div className="absolute inset-0 bg-black opacity-40 rounded-lg" />
        </div>

        {/* Content */}
        <div className="relative z-10">
          <div className="flex flex-wrap gap-3 mb-10">
            {items.map(({ title }, index) => (
              <Button
                key={index}
                variant="outline"
                className="border-light bg-transparent text-white"
              >
                {title}
              </Button>
            ))}
          </div>

          <div className="mt-28 flex flex-col gap-4 justify-start items-start">
            <h1 className="max-w-3xl text-white text-4xl sm:text-3xl md:text-4xl lg:text-7xl font-bold leading-snug mb-6">
              Inquire now for a free quote
            </h1>

            <CustomButton
              ButtonText="Inquire Now"
              ButtonUrl="/contact"
              ButtonTextColor="accent-light"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
