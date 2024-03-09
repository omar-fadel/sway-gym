import ReservationBanner from "@/components/ReservationBanner/ReservationBanner";
import { getDictionary } from "../dictionaries";
import Image from "next/image";
import Banner from "@/components/Banner/Banner";
import ContactUsForm from "@/container/ContactUsForm";

export default async function Home({ params: { lang } }: any) {
  const dict = await getDictionary(lang);
  return (
    <div>
      <ReservationBanner
        backgroundImage="url('/images/booking/backgrounds/1bg.png')"
        bannerImage={{
          alt: "banner image",
          height: 2125,
          width: 2050,
          src: "/images/booking/banner-img-1.png",
        }}
        subTitle={dict.booking.reservationSubTitle}
        title={dict.booking.reservationSubTitle}
        variant="primary"
      />
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
      <Banner
        bannerBackgroundImage="url('/images/booking/backgrounds/3bg.png')"
        revert
        revertTextAndImage
        title={dict.booking.banner}
        variant="primary"
        bannerImage={{
          alt: "logo",
          height: 1852,
          width: 1953,
          src: "/images/booking/banner-img-2.png",
        }}
        bannerLogo={{
          alt: "logo",
          height: 143,
          width: 416,
          src: "/images/logo.png",
        }}
      />
    </div>
  );
}
