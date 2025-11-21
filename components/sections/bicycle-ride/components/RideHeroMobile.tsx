"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import { useRouter } from "next/navigation";
import RideStepsMobile from "./RideStepsMobile";

export default function RideHeroMobile() {
  const router = useRouter();

  return (
    <div className="relative w-full h-[80vh] flex flex-col items-center justify-end pb-14 overflow-hidden">
      <Image
        src="/images/test-ride.jpg"
        fill
        quality={100}
        priority
        className="object-cover"
        alt="Bicycle Ride"
      />

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 text-center px-6 text-white">
        <h2 className="text-[32px] font-bold uppercase leading-tight">
          Ride With <span className="text-sandstorm">Purpose</span>
        </h2>

        <p className="text-[16px] mt-2 text-stone italic">
          Discover the Radkaat feeling.
        </p>

        <Button
          className="mt-5 bg-sandstorm text-black text-[16px] h-12 rounded-none w-full max-w-[260px]"
          onClick={() => router.push("/ride")}
        >
          Start Riding <MoveRight size={18} />
        </Button>
      </div>
      <RideStepsMobile />
    </div>
  );
}
