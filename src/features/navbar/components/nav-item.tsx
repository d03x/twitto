import Link, { LinkProps } from "next/link";
import style from "./styles/navbar.module.scss";
import { ReactNode } from "react";

interface NavItemProps extends LinkProps {
  icon: ReactNode;
  isActive: boolean;
  text: string;
}

export const NavItem = ({isActive,icon,text, ...props}: NavItemProps) => {
  return (
    <Link  className={style.nav_item} {...props}>
      <div className={style.nav_item_wrapper}>
        <span>{icon}</span>
        <span>
            {text}
        </span>
      </div>
    </Link>
  );
};
