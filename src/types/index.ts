export interface ElementProps {
  children: React.ReactNode;
  className?: string;
}

export interface HeadingProps extends ElementProps {
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export interface ButtonProps extends ElementProps {
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "outlined";
}

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}
