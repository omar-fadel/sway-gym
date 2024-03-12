import Image from "next/image";
import Typography from "../Typography/Typography";
import { SectionProps } from "./MdAndUpSection";

const SmSection: React.FC<SectionProps> = ({
  sectionText,
  variant,
  image,
  imageClassName,
  className,
  id,
}) => {
  return (
    <article
      className={`flex flex-col items-center py-4 ${variant === "primary" ? "bg-primary" : "bg-secondary"} ${className}`}
    >
      {sectionText.heading && (
        <h2
          className={`text-h4 ${sectionText.variant === "primary" ? "text-primary" : "text-black"} mb-4 text-center`}
        >
          {sectionText.heading}
        </h2>
      )}
      {sectionText.subHeading && (
        <h2
          className={`text-h4 mb-4 ${sectionText.variant === "primary" ? "text-white" : "text-black"} text-center`}
        >
          {sectionText.subHeading}
        </h2>
      )}
      {image && (
        <div className={`mb-4 w-2/4 ${imageClassName}`}>
          <Image
            src={image.src}
            height={image.height}
            width={image.height}
            alt={image.alt}
          />
        </div>
      )}
      {sectionText.paragraph &&
        sectionText.paragraph.map((p, index) => (
          <p
            key={`paragaraph-${id}-${index}`}
            className={`text-b4 px-4 text-center ${sectionText.variant === "primary" ? "text-white" : "text-black"}`}
          >
            {p}
          </p>
        ))}
    </article>
  );
};

export default SmSection;
