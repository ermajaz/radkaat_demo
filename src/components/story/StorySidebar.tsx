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
      <h2 className="text-white text-xl font-bold mb-4">Contents</h2>
      {contents.map((c, i) => (
        <button
          key={i}
          onClick={() => onSelect(i)}
          className={`text-left px-3 cursor-pointer py-2 rounded-md w-full transition-all ${
            activeIndex === i ? "bg-sandstorm text-black font-semibold" : "text-white hover:bg-gray-800"
          }`}
        >
          {c.title}
        </button>
      ))}
    </div>
  );
};
