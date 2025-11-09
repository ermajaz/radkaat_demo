"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  content: {
    title: string;
    user_experience: string;
    author: string;
    date: string;
    author_img: string;
  };
  homepageLink?: string;
  nextTourName?: string;
  onNextTourClick?: () => void;
}

export const StoryContentCard: React.FC<Props> = ({
  content,
  homepageLink = "/",
  nextTourName = "Next Tour",
  onNextTourClick,
}) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative w-full overflow-hidden"
    >
      <div className="relative z-10 flex flex-col gap-6">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl md:text-3xl font-bold text-stone"
        >
          {content.title}
        </motion.h2>

        {/* User Experience */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="text-stone text-[16px] md:text-[18px] leading-[32px] tracking-[0.2px]"
        >
          {content.user_experience}
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.25 }}
          className="origin-left border-t border-neutral-700 my-2"
        />

        {/* Author Info */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex items-center gap-4"
        >
          <div className="relative w-14 h-14 rounded-full overflow-hidden">
            <Image
              quality={100}
              src={content.author_img}
              alt={content.author}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-white font-semibold text-[16px]">{content.author}</p>
            <p className="text-gray-400 text-[14px]">{content.date}</p>
          </div>
        </motion.div>

        {/* Bottom Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="w-full flex justify-between items-center mt-6"
        >
          <Link
            href={homepageLink}
            className="flex items-center gap-2 cursor-pointer text-white font-medium hover:text-[#E4D27C] transition-colors duration-300"
          >
            <ArrowLeft size={18} />
            Homepage
          </Link>

          <button
            onClick={onNextTourClick}
            className="flex items-center gap-2 cursor-pointer text-white font-medium hover:text-[#E4D27C] transition-colors duration-300"
          >
            {nextTourName}
            <ArrowRight size={18} />
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
};
