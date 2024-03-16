import Banner from "@/components/Banner/Banner";
import { getDictionary } from "../dictionaries";
import ClassesSection from "@/components/ClassesSection/ClassesSection";
import WordSeparator from "@/components/WordSeparator/WordSeparator";
import BundlesSection from "@/components/BundlesSection/BundlesSection";
import Image from "next/image";

export default async function Prices({ params: { lang } }: any) {
  const dict = await getDictionary(lang);
  return (
    <div>
      <Banner
        bannerBackgroundImage="url('/images/prices/backgrounds/1bg.png')"
        title={dict.prices.bannerTitle}
        variant="primary"
        bannerImage={{
          src: "/images/prices/banner-image-1.png",
          height: 750,
          width: 322,
          alt: "banner-image",
        }}
        bannerLogo={{
          alt: "banner-logo",
          height: 122,
          width: 395,
          src: "/images/prices/banner-logo.png",
        }}
      />
      <ClassesSection
        classes={dict.prices.subscriptions.subscriptionsDetails.map(
          (detail, index) => ({
            ...detail,
            icon: `/images/classes/icons/class-${index + 1}.svg`,
          }),
        )}
        title={dict.prices.subscriptions.title}
        currency={dict.shared.currency}
        backgroundImage={"url('/images/classes/backgrounds/2bg.png')"}
        hasBorder={false}
        buttonText={dict.prices.subscriptions.buttonText}
      />
      <ClassesSection
        variant="secondary"
        buttonText={dict.classes.buttonText}
        currency={dict.shared.currency}
        title={dict.prices.classes.title}
        backgroundImage="url('/images/prices/backgrounds/3bg.png')"
        classes={dict.classes.classes.map((c, index) => ({
          ...c,
          icon: `/images/prices/icons/class-${index + 1}.svg`,
        }))}
      />
      <WordSeparator
        className="bg-black"
        word={dict.prices.separator.text}
        buttonText={dict.prices.separator.buttonText}
      />
      <BundlesSection
        currency={dict.shared.currency}
        title={dict.prices.bundles.title}
        bundles={dict.prices.bundles.details.map((detail, index) => ({
          ...detail,
          id: `bundle-${index + 1}`,
          backgroundImage: "url('/images/prices/backgrounds/4bg.png')",
          image: {
            src: `/images/prices/bundles/bun${index + 1}.png`,
            alt: "bundle",
          },
        }))}
      />
      <WordSeparator
        className="bg-black"
        word={dict.classes.seperator.text}
        buttonText={dict.classes.seperator.button}
      />
      <section className="flex justify-center bg-primary">
        <div
          style={{
            backgroundImage: "url('/images/prices/backgrounds/5bg.png')",
          }}
          className="flex w-full max-w-screen-lg flex-wrap justify-center py-4 sm:py-6 md:py-16"
        >
          <h1 className="mb-4 w-full text-center text-h3 text-secondary sm:mb-6 sm:text-h2 md:w-5/12 md:text-h1">
            {dict.prices.footerBannerTitle}
          </h1>
          <div className="flex w-[87.5%] items-end sm:w-[75%] md:mb-16 md:h-full md:w-6/12">
            <Image
              src={"/images/prices/banner-image-2.png"}
              width={2087}
              height={1377}
              alt="banner-image"
              className="-mb-4 sm:-mb-6 md:-mb-16"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
