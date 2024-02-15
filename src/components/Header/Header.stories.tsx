import { Meta, StoryObj } from "@storybook/react";
import Header from "./Header";

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
  parameters: {},
} satisfies Meta<typeof Header>;

export default meta;

export const HeaderDemo: StoryObj<typeof meta> = {
  args: {},
};
