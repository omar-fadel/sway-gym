import Typography from "@/components/Typography/Typography";
import Image from "next/image";
import { getDictionary } from "./dictionaries";
import InfoCardGroupContainer from "@/container/InfoCardGroupContainer";
import ContactUsForm from "@/container/ContactUsForm";
import Section from "@/components/Section/Section";

export default async function Home({ params: { lang } }: any) {
  const dict = await getDictionary(lang);
  return (
    <div>
      <section className="flex justify-center bg-background-1 bg-cover">
        <div className=" bg-grad flex w-full max-w-screen-lg flex-wrap justify-center px-32 pt-16 lg:justify-between">
          <div className="flex w-full flex-col items-center justify-center gap-2 md:w-1/2">
            <Typography variant="h3">{dict.welcome}</Typography>
            <Image alt="logo" src="/images/logo.png" width={380} height={105} />
          </div>
          <div className="w-full md:w-1/2">
            <Image
              alt="laughing-group"
              src="/images/group-picture.png"
              width={2765}
              height={1573}
            />
          </div>
        </div>
      </section>
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
      <section className="flex justify-center bg-secondary">
        <div className="mx-12 flex max-w-screen-lg items-center justify-center gap-24 py-16">
          <Image
            className="hidden lg:block"
            width={386}
            height={668}
            alt="values"
            src={"/images/values.png"}
          />
          <div className="w-3/4">
            <InfoCardGroupContainer lang={lang} />
          </div>
        </div>
      </section>
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
      <section
        style={{ height: 509 }}
        className="flex items-end justify-center bg-feel-the-beat bg-cover"
      >
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
