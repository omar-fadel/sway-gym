import Banner from "@/components/Banner/Banner";
import { getDictionary } from "../dictionaries";

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
    </div>
  );
}
