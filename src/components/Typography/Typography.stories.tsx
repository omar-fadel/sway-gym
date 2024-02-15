import type { Meta, StoryObj } from "@storybook/react";
import Typography from "./Typography";

const meta = {
  component: Typography,
  title: "Typography",
  args: {
    children: "مجرد كلام",
  },
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {
  args: {
    variant: "h1",
  },
};
