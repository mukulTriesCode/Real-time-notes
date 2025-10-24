import React from "react";

const Form: React.FC<React.FormHTMLAttributes<HTMLFormElement>> = (props) => {
  return <form {...props} />;
};

export default Form;
