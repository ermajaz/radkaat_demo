"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Tour } from "@/features/story/types/story.types";

export default function CardImageMobile({ destination }: { destination: Tour }) {
  const title = destination?.title;
  const subtitle = destination?.subtitle;

  return (
    <div className="relative w-full h-[380px] rounded-3xl overflow-hidden shadow-xl">

      {/* BG Image */}
      <Image
        src={destination.leftImage}
        alt={title}
        fill
        quality={100}
        className="object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/60 to-black/10" />

      {/* CONTENT CONTAINER WITH SPACE-BETWEEN */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="
          absolute inset-0 
          flex flex-col justify-between 
          px-5 py-5
        "
      >
        {/* TOP SECTION - TITLE + SUBTITLE */}
        <div className="flex flex-col gap-1 pt-2">
          <h1 className="text-[24px] font-extrabold text-white leading-tight tracking-wide">
            {title}
          </h1>

          <p className="italic text-sandstorm text-[11px] opacity-90 leading-tight">
            “{subtitle}”
          </p>
        </div>

        {/* MIDDLE - DETAILS GRID */}
        <div className="grid grid-cols-2 gap-y-2 gap-x-3 mt-2">
          {destination?.rightPanelDetails?.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="flex items-start gap-2 pr-2" // more space for long texts
              >
                <Icon size={15} className="text-sandstorm shrink-0 mt-0.5" />
                <span
                  className="
                    text-white/90 text-[11px] font-medium leading-tight
                    wrap-break-word
                  "
                >
                  {item.text}
                </span>
              </div>
            );
          })}
        </div>

        {/* CTA BUTTON */}
        <button
          onClick={() => window.open(destination.link, "_blank")}
          className="
            w-full h-10 rounded-full 
            bg-[radial-gradient(circle,rgba(255,204,102,0.10)_30%,rgba(255,204,102,0.20)_100%)]
            border border-sandstorm/60 
            text-white text-xs font-semibold tracking-wide
            active:scale-95 transition-all mt-3
          "
        >
          VIEW & BOOK
        </button>
      </motion.div>
    </div>
  );
}
