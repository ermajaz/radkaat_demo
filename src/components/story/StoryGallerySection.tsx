"use client";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function StoryGallerySection({
  title,
  images,
  homepageLink = "/",
  nextTourName = "Next Tour",
  onNextTourClick,
}: {
  title: string;
  images: string[];

  homepageLink?: string;
  nextTourName?: string;
  onNextTourClick?: () => void;
}) {
  return (
    <div className="w-full">
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
      <div className="flex-1 overflow-y-auto touch-scroll">
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
      {/* Horizontal line */}
      <hr className="border-gray-600 my-4" />

      {/* Bottom Navigation */}
      <div className="w-full flex justify-between mt-6">
        <Link
          href={homepageLink}
          className="flex items-center gap-2 cursor-pointer text-white font-medium hover:text-sandstorm"
        >
          <ArrowLeft size={18} />
          Homepage
        </Link>
        <button
          onClick={onNextTourClick}
          className="flex items-center gap-2 cursor-pointer text-white font-medium hover:text-sandstorm"
        >
          {nextTourName}
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}
