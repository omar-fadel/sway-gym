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
}

const Banner: React.FC<BannerProps> = ({
  bannerImage,
  title,
  bannerLogo,
  bannerBackgroundImage,
  variant,
}) => {
  return (
    <section className={`bg-${variant} flex justify-center`}>
      <div
        className={`background- flex w-full max-w-screen-lg flex-wrap items-center justify-center bg-cover pt-12 bg-${bannerBackgroundImage}`}
      >
        <div className="mx-8 mb-8 flex w-full flex-col items-center gap-4 sm:w-fit">
          <Typography className="text-center" variant="h3">
            {title}
          </Typography>
          {bannerLogo ? (
            <Image
              alt={bannerLogo.alt}
              height={bannerLogo.height}
              width={bannerLogo.width}
              src={bannerLogo.src}
            />
          ) : null}
        </div>
        {bannerImage ? (
          <div className="mx-8">
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
