"use client"
import { TweetButton } from "#/features/create-tweet";
import { Navbar } from "#/features/navbar";
import Logo from "./logo";
import styles from "./styles/sidebar.module.scss";
export function Sidebar() {
  return (
    <header className={styles.container}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.navbar}>
        <Navbar/>
      </div>
      <div className={styles.tweetButton}>
        <TweetButton/>
      </div>
    </header>
  );
}
