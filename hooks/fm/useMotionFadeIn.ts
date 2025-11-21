import { Variants } from "framer-motion";

export const useMotionFadeIn = (delay = 0, duration = 0.6): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delay, duration, ease: "easeOut" },
  },
});
