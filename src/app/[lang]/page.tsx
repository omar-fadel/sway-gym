import Typography from "@/components/Typography/Typography";
import Image from "next/image";
import { getDictionary } from "./dictionaries";
import InfoCardGroupContainer from "@/container/InfoCardGroupContainer";
import ContactUsForm from "@/container/ContactUsForm";
import Section from "@/components/Section/Section";

export default async function Home({ params: { lang } }: any) {
  const dict = await getDictionary(lang);
  const props = {
    sectionImage: {
      lg: {
        height: 552,
        width: 546,
        src: "/images/home/lg/section-one.png",
      },
      md: {
        height: 552,
        width: 546,
        src: "/images/home/lg/section-one.png",
      },
      sm: {
        height: 552,
        width: 546,
        src: "/images/home/lg/section-one.png",
      },
      alt: "section-one-image",
    },
    sectionText: {
      heading: "سواي. سواي. سواي.",
      variant: "primary",
      subHeading: "نحن لسنا مجرد صالة رياضية",
      paragraph: `بل نحن مركز للطاقة، حيث تتألق النساء بسطوع
وتنخط الحدود.
صالتنا الحديثة هي مركز للنساء الجريئة والشجاعة
من جلسات الرقص الخلابة إلى أجدد التمارين، سواي
جيم هو المكان الذي تتحول فيه رحلتك الريااضية
إلى مغامرة مثيرة استعدي لتجربة القوة والمرج
والصداقة كما لم تشهديها من قبل!`,
    },
    variant: "secondary",
  };
  return (
    <div>
      <section className="flex justify-center bg-background-1 bg-cover">
        <div className=" bg-grad flex w-full max-w-screen-lg justify-between px-32 pt-16">
          <div className="flex h-full flex-col justify-center gap-2">
            <Typography variant="h3">{dict.welcome}</Typography>
            <Image
              alt="logo"
              src="/images/logo.png"
              width={380}
              style={{ minWidth: 380 }}
              height={105}
            />
          </div>
          <div>
            <Image
              alt="laughing-group"
              src="/images/group-picture.png"
              width={2765}
              height={1573}
              style={{ minWidth: 546 }}
            />
          </div>
        </div>
      </section>
      <section className="flex justify-center bg-secondary">
        <div className="mx-12  flex max-w-screen-lg items-center justify-between gap-24 py-16">
          <Image
            src={"/images/section-one.png"}
            height={552}
            width={546}
            style={{ minWidth: 546 }}
            alt="section-one"
          />
          <div className="flex flex-col justify-center">
            <Typography className="text-primary" variant="h3">
              {dict.home.firstSection.header}
            </Typography>
            <Typography className="my-8 text-white" variant="h4">
              {dict.home.firstSection.subHeader}
            </Typography>
            <Typography className="text-white" variant="bodyLarge">
              {dict.home.firstSection.bodyOne}
            </Typography>
            <Typography className="text-white" variant="bodyLarge">
              {dict.home.firstSection.bodyTwo}
            </Typography>
            <Typography className="text-white" variant="bodyLarge">
              {dict.home.firstSection.bodyThree}
            </Typography>
          </div>
        </div>
      </section>
      <section className="flex justify-center bg-primary">
        <div className="mx-12 flex max-w-screen-lg items-center justify-between gap-24 py-16">
          <article className="flex flex-col justify-center">
            <Typography className="mb-6 text-black" variant="h3">
              {dict.home.secondSection.header}
            </Typography>
            <Typography className="text-black" variant="bodyLarge">
              {dict.home.secondSection.body}
            </Typography>
          </article>
          <Image
            src="/images/section-two.png"
            height={544}
            width={524}
            style={{ minWidth: 524 }}
            alt="section-two"
          />
        </div>
      </section>
      <section className="flex justify-center bg-secondary">
        <div className="mx-12 flex max-w-screen-lg items-center justify-between gap-24 py-16">
          <Image
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
      <footer className="flex justify-center bg-black py-16">
        <div className="w-full max-w-screen-lg">
          <Image
            width={105}
            height={50}
            src={"/icons/swayIcon.svg"}
            alt="logo"
          />
        </div>
      </footer>
      <Section {...props} />
    </div>
  );
}
