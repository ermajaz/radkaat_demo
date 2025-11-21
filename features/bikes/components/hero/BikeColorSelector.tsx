"use client";

import { useState } from "react";

interface Props {
  colors: string[];
}

export default function BikeColorSelector({ colors }: Props) {
  const [selected, setSelected] = useState(colors[0]);

  return (
    <div className="flex items-center space-x-1 bg-white rounded-full px-[5px] py-[5px]">
      {colors.map((c) => {
        const isSelected = selected === c;
        return (
          <button
            key={c}
            onClick={() => setSelected(c)}
            className={`flex items-center justify-center cursor-pointer rounded-full transition-all`}
          >
            {/* Outer circle for selected state */}
            <div
              className={`flex items-center justify-center rounded-full p-[1.5px] ${
                isSelected ? "bg-black" : "bg-transparent"
              }`}
            >
              {/* Inner color ball */}
              <div
                className="w-4.5 h-4.5 rounded-full border"
                style={{ backgroundColor: c }}
              />
            </div>
          </button>
        );
      })}
    </div>
  );
}
