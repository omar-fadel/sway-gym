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
        className={`flex w-full max-w-screen-lg flex-col items-center justify-center bg-cover px-8 pb-16 pt-12 text-center `}
      >
        <Typography className="mb-16 text-primary" variant="h3">
          {sectionTitle}
        </Typography>
        <div className="flex flex-col gap-16">
          <article className="flex flex-col gap-4">
            <Typography variant="h4" className="text-primary">
              {addressTitle}
            </Typography>
            <Typography variant="bodySmall" className="text-white">
              {addressDetails}
            </Typography>
          </article>
          <article className="flex flex-col gap-10">
            <Typography variant="h4" className="text-primary">
              {workTimeTitle}
            </Typography>
            <div>
              <Typography className="text-white" variant="bodyLarge">
                {normalWorkTime.days}
              </Typography>
              <Typography className="text-white" variant="bodySmall">
                {normalWorkTime.hours}
              </Typography>
            </div>
            <div>
              <Typography className="text-white" variant="bodyLarge">
                {weekendWorkTime.days}
              </Typography>
              <Typography className="text-white" variant="bodySmall">
                {weekendWorkTime.hours}
              </Typography>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default AddressSection;
