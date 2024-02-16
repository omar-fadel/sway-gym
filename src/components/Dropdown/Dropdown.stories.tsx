import { Decorator, Meta, StoryObj } from "@storybook/react";
import Dropdown from "./Dropdown";

const meta = {
  component: Dropdown,
  parameters: {
    layout: "centered",
  },
  args: {},
  title: "Dropdown",
} satisfies Meta<typeof Dropdown>;

export default meta;

export const DropDownDemo: StoryObj<typeof meta> = {
  args: {
    choices: ["سيد", "سيدة"],
    value: "سيدة",
  },
};
