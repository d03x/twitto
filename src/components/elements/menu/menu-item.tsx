import style from "#/components/elements/menu/styles/menu.module.scss";
export const MenuItem = ({ children }: any) => {
  return <button role="menu-item" className={style.menu_item}>
    { children }
  </button>
};
