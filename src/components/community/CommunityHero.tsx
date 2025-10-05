"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function CommunityHero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Parallax effect for the background image
  const yBackground = useTransform(scrollY, [0, 300], [0, -100]);
  const yContent = useTransform(scrollY, [0, 300], [0, 50]);

  return (
    <section
      ref={heroRef}
      className="relative h-[100vh] bg-superblack flex items-center justify-center text-center overflow-hidden"
    >
      {/* Background Parallax Image */}
      <motion.div
        style={{ y: yBackground }}
        className="absolute inset-0 z-0 w-full h-full"
      >
        <Image quality={100}
          src="/images/parallex.jpeg"
          alt="Community Hero"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Overlay for better text contrast */}
        <div className="absolute inset-0 bg-superblack/40"></div>
      </motion.div>

      {/* Hero Content */}
      <motion.div
        style={{ y: yContent }}
        className="relative z-10 space-y-6 max-w-2xl px-6"
      >
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold text-stone drop-shadow-lg"
        >
          Radkaat Community
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-stone/90 drop-shadow-md"
        >
          Connect with riders, explorers, and adventurers who live{" "}
          <span className="font-semibold text-rust">Nothing But Now</span>.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 bg-rust px-6 py-3 rounded-2xl font-semibold text-white shadow-xl hover:shadow-2xl transition-shadow"
        >
          Join the Movement <ArrowRight size={18} />
        </motion.button>
      </motion.div>

      {/* Decorative floating elements */}
      <motion.div
        className="absolute top-10 left-5 w-6 h-6 bg-rust rounded-full opacity-60 animate-pulse"
        style={{ y: yContent }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-8 h-8 bg-sandstorm rounded-full opacity-50 animate-bounce"
        style={{ y: yContent }}
      />
    </section>
  );
}
