"use client";

import { ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

interface ParallaxWrapperProps {
  children: ReactNode;
}

const ParallaxWrapper: React.FC<ParallaxWrapperProps> = ({ children }) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 0]); // adjust speed

  return (
    <div className="relative w-full">
      {/* Parallax Background */}
      <motion.div
        style={{ y }}
        className="fixed w-[calc(100vw-96px)] mx-auto inset-0 z-0 pointer-events-none"
      >
        <Image
          src="/images/contour.png"
          alt="contour background"
          fill
          priority
          className="object-cover w-full h-full"
        />
      </motion.div>

      {/* Foreground content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default ParallaxWrapper;
