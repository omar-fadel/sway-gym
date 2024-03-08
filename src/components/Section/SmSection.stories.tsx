import { Meta, StoryObj } from "@storybook/react";
import SmSection from "./SmSection";
import ArabicDecorator from "@/decorators/ArabicDecorator";

const meta = {
  component: SmSection,
  title: "Small Section",
  args: {},
  decorators: ArabicDecorator,
} satisfies Meta<typeof SmSection>;

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

export const Secondary: StoryObj<typeof meta> = {
  args: {
    sectionText: {
      heading: `سواى هو ايقاع
التفيير في المملكة`,
      paragraph: [
        `في سواي جيم، نتصور مملكة ترحب كل امرأة
بقوتها فيها، سواء كانت قوتها نابعة من الداخل
أو الخارج. نحن نسعى لأن نكون إيقاع التغيير
الإيجابي، لنخلق مجتمعا تزدهر القوة والعافية
والفرح به.`,
      ],
      variant: "secondary",
    },
    variant: "primary",
    image: {
      src: "images/home/section-two.png",
      height: 544,
      width: 524,
      alt: "section-two",
    },
    reverted: true,
  },
};
