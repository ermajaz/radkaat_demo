"use client";

import { useResponsiveComponent } from "@/hooks/useResponsiveComponent";
import { PreorderProduct } from "./types/preorder.types";
import PreorderMobile from "./PreorderMobile";
import PreorderDesktop from "./PreorderDesktop";

const initialPreorderItems: PreorderProduct[] = [
  {
    id: "pre1",
    title: "SB120 TI2 2026 Preorder",
    desc: "Limited Edition Titanium Frame with Advanced Geometry",
    sku: "PRE-B26120TI2-2026",
    basePrice: 9500,
    qty: 1,
    image: "/images/hero-bike-new.png",
    models: ["XS", "SM", "MD", "LG", "XL"],
    colors: [
      { name: "Matte Black", hex: "#1a1a1a" },
      { name: "Titanium Grey", hex: "#8c8c8c" },
      { name: "Electric Blue", hex: "#0066cc" },
      { name: "Forest Green", hex: "#228b22" },
    ],
    selectedModel: "MD",
    selectedColor: "Matte Black",
    customizations: {
      handlebarTape: "Leather",
      saddle: "Premium Carbon",
      wheels: "Carbon Clincher",
      groupset: "Shimano 105",
    },
    depositRequired: 1000,
    estimatedDelivery: "Q2 2026",
  },
  {
    id: "pre2",
    title: "SB160 TEAM ISSUE 2026 Preorder",
    desc: "Professional Grade Carbon Road Bike",
    sku: "PRE-B26160TI-2026",
    basePrice: 14500,
    qty: 1,
    image: "/images/hero-bike-new.png",
    models: ["SM", "MD", "LG", "XL"],
    colors: [
      { name: "Team Red", hex: "#dc143c" },
      { name: "Stealth Black", hex: "#000000" },
      { name: "Pearl White", hex: "#f8f8ff" },
    ],
    selectedModel: "MD",
    selectedColor: "Team Red",
    customizations: {
      handlebarTape: "Carbon",
      saddle: "Pro Team",
      wheels: "Carbon Tubeless",
      groupset: "Shimano Dura-Ace",
    },
    depositRequired: 1500,
    estimatedDelivery: "Q1 2026",
  },
];

export default function Preorder() {
  return (
    <>
      {useResponsiveComponent(
        <PreorderMobile initial={initialPreorderItems} />,
        <PreorderDesktop initial={initialPreorderItems} />
      )}
    </>
  );
}