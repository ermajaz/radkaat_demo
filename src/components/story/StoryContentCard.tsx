"use client";

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
    <div className="w-full p-6 pt-0 shadow-lg flex flex-col gap-4">
      {/* Title */}
      <span className="text-stone text-[24px] font-bold">{content.title}</span>

      {/* User Experience */}
      <p className="text-white text-[18px] font-medium leading-[33px]">{content.user_experience}</p>

      {/* Horizontal line */}
      <hr className="border-gray-600 my-4" />

      {/* Author Info */}
      <div className="flex items-center gap-3">
        <Image quality={100}
          src={content.author_img}
          alt={content.author}
          width={48}
          height={48}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <p className="text-white font-semibold">{content.author}</p>
          <p className="text-gray-400 text-sm">{content.date}</p>
        </div>
      </div>

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
};
