import { FooterLink } from "./footer-link";
import styles from "./styles/footer.module.scss";
export const Footer = () => {
  return (
    <nav aria-label="Footer" className={styles.container}>
      <FooterLink title="Term of Service" link="#" />
      <FooterLink title="Privacy and policy" link="#" />
      <FooterLink title="Aksebilitas" link="#" />
      <FooterLink title="Jangan jual data saya" link="#" />
      <FooterLink title="Ads Info" link="#" />
      <span>&copy; 2025 Twitto. Corp</span>
    </nav>
  );
};
