import { HeadingProps } from "@/types";
import React from "react";

const Heading: React.FC<HeadingProps> = ({
  variant = "h1",
  children,
  className,
}) => {
  const Tag = variant;
  return <Tag className={className}>{children}</Tag>;
};

export default Heading;
