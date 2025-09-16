"use client";

import React from "react";

interface VideoBlockProps {
  videoId: string; // e.g. "DouE0cCivN4"
  title?: string;
}

export default function VideoBlock({ videoId, title }: VideoBlockProps) {
  return (
    <section className="w-full">
      <div className="max-w-6xl mx-auto px-4">
        <div className="relative w-full" style={{ aspectRatio: "16 / 9" }}>
          <iframe
            src={`https://www.youtube.com/embed/ReSbSrrYyOk?si=kfUVZaw1s0S64QDS`}
            title={title || "YouTube Video"}
            className="absolute inset-0 w-full h-full shadow-lg"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}