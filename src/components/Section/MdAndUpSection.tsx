import Image from "next/image";
import SectionText, { SectionTextProps } from "./SectionText/SectionText";

export interface SectionProps {
  variant: "primary" | "secondary";
  className?: string;
  sectionText: SectionTextProps;
  image?: {
    src: string;
    height: number;
    width: number;
    alt: string;
  };
  bgImage?: string;
  reverted?: boolean;
  textClassName?: string;
  imageClassName?: string;
  id?: string;
}

const MdAndUpSection: React.FC<SectionProps> = ({
  sectionText,
  variant,
  className,
  bgImage,
  reverted,
  image,
  imageClassName,
  textClassName,
  id,
}) => {
  return (
    <div
      className={`flex justify-center ${variant === "primary" ? "bg-primary" : "bg-secondary"} ${className}`}
    >
      <section
        style={{ backgroundImage: bgImage }}
        className={`box-border flex w-full max-w-screen-lg bg-cover bg-cover py-6 md:py-16`}
      >
        {image && (
          <div
            className={`flex w-1/2 items-center px-6 ${reverted ? "order-2 justify-start" : "order-1 justify-end"}`}
          >
            <Image
              src={image.src}
              height={image.height}
              width={image.height}
              alt={image.alt}
            />
          </div>
        )}
        <article
          className={`flex w-1/2 flex-col justify-center px-8 ${reverted ? "order-1" : "order-2"}`}
        >
          {sectionText.heading && (
            <h2
              className={`text-h3 md:text-h2 ${sectionText.variant === "primary" ? "text-primary" : "text-black"} mb-4 text-center`}
            >
              {sectionText.heading}
            </h2>
          )}
          {sectionText.subHeading && (
            <h2
              className={`mb-4 text-h3 ${sectionText.variant === "primary" ? "text-white" : "text-black"} text-center`}
            >
              {sectionText.subHeading}
            </h2>
          )}
          {sectionText.paragraph &&
            sectionText.paragraph.map((p, index) => (
              <p
                key={`paragaraph-${id}-${index}`}
                className={`text-center text-b3  md:text-b1 ${sectionText.variant === "primary" ? "text-white" : "text-black"}`}
              >
                {p}
              </p>
            ))}
        </article>
      </section>
    </div>
  );
};

export default MdAndUpSection;
