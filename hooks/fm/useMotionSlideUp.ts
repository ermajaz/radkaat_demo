import { Variants } from "motion";

export const useMotionSlideUp = (delay = 0, y = 20): Variants => ({
  hidden: { opacity: 0, y },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: "easeOut" },
  },
});
