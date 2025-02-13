"use client";
import { AuthForm } from "#/features/auth";
import { Footer } from "#/features/footer";
import styles from "./styles/aside.module.scss";
export function Aside() {
  const isAuth = false;
  return (
    <aside className={styles.container}>
      <div className={styles.auth_form}>
        <AuthForm />
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </aside>
  );
}
