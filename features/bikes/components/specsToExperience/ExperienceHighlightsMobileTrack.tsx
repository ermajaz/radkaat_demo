"use client";

import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";
import Image from "next/image";

export type ExperienceHighlightsMobileHandle = {
  getTrackEl: () => HTMLElement | null;
  getScrollableWidth: () => number;
  refreshMetrics: () => void;
};

const ExperienceHighlightsMobileTrack = forwardRef<
  ExperienceHighlightsMobileHandle,
  { images: string[] }
>(function ExperienceHighlightsMobileTrack({ images }, ref) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const getScrollableWidth = useCallback(() => {
    const w = wrapperRef.current?.offsetWidth ?? 0;
    const sw = trackRef.current?.scrollWidth ?? 0;
    return Math.max(0, sw - w);
  }, []);

  const refreshMetrics = useCallback(() => {
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

  return (
    <div
      ref={wrapperRef}
      className="w-full h-[65vh] overflow-hidden relative"
    >
      <div
        ref={trackRef}
        className="flex gap-4 will-change-transform pl-2 pr-2"
      >
        {images.map((src, i) => (
          <div
            key={i}
            className="
              shrink-0 relative overflow-hidden 
              rounded-xl bg-black border border-white/10
              w-[88vw] h-[60vh]
            "
          >
            <Image
              src={src}
              fill
              alt={`highlight-${i}`}
              className="object-cover"
              quality={95}
            />
          </div>
        ))}
      </div>
    </div>
  );
});

export default ExperienceHighlightsMobileTrack;
