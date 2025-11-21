"use client";
import { motion } from "framer-motion";

interface Props {
  text: string;
}

export default function BikeBranding({ text }: Props) {
  return (
    <motion.div
      initial={{ x: -200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="hidden absolute top-1/2 -translate-y-[45%] left-10 lg:flex flex-col items-center justify-center h-full"
    >
      {text.split("").map((char, i) => (
        <h2
          key={i}
          className="text-[80px] font-extrabold tracking-widest leading-30 text-white"
        >
          {char}
        </h2>
      ))}
    </motion.div>
  );
}
