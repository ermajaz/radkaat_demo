"use client";

import Image from "next/image";
import { collaborationsData } from "../utils/collaborations-data";

export default function LeftPanel() {
  return (
    <div className="w-[65%] h-full relative bg-superblack flex items-center justify-center">
      {/* Background abstract shape */}
      <Image
        src={collaborationsData.shape}
        alt="abstract shape"
        width={410}
        height={500}
        className="absolute left-24 top-24 opacity-80 object-contain"
      />

      {/* Title */}
      <span className="relative z-10 ml-10 mb-40 text-white text-5xl tracking-wider font-semibold">
        {collaborationsData.title}
      </span>

      {/* Curved arrow */}
      <Image
        src={collaborationsData.arrow}
        alt="arrow"
        width={300}
        height={300}
        className="absolute left-[65%] top-[45%]"
      />
    </div>
  );
}
