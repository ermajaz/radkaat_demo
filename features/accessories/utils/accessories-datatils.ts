import { AccessoryDetails } from "../types/accessories-details.types";

export const accessoriesDetailsData: Record<string, AccessoryDetails> = {
  "radkaat-pro-jersey": {
    id: "radkaat-pro-jersey",
    name: "AeroGuard Helmet",
    description:
      "Wind-tunnel tuned shell designed for maximum airflow, reduced drag, and uncompromised impact protection.",
    features: [
      "Aerodynamic vent channeling",
      "Multi-impact EPS core",
      "Magnetic quick-release buckle",
      "Rear reflective strip for night visibility",
    ],
    materials: "Polycarbonate shell, EPS foam core",
    care: "Wipe clean with damp cloth, avoid solvents",
    image: "/images/accessories.jpg",
    price: 3999,
  },

  "urban-commuter-jacket": {
    id: "urban-commuter-jacket",
    name: "Shadow Grip Gloves",
    description:
      "Shock-absorbing palm padding engineered to reduce hand fatigue on long rides and aggressive terrain.",
    features: [
      "Gel-padded palm zones",
      "Breathable mesh upper",
      "Sweat-wipe thumb panel",
      "Non-slip silicone grip",
    ],
    materials: "Polyester, Lycra, Gel padding",
    care: "Hand wash, air dry",
    image: "/images/accessories.jpg",
    price: 1299,
  },

  "all-weather-shell": {
    id: "all-weather-shell",
    name: "Carbon Bottle Cage",
    description:
      "Ultra-light carbon composite cage engineered to hold bottles securely over rough surfaces.",
    features: [
      "Lightweight carbon frame",
      "Anti-rattle bottle grip",
      "Universal mounting fit",
      "Race-grade stiffness",
    ],
    materials: "Carbon fiber composite",
    care: "Wipe clean with microfiber cloth",
    image: "/images/accessories.jpg",
    price: 999,
  },

  "trail-tool-multikit": {
    id: "trail-tool-multikit",
    name: "Trail Tool Multikit",
    description:
      "Compact roadside repair system designed for quick fixes without breaking momentum.",
    features: [
      "11-in-1 hex & torque tools",
      "Hard-anodized steel bits",
      "Anti-slip ergonomic grip",
      "Corrosion-resistant finish",
    ],
    materials: "Anodized steel, aluminum body",
    care: "Keep dry and lightly lubricate joints",
    image: "/images/accessories.jpg",
    price: 1499,
  },

  "rapidflare-rear-light": {
    id: "rapidflare-rear-light",
    name: "RapidFlare Rear Light",
    description:
      "High-visibility LED system engineered to keep you seen from up to 800 meters—day or night.",
    features: [
      "300-lumen output",
      "5 adaptive flash modes",
      "USB-C fast charging",
      "IPX5 rain protection",
    ],
    materials: "Polycarbonate lens, aluminum base",
    care: "Wipe clean, avoid submersion",
    image: "/images/accessories.jpg",
    price: 1799,
  },

  "stealth-saddle-pack": {
    id: "stealth-saddle-pack",
    name: "Stealth Saddle Pack",
    description:
      "Low-profile storage designed to stay silent, stable and aerodynamic on fast rides.",
    features: [
      "Water-resistant shell",
      "Anti-sway mounting straps",
      "Internal mesh organizer",
      "Reflective logo strip",
    ],
    materials: "Ripstop nylon, rubberized backing",
    care: "Spot clean, air dry",
    image: "/images/accessories.jpg",
    price: 1599,
  },
};
