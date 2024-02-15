import InfoCard from "./InfoCard";
import { Meta, StoryObj } from "@storybook/react";

export default { component: InfoCard };
const meta = {
  title: "Info Card",
  args: {},
  parameters: {
    layout: "centered",
  },
  component: InfoCard,
} satisfies Meta<typeof InfoCard>;

export const Primary: StoryObj<typeof meta> = {
  args: {
    body: "asdjaskldjalksj aksdjakl sjdklas jdlaksjdlkas jl",
    icon: <div className="h-full w-full rounded-full bg-black" />,
    title: "TITLE",
  },
};
