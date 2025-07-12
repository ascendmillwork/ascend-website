import InstallationImage from "@/assets/images/services/installation.png";
import Image from "next/image";

export default function WhoWeAre() {
  return (
    <section className="py-24 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row items-center gap-10">
        {/* Left - Image */}
        <div className="w-full lg:w-1/3">
          <Image
            src={InstallationImage}
            alt="Ascend Millwork Team at Work"
            width={400}
            height={500}
            className="rounded-xl object-cover w-full h-[500px]"
          />
        </div>

        {/* Right - Text + Button */}
        <div className="w-full lg:w-2/3 space-y-8">
          {/* Heading */}
          <div className="border-b pb-10">
            <h3 className="heading-two text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug">
              From <span className="text-color-dark">Concept</span> to
              Completion
            </h3>
            <h5 className="heading-three text-2xl sm:text-3xl text-[--color--dark-600] mt-4">
              At Ascend Millwork, we specialize in delivering fully integrated
              casegoods & millwork solutions that bring your vision to life.
            </h5>
          </div>

          {/* Bottom Row: (Removed Paragraph → Image already on left) */}
          <div className="flex-col sm:flex sm:flex-row items-end justify-between gap-5">
            <p className="text-sm sm:text-base leading-relaxed text-[--color--dark] mb-5">
              Whether you&apos;re building a boutique hotel, developing a
              multifamily complex, or renovating a commercial space, our team
              provides end-to-end service that ensures quality, efficiency, and
              precision every step of the way.
            </p>

            {/* <Button
              ButtonText="Learn About Us"
              ButtonUrl="/about"
              ButtonTextColor="text-black"
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
}
