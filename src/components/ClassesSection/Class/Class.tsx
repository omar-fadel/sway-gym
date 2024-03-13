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
}) => {
  return (
    <article className="flex max-w-72 flex-col items-center rounded-xl border-4 border-primary px-2 py-4 text-center font-bold sm:border-0 sm:py-6">
      <p className="text-b3 text-white sm:text-h4 lg:text-h3">{title}</p>
      <div className="flex h-32 w-32 items-center justify-center p-4">
        <Image src={icon} height={108} width={108} alt="class icon" />
      </div>
      <h2 className="text-h2 text-primary">{price}</h2>
      <p className="mb-4 text-b3 font-bold text-primary sm:-mt-6 sm:text-h2 lg:text-h4">
        {currency}
      </p>
      {details.map((d, i) => (
        <p
          key={`p-${i}-card-${index}`}
          className="text-b4 text-white sm:text-b3 lg:text-b4"
        >
          {d}
        </p>
      ))}
    </article>
  );
};

export default Class;
