import useTrackPosition from "#/hooks/useTrackPosition";
import { motion } from "motion/react";
import {
  CSSProperties,
  forwardRef,
  ReactNode,
  RefObject,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
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

  const overlayRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const prevFocusedElement = useRef<HTMLDivElement>(null);

  const styles: CSSProperties = {
    position: "fixed",
    top: (tracking?.top as number) + 20,
    left: (tracking?.left as number) + 4,
  };

  function handleKeyDown(e: KeyboardEvent) {
    console.log(e.target, e.currentTarget);
    const modal = menuRef.current;

    if (e.key == "Escape") {
      onClose();
    }
    if (e.key == "Tab") {
      if (modal) {
        const focusableElement = Array.from(modal.querySelectorAll("button"));
        console.log(focusableElement);
        const firstFocusableElement = focusableElement[0] as HTMLElement;
        const lastFocusableElement = focusableElement[
          focusableElement.length - 1
        ] as HTMLElement;

        if (e.shiftKey) {
          if (document.activeElement === firstFocusableElement) {
            lastFocusableElement?.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastFocusableElement) {
            firstFocusableElement?.focus();
            e.preventDefault();
          }
        }
      }
    }
  }
  useLayoutEffect(() => {
    prevFocusedElement.current = document.activeElement as HTMLDivElement;
    if (menuRef?.current) {
      const modal = menuRef.current;
      const focusableElement = Array.from(modal.querySelectorAll("button"));
      if (focusableElement.length > 0) {
        focusableElement[0].focus();
      }
    }
  }, [onClose]);
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    menuRef.current?.focus();
    overlayRef.current?.addEventListener("click", () => {
      if (onClose) {
        onClose();
        prevFocusedElement?.current?.focus();
      }
    });
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      overlayRef.current?.removeEventListener("click", () => {
        if (onClose) {
          onClose();
        }
      });
    };
  }, [onClose]);

  return createPortal(
    <motion.div role="overlay" ref={overlayRef} className={styless.overlay}>
      <motion.div
        role="menu"
        ref={menuRef}
        initial={{
          height: 0,
        }}
        animate={{
          height: "auto",
        }}
        exit={{
          height: 0,
        }}
        transition={{ 
          duration : 0.1
         }}
        style={styles}
        className={styless.container}
      >
        {children}
      </motion.div>
    </motion.div>,
    document.body
  );
});
