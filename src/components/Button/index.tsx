import clsx from "clsx";
import { FunctionComponent, ReactNode } from "react";

interface IButton extends React.ComponentPropsWithoutRef<"button"> {
  variant?: "primary" | "secondary" | "default"; 
  children?: ReactNode;
}

const Button: FunctionComponent<IButton> = ({
  variant = "default",
  children,
  ...restProps
}) => {
  
  return (
    <button
      {...restProps}
      className={clsx(variant, restProps.className)}
    >
      {children}
    </button>
  )
}

export default Button