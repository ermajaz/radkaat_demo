"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { TestRideRoadmapDesktop } from "./TestRideRoadmapDesktop";
import { HoverButton } from "./AnimatedButton";
import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function TestRideHeroDesktop() {
  const router = useRouter();

  return (
    <div className="relative w-full h-[70vh] md:h-[600px] flex flex-col items-center justify-center overflow-hidden z-10 bg-superblack">
      <Image quality={100}
        src="/images/test-ride-img.jpg"
        alt="Test Ride"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

      {/* Text Block */}
      <div className="inset-0 flex flex-col items-center justify-center text-center text-white p-6 translate-y-[-5%]">
        <h2 className="text-[48px] font-bold uppercase">
          Don’t Just See It, <span className="text-sandstorm">Ride It</span>
        </h2>
        <span className="italic text-[24px] font-semibold mb-5 text-stone">
          # No commitment, No catch!
        </span>

        <Button
          className="bg-sandstorm whitespace-nowrap rounded-none h-[56px] cursor-pointer !px-4 gap-2 text-superblack font-semibold uppercase text-[18px]"
          onClick={() => router.push("/experience")}
        >
          Live the Experience <MoveRight />
        </Button>
      </div>

      {/* Roadmap below */}
      <TestRideRoadmapDesktop />
    </div>
  );
}
