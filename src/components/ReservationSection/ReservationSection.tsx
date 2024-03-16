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
        className={`flex w-full max-w-screen-lg flex-wrap items-center justify-center bg-cover py-4 sm:py-6 md:py-16`}
      >
        <article className="mb-4 w-full text-center sm:mb-0 sm:w-[50%] md:w-[60%]">
          <h1 className="mb-4 text-h4 text-primary sm:mb-6 sm:text-h2 md:mb-8 md:text-h1">
            {reservationTitle}
          </h1>
          <h2 className="mb-4 text-b1 font-bold text-white sm:mb-6 sm:text-h3 md:mb-8 md:text-h2">
            {buttonPrompt}
          </h2>
          <Button
            color="primary"
            onClick={() => {
              if (onReserve) onReserve();
            }}
          >
            {buttonText}
          </Button>
        </article>
        <div className="flex w-1/2 justify-center sm:w-[50%] md:w-[40%]">
          <Image
            alt={reservationImage.alt}
            src={reservationImage.src}
            width={reservationImage.width}
            height={reservationImage.height}
            className="-mb-4 sm:-mb-6 md:-mb-16"
          />
        </div>
      </div>
    </section>
  );
};

export default ReservationSection;
