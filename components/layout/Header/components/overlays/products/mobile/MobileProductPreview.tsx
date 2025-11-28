"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function MobileProductPreview({
  image,
  title,
}: {
  image: string;
  title: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.45 }}
      className="w-full h-[260px] rounded-xl overflow-hidden relative mb-6"
    >
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />
    </motion.div>
  );
}
