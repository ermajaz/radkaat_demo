"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";

interface TourGalleryProps {
  title: string;
  images: string[];
  open: boolean;
  onClose: () => void;
}

export const TourGallery: React.FC<TourGalleryProps> = ({
  title,
  images,
  open,
  onClose,
}) => {
  useEffect(() => {
    if (open) {
      // Save current scroll position
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.overflow = "hidden";

      return () => {
        // Restore scroll position on close
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.left = "";
        document.body.style.right = "";
        document.body.style.overflow = "";
        window.scrollTo(0, scrollY);
      };
    }
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed px-10 inset-0 z-50 bg-black bg-opacity-95 flex flex-col"
        >
          {/* Sticky Header */}
          <div className="flex justify-between py-4 items-center sticky top-0 bg-black z-20 border-b border-gray-700">
            <span className="text-2xl md:text-[32px] text-white font-bold uppercase">
              {title}
            </span>
            <button
              onClick={onClose}
              className="text-white cursor-pointer hover:text-rust"
            >
              <X size={28} />
            </button>
          </div>

          {/* Scrollable Benton/Masonry Grid */}
          <div className="flex-1 overflow-y-auto py-10 touch-scroll">
            <div className="columns-2 sm:columns-3 md:columns-4 gap-4 space-y-4">
              {images.map((img, idx) => (
                <div
                  key={idx}
                  className="relative mb-4 break-inside-avoid overflow-hidden group"
                  style={{ height: `${200 + (idx % 3) * 80}px` }} // variable heights for Benton
                >
                  <Image quality={100}
                    src={img}
                    alt={`Tour image ${idx + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
