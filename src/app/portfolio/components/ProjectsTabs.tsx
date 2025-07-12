import { TabsTrigger } from "@/components/ui/tabs";
import { groupedPortfolio } from "@/data/PortfolioImages";
import { Tabs, TabsContent, TabsList } from "@radix-ui/react-tabs";
import Image from "next/image";

export default function PortfolioTabs() {
  return (
    <section className="px-6">
      <div className="pt-20 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto">
        <div className="flex flex-col gap-6 max-w-xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[--color--dark-600]">
            Browse some of our favorite projects.
          </h2>
          <p className="text-base text-[--color--dark-500]">
            We take pride in turning vision into reality, providing end-to-end
            services — from pre-construction planning through installation —
            that meet both aesthetic and functional goals. Take a look at some
            of our recent work:
          </p>
        </div>
      </div>
      <div className="max-w-7xl m-auto py-24 pb-36">
      <Tabs defaultValue="Hospitality">
          <TabsList className="h-auto max-w-[600px] flex gap-5 mx-auto bg-gray-100/50 rounded-lg">
            {Object.keys(groupedPortfolio).map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className="px-6 py-3 w-full"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(groupedPortfolio).map(([category, items]) => (
            <TabsContent key={category} value={category} className="pt-4 mt-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((item, index) => (
                  <div
                    key={index}
                    className="overflow-hidden rounded-lg shadow-md"
                  >
                    <Image
                      src={item.imageUrl}
                      alt={item.tags.join(", ")} // using tags as alt text fallback
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
