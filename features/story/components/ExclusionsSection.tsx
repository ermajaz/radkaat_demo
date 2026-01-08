"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

interface ExclusionsData {
  title: string;
  data: {
    title: string;
    user_experience: string;
    author?: string;
    date?: string;
    author_img?: string;
  };
}

export default function ExclusionsSection({ title, data }: ExclusionsData) {
  console.log(data);
  // Convert bullet string into clean array
  const items = Array.isArray(data?.user_experience)
  ? data.user_experience
  : [];


  return (
    <section className="w-full text-white mb-16">
      {/* Header */}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-xl md:text-3xl font-bold mb-8 tracking-tight"
      >
        {title}
      </motion.h2>

      {/* Optional: Sub-title from data */}
      {data.title && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-[16px] text-[#E4D27C] mb-6 font-semibold"
        >
          {data.title}
        </motion.p>
      )}

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            viewport={{ once: true }}
            className="
              flex items-start gap-4 p-4 
              bg-linear-to-b from-[#1A1A1A] to-[#0C0C0C]
              border border-neutral-800/70 
              hover:border-[#E4D27C]/40
              hover:shadow-[0_0_30px_rgba(228,210,124,0.15)]
              transition-all duration-300
              rounded-xl md:rounded-none
            "
          >
            <CheckCircle
              className="text-[#E4D27C] shrink-0 mt-1"
              strokeWidth={2}
              size={22}
            />

            <p className="text-[15px] leading-relaxed tracking-wide text-stone-200">
              {item}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
