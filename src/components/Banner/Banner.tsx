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
      <div
        style={{ backgroundImage: bannerBackgroundImage }}
        className="box-border flex w-full max-w-screen-lg flex-wrap justify-center bg-cover pt-4 sm:pt-6 md:pt-16"
      >
        <article
          className={`flex w-full flex-col items-center justify-center p-4 sm:w-[37.5%] sm:p-6 md:p-16 ${revertTextAndImage ? "sm:items-start" : "sm:items-end"}`}
        >
          <h2
            className={`mb-4 w-full text-center text-h4 sm:text-h3 md:text-h2  ${revert ? "order-2" : "order-1"}`}
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
          <div className="mt-4 flex w-3/4 justify-center sm:w-[62.5%]">
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
