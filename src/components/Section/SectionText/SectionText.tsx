import Typography from "@/components/Typography/Typography";

export interface SectionTextProps {
  heading?: string;
  subHeading?: string;
  paragraph?: string[];
  variant: "primary" | "secondary";
  id?: string;
}

const SectionText: React.FC<SectionTextProps> = ({
  paragraph,
  heading,
  subHeading,
  variant,
  id,
}) => {
  return (
    <article className="flex flex-col">
      {heading ? (
        <Typography
          variant="h2"
          className={`mb-10 ${variant === "primary" ? "text-primary" : "text-black"}`}
        >
          {heading}
        </Typography>
      ) : null}
      {subHeading ? (
        <Typography
          variant="h3"
          className={`mb-10 ${variant === "primary" ? "text-white" : "text-black"}`}
        >
          {subHeading}
        </Typography>
      ) : null}
      {paragraph
        ? paragraph.map((p, index) => (
            <Typography
              key={`paragaraph-${id}-${index}`}
              variant="bodyLarge"
              className={`${variant === "primary" ? "text-white" : "text-black"}`}
            >
              {p}
            </Typography>
          ))
        : null}
    </article>
  );
};

export default SectionText;
