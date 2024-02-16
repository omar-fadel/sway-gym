"use client";

import { CSSProperties } from "react";
import Typography from "../Typography/Typography";

interface InputProps {
  value: string;
  onChange: (newValue: string) => void;
  placeholder?: string;
  label?: string;
  className?: string;
  style?: CSSProperties;
}
const Input: React.FC<InputProps> = ({
  onChange,
  value,
  label,
  placeholder,
  className,
  style,
}) => {
  return (
    <div style={style} className={className}>
      {label && (
        <Typography className="mx-2 mb-2" variant="label">
          {label}
        </Typography>
      )}
      <input
        className="w-full rounded-full border border-primary bg-transparent p-2 px-4 font-['Alexandria'] text-primary outline-0 focus:border-2"
        value={value}
        placeholder={placeholder}
        onChange={(e) => {
          if (e.target.value || e.target.value === "") onChange(e.target.value);
        }}
      />
    </div>
  );
};

export default Input;
