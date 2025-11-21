"use client";

import Image from "next/image";

type HighlightsProps = {
  images: string[];
};

export default function Highlights({ images }: HighlightsProps) {
  return (
    <section className="w-full bg-superblack text-stone px-10">
      <div className="w-full mx-auto">
        {/* Heading */}
        <span className="text-[32px] font-bold">
          Get the Highlights
        </span>

        {/* Scrollable Images */}
        <div className="flex space-x-6 mt-5 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent pb-4">
          {images.map((src, i) => (
            <div
              key={i}
              className="shrink-0 w-[800px] h-[500px] relative overflow-hidden border border-gray-800"
            >
              <Image
                src={src}
                alt={`Highlight ${i + 1}`}
                width={800}
                height={500}
                quality={100}
                className="object-cover w-[800px] h-[500px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
