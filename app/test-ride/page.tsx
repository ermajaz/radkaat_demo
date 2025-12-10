"use client";

import TestRide from "@/features/test-ride/components/TestRide";


export default function TestRidePage() {
  return (
    <div className="h-screen bg-superblack text-white flex items-center justify-center md:px-4 md:py-10 mx-auto md:max-w-[1440px]">
      <TestRide />
    </div>
  );
}
