import { Meta, StoryObj } from "@storybook/react";
import ReadySection from "./ReadySection";
import ArabicDecorator from "@/decorators/ArabicDecorator";

const meta = {
  component: ReadySection,
  title: "Ready Section",
  decorators: ArabicDecorator,
} satisfies Meta<typeof ReadySection>;

export default meta;
export const Primary: StoryObj<typeof meta> = {
  args: {
    backgroundImage: "url('/images/classes/backgrounds/3bg.png')",
    buttonText: "اححزى موعدك المحانى",
    title: "جاهزة للتفيير؟",
    image: {
      alt: "ready-image",
      height: 1886,
      width: 1554,
      src: "/images/classes/3girls.png",
    },
  },
};
