import { Meta, StoryObj } from "@storybook/react";
import ReservationSection from "./ReservationSection";
import ArabicDecorator from "@/decorators/ArabicDecorator";

const meta = {
  component: ReservationSection,
  decorators: ArabicDecorator,
  title: "Reservation Section",
} satisfies Meta<typeof ReservationSection>;

export default meta;

export const Primary: StoryObj<typeof meta> = {
  args: {
    backgroundImage: "address-background-3",
    buttonPrompt: "لنتصل بك من هنا",
    buttonText: "احجزي موعدك المجاني",
    reservationImage: {
      src: "/images/address/reservation-image.png",
      width: 399,
      height: 438,
      alt: "reservation image",
    },
    reservationTitle: "احجزي موعد",
  },
};
