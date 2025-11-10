"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

interface PackingItem {
  name: string;
  image?: string;
  category?: "must" | "recommended";
}

interface Props {
  title: string;
  items: PackingItem[];
}

export default function WhatToPackSection({ title, items }: Props) {
  const mustPack = items.filter((item) => item.category === "must");
  const recommended = items.filter((item) => item.category !== "must");

  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  const toggleCheck = (itemName: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [itemName]: !prev[itemName],
    }));
  };

  return (
    <section className="w-full bg-superblack text-white pb-16">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-xl md:text-3xl font-bold mb-8"
      >
        {title}
      </motion.h2>

      <div className="flex flex-col gap-12">
        {/* MUST PACK */}
        {mustPack.length > 0 && (
          <PackingCategory
            title="Must Pack"
            color="#E4D27C"
            items={mustPack}
            checkedItems={checkedItems}
            onToggle={toggleCheck}
          />
        )}

        {/* RECOMMENDED PACK */}
        {recommended.length > 0 && (
          <PackingCategory
            title="Recommended to Pack"
            color="#E4D27C"
            items={recommended}
            checkedItems={checkedItems}
            onToggle={toggleCheck}
          />
        )}
      </div>
    </section>
  );
}

/* ✅ Subcomponent for each category */
function PackingCategory({
  title,
  color,
  items,
  checkedItems,
  onToggle,
}: {
  title: string;
  color: string;
  items: PackingItem[];
  checkedItems: Record<string, boolean>;
  onToggle: (itemName: string) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="flex flex-col gap-6"
    >
      <h3
        className="text-xl font-semibold uppercase tracking-wide"
        style={{ color }}
      >
        {title}
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {items.map((item, i) => {
          const isChecked = checkedItems[item.name];
          return (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              onClick={() => onToggle(item.name)}
              className={`relative cursor-pointer flex items-center gap-4 
                bg-linear-to-b from-[#1A1A1A] to-[#0E0E0E] 
                border ${isChecked ? "border-army shadow-army" : "border-neutral-800"}
                p-4 transition-all duration-500
                rounded-xl md:rounded-none`} 
            >
              {/* Image / Icon */}
              <div className="relative w-12 h-12 shrink-0 overflow-hidden 
                  border border-[#E4D27C]/30 bg-[#121212]
                  rounded-lg md:rounded-none"> {/* ✅ Rounded image only for mobile */}
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <CheckCircle className="text-[#E4D27C] w-6 h-6 absolute top-[25%] left-[25%]" />
                )}
              </div>

              {/* Item Name */}
              <p
                className={`text-[15px] leading-snug transition-colors duration-300 ${
                  isChecked ? "text-army line-through" : "text-stone-200"
                }`}
              >
                {item.name}
              </p>

              {/* Animated Check Overlay */}
              <AnimateCheck isChecked={isChecked} />
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

/* ✅ Animated check overlay */
const AnimateCheck = ({ isChecked }: { isChecked: boolean }) => (
  <motion.div
    initial={false}
    animate={{
      opacity: isChecked ? 1 : 0,
      scale: isChecked ? 1 : 0.5,
    }}
    transition={{ duration: 0.4, ease: "easeOut" }}
    className="absolute top-2 right-2"
  >
    <CheckCircle className="text-army" size={22} strokeWidth={2.5} />
  </motion.div>
);
