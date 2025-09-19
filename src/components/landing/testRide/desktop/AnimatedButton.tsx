"use client";

import React from "react";
import styles from "./AnimatedButton.module.css";

interface HoverButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const HoverButton: React.FC<HoverButtonProps> = ({ children, ...props }) => {
  return (
    <button className={`${styles.button} font-bold tracking-[1px]`} {...props}>
      {children}
    </button>
  );
};
