import Image from "next/image";
import Typography from "../Typography/Typography";
import { useEffect, useState } from "react";

interface DropdownProps {
  choices: string[];
  value: string;
  onChange: (newValue: string) => void;
  label?: string;
  className?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  choices,
  onChange,
  value,
  className,
  label,
}) => {
  const [open, setIsOpen] = useState<boolean>(false);
  if (!choices.includes(value))
    throw new Error(
      "Cannot provide a value for dropdown that does not exist in choices",
    );
  useEffect(() => {
    const clickHandler = () => {
      setIsOpen(false);
    };
    window.addEventListener("click", clickHandler);
    return () => {
      window.removeEventListener("click", clickHandler);
    };
  }, []);

  return (
    <div className={className}>
      <Typography className="mx-2 mb-2" variant="label">
        {label}
      </Typography>
      <div
        onClick={(e) => {
          setIsOpen(true);
          e.stopPropagation();
        }}
        className="relative flex cursor-pointer gap-2 rounded-full border border-primary p-2 px-4 focus:border-2"
      >
        <Typography className="text-primary" variant="bodyMedium">
          {value}
        </Typography>
        <Image
          src={"/icons/down-arrow.svg"}
          width={16}
          height={16}
          alt="down-arrow"
        />
        {open && (
          <ul className="absolute left-0 top-12 overflow-hidden rounded-lg border border-primary text-primary ">
            {choices.map((choice) => (
              <li key={choice}>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    onChange(choice);
                    setIsOpen(false);
                    e.stopPropagation();
                  }}
                  className="w-full px-6 py-1 hover:bg-primary hover:text-black"
                >
                  <Typography variant="bodyLarge">{choice}</Typography>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
