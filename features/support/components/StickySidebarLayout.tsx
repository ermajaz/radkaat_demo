"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Section {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface StickySidebarLayoutProps {
  sections: Section[];
}

const StickySidebarLayout: React.FC<StickySidebarLayoutProps> = ({
  sections,
}) => {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIdx, setActiveIdx] = useState(0);

  // 🔹 Scrollspy effect
  useEffect(() => {
    const handleScroll = () => {
      const offsets = sectionRefs.current.map((ref) => {
        if (!ref) return Infinity;
        const rect = ref.getBoundingClientRect();
        return Math.abs(rect.top - 120);
      });
      setActiveIdx(offsets.indexOf(Math.min(...offsets)));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔹 Reset to first section when tab/sections change
  // useEffect(() => {
  //   if (sections.length > 0 && sectionRefs.current[0]) {
  //     const el = sectionRefs.current[0];
  //     const yOffset = -120;
  //     const y = el.getBoundingClientRect().top + window.scrollY + yOffset;

  //     window.scrollTo({ top: y, behavior: "smooth" });
  //     setActiveIdx(0);
  //   }
  // }, [sections]);

  // 🔹 Scroll to clicked section
  const handleClick = (idx: number) => {
    const el = sectionRefs.current[idx];
    if (!el) return;

    const yOffset = -120;
    const y = el.getBoundingClientRect().top + window.scrollY + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
    setActiveIdx(idx);
  };

  return (
    <div className="flex flex-col md:flex-row mx-auto w-full min-h-[60vh] gap-8">
      {/* Sidebar */}
      <aside className="md:w-1/3 md:sticky md:self-start top-32 h-fit space-y-6 md:pr-8">
        {sections.map((section, idx) => (
          <motion.h2
            key={section.id}
            className={`text-base md:text-xl tracking-[3px]! font-bold cursor-pointer transition-all ${
              activeIdx === idx
                ? "text-rust scale-105"
                : "text-gray hover:text-white"
            }`}
            whileHover={{ x: 4 }}
            onClick={() => handleClick(idx)}
          >
            {section.title}
          </motion.h2>
        ))}
      </aside>

      {/* Content */}
      <main className="w-full md:w-2/3 flex flex-col gap-16">
        {sections.map((section, idx) => (
          <motion.section
            key={section.id}
            ref={(el: HTMLDivElement | null) => {
              sectionRefs.current[idx] = el;
            }}
            id={section.id}
            className="mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            {section.content}
          </motion.section>
        ))}
      </main>
    </div>
  );
};

export default StickySidebarLayout;
