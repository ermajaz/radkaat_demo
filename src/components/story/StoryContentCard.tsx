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
      <h3 className="text-sandstorm text-2xl font-bold">{content.title}</h3>

      {/* User Experience */}
      <p className="text-white text-base">{content.user_experience}</p>

      {/* Horizontal line */}
      <hr className="border-gray-600 my-4" />

      {/* Author Info */}
      <div className="flex items-center gap-3">
        <Image
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
