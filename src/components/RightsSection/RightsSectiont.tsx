import Image from "next/image";
import RightsArticle from "./RightsArticle/RightsArticle";

interface RightsSectionProps {
  title: string;
  arabicIcon: string;
  arabicParagraph: string;
  englishIcon: string;
  englishParagraph: string;
  arabicButtonText: string;
  englishButtonText: string;
  backgroundImage?: string;
  image: {
    height: number;
    width: number;
    src: string;
    alt: string;
  };
}

const RightsSection: React.FC<RightsSectionProps> = ({
  arabicButtonText,
  arabicIcon,
  arabicParagraph,
  englishButtonText,
  englishIcon,
  englishParagraph,
  image,
  title,
  backgroundImage,
}) => {
  return (
    <div className="box-border flex justify-center bg-primary">
      <section
        style={{ backgroundImage }}
        className="flex w-full max-w-screen-lg flex-wrap justify-center gap-4 bg-cover pt-4 sm:gap-6 sm:pt-6 md:gap-8  md:py-16 md:pb-0"
      >
        <h2 className="w-full text-center text-h4 text-black sm:text-h3 md:text-h2">
          {title}
        </h2>
        <div className="flex w-full justify-center sm:w-5/12  md:w-3/12 md:pt-16">
          <RightsArticle
            buttonText={arabicButtonText}
            icon={arabicIcon}
            text={arabicParagraph}
          />
        </div>
        <div className="flex w-full justify-center sm:w-5/12 md:order-2 md:w-3/12 md:pt-16">
          <RightsArticle
            buttonText={englishButtonText}
            icon={englishIcon}
            text={englishParagraph}
          />
        </div>
        <Image
          height={image.height}
          width={image.width}
          alt={image.alt}
          src={image.src}
          className="w-3/4 sm:w-[62.5%] md:w-5/12"
        />
      </section>
    </div>
  );
};

export default RightsSection;
