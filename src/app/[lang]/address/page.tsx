import AddressSection from "@/components/AddressSection/AddressSection";
import { getDictionary } from "../dictionaries";
import Banner from "@/components/Banner/Banner";
import WordSeparator from "@/components/WordSeparator/WordSeparator";
import ReservationSection from "@/components/ReservationSection/ReservationSection";

export default async function Address({ params: { lang } }: any) {
  const dict = await getDictionary(lang);
  return (
    <div>
      <Banner
        bannerBackgroundImage="url('/images/address/backgrounds/1bg.png')"
        title={dict.address.banner.title}
        variant="primary"
        bannerImage={{
          alt: "banner-image",
          height: 562,
          width: 419,
          src: "/images/address/banner-img.png",
        }}
        bannerLogo={{
          alt: "address-logo",
          height: 122,
          width: 395,
          src: "/images/address/address-logo.png",
        }}
      />
      <AddressSection
        addressDetails={dict.address.addressDetails.details}
        addressTitle={dict.address.addressDetails.detailsTitle}
        backgroundImage="url('/images/address/backgrounds/2bg.png')"
        normalWorkTime={dict.address.addressDetails.normalWorkTime}
        sectionTitle={dict.address.addressDetails.title}
        variant="secondary"
        workTimeTitle={dict.address.addressDetails.workTimeTitle}
        weekendWorkTime={dict.address.addressDetails.weekendWorkTime}
      />
      <WordSeparator variant="primary" word={dict.address.wordSeperator} />
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
