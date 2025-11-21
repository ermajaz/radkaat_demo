"use client";

import Image from "next/image";

export default function RightButtonGroup({
  open360,
  openTech,
}: {
  open360: () => void;
  openTech: () => void;
}) {
  return (
    <div className="flex flex-col gap-4 w-[120px]">
      {/* 360 Button */}
      <button
        onClick={open360}
        className="w-full h-12 bg-[#4a4a4a]/60 border border-white/20 rounded-sm 
                 flex flex-col items-center justify-center cursor-pointer
                 hover:bg-[#5a5a5a]/70 transition-all duration-300"
      >
        <Image
          src="/icons/360-view.png" // place your 360 rotate icon here
          alt="360 Icon"
          width={25}
          height={25}
          className="opacity-90 mb-1"
        />

        <p className="text-[10px] text-white font-medium">View 360° degree</p>
      </button>

      {/* Technical Spec Button */}
      <button
        onClick={openTech}
        className="w-full h-12 bg-[#4a4a4a]/60 border border-white/20 rounded-sm
                 flex flex-col items-center justify-center cursor-pointer
                 hover:bg-[#5a5a5a]/70 transition-all duration-300"
      >
        <Image
          src="/icons/wrench.png"
          alt="Technical Spec"
          width={25}
          height={25}
          className="opacity-90 mb-1"
        />

        <p className="text-[10px] text-white font-medium">Technical Specification</p>
      </button>
    </div>
  );
}
