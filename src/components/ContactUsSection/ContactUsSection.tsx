import Image from "next/image";

type Image = {
  src: string;
  alt: string;
  height: number;
  width: number;
};
interface ContactUsSectionProps {
  title: string;
  logoImage: Image;
  image: Image;
  timeTitle: string;
  time: string;
  phoneTitle: string;
  phone: string;
  backgroundImage?: string;
}

const TextValue: React.FC<{
  title: string;
  subTitle: string;
  className?: string;
}> = ({ subTitle, title, className }) => {
  return (
    <article
      className={`mt-4 flex flex-col items-center gap-2 text-center sm:mt-6 lg:mt-8 ${className}`}
    >
      <h2 className="text-b3 sm:text-h4 lg:text-h3">{title}</h2>
      <h3 className="text-h4 sm:text-h3 lg:text-h2">{subTitle}</h3>
    </article>
  );
};

const ContactUsSection: React.FC<ContactUsSectionProps> = ({
  image,
  logoImage,
  phone,
  phoneTitle,
  time,
  timeTitle,
  title,
  backgroundImage,
}) => {
  return (
    <div className="flex justify-center bg-primary">
      <section
        style={{ backgroundImage }}
        className="flex w-full max-w-screen-lg flex-wrap justify-center bg-cover py-4 sm:gap-6 sm:py-6 lg:gap-16 lg:py-16"
      >
        <div className="hidden items-center justify-center sm:flex sm:w-[56.25%] lg:w-5/12">
          <Image
            alt={image.alt}
            src={image.src}
            height={image.height}
            width={image.width}
            className="sm:-mb-6 lg:-mb-16"
          />
        </div>
        <div className="flex w-full flex-col items-center justify-center sm:w-[37.5%] sm:px-4 lg:w-4/12">
          <h2 className="mb-4 w-full text-center text-h4 sm:mb-6 sm:text-h3 lg:text-h2">
            {title}
          </h2>
          <div className="flex w-full justify-center sm:hidden">
            <Image
              alt={image.alt}
              src={image.src}
              height={image.height}
              width={image.width}
              className="w-1/2"
            />
          </div>
          <div className="-mt-8 flex w-full justify-center sm:mt-4 ">
            <Image
              alt={logoImage.alt}
              src={logoImage.src}
              height={logoImage.height}
              width={logoImage.width}
              className="w-1/2 sm:w-full"
            />
          </div>
          <TextValue className="w-full" subTitle={time} title={timeTitle} />
          <TextValue className="w-full" subTitle={phone} title={phoneTitle} />
        </div>
      </section>
    </div>
  );
};

export default ContactUsSection;
