import { Meta, StoryObj } from "@storybook/react";
import RightsSection from "./RightsSectiont";
import ArabicDecorator from "@/decorators/ArabicDecorator";

const meta = {
  component: RightsSection,
  title: "Rights section",
  decorators: ArabicDecorator,
} satisfies Meta<typeof RightsSection>;

export default meta;

export const Primary: StoryObj<typeof meta> = {
  args: {
    arabicButtonText: "تحميل الـ PDF بالعربية",
    arabicIcon: "/icons/arabic-dictionary.svg",
    arabicParagraph: "وثيقة حماية المستهلك الخاصة بالمراكز والصالات الرياضية",
    englishButtonText: "Download English PDF",
    englishIcon: "/icons/english-dictionary.svg",
    englishParagraph:
      "Protection Consumer Sports for Document Gymnasiums& Centers",
    title: "اعرفي حقوقك",
    image: {
      alt: "rights ",
      height: 642,
      width: 652,
      src: "/images/about/6girls.png",
    },
  },
};
