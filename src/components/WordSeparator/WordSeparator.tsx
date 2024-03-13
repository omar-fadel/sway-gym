"use client";
import Button from "../Button/Button";

const WordSeparator: React.FC<{
  word: string;
  buttonText?: string;
  onClick?: () => void;
  variant: "primary" | "secondary";
}> = ({ word, variant, buttonText, onClick }) => {
  return (
    <section className={`flex justify-center py-6 lg:py-16 bg-${variant}`}>
      <div
        className={`flex w-full max-w-screen-lg flex-wrap gap-4 ${buttonText ? "sm:justify-between" : "sm:justify-center"} items-center justify-center`}
      >
        <h2
          className={`text-center text-h3 sm:w-1/2 sm:text-h2 lg:text-h1 ${variant === "primary" ? "text-secondary" : "text-primary"} w-full`}
        >
          {word}
        </h2>
        {buttonText && (
          <div className="flex w-full justify-center sm:w-2/5">
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
