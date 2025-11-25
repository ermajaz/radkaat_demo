"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import RideStepsMobile from "./RideStepsMobile";
import WaterDropButton from "./WaterDropButton";

export default function RideHeroMobile() {
  const router = useRouter();

  return (
    <section className="relative w-full flex flex-col items-center justify-start bg-superblack overflow-hidden h-[75vh]">

      {/* ✅ Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/test-ride.jpg"
          alt="Test Ride"
          fill
          priority
          quality={100}
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* ✅ Content */}
      <div className="relative z-10 flex flex-col justify-start items-center text-center px-6 pt-16">
        <p className="text-5xl font-extrabold leading-tight text-white">
          Don’t Just See
          <span className="text-sandstorm"> Ride It</span>
        </p>

        <WaterDropButton
          label="Book Test Ride"
          onClick={() => router.push("/test-ride")}
          className="mt-6"
        />
      </div>

      {/* ✅ Steps (no scroll, full visible) */}
      <RideStepsMobile />
    </section>
  );
}
