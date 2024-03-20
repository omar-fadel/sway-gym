import { Meta, StoryObj } from "@storybook/react";
import ContactUsSection from "./ContactUsSection";
import ArabicDecorator from "@/decorators/ArabicDecorator";

const meta = {
  component: ContactUsSection,
  title: "Contact Us Section",
  decorators: ArabicDecorator,
} satisfies Meta<typeof ContactUsSection>;

export default meta;

export const Primary: StoryObj<typeof meta> = {
  args: {
    image: {
      height: 1865,
      width: 1685,
      alt: "banner-image",
      src: "/images/contact-us/1girls.png",
    },
    logoImage: {
      height: 122,
      width: 395,
      alt: "logo-image",
      src: "/images/contact-us/logo.png",
    },
    phone: "0502059979",
    phoneTitle: "رقم الهاتف",
    time: "7ص الى  10م",
    timeTitle: "اتصلي بنا من",
    title: "نحن هنا من اجلك",
    backgroundImage: "url('/images/contact-us/backgrounds/1bg.png')",
  },
};
