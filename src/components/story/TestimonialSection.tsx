"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Quote } from "lucide-react";

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
    <section className="relative w-full text-white overflow-hidden">
      {/* Section Header */}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-xl md:text-3xl font-bold mb-8 tracking-tight"
      >
        {title}
      </motion.h2>

      {/* Testimonials Stack */}
      <div className="flex flex-col gap-14 w-full mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center gap-8 md:gap-12 
              bg-gradient-to-r from-[#1A1A1A]/90 to-[#0C0C0C]/95 
              border border-neutral-800/70 overflow-hidden
              shadow-[0_0_20px_rgba(0,0,0,0.3)] 
              hover:shadow-[0_0_40px_rgba(228,210,124,0.12)] 
              transition-all duration-500"
          >
            {/* LEFT: Image + Quote */}
            <div className="relative w-full md:w-[35%] h-[220px] overflow-hidden group">
              <Image
                src={t.image}
                alt={t.name}
                fill
                quality={100}
                className="object-cover object-center transform transition-transform duration-[3000ms] ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#E4D27C]/10 to-transparent opacity-0 group-hover:opacity-40 transition-all duration-700" />
              <Quote
                className="absolute bottom-4 right-4 w-8 h-8 text-[#E4D27C]/70 opacity-90"
                strokeWidth={1.5}
              />
            </div>

            {/* RIGHT: Text Content */}
            <div className="flex flex-col justify-center w-full md:w-[65%] px-6 md:px-8 py-5 md:py-0 relative">
              {/* Golden accent line */}
              <div className="absolute -top-2 left-6 md:left-8 w-[60px] h-[2px] bg-gradient-to-r from-[#E4D27C] to-transparent " />

              <div className="flex flex-col mb-4">
                <p className="text-[19px] font-semibold text-[#E4D27C] leading-tight">
                  {t.name}
                </p>
                <p className="text-[13px] text-gray-400">{t.role}</p>
              </div>

              <p className="text-[16px] text-stone-200 leading-relaxed italic">
                “{t.comment}”
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Divider */}
      <div className="border-t border-neutral-800/70 mt-20 mb-8 opacity-70 max-w-6xl mx-auto" />

      {/* Bottom Navigation */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        viewport={{ once: true }}
        className="w-full flex justify-between items-center max-w-6xl mx-auto px-6 md:px-12"
      >
        <Link
          href={homepageLink}
          className="flex items-center gap-2 text-white font-medium hover:text-[#E4D27C] transition-colors duration-300"
        >
          <span className="inline-block rotate-180 text-lg">➜</span> Homepage
        </Link>

        <button
          onClick={onNextTourClick}
          className="flex items-center gap-2 text-white font-medium hover:text-[#E4D27C] transition-colors duration-300"
        >
          {nextTourName} <span className="text-lg">➜</span>
        </button>
      </motion.div>
    </section>
  );
}
