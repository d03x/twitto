"use client";
import React, { useLayoutEffect, useState } from "react";
interface IUseTrackPosition {
    buttonRef: React.RefObject<HTMLButtonElement>;
    trackScroll?: boolean;
}
const useTrackPosition = ({ buttonRef, trackScroll }: IUseTrackPosition) => {
    const [buttonBoundaries, setButtonBoundaries] = useState<DOMRect | null>(
        buttonRef?.current?.getBoundingClientRect()
    );
    useLayoutEffect(() => {
        const handleResize = () => {
            if (buttonRef?.current) {
                setButtonBoundaries(buttonRef?.current?.getBoundingClientRect());
            }
        };
        window.addEventListener("resize", handleResize);
        if (trackScroll) {
            window.addEventListener("scroll", handleResize);
        }
        return () => {
            window.removeEventListener("resize", handleResize);
            if (trackScroll) {
                window.removeEventListener("scroll", handleResize);
            }
        }
    }, [
        buttonRef,
        setButtonBoundaries,
        buttonRef,
        buttonRef.current?.getBoundingClientRect,
    ]);
    return buttonBoundaries;
};
export default useTrackPosition;
