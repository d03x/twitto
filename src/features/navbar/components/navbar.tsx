import { BookmarkIcon } from "#/assets/icons/bookmark";
import { HashIcon } from "#/assets/icons/hash";
import { HomeIcon } from "#/assets/icons/home";
import { MessageIcon } from "#/assets/icons/message";
import { NotificationIcon } from "#/assets/icons/notification";
import { ProfileIcon } from "#/assets/icons/profile";
import { SettingsIcon } from "#/assets/icons/settings";
import style from "#/features/navbar/components/styles/navbar.module.scss";
import { NavItem } from "./nav-item";
export const Navbar = () => {
  return (
    <>
      <nav className={style.nav}>
        <NavItem
          href={"/home"}
          isActive={false}
          icon={<HomeIcon />}
          text="Home"
        />
        <NavItem
          href={"/explore"}
          isActive={false}
          icon={<HashIcon />}
          text="Explore"
        />
        <NavItem
          href={"/notification"}
          isActive={false}
          icon={<NotificationIcon />}
          text="Notification"
        />
        <NavItem
          href={"/messages"}
          isActive={false}
          icon={<MessageIcon />}
          text="Messages"
        />
        <NavItem
          href={"/bookmark"}
          isActive={false}
          icon={<BookmarkIcon />}
          text="Bookmark"
        />
        <NavItem
          href={"/profile"}
          isActive={false}
          icon={<ProfileIcon />}
          text="Profile"
        />
        <NavItem
          href={"/settings"}
          isActive={false}
          icon={<SettingsIcon />}
          text="Settings"
        />
      </nav>
    </>
  );
};
