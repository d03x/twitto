"use client";
import Logo from "./logo";
import styles from "./styles/sidebar.module.scss";
export function Sidebar() {
  return (
    <header className={styles.container}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.navbar}>dadan</div>
    </header>
  );
}
