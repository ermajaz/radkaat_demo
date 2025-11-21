"use client";

import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef,
} from "react";
import Image from "next/image";

export type ExperienceHighlightsHandle = {
  getTrackEl: () => HTMLElement | null;
  getScrollableWidth: () => number;
  refreshMetrics: () => void;
};

type Props = {
  images: string[];
};

const ExperienceHighlights = forwardRef<ExperienceHighlightsHandle, Props>(
  function ExperienceHighlights({ images }, ref) {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);

    const getScrollableWidth = useCallback(() => {
      const w = wrapperRef.current?.offsetWidth ?? 0;
      const scrollW = trackRef.current?.scrollWidth ?? 0;
      return Math.max(0, scrollW - w);
    }, []);

    const refreshMetrics = useCallback(() => {
      // Force reflow read in case of font/image load
      void wrapperRef.current?.offsetWidth;
    }, []);

    useImperativeHandle(
      ref,
      () => ({
        getTrackEl: () => trackRef.current,
        getScrollableWidth,
        refreshMetrics,
      }),
      [getScrollableWidth, refreshMetrics]
    );

    const cardSize = useMemo(() => ({ width: 800, height: 500 }), []);

    return (
      <section
        ref={wrapperRef}
        className="w-full h-[calc(100vh-70px)] bg-superblack text-stone overflow-hidden"
      >
        <div className="w-full max-w-[1400px] mx-auto px-2 sm:px-6">
          <span className="text-[28px] md:text-[32px] font-bold">
            Get the Highlights
          </span>
        </div>

        {/* Track */}
        <div
          ref={trackRef}
          className="flex space-x-6 mt-5 pl-4 pr-4 select-none will-change-transform"
        >
          {images.map((src, i) => (
            <div
              key={i}
              className="shrink-0 relative overflow-hidden border border-gray-800 bg-black/20"
              style={{ width: cardSize.width, height: cardSize.height }}
            >
              <Image
                src={src}
                alt={`Highlight ${i + 1}`}
                width={cardSize.width}
                height={cardSize.height}
                quality={90}
                className="object-cover w-full h-full"
                draggable={false}
                priority={i === 0}
              />
            </div>
          ))}
        </div>
      </section>
    );
  }
);

export default ExperienceHighlights;
