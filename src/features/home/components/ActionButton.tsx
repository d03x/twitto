"use client";
import useTrackPosition from "#/hooks/useTrackPosition";
import { motion } from "motion/react";
import {
  CSSProperties,
  ForwardedRef,
  forwardRef,
  ReactNode,
  RefObject,
} from "react";

export const ActionButton = forwardRef<
  HTMLButtonElement,
  {
    children: ReactNode;
  }
>(({ children }, ref) => {
  console.log(ref);
  const tracking = useTrackPosition({
    buttonRef: ref as RefObject<HTMLButtonElement>,
    trackScroll: true,
  });
  console.log(tracking?.x, tracking?.y);
  const styles: CSSProperties = {
    position: "fixed",
    background: "red",
    top: tracking?.top,
    left: tracking?.left,
    transform: `translateX(calc(-${100}% + ${tracking?.width}px))`,
  };
  return (
    <>
      <motion.div style={styles}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel deserunt
        officia harum quia aspernatur. Praesentium autem incidunt iure
        voluptatibus voluptatum ipsum saepe magni, excepturi maxime, obcaecati
        quibusdam, facilis repellat temporibus.
      </motion.div>
    </>
  );
});
