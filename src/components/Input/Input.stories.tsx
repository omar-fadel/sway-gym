import { Meta, StoryObj } from "@storybook/react";
import Input from "./Input";

const meta = {
  component: Input,
  title: "Input Field",
  parameters: {
    layout: "centered",
  },
  args: {},
} satisfies Meta<typeof Input>;

export default meta;

export const PrimaryInputField: StoryObj = {};
