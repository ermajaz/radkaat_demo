"use client";

import React from "react";

interface Props {
  contents: { title: string }[];
  activeIndex: number;
  onSelect: (index: number) => void;
}

export const StorySidebar: React.FC<Props> = ({ contents, activeIndex, onSelect }) => {
  return (
    <div className="w-[350px] border-r border-gray-700 p-5 flex flex-col gap-4">
      <span className="text-white text-[16px] font-bold mb-2">Contents</span>
      {contents.map((c, i) => (
        <button
          key={i}
          onClick={() => onSelect(i)}
          className={`text-left px-3 h-[42px] cursor-pointer py-2 text-stone font-semibold text-[14px] rounded-[4px] w-full transition-all ${
            activeIndex === i ? "bg-[#1A1A1A] font-semibold" : "hover:bg-[#1A1A1A]"
          }`}
        >
          {c.title}
        </button>
      ))}
    </div>
  );
};
