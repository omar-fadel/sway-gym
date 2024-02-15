import Typography from "@/components/Typography/Typography";
import Image from "next/image";
import { getDictionary } from "./dictionaries";

export default async function Home({ params: { lang } }: any) {
  const dict = await getDictionary(lang);
  return (
    <div>
      <section className="flex justify-center bg-background-1 bg-cover">
        <div className=" bg-grad flex w-full max-w-screen-2xl justify-between px-32 pt-16">
          <div className="flex h-full flex-col justify-center gap-2">
            <Typography variant="h3">{dict.welcome}</Typography>
            <Image
              alt="logo"
              src="/images/logo.png"
              width={380}
              style={{ minWidth: 380 }}
              height={105}
            />
          </div>
          <div>
            <Image
              alt="laughing-group"
              src="/images/group-picture.png"
              width={2765}
              height={1573}
              style={{ minWidth: 546 }}
            />
          </div>
        </div>
      </section>
      <section className="flex justify-center bg-secondary">
        <div className="mx-12  flex max-w-screen-2xl items-center justify-between gap-24 py-16">
          <Image
            src={"/images/section-one.png"}
            height={552}
            width={546}
            style={{ minWidth: 546 }}
            alt="section-one"
          />
          <div className="flex flex-col justify-center">
            <Typography className="text-primary" variant="h3">
              {dict.home.firstSection.header}
            </Typography>
            <Typography className="my-8 text-white" variant="h4">
              {dict.home.firstSection.subHeader}
            </Typography>
            <Typography className="text-white" variant="bodyLarge">
              {dict.home.firstSection.bodyOne}
            </Typography>
            <Typography className="text-white" variant="bodyLarge">
              {dict.home.firstSection.bodyTwo}
            </Typography>
            <Typography className="text-white" variant="bodyLarge">
              {dict.home.firstSection.bodyThree}
            </Typography>
          </div>
        </div>
      </section>
      <section className="flex justify-center bg-primary">
        <div className="mx-12 flex max-w-screen-2xl items-center justify-between gap-24 py-16">
          <article className="flex flex-col justify-center">
            <Typography className="mb-6 text-black" variant="h3">
              {dict.home.secondSection.header}
            </Typography>
            <Typography className="text-black" variant="bodyLarge">
              {dict.home.secondSection.body}
            </Typography>
          </article>
          <Image
            src="/images/section-two.png"
            height={544}
            width={524}
            style={{ minWidth: 524 }}
            alt="section-two"
          />
        </div>
      </section>
    </div>
  );
}