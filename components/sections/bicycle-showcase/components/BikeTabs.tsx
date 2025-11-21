"use client";

import React from "react";
import Image from "next/image";
import { Bike } from "../utils/bicycle-showcase";

export default function BikeTabs({
  bikes,
  activeBikeId,
  setActiveBikeId,
  setActiveSpecKey,
}: {
  bikes: Bike[];
  activeBikeId: string;
  setActiveBikeId: (id: string) => void;
  setActiveSpecKey: (key: string) => void;
}) {
  return (
    <div className="w-fit">
      {/* Tabs Row */}
      <div className="flex items-center justify-start gap-8 py-0 relative">
        {bikes.map((b) => {
          const active = b.id === activeBikeId;

          return (
            <div key={b.id} className="relative pb-2">
              <button
                onClick={() => {
                  setActiveBikeId(b.id);
                  setActiveSpecKey(b.specs[0].key);
                }}
                className="group flex items-center gap-1 cursor-pointer focus:outline-none"
              >
                {/* Icon */}
                <Image
                  src={b.logo}
                  alt={b.uiName}
                  width={22}
                  height={22}
                  className={`transition-all duration-300 ${
                    active
                      ? "opacity-100"
                      : "opacity-40 group-hover:opacity-70"
                  }`}
                />

                {/* Label */}
                <span
                  className={`uppercase font-semibold tracking-wider text-[24px] transition-all duration-300 ${
                    active
                      ? "text-white"
                      : "text-white/40 group-hover:text-white/70"
                  }`}
                >
                  {b.uiName}
                </span>
              </button>

              {/* ACTIVE UNDERLINE */}
              <div
                className={`absolute left-0 bottom-0 h-0.5 ${
                  active ? "w-full bg-white" : "w-0 bg-transparent"
                }`}
              />
            </div>
          );
        })}
      </div>

      {/* Big bottom line (full width) */}
      <div className="w-full h-0.5 bg-white/10" />
    </div>
  );
}
