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
      className={`flex flex-col items-center gap-6 p-8  ${variant === "primary" ? "bg-primary" : "bg-secondary"} ${className}`}
    >
      {sectionText.heading ? (
        <Typography
          variant="h2"
          className={`mb-4 ${sectionText.variant === "primary" ? "text-primary" : "text-black"} text-center`}
        >
          {sectionText.heading}
        </Typography>
      ) : null}
      {sectionText.subHeading ? (
        <Typography
          variant="h3"
          className={`mb-4 ${sectionText.variant === "primary" ? "text-white" : "text-black"} text-center`}
        >
          {sectionText.subHeading}
        </Typography>
      ) : null}
      {image ? (
        <div className={`mx-8 ${imageClassName}`}>
          <Image
            src={image.src}
            height={image.height}
            width={image.height}
            alt={image.alt}
          />
        </div>
      ) : null}
      {sectionText.paragraph
        ? sectionText.paragraph.map((p, index) => (
            <Typography
              key={`paragaraph-${id}-${index}`}
              variant="bodyLarge"
              className={`text-center ${sectionText.variant === "primary" ? "text-white" : "text-black"}`}
            >
              {p}
            </Typography>
          ))
        : null}
    </article>
  );
};

export default SmSection;
