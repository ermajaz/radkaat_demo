"use client";

import { steps } from "@/utils/ride";
import RideStepMobile from "./RideStepMobile";

export default function RideStepsMobile() {
  return (
    <div className="w-full py-10 flex flex-col gap-8 items-center">
      {steps?.map((step, i) => (
        <RideStepMobile key={i} step={step} index={i} />
      ))}
    </div>
  );
}
