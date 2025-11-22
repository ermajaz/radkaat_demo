import { AccessoryProduct } from "../types/accessories.types";


export const accessoriesProducts: AccessoryProduct[] = [
  {
    id: "radkaat-pro-jersey",
    name: "Radkaat Pro Jersey",
    brand: "Radkaat",
    category: "safety",
    image: "/images/accessories.jpg",
    tagline: "Aero-tuned race day layer.",
    variants: [
      {
        id: "rpj-s",
        size: "S",
        colors: ["#111827", "#B91C1C"], // Black, Race Red
        inStock: true,
        price:  1999,
      },
      {
        id: "rpj-m",
        size: "M",
        colors: ["#111827", "#4B5563"], // Black, Steel Grey
        inStock: true,
        price: 2099,
      },
      {
        id: "rpj-l",
        size: "L",
        colors: ["#111827"], // Black only
        inStock: false,
        price: 2499,
      },
    ],
  },
  {
    id: "urban-commuter-jacket",
    name: "Urban Commuter Jacket",
    brand: "Radkaat",
    category: "storage",
    image: "/images/accessories.jpg",
    tagline: "City-ready, rain-ready.",
    variants: [
      {
        id: "ucj-m",
        size: "M",
        colors: ["#111827", "#FACC15"], // Black, Yellow
        inStock: true,
        price: 299,
      },
      {
        id: "ucj-l",
        size: "L",
        colors: ["#111827"], // Black
        inStock: true,
        price: 2799,
      },
    ],
  },
  {
    id: "all-weather-shell",
    name: "All-Weather Shell",
    brand: "Radkaat",
    category: "tools",
    image: "/images/accessories.jpg",
    tagline: "Layer up, ride through anything.",
    variants: [
      {
        id: "aws-s",
        size: "S",
        colors: ["#0F172A"], // Navy
        inStock: true,
        price: 2499,
      },
      {
        id: "aws-m",
        size: "M",
        colors: ["#0F172A", "#94A3B8"], // Navy, Silver Grey
        inStock: true,
        price: 499,
      },
    ],
  },
   {
    id: "trail-tool-multikit",
    name: "Trail Tool Multikit",
    brand: "Radkaat",
    category: "tools",
    image: "/images/accessories.jpg",
    tagline: "Layer up, ride through anything.",
    variants: [
      {
        id: "aws-s",
        size: "S",
        colors: ["#0F172A"], // Navy
        inStock: true,
        price: 2499,
      },
      {
        id: "aws-m",
        size: "M",
        colors: ["#0F172A", "#94A3B8"], // Navy, Silver Grey
        inStock: true,
        price: 499,
      },
    ],
  },
   {
    id: "rapidflare-rear-light",
    name: "RapidFlare Rear Light",
    brand: "Radkaat",
    category: "tools",
    image: "/images/accessories.jpg",
    tagline: "Layer up, ride through anything.",
    variants: [
      {
        id: "aws-s",
        size: "S",
        colors: ["#0F172A"], // Navy
        inStock: true,
        price: 2499,
      },
      {
        id: "aws-m",
        size: "M",
        colors: ["#0F172A", "#94A3B8"], // Navy, Silver Grey
        inStock: true,
        price: 499,
      },
    ],
  },
   {
    id: "stealth-saddle-pack",
    name: "Stealth Saddle Pack",
    brand: "Radkaat",
    category: "tools",
    image: "/images/accessories.jpg",
    tagline: "Layer up, ride through anything.",
    variants: [
      {
        id: "aws-s",
        size: "S",
        colors: ["#0F172A"], // Navy
        inStock: true,
        price: 2499,
      },
      {
        id: "aws-m",
        size: "M",
        colors: ["#0F172A", "#94A3B8"], // Navy, Silver Grey
        inStock: true,
        price: 499,
      },
    ],
  },
];
