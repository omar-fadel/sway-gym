import { getDictionary } from "../dictionaries";
import Image from "next/image";
import ContactUsForm from "@/container/ContactUsForm";
import ReservationSection from "@/components/ReservationSection/ReservationSection";
import ContactUsSection from "@/components/ContactUsSection/ContactUsSection";

export default async function Home({ params: { lang } }: any) {
  const dict = await getDictionary(lang);
  return (
    <div>
      <ContactUsSection
        image={{
          height: 1865,
          width: 1685,
          alt: "banner-image",
          src: "/images/contact-us/1girls.png",
        }}
        logoImage={{
          height: 122,
          width: 395,
          alt: "logo-image",
          src: "/images/contact-us/logo.png",
        }}
        phone={dict.booking.phoneNumber}
        phoneTitle={dict.booking.phoneTitle}
        time={dict.booking.time}
        timeTitle={dict.booking.timeTitle}
        title={dict.booking.title}
        backgroundImage="url('/images/contact-us/backgrounds/1bg.png')"
      />
      <ReservationSection
        backgroundImage="url('/images/address/backgrounds/3bg.png')"
        buttonPrompt={dict.address.reservation.subTitle}
        buttonText={dict.headerButton}
        reservationImage={{
          src: "/images/address/reservation-image.png",
          width: 399,
          height: 438,
          alt: "reservation image",
        }}
        reservationTitle={dict.address.reservation.title}
      />
    </div>
  );
}
