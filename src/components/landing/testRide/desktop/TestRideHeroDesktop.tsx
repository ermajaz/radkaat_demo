"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { TestRideRoadmapDesktop } from "./TestRideRoadmapDesktop";
import { HoverButton } from "./AnimatedButton";
import { MoveRight } from "lucide-react";

export function TestRideHeroDesktop() {
  const router = useRouter();

  return (
    <div className="relative w-full h-[70vh] md:h-[100vh] flex flex-col items-center justify-center overflow-hidden z-10 bg-superblack">
      <Image
        src="/images/test-ride-img.avif"
        alt="Test Ride"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      {/* Text Block */}
      <div className="inset-0 flex flex-col items-center justify-center text-center text-white p-6 translate-y-[-5%]">
        <h2 className="text-3xl md:text-[48px] font-bold uppercase">
          Don’t Just See It, <span className="text-sandstorm">Ride It</span>
        </h2>
        <span className="mt-2 italic text-[24px] font-semibold md:text-lg mb-5 text-stone">
          # No commitment, No catch!
        </span>

        <HoverButton className="font-semibold !flex whitespace-nowrap !items-center !tracking-[1px] h-[56px] w-[300px] gap-2 !text-[18px]" onClick={() => router.push("/experience")}>
          Live the Experience <MoveRight/>
        </HoverButton>
      </div>

      {/* Roadmap below */}
      <TestRideRoadmapDesktop />
    </div>
  );
}
