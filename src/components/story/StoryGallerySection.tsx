"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { X } from "lucide-react";

export default function StoryGallerySection({
  title,
  images,
}: {
  title: string;
  images: string[];
}) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="w-full text-white">
      {/* Section Header */}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-xl md:text-3xl font-bold mb-8 tracking-tight"
      >
        {title}
      </motion.h2>

      {/* Masonry Grid (Same for all devices, smaller for mobile) */}
      <div className="flex-1 overflow-y-auto touch-scroll">
        <div
          className="
            columns-2 sm:columns-3 md:columns-4 
            gap-3 sm:gap-4 space-y-3 sm:space-y-4
            px-1 sm:px-0
          "
        >
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="
                relative mb-3 sm:mb-4 break-inside-avoid overflow-hidden group 
                rounded-xl md:rounded-none cursor-pointer
                hover:shadow-[0_0_25px_rgba(228,210,124,0.15)]
                transition-all duration-500
              "
              style={{
                height: `${150 + (idx % 3) * 70}px`, // smaller for mobile
              }}
              onClick={() => setSelectedImage(img)}
            >
              <Image
                src={img}
                alt={`Gallery image ${idx + 1}`}
                fill
                quality={100}
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/90 z-999 flex items-center justify-center p-4 backdrop-blur-md"
          >
            {/* Image Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="relative w-full max-w-3xl aspect-4/3 sm:aspect-videorounded-xl overflow-hidden shadow-[0_0_40px_rgba(228,210,124,0.2)]"
            >
              <Image
                src={selectedImage}
                alt="Selected tour image"
                fill
                className="object-contain"
                quality={100}
                priority
              />
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-3 right-3 bg-black/50 hover:bg-black/70 p-2 rounded-full transition-all duration-300"
              >
                <X className="text-white" size={22} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
