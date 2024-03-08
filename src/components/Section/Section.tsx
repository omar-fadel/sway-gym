import Image from "next/image";
import SectionText, { SectionTextProps } from "./SectionText/SectionText";

interface SectionProps {
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
}

const Section: React.FC<SectionProps> = ({
  sectionText,
  variant,
  className,
  bgImage,
  reverted,
  image,
  imageClassName,
  textClassName,
}) => {
  return (
    <div
      className={`flex justify-center ${variant === "primary" ? "bg-primary" : "bg-secondary"}`}
    >
      <section
        className={`flex max-w-screen-lg items-center ${!image || !sectionText ? "justify-center" : "justify-between"} p-8 ${bgImage ? `bg-${bgImage}` : ""} ${className}`}
      >
        {image ? (
          <div
            className={`${reverted ? "order-2" : "order-1"} mx-8 ${sectionText ? "w-1/2" : "w-full"} ${imageClassName}`}
          >
            <Image
              src={image.src}
              height={image.height}
              width={image.height}
              alt={image.alt}
            />
          </div>
        ) : null}
        <div
          className={`mx-8  ${reverted ? "order-1" : "order-2"} ${image ? "w-1/2" : "w-full"} ${textClassName}`}
        >
          <SectionText {...sectionText} />
        </div>
      </section>
    </div>
  );
};

export default Section;
