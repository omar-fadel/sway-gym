import { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta = {
  title: "Button",
  component: Button,
  args: {
    children: "احجز مكانك",
  },
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Button>;

export default meta;

export const ButtonDemo: StoryObj<typeof meta> = {
  args: {},
};
