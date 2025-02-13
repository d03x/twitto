import { AppleIcon } from "#/assets/icons/apple";
import { FacebookIcon } from "#/assets/icons/facebook";
import { GoogleIcon } from "#/assets/icons/google";
import { Button } from "#/components/elements/button/button";
import { AuthButton } from "./auth-button";
import styles from "./styles/auth-form.module.scss";
export const AuthForm = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Baru Di Twitto?</div>
      <div className={styles.description}>
        Sign up now to get your own personalized timeline!
      </div>
      <div className={styles.buttons}>
        <AuthButton text="Google Login" icon={<GoogleIcon />} />
        <AuthButton text="Apple Login" icon={<AppleIcon />} />
        <AuthButton text="Facebook Login" icon={<FacebookIcon />} />
      </div>
      <div className={styles.terms}>
        By signing up, you agree to the <a href="/">Terms of Service</a> and{" "}
        <a href="/">Privacy Policy</a>, including <a href="/">Cookie Use</a>.
      </div>
    </div>
  );
};
