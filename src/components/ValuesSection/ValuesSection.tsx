import Image from "next/image";

interface ValuesSectionProps {
  title: string;
  valuesImage: {
    src: string;
    height: number;
    width: number;
    alt: string;
  };
  items: {
    icon: string;
    title: string;
    body: string;
  }[];
}
const ValuesSection: React.FC<ValuesSectionProps> = ({
  items,
  title,
  valuesImage,
}) => {
  return (
    <section className="box-border flex bg-secondary py-4 sm:py-6 md:py-16">
      <div className="mt-28 hidden w-5/12 items-center justify-center px-6 md:flex">
        <Image
          src={valuesImage.src}
          alt={valuesImage.alt}
          height={valuesImage.height}
          width={valuesImage.width}
        />
      </div>
      <div className="w-full md:w-7/12">
        <h2 className="text-h4 sm:text-h3 md:text-h2 mb-6 text-center text-primary md:mb-10">
          {title}
        </h2>
        <article className="flex flex-wrap">
          {items.map((item, index) => (
            <div
              key={`value-${index}`}
              className="flex w-full flex-col items-center p-4 sm:w-1/2 sm:p-6 md:p-8"
            >
              <Image
                src={item.icon}
                width={46}
                height={46}
                alt={`value-${index}`}
                className="mb-4 md:mb-8"
              />
              <h3 className="text-h4 md:text-h3 mb-2 text-primary md:mb-6">
                {item.title}
              </h3>
              <p className="text-b4 md:text-b1 sm:text-b3 text-center text-white">
                {item.body}
              </p>
            </div>
          ))}
        </article>
      </div>
    </section>
  );
};

export default ValuesSection;
