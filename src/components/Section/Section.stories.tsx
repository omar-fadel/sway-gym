import { Meta, StoryObj } from "@storybook/react";
import Section from "./Section";
import ArabicDecorator from "@/decorators/ArabicDecorator";

const meta = {
  component: Section,
  args: {},
  title: "Section",
  decorators: ArabicDecorator,
} satisfies Meta<typeof Section>;

export default meta;

export const Primary: StoryObj<typeof meta> = {
  args: {
    reverted: true,
    image: {
      alt: "section-one",
      height: 552,
      width: 546,
      src: "/images/home/section-one.png",
    },
    sectionText: {
      heading: "سواي. سواي. سواي.",
      variant: "primary",
      subHeading: "نحن لسنا مجرد صالة رياضية",
      paragraph: [
        `بل نحن مركز للطاقة، حيث تتألق النساء بسطوع
وتتخطى الحدود.`,
        `صالتنا الحديثة هي مركز للنساء الجريئة والشجاعة
والرائعة،`,
        `من جلسات الرقص الخلابة إلى أجدد التمارين، سواي
جيم هو المكان الذي تتحول فيه رحلتك الريtاضية
إلى مغامرة مثيرة. استعدي لتجربة القوة والمرح
والصداقة كما لم تشهديها من قبل!`,
      ],
    },
    variant: "secondary",
  },
};
