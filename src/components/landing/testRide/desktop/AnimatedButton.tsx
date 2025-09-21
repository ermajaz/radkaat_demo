"use client";

import React from "react";
import styles from "./AnimatedButton.module.css";

interface HoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const HoverButton: React.FC<HoverButtonProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={`${styles.button} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
