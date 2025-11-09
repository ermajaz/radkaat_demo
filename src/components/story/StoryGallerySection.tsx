"use client";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

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
    <div className="w-full p-6 pt-0">
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((img, i) => (
          <div key={i} className="relative w-full h-[180px] md:h-[220px]">
            <Image
              quality={100}
              src={img}
              alt={`Gallery image ${i + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
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
