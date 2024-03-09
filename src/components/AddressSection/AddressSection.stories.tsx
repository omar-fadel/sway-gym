import { Meta, StoryObj } from "@storybook/react";
import AddressSection from "./AddressSection";
import ArabicDecorator from "@/decorators/ArabicDecorator";

const meta = {
  component: AddressSection,
  title: "Address Section",
  decorators: ArabicDecorator,
} satisfies Meta<typeof AddressSection>;

export default meta;

export const Primary: StoryObj<typeof meta> = {
  args: {
    addressDetails: "حي الشعلة - شارع البهجة - بناية رقم ٣٠٨٦",
    addressTitle: "عنوان فرع الدمام",
    backgroundImage: "address-background-2",
    normalWorkTime: {
      days: "من السبت الى الخميس",
      hours: "من الساعة - صباحا حتى الساعة - مساء",
    },
    weekendWorkTime: {
      days: "عدا يوم الجمعة",
      hours: "من الساعة -. مساءا حتى الساعة - مساء",
    },
    sectionTitle: "فرع الدمام",
    variant: "secondary",
    workTimeTitle: "مواعيد العمل",
  },
};
