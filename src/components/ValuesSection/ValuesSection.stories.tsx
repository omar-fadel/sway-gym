import { Meta, StoryObj } from "@storybook/react";
import ValuesSection from "./ValuesSection";
import ArabicDecorator from "@/decorators/ArabicDecorator";

const meta = {
  component: ValuesSection,
  title: "Values Section",
  decorators: ArabicDecorator,
} satisfies Meta<typeof ValuesSection>;

export default meta;

export const Primary: StoryObj<typeof meta> = {
  args: {
    title: "قيمنا",
    valuesImage: {
      src: "/images/values.png",
      alt: "values",
      height: 668,
      width: 386,
    },
    items: [
      {
        body: `نحن نؤمن بقوة المجتمع الداعم
حيث تتكون الصداقات، ويشجع
الجميع بعضهن البعض نحو
أهدافهم الرياضية.`,
        icon: "/icons/infoCards-1.svg",
        title: "آلمجتمع",
      },
      {
        body: `نحن نحتضن التنوع ونخلق مكانا
تشعر فيه كل امرأة بالترحيب» بغض
النظر عن العمر أو الخبرة أو مستوى
اللياقة البدنية.`,
        icon: "/icons/infoCards-2.svg",
        title: "الاحتواء",
      },
      {
        body: `في صالة سواي، ندعم منطقة
خالية من الحكم حيث يمكن
للنساء أن يكونوا أنفسهن» بعيدين
عن التقييم أو الانتقاد.`,
        icon: "/icons/infoCards-3.svg",
        title: "لا حكم لدينا",
      },
      {
        body: `نحن متحمسون لمساعدة النساء
على قيادة حياة أكثر صحة وسعادة.
التفاني في التميز لدينا يدفعنا
للتحسين المستمر وتجاوز التوقعات.`,
        icon: "/icons/infoCards-4.svg",
        title: "الشفف",
      },
    ],
  },
};
