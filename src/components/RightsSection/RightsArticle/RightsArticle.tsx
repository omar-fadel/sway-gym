"use client";
import Button from "@/components/Button/Button";
import Image from "next/image";

export interface RightsArticleProps {
  icon: string;
  text: string;
  buttonText: string;
}

const RightsArticle: React.FC<RightsArticleProps> = ({
  buttonText,
  icon,
  text,
}) => {
  return (
    <article className="flex w-1/2 flex-col items-center gap-4 sm:w-full sm:gap-6">
      <Image alt="dictionary" src={icon} height={64} width={32} />
      <p className="text-center text-b4 text-black sm:text-b3 md:text-b1">
        {text}
      </p>
      <Button color="secondary" onClick={() => {}}>
        {buttonText}
      </Button>
    </article>
  );
};

export default RightsArticle;
