import { InputProps } from "@/types";
import React from "react";

/**
 * Props for the Input component.
 *
 * ```tsx
 * <Input
 *   label="Email"
 *   type="email"
 *   placeholder="Enter your email"
 * />
 * ```
 */

const Input: React.FC<InputProps> = ({ label, ...props }) => {
  return (
    <div className="flex flex-col">
      {label && (
        <label htmlFor={props.id} className="label mb-1">
          {label}
        </label>
      )}
      <input {...props} className="input" />
    </div>
  );
};

export default Input;
