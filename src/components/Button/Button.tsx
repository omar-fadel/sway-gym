"use client";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
  className?: string;
  color?: "primary" | "secondary";
}
const Button: React.FC<ButtonProps> = ({
  children,
  color = "primary",
  onClick,
  className,
}) => {
  const colorClass =
    color === "primary"
      ? "border-primary text-primary"
      : "border-secondary text-secondary";
  const hoverClass =
    color === "primary"
      ? "hover:bg-primary hover:text-black"
      : "hover:text-primary hover:bg-secondary";
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      className={`rounded-full border-2 p-3 ${colorClass} ${hoverClass} ${className}`}
    >
      <p className="text-button">{children}</p>
    </button>
  );
};

export default Button;
