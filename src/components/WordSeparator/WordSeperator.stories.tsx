import { Meta, StoryObj } from "@storybook/react";
import WordSeparator from "./WordSeparator";
import ArabicDecorator from "@/decorators/ArabicDecorator";

const meta = {
  component: WordSeparator,
  decorators: ArabicDecorator,
  title: "Word Separator",
} satisfies Meta<typeof WordSeparator>;

export default meta;

export const Primary: StoryObj<typeof WordSeparator> = {
  args: {
    variant: "primary",
    word: "مستعدة؟",
  },
};
export const Separator: StoryObj<typeof WordSeparator> = {
  args: {
    variant: "secondary",
    word: "مستعدة؟",
    buttonText: "يسشسشي",
  },
};
