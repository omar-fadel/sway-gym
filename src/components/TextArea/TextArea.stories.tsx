import { Meta, StoryObj } from "@storybook/react";
import TextArea from "./TextArea";
import ContactUsForm from "@/container/ContactUsForm";
import us from "../../app/[lang]/dictionaries/ar.json";

const meta = {
  component: TextArea,
  title: "Text Area",
  parameters: {
    layout: "centered",
  },
  args: {},
} satisfies Meta<typeof TextArea>;

export default meta;

export const PrimaryInputField: StoryObj = {};
