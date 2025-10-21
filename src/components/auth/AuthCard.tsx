import React from "react";
import { motion } from "framer-motion";

export const AuthCard: React.FC<{
  title?: string;
  subtitle?: React.ReactNode;
  children: React.ReactNode;
}> = ({ title, subtitle, children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.28 }}
      className="max-w-xl w-full mx-auto py-8 px-6"
    >
      <div className="mb-6">
        {title && (
          <h1 className="text-3xl tracking-wider font-bold uppercase">
            {title}
          </h1>
        )}
        {subtitle && (
          <div className="mt-4 text-sm text-gray-600">{subtitle}</div>
        )}
      </div>

      <div className="bg-transparent">{children}</div>
    </motion.div>
  );
};
