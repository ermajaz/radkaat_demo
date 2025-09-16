"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import TestRideRoadmapMobile from "./TestRideRoadmapMobile";

export default function TestRideHeroMobile() {
  const router = useRouter();
  const heroRef = useRef<HTMLDivElement | null>(null);
  const [roadmapVisible, setRoadmapVisible] = useState(false);

  // Trigger roadmap when hero enters viewport
  useEffect(() => {
    if (!heroRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setRoadmapVisible(true);
          }
        });
      },
      { threshold: 0.1 } // 10% visible triggers animation
    );

    observer.observe(heroRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative w-full min-h-screen h-screen bg-black text-white overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/test-ride-img.avif"
          alt="Test Ride Background"
          fill
          priority
          className="object-cover object-[25%_center]"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Header */}
      <header className="px-4 pt-safe pb-2 pt-10 relative z-40">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-extrabold leading-tight">
              Don’t Just See It
            </h1>
            <p className="text-sandstorm text-xl mt-2 font-semibold">Ride It</p>
          </div>
          <div className="opacity-90">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-xs">
              <Image
                src="/images/website-logo.png"
                alt="Radkaat Logo"
                width={24}
                height={24}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="px-4 mt-6 relative z-20">
        <p className="text-sm text-white/80 max-w-md">
          # No commitment, No catch — quick test rides near you. Tap below to explore the step-by-step experience.
        </p>

        <div className="mt-6">
          <Button
            onClick={() => router.push("/experience")}
            className="rounded-full px-5 py-3 bg-sandstorm hover:bg-sandstorm text-sm font-semibold inline-flex items-center gap-2 shadow-lg"
          >
            Live The Experience <ArrowRight size={16} />
          </Button>
        </div>
      </main>

      {/* Roadmap Overlay */}
      {roadmapVisible && (
        <div className="absolute inset-x-0 bottom-0 z-30">
          {/* Black gradient background */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent pointer-events-none" />

          {/* Roadmap container */}
          <div className="relative z-40 px-4 py-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-base font-bold">Test Ride Roadmap</h3>
                <p className="text-xs text-white/60">
                  Step-by-step — how the experience flows
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-white/60">Follow Steps</span>
                <div className="w-8 h-8 rounded-lg bg-white/6 flex items-center justify-center">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="opacity-80"
                  >
                    <path
                      d="M8 5l8 7-8 7"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Roadmap */}
            <TestRideRoadmapMobile runAnimation={roadmapVisible} />
          </div>
        </div>
      )}
    </div>
  );
}
