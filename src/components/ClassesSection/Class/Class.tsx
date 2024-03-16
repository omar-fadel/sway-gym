"use client";
import Image from "next/image";
import { Class as ClassProps } from "../ClassesSection";

const Class: React.FC<ClassProps & { index?: number; currency: string }> = ({
  currency,
  details,
  icon,
  price,
  title,
  index,
  iconHeight = 128,
  iconWidth = 128,
  variant,
  hasBorder,
}) => {
  return (
    <article
      className={`flex max-w-72 flex-col items-center rounded-xl border-4 px-2 py-4 text-center font-bold sm:border-0 sm:py-6 ${variant === "primary" ? "border-primary" : "border-secondary"} ${hasBorder ? "border-4" : "border-0"}`}
    >
      <p
        className={`text-b3 sm:text-h4 md:text-h3 ${variant === "primary" ? "text-white" : "text-gray-700"}`}
      >
        {title}
      </p>
      <div
        style={{ width: iconWidth, height: iconHeight }}
        className="flex items-center justify-center p-4"
      >
        <Image
          src={icon}
          alt="class icon"
          width={iconWidth}
          height={iconHeight}
        />
      </div>
      <h2
        className={`text-h2 ${variant === "primary" ? "text-primary" : "text-black"}`}
      >
        {price}
      </h2>
      <p
        className={`mb-4 text-b3 font-bold sm:-mt-6 sm:text-h2 md:text-h4 ${variant === "primary" ? "text-primary" : "text-black"}`}
      >
        {currency}
      </p>
      {details.map((d, i) => (
        <p
          key={`p-${i}-card-${index}`}
          className={`text-b4 sm:text-b3 md:text-b4 ${variant === "primary" ? "text-white" : "text-black"}`}
        >
          {d}
        </p>
      ))}
    </article>
  );
};

export default Class;
