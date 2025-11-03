import React, { SVGProps } from "react";

const PlusIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      width={20}
      height={20}
      {...props}
    >
      <path d="M12 4v16m8-8H4" />
    </svg>
  );
};

export default PlusIcon;
