"use client";
import Image from "next/image";
import Button from "../Button/Button";

interface ReadySectionProps {
  title: string;
  buttonText: string;
  backgroundImage: string;
  image: {
    src: string;
    alt: string;
    height: number;
    width: number;
  };
}

const ReadySection: React.FC<ReadySectionProps> = ({
  buttonText,
  title,
  backgroundImage,
  image,
}) => {
  return (
    <div className="flex justify-center bg-primary">
      <section
        style={{ backgroundImage }}
        className="box-border flex flex-wrap bg-cover px-4 pt-4 sm:px-6 sm:pt-6 md:px-16 md:pt-16"
      >
        <div className="flex w-full flex-col justify-center text-center sm:w-1/2">
          <h2 className="mb-4 text-h3 sm:mb-6 sm:text-h2 md:mb-8 md:text-h1">
            {title}
          </h2>
          <div className="mb-4 flex justify-center sm:mb-0">
            <Button onClick={() => {}} color="secondary">
              {buttonText}
            </Button>
          </div>
        </div>
        <div className="flex w-full justify-center sm:w-1/2">
          <Image
            alt={image.alt}
            height={image.height}
            src={image.src}
            width={image.width}
            className="w-3/4"
          />
        </div>
      </section>
    </div>
  );
};

export default ReadySection;
