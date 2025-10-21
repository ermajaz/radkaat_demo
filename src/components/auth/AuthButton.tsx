import React from "react";
import { motion } from "framer-motion";

type AuthButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost";
  loading?: boolean;
};

export const AuthButton: React.FC<AuthButtonProps> = ({
  children,
  variant = "primary",
  loading,
  className,
  ...props
}) => {
  return (
    <motion.button
      whileTap={{ scale: 0.995 }}
      className={`w-full h-12 uppercase tracking-wider font-semibold ${
        variant === "primary"
          ? "bg-black text-white hover:bg-neutral-800"
          : "bg-transparent border-b-2 border-gray-300 text-gray-700"
      } ${className || ""}`}
      {...props}
    >
      {loading ? "Please wait..." : children}
    </motion.button>
  );
};
