import { Meta, StoryObj } from "@storybook/react";
import Footer from "./Footer";
import ArabicDecorator from "@/decorators/ArabicDecorator";
import { getSocialMediaIconPath } from "../utils/getSocialMediaIconPath";

const meta = {
  component: Footer,
  title: "Footer",
  args: {},
  decorators: ArabicDecorator,
} satisfies Meta<typeof Footer>;

export default meta;
export const Primary: StoryObj<typeof meta> = {
  args: {
    followTitle: "تابعينا على",
    followIcons: {
      icons: getSocialMediaIconPath(
        "facebook",
        "instagram",
        "x",
        "snapchat",
        "linkedIn",
      ),
    },
    contactsTitle: "تواصلي معنا",
    contacts: {
      items: [
        { icon: "/icons/phone.svg", value: "+966 554 697 340" },
        {
          icon: "/icons/at.svg",
          value: "info@swaygym.com",
        },
        {
          icon: "/icons/location.svg",
          value: "الدمام حي الشعلة - شارع البهجة - بناية رقم 3086",
        },
      ],
    },
    reservationTitle: "احجزي الان",
    reservation: {
      onReserve: () => {
        console.log("reservce");
      },
      reservationButtonText: "أحجزي موعدك المجاني",
      reservationText: "بادري بالحجز الان و احصلي على تشريح عضلي و خطة مجانية",
    },
  },
};
