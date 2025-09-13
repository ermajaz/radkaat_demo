"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { TestRideRoadmapDesktop } from "./TestRideRoadmapDesktop";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

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

        {/* HoverGradient Button */}
        <HoverBorderGradient
          containerClassName="rounded-full overflow-hidden relative"
          as="button"
          className="bg-white dark:bg-black text-black dark:text-white relative flex items-center space-x-2 px-6 py-2 text-lg font-semibold tracking-wider cursor-pointer
            before:absolute before:inset-0 before:left-[-100%] before:bg-gradient-to-r before:from-sandstorm before:to-sandstorm-1
            before:z-0 before:transition-all before:duration-500 hover:before:left-0"
          onClick={() => router.push("/experience")}
        >
          <AceternityLogo />
          <span className="relative z-10">Live the Experience</span>
        </HoverBorderGradient>
      </div>

      {/* Roadmap below */}
      <TestRideRoadmapDesktop />
    </div>
  );
}

const AceternityLogo = () => {
  return (
    <svg
      width="66"
      height="65"
      viewBox="0 0 66 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4 text-black dark:text-white relative z-10"
    >
      <path
        d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
        stroke="currentColor"
        strokeWidth="15"
        strokeMiterlimit="3.86874"
        strokeLinecap="round"
      />
    </svg>
  );
};
