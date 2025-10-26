import { ElementProps } from "@/types";
import React from "react";

const Container: React.FC<ElementProps> = ({ children, className }) => {
  return <div className={`container ${className}`}>{children}</div>;
};

export default Container;
