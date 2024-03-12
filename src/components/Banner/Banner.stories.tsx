import { Meta, StoryObj } from "@storybook/react";
import Banner from "./Banner";
import ArabicDecorator from "@/decorators/ArabicDecorator";

const meta = {
  component: Banner,
  title: "Banner",
  decorators: ArabicDecorator,
} satisfies Meta<typeof Banner>;

export default meta;

export const HomePageBanner: StoryObj<typeof meta> = {
  args: {
    bannerBackgroundImage: "url('/images/group-picture-1-background.png')",
    variant: "primary",
    title: "اهلا بك في",
    bannerImage: {
      alt: "lauging group",
      src: "/images/group-picture.png",
      height: 612,
      width: 762,
    },
    bannerLogo: {
      alt: "Logo",
      src: "/images/logo.png",
      height: 105,
      width: 380,
    },
  },
};
export const Primary: StoryObj<typeof meta> = {
  args: {
    bannerBackgroundImage: "address-background-1",
    title: "جئنا لك الآن",
    bannerLogo: {
      alt: "address-logo",
      height: 122,
      width: 395,
      src: "images/address/address-logo.png",
    },
    bannerImage: {
      alt: "banner-image",
      height: 562,
      width: 419,
      src: "images/address/banner-img.png",
    },
    variant: "primary",
  },
};
