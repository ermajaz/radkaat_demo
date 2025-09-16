"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface SmoothSnapScrollProps {
  children: React.ReactNode[];
}

export default function SmoothSnapScroll({ children }: SmoothSnapScrollProps) {
  return (
    <div className="w-full">
      {children.map((child, index) => (
        <motion.div
          key={index}
          className="min-h-screen w-full snap-start snap-always"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
}