import Hospitality9 from "@/assets/images/portfolio/Hospitality/Hospitality9.jpg";
import { Building, Building2, ShoppingBag, Utensils } from "lucide-react";
import Image from "next/image";
import Button from "../utils/Button";

export default function OurValues() {
  return (
    <section className="py-24 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6">
        <div className="max-w-4xl">
          <h3 className="heading-two text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug">
            Industries We <span className="text-color-dark">Serve</span>
          </h3>
        </div>

        <div>
          <Button
            ButtonText="Learn More About Us"
            ButtonUrl="/about"
            ButtonTextColor="text-black"
          />
        </div>
      </div>

      <div className="mt-10 flex flex-col items-end lg:flex-row gap-10">
        {/* Left Image */}
        <div className="w-full lg:w-1/4">
          <Image
            src={Hospitality9}
            width={800}
            height={800}
            alt="Custom bedroom millwork and cabinetry for hospitality and multifamily - made in USA"
            className="rounded-lg w-full object-cover h-[500px]"
          />
        </div>

        {/* Right Grid */}
        <div className="w-full lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 gap-8 mt-16">
          {[
            {
              title: "Hospitality",
              text: "Our brand experience includes Marriott, Hilton, IHG, Wyndham and Choice hotels.",
              img: "https://cdn.prod.website-files.com/6687bb58d107108aa401e5aa/668d4d370e1be593aa9351fd_abstract%20(3)%20(2).svg",
              icon: <Building2 />,
            },
            {
              title: "Multifamily Residences",
              text: "We support multifamily developers and GCs with scalable, stylish, and durable millwork packages for new construction and renovations.",
              img: "https://cdn.prod.website-files.com/6687bb58d107108aa401e5aa/668d4d37c9d000d6d3e5e442_abstract%20(4)%20(1).svg",
              icon: <Building />,
            },
            {
              title: "Restaurants & QSR Chains",
              text: "We help hospitality groups and franchise operators create memorable dining environments through custom-built fixtures and finishes.",
              img: "https://cdn.prod.website-files.com/6687bb58d107108aa401e5aa/668d4d37c6353227e6fc0f4a_abstract%20(2)%20(1).svg",
              icon: <Utensils />,
            },
            {
              title: "Retail & Commercial Spaces",
              text: "Create a lasting impression with branded millwork that elevates the customer experience. We fabricate fixtures, shelving, and counters",
              img: "https://cdn.prod.website-files.com/6687bb58d107108aa401e5aa/668d4d372589b149e514bf0d_abstract%20(1)%20(1).svg",
              icon: <ShoppingBag />,
            },
          ].map(({ title, text, icon }, i) => (
            <div key={i} className="flex flex-col items-start space-y-4">
              <div className="accent-background rounded-sm p-3 w-12 h-12 flex items-center justify-center">
                {/* <Image
                  src={img}
                  width={30}
                  height={30}
                  alt={`Icon for ${title} - custom millwork solutions`}
                  className="object-contain"
                /> */}
                {icon}
              </div>
              <h4 className="font-bold text-lg text-[--color--dark]">
                {title}
              </h4>
              <p className="text-sm text-gray-700">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
