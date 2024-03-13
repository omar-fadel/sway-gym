"use client";
import Button from "../Button/Button";
import Class from "./Class/Class";

export interface Class {
  title: string;
  price: string;
  icon: string;
  details: string[];
}
interface ClassesSectionProps {
  classes: Class[];
  buttonText: string;
  title: string;
  currency: string;
  subTitle: string;
  backgroundImage?: string;
}

const ClassesSection: React.FC<ClassesSectionProps> = ({
  buttonText,
  classes,
  subTitle,
  title,
  currency,
  backgroundImage,
}) => {
  return (
    <div className="flex justify-center bg-secondary">
      <section
        style={{ backgroundImage }}
        className="flex w-full max-w-screen-lg flex-col flex-wrap items-center gap-4 bg-cover px-4 py-4 sm:gap-6 sm:py-6 lg:gap-8 lg:py-16"
      >
        <h2 className="text-center text-h4 text-white sm:text-h3 lg:text-h2">
          {title}
        </h2>
        <h3 className="text-center text-h4 text-primary sm:text-h3 lg:text-h2">
          {subTitle}
        </h3>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-0">
          {classes.map((c, index) => (
            <div
              className="flex w-full flex-col items-center gap-4 sm:w-1/3 sm:gap-6 lg:w-3/12 lg:px-6"
              key={`class-${index}`}
            >
              <Class currency={currency} {...c} index={index} />
              <Button className="w-full max-w-72" onClick={() => {}}>
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
