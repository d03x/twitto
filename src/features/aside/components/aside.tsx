"use client";
import { AuthForm } from "#/features/auth";
import { Footer } from "#/features/footer";
import styles from "./styles/aside.module.scss";
import {usePathname} from "next/navigation";
import React from "react";
import {Search} from "#/features/search/components/search";
export function Aside() {
  const isAuth = false;
  const pathname = usePathname();
  const showSearch = React.useCallback(()=>{
    return pathname != "/" && pathname != "/explore" && pathname?.split('/')[1] != "search";
  },[pathname]);
  return (
    <aside className={styles.container}>
        {showSearch() && <div className={styles.search}>
            <Search/>
        </div>}
        {!isAuth &&  <div className={styles.auth_form}>
            <AuthForm />
        </div>}
      <div className={styles.footer}>
        <Footer />
      </div>
    </aside>
  );
}
