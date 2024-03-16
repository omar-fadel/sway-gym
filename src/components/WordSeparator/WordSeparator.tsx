"use client";
import Button from "../Button/Button";

const WordSeparator: React.FC<{
  word: string;
  buttonText?: string;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary";
}> = ({ word, variant, buttonText, onClick, className }) => {
  return (
    <section
      className={`flex justify-center py-6 md:py-16 bg-${variant} ${className}`}
    >
      <div
        className={`flex w-full max-w-screen-lg flex-wrap items-center justify-center gap-4 px-16 sm:justify-center sm:gap-6`}
      >
        <h2
          className={`text-center text-h3  sm:text-h2 md:text-h1 ${variant === "primary" ? "text-secondary" : "text-primary"} w-fit`}
        >
          {word}
        </h2>
        {buttonText && (
          <div className="flex items-center justify-center ">
            <Button
              color={variant !== "primary" ? "primary" : "secondary"}
              onClick={() => {
                if (onClick) onClick();
              }}
            >
              {buttonText}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};
export default WordSeparator;
