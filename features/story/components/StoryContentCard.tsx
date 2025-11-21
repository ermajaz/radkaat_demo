"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

interface Props {
  content: {
    title: string;
    user_experience: string;
    author: string;
    date: string;
    author_img: string;
  };
}

export const StoryContentCard: React.FC<Props> = ({
  content,
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
          className="text-xl md:text-3xl font-bold text-stone-100 leading-snug
            sm:text-2xl md:leading-tight"
        >
          {content.title}
        </motion.h2>

        {/* User Experience */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="
            text-stone-300 
            text-[15px] sm:text-[16px] md:text-[18px]
            leading-7 sm:leading-[30px] md:leading-8
            tracking-[0.2px]
            md:pr-0 pr-1
          "
        >
          {content.user_experience}
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.25 }}
          className="origin-left border-t border-neutral-700 my-3 md:my-4"
        />

        {/* Author Info */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="
            flex items-center gap-3 sm:gap-4 
            bg-[#1A1A1A]/60 backdrop-blur-md p-3 sm:p-4 rounded-xl md:rounded-none
            border border-stone-700/40 shadow-[0_4px_20px_rgba(0,0,0,0.2)]
            transition-all duration-500 hover:bg-[#1A1A1A]/80
          "
        >
          <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden">
            <Image
              quality={100}
              src={content.author_img}
              alt={content.author}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col">
            <p className="text-white font-semibold text-[15px] sm:text-[16px] leading-tight">
              {content.author}
            </p>
            <p className="text-gray-400 text-[13px] sm:text-[14px]">{content.date}</p>
          </div>
        </motion.div>

      </div>
    </motion.section>
  );
};
