import { Meta, StoryObj } from "@storybook/react";
import ReservationBanner from "./ReservationBanner";
import ArabicDecorator from "@/decorators/ArabicDecorator";

const meta = {
  component: ReservationBanner,
  title: "Reservation Banner",
  decorators: ArabicDecorator,
} satisfies Meta<typeof ReservationBanner>;

export default meta;

export const Primary: StoryObj<typeof meta> = {
  args: {
    backgroundImage: "url('/images/booking/backgrounds/1bg.png')",
    bannerImage: {
      alt: "banner image",
      height: 2125,
      width: 2050,
      src: "/images/booking/banner-img-1.png",
    },
    subTitle: "نتشرف بحضورك لتشريح عضلي وخطة تمرين مجانية",
    title: "احجزي معادك المجاني الان",
    variant: "primary",
  },
};
