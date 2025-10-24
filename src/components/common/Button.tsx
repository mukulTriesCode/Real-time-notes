import { ButtonProps } from "@/types";
import React from "react";

const Button: React.FC<ButtonProps> = ({
  onClick,
  type = "button",
  variant = "primary",
  children,
  className = "",
  disabled
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 rounded transition cursor-pointer font-medium ${
        variant === "primary"
          ? "bg-blue-500 text-white hover:bg-blue-600"
          : "border-2 border-blue-500 text-blue-500 hover:bg-blue-50"
      } ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
