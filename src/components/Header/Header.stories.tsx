import { Meta, StoryObj } from "@storybook/react";
import Header from "./Header";
import ArabicDecorator from "@/decorators/ArabicDecorator";

const meta = {
  title: "Header",
  component: Header,
  args: {
    headerItems: [
      {
        id: "0",
        text: "حولنا",
      },
      {
        id: "1",
        text: "العنوان",
      },
      {
        id: "2",
        text: "الاسعار",
      },
      {
        id: "3",
        text: "الفصول",
      },
      {
        id: "4",
        text: "تواصلي معنا",
      },
    ],
    buttonText: "احجزي موعدك المجاني",
  },
  argTypes: {
    activeItemId: {
      options: ["0", "1", "2", "3", "4"],
    },
  },
  parameters: {},
} satisfies Meta<typeof Header>;

export default meta;

export const HeaderDemo: StoryObj<typeof meta> = {
  args: {},
  decorators: [ArabicDecorator],
};
