import { Variants } from "motion";

export const useMotionScaleIn = (delay = 0, duration = 0.6): Variants => ({
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { delay, duration, ease: "easeOut" },
  },
});
