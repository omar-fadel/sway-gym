import { Meta, StoryObj } from "@storybook/react";
import BundlesSection from "./BundlesSection";
import ArabicDecorator from "@/decorators/ArabicDecorator";

const meta = {
  component: BundlesSection,
  title: "Bundles Section",
  decorators: ArabicDecorator,
} satisfies Meta<typeof BundlesSection>;

export default meta;

export const Primary: StoryObj<typeof meta> = {
  args: {
    title: "باقتنا",
    bundles: [
      {
        backgroundImage: "url('/images/prices/backgrounds/4bg.png')",
        buttonText: "اشتركي الآن",
        currency: "ريال",
        details: ["اشتراك ٣ شهور", "٣ شهور ايروبيك", "مدرب شخصي"],
        image: { src: "/images/prices/bundles/bun3.png", alt: "bundle" },
        price: "1205",
        title: "باقة 1",
        id: "bundle-1",
      },
      {
        backgroundImage: "url('/images/prices/backgrounds/4bg.png')",
        buttonText: "اشتركي الآن",
        currency: "ريال",
        details: ["اشتراك ٣ شهور", "٣ شهور ايروبيك", "مدرب شخصي"],
        image: { src: "/images/prices/bundles/bun3.png", alt: "bundle" },
        price: "1205",
        title: "باقة 1",
        id: "bundle-1",
      },
      {
        backgroundImage: "url('/images/prices/backgrounds/4bg.png')",
        buttonText: "اشتركي الآن",
        currency: "ريال",
        details: ["اشتراك ٣ شهور", "٣ شهور ايروبيك", "مدرب شخصي"],
        image: { src: "/images/prices/bundles/bun3.png", alt: "bundle" },
        price: "1205",
        title: "باقة 1",
        id: "bundle-1",
      },
      {
        backgroundImage: "url('/images/prices/backgrounds/4bg.png')",
        buttonText: "اشتركي الآن",
        currency: "ريال",
        details: ["اشتراك ٣ شهور", "٣ شهور ايروبيك", "مدرب شخصي"],
        image: { src: "/images/prices/bundles/bun3.png", alt: "bundle" },
        price: "1205",
        title: "باقة 1",
        id: "bundle-1",
      },
    ],
  },
};
