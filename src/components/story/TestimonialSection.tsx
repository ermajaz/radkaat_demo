"use client";

import Image from "next/image";
import React from "react";
import { Quote } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

interface Testimonial {
  name: string;
  role: string;
  comment: string;
  image: string;
}

interface Props {
  title: string;
  testimonials: Testimonial[];
  homepageLink?: string;
  nextTourName?: string;
  onNextTourClick?: () => void;
}

export default function TestimonialSection({
  title,
  testimonials,
  homepageLink = "/",
  nextTourName = "Next Tour",
  onNextTourClick,
}: Props) {
  return (
    <section className="w-full bg-superblack text-white relative overflow-hidden">
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-xl md:text-3xl font-bold mb-8 text-white"
      >
        {title}
      </motion.h2>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="relative group bg-gradient-to-b from-[#1A1A1A] to-[#0F0F0F] p-8 border border-neutral-800/80 shadow-[0_0_25px_rgba(0,0,0,0.3)] hover:shadow-[0_0_35px_rgba(255,215,0,0.15)] transition-all duration-500 flex flex-col justify-between min-h-[380px]"
          >
            {/* Top: Quote + Comment */}
            <div>
              <Quote
                className="text-[#E4D27C] w-12 h-12 mb-4 opacity-90"
                strokeWidth={1.5}
              />
              <p className="text-stone-200 text-[15px] leading-relaxed italic mb-6">
                “{t.comment}”
              </p>
            </div>

            {/* Bottom: Author */}
            <div className="flex items-center gap-4 mt-auto pt-4">
              <div className="relative w-14 h-14 shrink-0">
                <Image
                  quality={100}
                  src={t.image}
                  alt={t.name}
                  fill
                  className="object-cover rounded-full border border-[#E4D27C]/40 group-hover:border-[#E4D27C]/80 transition-all duration-500"
                />
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-[17px] font-semibold text-white leading-tight">
                  {t.name}
                </p>
                <p className="text-gray-400 text-[14px] mt-0.5 leading-tight">
                  {t.role}
                </p>
              </div>
            </div>

            {/* Hover Border Accent */}
            <div className="absolute inset-0 border border-transparent group-hover:border-[#E4D27C]/40 transition-all duration-700"></div>
          </motion.div>
        ))}
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800/80 mt-20 mb-8" />

      {/* Bottom Navigation */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        viewport={{ once: true }}
        className="w-full flex justify-between items-center relative z-10"
      >
        <Link
          href={homepageLink}
          className="flex items-center gap-2 cursor-pointer text-white font-medium hover:text-[#E4D27C] transition-colors duration-300"
        >
          <span className="inline-block rotate-180 text-lg">➜</span> Homepage
        </Link>
        <button
          onClick={onNextTourClick}
          className="flex items-center gap-2 cursor-pointer text-white font-medium hover:text-[#E4D27C] transition-colors duration-300"
        >
          {nextTourName} <span className="text-lg">➜</span>
        </button>
      </motion.div>
    </section>
  );
}
