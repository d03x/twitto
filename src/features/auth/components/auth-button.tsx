import { FC, ReactNode } from "react";
import styles from "./styles/auth-button.module.scss";
interface IAuthButton {
  onClick?: () => void;
  icon?: ReactNode;
  text: string;
}
export const AuthButton: FC<IAuthButton> = ({ text, icon, onClick }) => {
  return (
    <button onClick={onClick} className={styles.container}>
      {icon}
      {text}
    </button>
  );
};
