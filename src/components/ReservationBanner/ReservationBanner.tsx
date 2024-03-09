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
      <div style={{ backgroundImage }} className="w-full max-w-screen-lg bg-cover flex flex-wrap">
        <article className="w-full md:w-1/2 text-center md:text-start flex flex-col justify-center p-8">
          <Typography variant="h3" className="text-gray-600">
            {title}
          </Typography>
          <Typography variant="h2">{subTitle}</Typography>
        </article>
        <div className="w-full md:w-1/2 px-8 pt-8 flex items-end">
          <Image
            alt={bannerImage.alt}
            src={bannerImage.src}
            width={bannerImage.width}
            height={bannerImage.height}
          />
        </div>
      </div>
    </section>
  );
};

export default ReservationBanner;
