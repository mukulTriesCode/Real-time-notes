import React from "react";

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  variant?: "card" | "simple";
}

const Form: React.FC<FormProps> = ({
  onSubmit,
  children,
  className,
  variant = "card",
}) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit?.(e);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className={`max-w-[500px] mx-auto ${variant} flex flex-col gap-4 ${className}`}
    >
      {children}
    </form>
  );
};

export default Form;
