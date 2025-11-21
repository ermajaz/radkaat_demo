"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface AuthLayoutProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
}

export default function AuthLayout({
  children,
  title = "Welcome to Radkaat",
  subtitle = "Ride. Explore. Connect. Nothing But Now.",
}: AuthLayoutProps) {
  return (
    <main className="relative min-h-screen bg-superblack flex flex-col lg:flex-row items-center justify-center lg:justify-between overflow-hidden text-white px-6 md:px-10 lg:px-20">

      {/* ✨ Floating Particles */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {Array.from({ length: 25 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 rounded-full bg-white/15"
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              opacity: 0,
            }}
            animate={{
              y: ["0%", "100%"],
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* 🏍️ Left Branding Section */}
      <div className="hidden lg:flex flex-col justify-center space-y-6 max-w-md z-20">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl xl:text-5xl font-extrabold text-sandstorm leading-snug"
        >
          {title}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-white/70 text-lg leading-relaxed"
        >
          {subtitle}
        </motion.p>

        {/* 🌍 Community Statement */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-white/60 text-sm leading-relaxed border-l-2 border-sandstorm/40 pl-4 italic"
        >
          “Join thousands of riders who explore new horizons every day. From
          mountain trails to city rides — Radkaat is your home to connect,
          share, and grow.”
        </motion.p>

        {/* 🚀 Social Proof / Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-col gap-3 pt-4"
        >
          <div className="flex items-center gap-4">
            <div className="text-3xl font-bold text-sandstorm">10K+</div>
            <p className="text-sm text-white/70 uppercase tracking-wider">
              Active Riders
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-3xl font-bold text-sandstorm">500+</div>
            <p className="text-sm text-white/70 uppercase tracking-wider">
              Trail Adventures
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-3xl font-bold text-sandstorm">98%</div>
            <p className="text-sm text-white/70 uppercase tracking-wider">
              Satisfaction
            </p>
          </div>
        </motion.div>
        {/* Logo + Tagline */}
        <div className="flex items-center gap-3 mb-2">
          <Image
            src="/images/website-logo.png"
            alt="Radkaat"
            width={50}
            height={50}
            className="rounded-md"
          />
          <p className="text-white/60 text-xs tracking-wider uppercase">
            Powered by Radkaat Community
          </p>
        </div>
      </div>

      {children}
    </main>
  );
}
