"use client";
import Button from "../Button/Button";
import Class from "./Class/Class";

export interface Class {
  title: string;
  price: string;
  icon: string;
  details: string[];
  iconWidth?: number;
  iconHeight?: number;
  variant?: "primary" | "secondary";
  hasBorder?: boolean;
}
interface ClassesSectionProps {
  classes: Class[];
  buttonText: string;
  title: string;
  currency: string;
  subTitle?: string;
  backgroundImage?: string;
  variant?: "primary" | "secondary";
  hasBorder?: boolean;
  iconWidth?: number;
  iconHeight?: number;
}

const ClassesSection: React.FC<ClassesSectionProps> = ({
  buttonText,
  classes,
  subTitle,
  title,
  currency,
  backgroundImage,
  variant = "primary",
  hasBorder = true,
  iconHeight = 128,
  iconWidth = 128,
}) => {
  return (
    <div
      className={`flex justify-center ${variant === "primary" ? "bg-secondary" : "bg-primary"}`}
    >
      <section
        style={{ backgroundImage }}
        className="flex w-full max-w-screen-lg flex-col flex-wrap items-center gap-4 bg-cover px-4 py-4 sm:gap-6 sm:py-6 md:gap-8 md:py-16"
      >
        <h2
          className={`text-h4sm:text-h3 text-center md:text-h2 ${variant === "primary" ? "text-white" : "text-black"}`}
        >
          {title}
        </h2>
        {subTitle && (
          <h3
            className={`text-center text-h4 text-primary sm:text-h3 md:text-h2 ${variant === "primary" ? "text-primary" : "text-black"}`}
          >
            {subTitle}
          </h3>
        )}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-0">
          {classes.map((c, index) => (
            <div
              className="flex w-full flex-col items-center gap-4 sm:w-1/3 sm:gap-6 md:w-3/12 md:px-6"
              key={`class-${index}`}
            >
              <Class
                variant={variant}
                currency={currency}
                {...c}
                hasBorder={hasBorder}
                index={index}
                iconWidth={iconWidth}
                iconHeight={iconHeight}
              />
              <Button
                color={variant === "primary" ? "primary" : "secondary"}
                className="w-full max-w-72"
                onClick={() => {}}
              >
                {buttonText}
              </Button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ClassesSection;
