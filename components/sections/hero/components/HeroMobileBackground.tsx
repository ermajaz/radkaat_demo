"use client";

export default function HeroMobileBackground() {
  return (
    <div
      className="absolute inset-0"
      style={{
        background:
          "radial-gradient(60% 60% at 50% 40%, rgba(120,120,120,0.1) 0%, rgba(20,20,20,0.7) 60%, #000 100%)",
      }}
    />
  );
}
