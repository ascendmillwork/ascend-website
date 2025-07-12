export default function ServiceMatrics() {
  return (
    <section className="py-28 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto">
      {/* Top Text */}
      <div className="flex flex-col gap-4">
        <p className="font-bold text-sm sm:text-base uppercase tracking-widest text-[--color--dark]">
          [ Our work in numbers ]
        </p>
        <h3 className="heading-two text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug max-w-4xl">
          Quality experience you can always count on
        </h3>
        <p>
          At Ascend Millwork, we blend precision, expertise, and efficiency to
          deliver exceptional millwork solutions across the U.S. Our numbers
          reflect not just the scale of our work — but the trust our clients
          place in us every day. From custom manufacturing to turnkey
          installations, our team is committed to excellence from concept to
          completion.
        </p>
      </div>

      {/* Image + Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-10 items-center mt-16">
        {/* Image Section */}
        {/* <div className="w-full">
          <Image
            src="https://cdn.prod.website-files.com/6687bb58d107108aa401e5db/669a78fadc1f1a2934f63720_pexels-heyho-6933857%20(1).webp"
            width={800}
            height={800}
            alt="Service"
            className="rounded-lg w-full h-[250px] object-cover"
          />
        </div> */}

        {/* Content + Metrics */}
        {/* <div className="flex flex-col justify-start items-start gap-10">
          <div className="text-base text-gray-700">
            Custom millwork, cabinetry, and installation solutions for
            hospitality, multifamily, commercial, and residential sectors.
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 w-full">
            {[
              { value: "15+", label: "States Served" },
              { value: "125+", label: "Completed Projects" },
              { value: "5+", label: "Years of Experience" },
              { value: "2500+", label: "Cabinet Units Delivered" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col">
                <h2 className="heading-three text-2xl sm:text-2xl md:text-3xl lg:text-3xl font-bold leading-snug max-w-4xl">
                  {item.value}
                </h2>
                <p className="text-gray-600 text-[14px]">{item.label}</p>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
}
