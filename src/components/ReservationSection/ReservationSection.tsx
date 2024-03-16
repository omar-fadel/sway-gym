"use client";
import Image from "next/image";
import Button from "../Button/Button";
import Typography from "../Typography/Typography";

interface ReservationSectionProps {
  onReserve?: () => void;
  reservationTitle: string;
  buttonPrompt: string;
  buttonText: string;
  backgroundImage: string;
  reservationImage: {
    height: number;
    width: number;
    src: string;
    alt: string;
  };
}

const ReservationSection: React.FC<ReservationSectionProps> = ({
  buttonPrompt,
  buttonText,
  reservationImage,
  reservationTitle,
  backgroundImage,
  onReserve,
}) => {
  return (
    <section className={`flex justify-center bg-secondary`}>
      <div
        style={{ backgroundImage }}
        className={`flex w-full max-w-screen-lg flex-wrap items-center justify-center bg-cover pt-12`}
      >
        <article className="m-8 w-full text-center md:w-fit md:text-start">
          <Typography variant="h1" className="mb-10 text-primary">
            {reservationTitle}
          </Typography>
          <Typography variant="h2" className="mb-10 text-white">
            {buttonPrompt}
          </Typography>
          <Button
            color="primary"
            onClick={() => {
              if (onReserve) onReserve();
            }}
          >
            {buttonText}
          </Button>
        </article>
        <div className="mx-8">
          <Image
            alt={reservationImage.alt}
            src={reservationImage.src}
            width={reservationImage.width}
            height={reservationImage.height}
          />
        </div>
      </div>
    </section>
  );
};

export default ReservationSection;
