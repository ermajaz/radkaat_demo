"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { TestRideRoadmapDesktop } from "./TestRideRoadmapDesktop";
import { HoverButton } from "./AnimatedButton";

export function TestRideHeroDesktop() {
  const router = useRouter();

  return (
    <div className="relative w-full h-[70vh] md:h-[100vh] overflow-hidden">
      <Image
        src="/images/test-ride-img.avif"
        alt="Test Ride"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      {/* Text Block */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-6 translate-y-[-5%]">
        <h2 className="text-3xl md:text-5xl font-extrabold uppercase">
          Don’t Just See It, <span className="text-sandstorm">Ride It</span>
        </h2>
        <p className="mt-2 text-base md:text-lg mb-5 text-gray-200">
          # No commitment, No catch!
        </p>

        <h2>
          <HoverButton onClick={() => router.push("/experience")}>
            Live the Experience
          </HoverButton>
        </h2>
      </div>

      {/* Roadmap below */}
      <TestRideRoadmapDesktop />
    </div>
  );
}
