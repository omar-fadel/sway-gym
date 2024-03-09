import Image from "next/image";
import Typography from "../Typography/Typography";

interface ReservationBannerProps {
  title: string;
  subTitle: string;
  backgroundImage: string;
  bannerImage: {
    width: number;
    height: number;
    src: string;
    alt: string;
  };
  variant: "primary" | "secondary";
}
const ReservationBanner: React.FC<ReservationBannerProps> = ({
  backgroundImage,
  bannerImage,
  subTitle,
  title,
  variant,
}) => {
  return (
    <section className={`bg-${variant} flex justify-center`}>
      <div
        style={{ backgroundImage: backgroundImage }}
        className={`box-border flex w-full max-w-screen-lg flex-wrap items-end justify-center bg-cover p-12 pb-0 `}
      >
        <article className="flex h-full w-full flex-col justify-center gap-6 p-4 pb-8 text-center md:w-1/2 md:text-start">
          <Typography variant="h3" className="text-gray-600">
            {title}
          </Typography>
          <Typography variant="h2">{subTitle}</Typography>
        </article>
        <Image
          className="w-full p-4 pb-0 md:w-1/2"
          alt={bannerImage.alt}
          src={bannerImage.src}
          width={bannerImage.width}
          height={bannerImage.height}
        />
      </div>
    </section>
  );
};

export default ReservationBanner;
