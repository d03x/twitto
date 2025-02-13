import useTrackPosition from "#/hooks/useTrackPosition";
import { motion } from "motion/react";
import {
  CSSProperties,
  forwardRef,
  ReactNode,
  RefObject,
  useEffect,
} from "react";
import styless from "./styles/menu.module.scss";
import { createPortal } from "react-dom";
export const Menu = forwardRef<
  HTMLButtonElement,
  {
    onClose: () => void;
    children: ReactNode;
  }
>(({ children, onClose }, ref) => {
  const tracking = useTrackPosition({
    buttonRef: ref as RefObject<HTMLButtonElement>,
    trackScroll: true,
  });
  const styles: CSSProperties = {
    position: "fixed",
    top: (tracking?.top as number) + 20,
    left: (tracking?.left as number) + 4,
  };

  function handleKeyDown(e: KeyboardEvent) {
    console.log(e.target,e.currentTarget);
    
    if (e.key == "Escape") {
      onClose();
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onclose,ref]);

  return createPortal(
    <motion.div
      transition={{ duration: 0.2 }}
      initial={{ height: 0 }}
      animate={{ height: "auto" }}
      exit={{ height: 0 }}
      className={styless.container}
      style={styles}
    >
      {children}
      <div>OPPS</div>
      <div>lorem</div>
    </motion.div>,
    document.body
  );
});
