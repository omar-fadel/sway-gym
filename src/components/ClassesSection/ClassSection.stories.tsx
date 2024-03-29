import { Meta, StoryObj } from "@storybook/react";
import ClassesSection from "./ClassesSection";
import ArabicDecorator from "@/decorators/ArabicDecorator";

const meta = {
  component: ClassesSection,
  title: "Classes Section",
  decorators: ArabicDecorator,
} satisfies Meta<typeof ClassesSection>;

export default meta;

export const Primary: StoryObj<typeof meta> = {
  args: {
    buttonText: "اشتركي الآن",
    currency: "ريال",
    subTitle: "المليئة بالطاقة والمرح",
    title: "لدينا المديد من الفصول المتخصصة",
    backgroundImage: "url('/images/classes/backgrounds/2bg.png')",
    classes: [
      {
        icon: "/images/classes/icons/class-1.svg",
        details: [
          "حصص خاصة بنحت الاجسام",
          "لتعمل على نحت قوامك بتركيز عالي وبصورة جمالية",
          "مع مجموعة مصغرة تشاركينها تمرينك بأجواء ممتعة",
        ],
        price: "1205",
        title: "الفصل الاول",
      },
      {
        icon: "/images/classes/icons/class-2.svg",
        details: [
          "حصص خاصة بنحت الاجسام",
          "لتعمل على نحت قوامك بتركيز عالي وبصورة جمالية",
          "مع مجموعة مصغرة تشاركينها تمرينك بأجواء ممتعة",
        ],
        price: "1205",
        title: "الفصل الثاني",
      },
      {
        icon: "/images/classes/icons/class-3.svg",
        details: [
          "حصص خاصة بنحت الاجسام",
          "لتعمل على نحت قوامك بتركيز عالي وبصورة جمالية",
          "مع مجموعة مصغرة تشاركينها تمرينك بأجواء ممتعة",
        ],
        price: "1205",
        title: "الفصل الثالث",
      },
      {
        icon: "/images/classes/icons/class-4.svg",
        details: [
          "حصص خاصة بنحت الاجسام",
          "لتعمل على نحت قوامك بتركيز عالي وبصورة جمالية",
          "مع مجموعة مصغرة تشاركينها تمرينك بأجواء ممتعة",
        ],
        price: "1205",
        title: "الفصل الرابع",
      },
    ],
  },
};

export const Secondary: StoryObj<typeof meta> = {
  args: {
    buttonText: "اشتركي الآن",
    currency: "ريال",
    title: "فصولنا",
    backgroundImage: "url('/images/prices/backgrounds/3bg.png')",
    variant: "secondary",
    classes: [
      {
        icon: "/images/prices/icons/class-1.svg",
        details: [
          "حصص خاصة بنحت الاجسام",
          "لتعمل على نحت قوامك بتركيز عالي وبصورة جمالية",
          "مع مجموعة مصغرة تشاركينها تمرينك بأجواء ممتعة",
        ],
        price: "1205",
        title: "الفصل الاول",
      },
      {
        icon: "/images/prices/icons/class-2.svg",
        details: [
          "حصص خاصة بنحت الاجسام",
          "لتعمل على نحت قوامك بتركيز عالي وبصورة جمالية",
          "مع مجموعة مصغرة تشاركينها تمرينك بأجواء ممتعة",
        ],
        price: "1205",
        title: "الفصل الثاني",
      },
      {
        icon: "/images/prices/icons/class-3.svg",
        details: [
          "حصص خاصة بنحت الاجسام",
          "لتعمل على نحت قوامك بتركيز عالي وبصورة جمالية",
          "مع مجموعة مصغرة تشاركينها تمرينك بأجواء ممتعة",
        ],
        price: "1205",
        title: "الفصل الثالث",
      },
      {
        icon: "/images/prices/icons/class-4.svg",
        details: [
          "حصص خاصة بنحت الاجسام",
          "لتعمل على نحت قوامك بتركيز عالي وبصورة جمالية",
          "مع مجموعة مصغرة تشاركينها تمرينك بأجواء ممتعة",
        ],
        price: "1205",
        title: "الفصل الرابع",
      },
    ],
  },
};

export const Subscriptions: StoryObj<typeof meta> = {
  args: {
    buttonText: "اشتركي الآن",
    currency: "ريال",
    hasBorder: false,
    title: "اشتاراكاتنا",
    backgroundImage: "url('/images/classes/backgrounds/2bg.png')",
    classes: [
      {
        icon: "/images/classes/icons/class-1.svg",
        details: [
          "حصص خاصة بنحت الاجسام",
          "لتعمل على نحت قوامك بتركيز عالي وبصورة جمالية",
          "مع مجموعة مصغرة تشاركينها تمرينك بأجواء ممتعة",
        ],
        price: "1205",
        title: "اشتراك شهر",
      },
      {
        icon: "/images/classes/icons/class-2.svg",
        details: [
          "حصص خاصة بنحت الاجسام",
          "لتعمل على نحت قوامك بتركيز عالي وبصورة جمالية",
          "مع مجموعة مصغرة تشاركينها تمرينك بأجواء ممتعة",
        ],
        price: "1205",
        title: "اشتراك ٣ اشهر",
      },
      {
        icon: "/images/classes/icons/class-3.svg",
        details: [
          "حصص خاصة بنحت الاجسام",
          "لتعمل على نحت قوامك بتركيز عالي وبصورة جمالية",
          "مع مجموعة مصغرة تشاركينها تمرينك بأجواء ممتعة",
        ],
        price: "1205",
        title: "اشتراك ٦ اشهر",
      },
      {
        icon: "/images/classes/icons/class-4.svg",
        details: [
          "حصص خاصة بنحت الاجسام",
          "لتعمل على نحت قوامك بتركيز عالي وبصورة جمالية",
          "مع مجموعة مصغرة تشاركينها تمرينك بأجواء ممتعة",
        ],
        price: "1205",
        title: "اشتراك شهر",
      },
    ],
  },
};
