import { getDictionary } from "@/app/[lang]/dictionaries";
import InfoCardGroup from "@/components/InfoCardGroup/InfoCardGroup";
import Image from "next/image";

const InfoCardGroupContainer: React.FC<{ lang: "en" | "ar" }> = async ({
  lang,
}) => {
  const imagesUrl = [
    "/icons/infoCards-1.svg",
    "/icons/infoCards-2.svg",
    "/icons/infoCards-3.svg",
    "/icons/infoCards-4.svg",
  ];
  const dictionary = await getDictionary(lang);
  return (
    <InfoCardGroup
      title={dictionary.home.infoCardsTitle}
      cards={dictionary.home.infoCards.map((infoCard, index) => ({
        body: infoCard.body,
        title: infoCard.title,
        icon: (
          <Image
            height={48}
            width={48}
            alt={`info-card-${0}`}
            src={imagesUrl[index]}
          />
        ),
      }))}
    />
  );
};

export default InfoCardGroupContainer;
