"use client";
import Image from "next/image";
import { TestRideRoadmap } from "./TestRideRoadmap";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

export function TestRideHero() {
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
        <p className="mt-2 text-base md:text-lg text-gray-200">
          # No commitment, No catch!
        </p>
        <Button
          onClick={() => router.push("/experience")}
          className="mt-10 px-8 py-5 text-base tracking-wide bg-sandstorm cursor-pointer hover:bg-sandstorm text-white font-semibold rounded-full shadow-lg transition-colors duration-300"
        >
          Live The Experience <ArrowRight />
        </Button>
      </div>

      {/* Roadmap below */}
      <TestRideRoadmap />
    </div>
  );
}
