"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import RideStepsDesktop from "./RideStepsDesktop";

export default function RideHeroDesktop() {
  const router = useRouter();

  return (
    <div className="relative w-full flex flex-col pt-10 pb-10 items-center justify-center overflow-hidden z-10 bg-superblack">
      {/* Background */}
      <Image
        src="/images/test-ride.jpg"
        alt="Test Ride"
        fill
        priority
        quality={100}
        className="object-cover"
        style={{
          scale: 1.5,
          objectPosition: "center 40%"
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Text Block */}
      <div className="z-10 flex flex-col items-center justify-center text-center text-white p-6 pt-0">
        <h2 className="text-[48px] font-bold uppercase">
          Don’t Just See It, <span className="text-sandstorm">Ride It</span>
        </h2>

        <span className="italic text-[24px] font-semibold mb-5 text-stone">
          # No commitment, No catch!
        </span>

        <Button
          className="bg-sandstorm whitespace-nowrap rounded-none h-14 cursor-pointer px-5 gap-2 text-superblack font-semibold uppercase text-[18px]"
          onClick={() => router.push("/test-ride")}
        >
          Live the Experience <MoveRight />
        </Button>
      </div>
      <RideStepsDesktop />
    </div>
  );
}
