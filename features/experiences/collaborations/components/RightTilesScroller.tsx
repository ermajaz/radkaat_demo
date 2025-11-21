"use client";

import React, { forwardRef } from "react";
import Image from "next/image";
import { collaborationsData } from "../utils/collaborations-data";

const RightTilesScroller = forwardRef<HTMLDivElement>(function RightTilesScroller(_, ref) {
  return (
    <div
      ref={ref}
      className="relative w-[35%] h-screen px-6 flex items-start overflow-hidden"
    >
      {/* BENTON GRID */}
      <div className="tiles-inner grid grid-cols-2 gap-6 -mt-20 pb-20">
        {collaborationsData.brands.map((b, index) => (
          <div
            key={b.id}
            className={`
              rounded-xl flex items-center justify-center transition-transform
            `}
            style={{
              backgroundColor: b.bg,
              height: "220px",
              width: "220px",
              transform: `
                translateY(${
                  // APPLY BENTON GRID OFFSET
                  index % 2 === 1
                    ? "110px"               // tile 2, 6, 10... moves DOWN
                    : index % 4 === 2
                    ? "0"              // tile 3, 7, 11... moves UP
                    : "0px"
                })
              `,
            }}
          >
            <Image
              src={b.image}
              alt={b.id}
              width={140}
              height={140}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
});

export default RightTilesScroller;
