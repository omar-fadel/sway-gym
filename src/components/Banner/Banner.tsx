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
}

const Banner: React.FC<BannerProps> = ({
  bannerImage,
  title,
  bannerLogo,
  bannerBackgroundImage,
  variant,
  revert,
}) => {
  return (
    <section className={`bg-${variant} flex justify-center`}>
      <div
        style={{ backgroundImage: bannerBackgroundImage }}
        className={`box-border flex w-full max-w-screen-lg flex-wrap items-center justify-center bg-cover pt-12 `}
      >
        <div className={`flex w-full flex-col items-center gap-4 p-8 md:w-1/2`}>
          <Typography
            className={`text-center ${revert ? "order-2" : "order-1"}`}
            variant="h3"
          >
            {title}
          </Typography>
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
          <div className={`flex w-full justify-center px-8 md:w-1/2`}>
            <Image
              alt={bannerImage.alt}
              height={bannerImage.height}
              width={bannerImage.width}
              src={bannerImage.src}
            />
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default Banner;
