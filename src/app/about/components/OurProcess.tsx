import Button from "@/app/utils/Button";

export default function OurProcess() {
  const processSteps = [
    {
      step: "01",
      title: "Concept",
      subtitle: "Collaborative planning from the start.",
      description:
        "We begin by understanding your vision, space requirements, budget, and project goals. This ensures every detail — from finishes to timelines — is aligned from day one.",
    },
    {
      step: "02",
      title: "Design",
      subtitle: "Smart solutions tailored to your needs.",
      description:
        "Our in-house team transforms ideas into actionable plans. Through detailed drawings, material selection, and technical planning, we set the foundation for manufacturing excellence.",
    },
    {
      step: "03",
      title: "Manufacture",
      subtitle: "Precision-crafted in our U.S. facility.",
      description:
        "Using state-of-the-art equipment and expert hands, we produce every piece with care. From millwork and cabinetry to custom furniture, our builds combine durability with design.",
    },
    {
      step: "04",
      title: "Deliver",
      subtitle: "Seamless coordination through final install.",
      description:
        "We handle logistics and installation with the same attention to detail as fabrication. Our trained crews ensure each component fits perfectly, functions flawlessly, and looks exceptional on-site.",
    },
  ];

  return (
    <section className="accent-bg">
      <div className="py-24 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6">
          <div className="max-w-4xl">
            <h3 className="heading-two text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug">
              Our Process for{" "}
              <span className="text-color-dark">reliable success</span>
            </h3>
            <p>
              From concept to completion, our process is built for precision,
              speed, and quality. Every step is designed to ensure exceptional
              results and seamless experiences — for our partners and their
              spaces.
            </p>
          </div>

          <div>
            <Button
              ButtonText="View Our Portfolio"
              ButtonUrl="/portfolio"
              ButtonTextColor="text-black"
            />
          </div>
        </div>

        {/* Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20 pb-10 border-b border-black">
          {processSteps.slice(0, 2).map((step) => (
            <div
              key={step.step}
              className="pl-6 border-l-2 border-dotted border-black py-6 px-16"
            >
              <p className="text-lg font-semibold uppercase text-[--color--dark]"></p>
              <h4 className="text-2xl font-semibold mb-2 tracking-wide">
                {step.title}
              </h4>
              <p className="text-base text-gray-700">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          {processSteps.slice(2).map((step) => (
            <div
              key={step.step}
              className="pl-6 border-l-2 border-dotted border-black py-6 px-16"
            >
              <h4 className="text-2xl font-semibold mb-2 tracking-wide">
                {step.title}
              </h4>
              <p className="text-base text-gray-700">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
