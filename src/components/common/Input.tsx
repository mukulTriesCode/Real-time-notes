import { InputProps } from "@/types";
import React from "react";

const Input: React.FC<InputProps> = (props) => {
  return (
    <div className="flex flex-col">
      {props.label && (
        <label htmlFor={props.id} className="label mb-1">
          {props.label}
        </label>
      )}
      <input {...props} className="input" />
    </div>
  );
};

export default Input;
