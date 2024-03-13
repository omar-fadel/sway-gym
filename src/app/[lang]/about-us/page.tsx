import Section from "@/components/Section/Section";
import { getDictionary } from "../dictionaries";
import ValuesSection from "@/components/ValuesSection/ValuesSection";
import RightsSection from "@/components/RightsSection/RightsSectiont";
import WordSeparator from "@/components/WordSeparator/WordSeparator";

export default async function AboutUs({ params: { lang } }: any) {
  const dict = await getDictionary(lang);
  return (
    <div>
      <Section
        bgImage="url('/images/about/backgrounds/1bg.png')"
        sectionText={{
          variant: "primary",
          heading: dict.aboutUs.firstSection.heading,
          subHeading: dict.aboutUs.firstSection.subHeading,
          paragraph: dict.aboutUs.firstSection.paragraph,
        }}
        image={{
          src: "/images/about/1girls.png",
          height: 680,
          width: 494,
          alt: "section-one",
        }}
        variant="secondary"
      />
      <Section
        sectionText={{
          heading: dict.aboutUs.secondSection.heading,
          paragraph: dict.aboutUs.secondSection.paragraph,
          variant: "secondary",
        }}
        variant="primary"
        reverted
        bgImage="url('/images/about/backgrounds/2bg.png')"
        image={{
          alt: "section-two",
          src: "/images/about/2girls.png",
          height: 680,
          width: 643,
        }}
      />
      <Section
        sectionText={{
          variant: "primary",
          heading: dict.aboutUs.thirdSection.heading,
          paragraph: dict.aboutUs.thirdSection.paragraph,
        }}
        image={{
          src: "/images/about/3girls.png",
          height: 507,
          width: 433,
          alt: "section-three",
        }}
        variant="secondary"
      />
      <Section
        sectionText={{
          heading: dict.aboutUs.fourthSection.heading,
          paragraph: dict.aboutUs.fourthSection.paragraph,
          variant: "secondary",
        }}
        variant="primary"
        reverted
        image={{
          alt: "section-four",
          src: "/images/about/4girls.png",
          height: 439,
          width: 589,
        }}
      />
      <ValuesSection
        title={dict.home.infoCardsTitle}
        items={dict.home.infoCards.map((card, index) => ({
          ...card,
          icon: `/icons/infoCards-${index + 1}.svg`,
        }))}
        valuesImage={{
          src: "/images/values.png",
          alt: "values",
          height: 668,
          width: 386,
        }}
      />
      <RightsSection
        {...dict.aboutUs.rightsSection}
        image={{
          alt: "rights ",
          height: 642,
          width: 652,
          src: "/images/about/6girls.png",
        }}
        englishIcon="/icons/english-dictionary.svg"
        arabicIcon="/icons/arabic-dictionary.svg"
        backgroundImage="url('/images/about/backgrounds/6bg.png')"
      />
      <WordSeparator
        buttonText={dict.headerButton}
        variant="secondary"
        word={dict.aboutUs.separator}
      />
    </div>
  );
}
