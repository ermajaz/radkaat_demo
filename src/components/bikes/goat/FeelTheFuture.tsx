// components/FeelTheFuture.tsx
"use client";

import Image from "next/image";

export default function FeelTheFuture() {
  return (
    <section className="w-full bg-superblack text-white py-20 pl-10">
      <div className="w-full mx-auto flex justify-between items-center">
        {/* Left Section - Text */}
        <div className="max-w-[40%] flex flex-col items-start space-y-3">
          <span className="text-5xl md:text-7xl font-extrabold mb-6 leading-18">
            FEEL THE <br /> FUTURE
          </span>
          <p className="text-[24px] leading-relaxed text-gray-300">
            The Serow is a mountain goat found across the rocky mid-range
            mountains of East India, Taiwan, and the Philippines. Known for
            their sure-footedness, agility, and strength, Serows thrive in tough
            terrains where balance and endurance matter most. Inspired by this
            remarkable creature, the Serow bike is built with a high-end alloy
            frame, combining lightweight agility with rugged durability. Just
            like its namesake, it’s designed to handle steep climbs, sharp
            descents, and unpredictable trails with absolute confidence. Whether
            you’re chasing speed, control, or resilience on challenging tracks,
            the Serow is your nimble partner for the mountains.
          </p>
        </div>

        {/* Right Section - Image */}
        <div className="relative w-[685px] h-[400px] md:h-[500px] lg:h-[641px]">
          <Image quality={100}
            src="/images/bikes/goat-img.png" // replace with your image path
            alt="Serow Bike with Mountain Goat"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
