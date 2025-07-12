import Button from "@/app/utils/Button";

export default function PortfolioCTA() {
  return (
    <section className="border border-accent">
      <div className="pt-52 pb-12 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto border border-accent border-t-0 border-b-0">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-snug max-w-4xl">
            Inquire today for a{" "}
            <span className="text-dark">free consultation</span> & pricing
            estimate
          </h1>

          <div className="flex-shrink-0">
            <Button
              ButtonText="Contact us"
              ButtonUrl="/contact"
              ButtonTextColor="text-black"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
