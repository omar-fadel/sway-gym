import { Meta, StoryObj } from "@storybook/react";
import InfoCardGroup from "./InfoCardGroup";

const meta = {
  component: InfoCardGroup,
  title: "Info Card Groups",
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof InfoCardGroup>;
export default meta;
export const InfoCardGroupDemo: StoryObj<typeof meta> = {
  args: {
    title: "TITLE",
    cards: [
      {
        icon: <div className="h-full w-full rounded-full bg-primary" />,
        body: "BOASDJ KASLJDKLajdkl jasdkljalk djklas",
        title: "title1",
      },
      {
        icon: <div className="h-full w-full rounded-full bg-primary" />,
        body: "BOASDJ KASLJDKLajdkl jasdkljalk djklas",
        title: "title2",
      },
      {
        icon: <div className="h-full w-full rounded-full bg-primary" />,
        body: "BOASDJ KASLJDKLajdkl jasdkljalk djklas",
        title: "title3",
      },
      {
        icon: <div className="h-full w-full rounded-full bg-primary" />,
        body: "BOASDJ KASLJDKLajdkl jasdkljalk djklas",
        title: "title4",
      },
    ],
  },
};
