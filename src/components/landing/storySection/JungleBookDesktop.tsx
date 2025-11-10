"use client";

import React from "react";

interface JungleBookDesktopProps {
  destinations: any[];
  activeIndex: number;
  onStoryClick: (index: number) => void;
}

export const JungleBookDesktop: React.FC<JungleBookDesktopProps> = ({
  destinations,
  activeIndex,
  onStoryClick,
}) => {
  return (
    <div className="flex justify-between items-center h-[130px] px-10 bg-[#1A1A1A]">
      {/* Left Section */}
      <div className="flex flex-col w-[350px]">
        <h2 className="text-white text-[48px] font-bold leading-tight">
          THE JUNGLE BOOK
        </h2>
        <p className="text-[#B3B3B3] text-[12px] font-light max-w-full">
          A timeless tale of adventure and discovery, following Mowgli’s journey
          through the wild jungle with his loyal companions.
        </p>
      </div>

      {/* Right Section */}
      <div className="flex gap-10 pr-10 overflow-x-auto hide-scrollbar">
        {destinations.map((story, index) => (
          <div
            key={index}
            onClick={() => onStoryClick(index)}
            className="cursor-pointer max-w-[200px] flex flex-col items-center text-center transition-all duration-300"
          >
            <span
              className={`uppercase text-[12px] font-medium ${
                activeIndex === index ? "text-stone" : "text-gray-300"
              }`}
            >
              {story.title}
            </span>
            <span
              className={`text-[10.5px] font-normal ${
                activeIndex === index ? "text-stone" : "text-gray-400"
              }`}
            >
              {story.date}
            </span>

            {activeIndex === index && (
              <span className="block w-full h-0.5 bg-stone mt-2"></span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
