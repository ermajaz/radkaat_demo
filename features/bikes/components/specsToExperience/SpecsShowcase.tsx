"use client";

import React, { forwardRef, useImperativeHandle, useRef, useMemo } from "react";
import Image from "next/image";

export type SpecsImage = { src: string; label: string; isText?: boolean };

export type SpecsShowcaseHandle = {
  getImageEls: () => HTMLElement[];
  getPositions: () => { x: number; y: number }[];
};

type Props = {
  images: SpecsImage[];
};

const SpecsShowcase = forwardRef<SpecsShowcaseHandle, Props>(
  function SpecsShowcase({ images }, ref) {
    const containerRef = useRef<HTMLDivElement>(null);

    // Absolute pixel positions tuned to match screenshot layout
    const positions = useMemo<{ x: number; y: number }[]>(() => {
      return [
        { x: 16, y: -115 }, // text block (left side)
        { x: 0, y: 124 }, // top center frame
        { x: -8, y: -88 }, // top right lifestyle image
        { x: 10, y: -295 }, // bottom left frame
        { x: 75, y: -235 }, // bottom center frame
      ];
    }, []);

    useImperativeHandle(
      ref,
      () => ({
        getImageEls: () =>
          Array.from(
            containerRef.current?.querySelectorAll<HTMLElement>(
              ".specs-image"
            ) ?? []
          ),
        getPositions: () => positions,
      }),
      [positions]
    );

    return (
      <div
        ref={containerRef}
        className="relative h-[calc(100vh-70px)] flex items-center justify-center overflow-hidden"
      >
        {images.map((img, i) => (
          <div
            key={i}
            className="absolute flex flex-col items-center specs-image will-change-transform"
            style={{
              width: img.isText ? 300 : "auto",
              maxWidth: img.isText ? 320 : undefined,
            }}
          >
            {img.isText ? (
              <div className="bg-yellow-200 text-black p-4 rounded-md leading-relaxed text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </div>
            ) : (
              <>
                <span className="mb-2 uppercase text-xs md:text-sm opacity-80">
                  {img.label}
                </span>
                <Image
                  src={img.src}
                  alt={img.label}
                  width={220}
                  height={220}
                  className="object-contain rounded-md"
                  draggable={false}
                  priority={i === 0}
                />
              </>
            )}
          </div>
        ))}
      </div>
    );
  }
);

export default SpecsShowcase;
