"use client";
import { motion } from "framer-motion";
import Image from "next/image";

interface Props {
  src: string;
  alt: string;
}

export default function BikeImage({ src, alt }: Props) {
  return (
    <motion.div
      initial={{ y: 200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
      className="w-full h-full mr-24 relative"
    >

      <div className="w-full h-full mt-13 flex items-end justify-center">
        <Image
          quality={100}
          src={src}
          alt={alt}
          width={900}
          height={900}
          priority
          className="object-contain"
        />
      </div>
    </motion.div>
  );
}
