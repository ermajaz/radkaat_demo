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
  const [mounted, setMounted] = useState(false); // track first mount

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
  }, [sections.length]);

  // 🔹 Track mount
  useEffect(() => {
    setMounted(true);
  }, []);

  // 🔹 Scroll to first section only on tab switch, NOT on initial mount
  useEffect(() => {
    if (!mounted) return; // skip on first render
    if (sectionRefs.current[0]) {
      sectionRefs.current[0].scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setActiveIdx(0); // reset highlight
  }, [sections, mounted]);

  return (
    <div className="flex flex-col md:flex-row mx-auto w-full min-h-[60vh] gap-8">
      {/* Sidebar */}
      <aside className="md:w-1/3 md:sticky md:self-start top-32 h-fit space-y-6 md:pr-8">
        {sections.map((section, idx) => (
          <motion.h2
            key={section.id}
            className={`text-base md:text-xl !tracking-[3px] font-bold cursor-pointer transition-all ${
              activeIdx === idx
                ? "text-rust scale-105"
                : "text-gray-400 hover:text-white"
            }`}
            whileHover={{ x: 4 }}
            onClick={() =>
              sectionRefs.current[idx]?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              })
            }
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
