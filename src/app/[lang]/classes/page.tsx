import Banner from "@/components/Banner/Banner";
import { getDictionary } from "../dictionaries";
import ClassesSection from "@/components/ClassesSection/ClassesSection";
import WordSeparator from "@/components/WordSeparator/WordSeparator";
import ReadySection from "@/components/ReadySection/ReadySection";

export default async function Classes({ params: { lang } }: any) {
  const dict = await getDictionary(lang);
  return (
    <div>
      <Banner
        bannerBackgroundImage="url('/images/classes/backgrounds/1bg.png')"
        revert
        revertTextAndImage
        title={dict.classes.banner}
        variant="primary"
        bannerImage={{
          alt: "logo",
          height: 1665,
          width: 2612,
          src: "/images/classes/1girls.png",
        }}
        bannerLogo={{
          alt: "logo",
          height: 143,
          width: 416,
          src: "/images/logo.png",
        }}
      />
      <ClassesSection
        buttonText={dict.classes.buttonText}
        classes={dict.classes.classes.map((c, index) => ({
          ...c,
          icon: `/images/classes/icons/class-${index + 1}.svg`,
        }))}
        currency={dict.classes.currency}
        subTitle={dict.classes.subTitle}
        title={dict.classes.title}
        backgroundImage="url('/images/classes/backgrounds/2bg.png')"
      />
      <WordSeparator
        className="bg-black"
        word={dict.classes.seperator.text}
        buttonText={dict.classes.seperator.button}
      />
      <ReadySection
        backgroundImage="url('/images/classes/backgrounds/3bg.png')"
        buttonText={dict.headerButton}
        title={dict.classes.readyTitle}
        image={{
          alt: "ready-image",
          height: 1886,
          width: 1554,
          src: "/images/classes/3girls.png",
        }}
      />
    </div>
  );
}
