import Image from "next/image";
import Typography from "../Typography/Typography";

type Image = {
  width: number;
  height: number;
  src: string;
  alt: string;
};

interface BannerProps {
  bannerLogo?: Image;
  bannerBackgroundImage: string;
  title: string;
  bannerImage?: Image;
  variant: "primary" | "secondary";
  revert?: boolean;
  revertTextAndImage?: boolean;
}

const Banner: React.FC<BannerProps> = ({
  bannerImage,
  title,
  bannerLogo,
  bannerBackgroundImage,
  variant,
  revert,
  revertTextAndImage,
}) => {
  return (
    <section className={`bg-${variant} flex justify-center`}>
      {/* <div
        style={{ backgroundImage: bannerBackgroundImage }}
        className={` flex w-full max-w-screen-lg flex-wrap items-center justify-center bg-cover pt-4 md:pt-6 lg:pt-16 `}
      >
        <div
          className={`box-border flex w-1/2 flex-col items-center ${revertTextAndImage ? "md:items-start" : "md:items-end"}  w-full gap-4 p-8 md:w-[37.5%] lg:w-5/12 ${revertTextAndImage ? ",d:order-2" : "md:order-1"} order-2`}
        >
          <h2
            className={`text-h4 md:text-h3 lg:text-h2 w-full text-center ${revert ? "order-2" : "order-1"}`}
          >
            {title}
          </h2>
          {bannerLogo ? (
            <Image
              className={`${revert ? "order-1" : "order-2"}`}
              alt={bannerLogo.alt}
              height={bannerLogo.height}
              width={bannerLogo.width}
              src={bannerLogo.src}
            />
          ) : null}
        </div>
        {bannerImage ? (
          <div
            className={`flex h-fit w-full items-end justify-center px-8 md:h-full md:w-[63.5%] md:justify-start lg:w-7/12 ${revertTextAndImage ? "md:order-1" : "md:order-2"} order-2`}
          >
            <Image
              alt={bannerImage.alt}
              height={bannerImage.height}
              width={bannerImage.width}
              src={bannerImage.src}
            />
          </div>
        ) : null}
      </div> */}
      <div
        style={{ backgroundImage: bannerBackgroundImage }}
        className="box-border flex w-full max-w-screen-lg flex-wrap justify-center bg-cover pt-4 sm:pt-6 lg:pt-16"
      >
        <article
          className={`flex w-full flex-col items-center justify-center p-4 sm:w-[37.5%] sm:p-6 lg:p-16 ${revertTextAndImage ? "sm:items-start" : "sm:items-end"}`}
        >
          <h2
            className={`text-h4 sm:text-h3 lg:text-h2 mb-4 w-full text-center  ${revert ? "order-2" : "order-1"}`}
          >
            {title}
          </h2>
          {bannerLogo ? (
            <Image
              className={`${revert ? "order-1" : "order-2"} w-2/4 sm:w-full`}
              alt={bannerLogo.alt}
              height={bannerLogo.height}
              width={bannerLogo.width}
              src={bannerLogo.src}
            />
          ) : null}
        </article>
        {bannerImage && (
          <div className="mt-4 flex w-3/4 items-end sm:w-[62.5%]">
            <Image
              alt={bannerImage.alt}
              height={bannerImage.height}
              width={bannerImage.width}
              src={bannerImage.src}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Banner;
