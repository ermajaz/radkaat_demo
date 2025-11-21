"use client";

import { motion } from "framer-motion";
import Image from "next/image";
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
}

export default function TestimonialSection({ title, testimonials }: Props) {
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

      {/* Testimonials */}
      <div className="flex flex-col gap-10 w-full mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="
              flex flex-col md:flex-row items-center gap-8 md:gap-12 
              bg-linear-to-br from-[#1A1A1A]/80 to-[#0C0C0C]/90 
              border border-[#E4D27C]/10 overflow-hidden
              rounded-2xl md:rounded-none  /* ✅ Rounded only on mobile */
              backdrop-blur-xl 
              shadow-[0_4px_30px_rgba(0,0,0,0.3)]
              hover:shadow-[0_0_35px_rgba(228,210,124,0.18)] 
              transition-all duration-500 
              relative
            "
          >
            {/* Subtle glowing edge for mobile */}
            <div className="absolute inset-0 md:hidden bg-linear-to-br from-[#E4D27C]/10 to-transparent pointer-events-none" />

            {/* LEFT: Image + Quote */}
            <div className="relative w-full md:w-[35%] h-60 overflow-hidden group rounded-t-2xl md:rounded-none">
              <Image
                src={t.image}
                alt={t.name}
                fill
                quality={100}
                className="object-cover object-center transform transition-transform duration-2500 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />
              <div className="absolute inset-0 bg-linear-to-r from-[#E4D27C]/10 to-transparent opacity-0 group-hover:opacity-40 transition-all duration-700" />
              <Quote
                className="absolute bottom-4 right-4 w-7 h-7 sm:w-8 sm:h-8 text-[#E4D27C]/80 opacity-90"
                strokeWidth={1.5}
              />
            </div>

            {/* RIGHT: Text Content */}
            <div
              className="
                flex flex-col justify-center w-full md:w-[65%] 
                px-5 sm:px-6 md:px-8 py-6 md:py-0 
                relative
              "
            >
              {/* Golden accent line (mobile glow version) */}
              <div className="absolute -top-2 left-5 sm:left-6 md:left-8 w-[60px] h-0.5 bg-linear-to-r from-[#E4D27C] to-transparent" />

              <div className="flex flex-col mb-3 sm:mb-4">
                <p className="text-[18px] sm:text-[19px] font-semibold text-[#E4D27C] leading-tight">
                  {t.name}
                </p>
                <p className="text-[13px] sm:text-[14px] text-gray-400">
                  {t.role}
                </p>
              </div>

              <p className="text-[15px] sm:text-[16px] text-stone-200 leading-relaxed italic relative">
                <span className="text-[#E4D27C]/70 text-lg font-serif mr-1">“</span>
                {t.comment}
                <span className="text-[#E4D27C]/70 text-lg font-serif ml-1">”</span>
              </p>

              {/* Mobile subtle highlight */}
              <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-[#E4D27C]/30 via-transparent to-transparent md:hidden" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
