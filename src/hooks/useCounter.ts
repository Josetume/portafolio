import { useEffect } from "react";
import { animate, useMotionValue, useTransform } from "framer-motion";

export const useCounter = (from: number, to: number, duration = 1) => {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (value) => Math.floor(value));

  useEffect(() => {
    const controls = animate(count, to, {
      duration,
      ease: "easeOut",
    });

    return controls.stop;
  }, [to]);

  return rounded;
};
