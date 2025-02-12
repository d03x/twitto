import { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";
import style from "./styles/button.module.scss";
interface IButton extends ButtonHTMLAttributes<HTMLElement> {
  children: ReactNode;
}
export const Button = forwardRef<HTMLButtonElement, IButton>(
  ({ children,className, ...props }, ref) => {
    return <button className={`${style.button} ${className}`} {...props} ref={ref}>
        {children}
    </button>;
  }
);
