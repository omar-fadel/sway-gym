import Typography from "@/components/Typography/Typography";
import Image from "next/image";
import { getDictionary } from "./dictionaries";
import InfoCardGroupContainer from "@/container/InfoCardGroupContainer";
import ContactUsForm from "@/container/ContactUsForm";
import Section from "@/components/Section/Section";
import Banner from "@/components/Banner/Banner";
import ValuesSection from "@/components/ValuesSection/ValuesSection";

export default async function Home({ params: { lang } }: any) {
  const dict = await getDictionary(lang);
  return (
    <div>
      <Banner
        bannerBackgroundImage="url('/images/group-picture-1-background.png')"
        title={dict.welcome}
        variant="primary"
        bannerImage={{
          alt: "laughing group",
          src: "/images/group-picture.png",
          height: 612,
          width: 762,
        }}
        bannerLogo={{
          alt: "logo",
          src: "/images/logo.png",
          height: 105,
          width: 380,
        }}
      />
      <Section
        sectionText={{
          variant: "primary",
          heading: dict.home.firstSection.header,
          subHeading: dict.home.firstSection.subHeader,
          paragraph: [
            dict.home.firstSection.bodyOne,
            dict.home.firstSection.bodyTwo,
            dict.home.firstSection.bodyThree,
          ],
        }}
        image={{
          src: "/images/home/section-one.png",
          height: 546,
          width: 546,
          alt: "section-one",
        }}
        variant="secondary"
      />
      <Section
        sectionText={{
          heading: dict.home.secondSection.header,
          paragraph: [dict.home.secondSection.body],
          variant: "secondary",
        }}
        variant="primary"
        reverted
        image={{
          alt: "section-two",
          src: "/images/home/section-two.png",
          height: 544,
          width: 524,
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
      <section
        className="flex flex-col items-center bg-map-background bg-cover py-16"
        style={{ minHeight: 650 }}
      >
        <Typography variant="h3">{dict.home.addressTitle}</Typography>
        <div className="flex grow flex-col items-center justify-center gap-14 text-center">
          <article>
            <Typography className="mb-4" variant="h4">
              {dict.home.addressFirstLine}
            </Typography>
            <Typography variant="bodyLarge">
              {dict.home.addressFirstLineDetails}
            </Typography>
          </article>
          <article>
            <Typography className="mb-6" variant="h4">
              {dict.home.workTime}
            </Typography>
            <p
              style={{
                fontSize: "18pt",
                fontFamily: "Alexandria",
                fontWeight: "bold",
              }}
            >
              {dict.home.fromToWorkTime}
            </p>
            <Typography variant="bodyLarge">
              {dict.home.fromToWorkTimeDetails}
            </Typography>
            <p
              style={{
                fontSize: "18pt",
                fontFamily: "Alexandria",
                fontWeight: "bold",
              }}
            >
              {dict.home.weekendException}
            </p>
            <Typography variant="bodyLarge">
              {dict.home.weekendExceptionDetails}
            </Typography>
          </article>
        </div>
      </section>
      <section className="flex justify-center gap-4 bg-secondary px-12 py-16">
        <div className="flex max-w-screen-lg flex-col items-center">
          <Image
            width={382}
            height={683}
            src={"/images/contact-us.png"}
            alt="contact-us"
          />
          <ContactUsForm dictionary={dict} />
        </div>
      </section>
      <section className="flex items-end justify-center bg-feel-the-beat bg-cover p-8">
        <Image
          width={846}
          height={461}
          src={"/images/feel-the-beat.png"}
          alt="feel the beat"
        />
      </section>
    </div>
  );
}
