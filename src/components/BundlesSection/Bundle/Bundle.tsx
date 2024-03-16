import Image from "next/image";
import { Bundle as BundleProps } from "../BundlesSection";
import Button from "@/components/Button/Button";

const Bundle: React.FC<BundleProps> = ({
  backgroundImage,
  currency,
  details,
  image,
  price,
  onClickButton,
  buttonText,
  id,
  title,
}) => {
  return (
    <article className="flex w-full overflow-hidden rounded-3xl">
      <section
        style={{ backgroundImage }}
        className="flex max-h-96 max-w-40 items-center justify-center bg-cover p-4"
      >
        <Image
          src={image.src}
          width={image.width}
          height={image.height}
          alt={image.alt}
        />
      </section>
      <section className="flex flex-grow flex-col justify-between bg-gray-500 px-4 py-6 sm:px-6">
        <div className="flex flex-col gap-2 md:gap-6">
          <article>
            <p className="text-b2 font-bold text-white md:text-b1 ">{title}</p>
          </article>
          <article className="flex items-center gap-2">
            <h2 className="text-h2 text-primary md:text-h3">{price}</h2>
            <p className="text-b3 text-primary">{currency}</p>
          </article>
          <article className="pb-4 sm:pb-8 md:pb-16">
            {details.map((detail, index) => (
              <p
                key={`${id}-detail-${index}`}
                className="text-b4 text-white md:text-b3"
              >
                {detail}
              </p>
            ))}
          </article>
        </div>
        <Button
          color="primary"
          onClick={() => {
            if (onClickButton) onClickButton(id);
          }}
        >
          {buttonText}
        </Button>
      </section>
    </article>
  );
};

export default Bundle;
