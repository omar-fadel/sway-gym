"use client";
import Bundle from "./Bundle/Bundle";

export interface Bundle {
  title: string;
  price: string;
  currency?: string;
  details: string[];
  buttonText: string;
  image: {
    src: string;
    width?: number;
    height?: number;
    alt: string;
  };
  backgroundImage: string;
  id?: string;
  onClickButton?: (id?: string) => void;
}
interface BundlesSection {
  title: string;
  bundles: Bundle[];
  imagesWidth?: number;
  imagesHeight?: number;
  currency: string; //180 x 314
}

const BundlesSection: React.FC<BundlesSection> = ({
  bundles,
  title,
  imagesHeight = 314,
  imagesWidth = 180,
  currency,
}) => {
  return (
    <div className="flex justify-center bg-secondary">
      <section className="w-full max-w-screen-lg py-6 md:py-16">
        <h2 className="mb-4 text-center text-h4 text-white sm:mb-6 sm:text-h3 md:mb-8 md:text-h2">
          {title}
        </h2>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {bundles.map((bundle, index) => (
            <div
              key={`bundle-${index}`}
              className="w-full px-4 sm:w-3/4 sm:px-0 md:w-2/5"
            >
              <Bundle
                {...bundle}
                currency={currency}
                image={{
                  height: imagesHeight,
                  width: imagesWidth,
                  ...bundle.image,
                }}
                id={`bundle-${index}`}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BundlesSection;
