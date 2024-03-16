import Typography from "../Typography/Typography";

type WorkTime = {
  days: string;
  hours: string;
};
interface AddressSectionProps {
  sectionTitle: string;
  addressTitle: string;
  addressDetails: string;
  workTimeTitle: string;
  normalWorkTime: WorkTime;
  weekendWorkTime: WorkTime;
  variant: "primary" | "secondary";
  backgroundImage: string;
}

const AddressSection: React.FC<AddressSectionProps> = ({
  addressDetails,
  addressTitle,
  normalWorkTime,
  weekendWorkTime,
  workTimeTitle,
  backgroundImage,
  sectionTitle,
  variant,
}) => {
  return (
    <section className={`bg-${variant} flex justify-center`}>
      <div
        style={{ backgroundImage }}
        className={`flex w-full max-w-screen-lg flex-col items-center justify-center bg-cover p-4 text-center sm:p-6 md:p-16 `}
      >
        <h2
          className={`mb-4 text-h4 sm:mb-6 sm:text-h3 md:mb-16 md:text-h2 ${variant === "primary" ? "text-black" : "text-primary"}`}
        >
          {sectionTitle}
        </h2>
        <div className="flex flex-col gap-4 sm:gap-6 md:gap-16">
          <article className="flex flex-col gap-4 sm:gap-6 md:gap-16">
            <h3
              className={`text-h4 md:text-h3 ${variant === "primary" ? "text-black" : "text-primary"}`}
            >
              {addressTitle}
            </h3>
            <p
              className={`${variant === "primary" ? "text-black" : "text-white"} text-b4 sm:text-b3 md:text-b1`}
            >
              {addressDetails}
            </p>
          </article>
          <article className="flex flex-col gap-4">
            <h2
              className={`text-h4 md:text-h3 ${variant === "primary" ? "text-black" : "text-primary"}`}
            >
              {workTimeTitle}
            </h2>
            <div>
              <p
                className={`${variant === "primary" ? "text-black" : "text-white"} text-b4 font-bold sm:text-b2 md:text-b1`}
              >
                {normalWorkTime.days}
              </p>
              <p
                className={`${variant === "primary" ? "text-black" : "text-white"} text-b4 md:text-b1`}
              >
                {normalWorkTime.hours}
              </p>
            </div>
            <div>
              <p
                className={`${variant === "primary" ? "text-black" : "text-white"} text-b4 font-bold sm:text-b2 md:text-b1`}
              >
                {weekendWorkTime.days}
              </p>
              <p
                className={`${variant === "primary" ? "text-black" : "text-white"} text-b4 md:text-b1`}
              >
                {weekendWorkTime.hours}
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default AddressSection;
