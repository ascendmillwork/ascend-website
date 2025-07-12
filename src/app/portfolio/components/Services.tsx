import Image, { StaticImageData } from "next/image";

interface DataType {
  imageUrl: StaticImageData;
  title: string;
  description: string;
  tags: Array<string>;
}

export default function Services({ data }: { data: DataType }) {
  return (
    <section className="py-28 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto border border-accent border-b-0">
      <div className="grid grid-cols-1 md:grid-cols-[50%_50%] gap-10 items-center">
        {/* Image Section */}
        <div className="w-full">
          <Image
            src={data.imageUrl}
            width={800}
            height={800}
            alt="Service Name Here"
            className="rounded-lg w-full h-[350px] object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="flex flex-col justify-between items-start gap-10">
          <div className="flex flex-col gap-4">
            <p className="font-bold text-sm sm:text-base uppercase tracking-widest text-[--color--dark]">
              [ {data.tags} ]
            </p>
            <h3 className="heading-two text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold leading-snug">
              {data.title}
            </h3>
            <p>{data.description}.</p>
          </div>

          {/* <Button
            ButtonText="Learn More"
            ButtonUrl="/"
            ButtonTextColor="text-black"
          /> */}
        </div>
      </div>
    </section>
  );
}
