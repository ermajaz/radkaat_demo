import { ApparelDetails } from "../types/apparel-details.types";


export const apparelDetailsData: Record<string, ApparelDetails> = {
  "radkaat-pro-jersey": {
    id: "radkaat-pro-jersey",
    name: "Radkaat Pro Jersey",
    description:
      "Aero-tuned for race days, engineered with low-drag fabric and seamless ventilation zones.",
    features: [
      "Aero race fit",
      "Breathable micro-weave panels",
      "Anti-slip waist gripper",
      "Flatlock seams for comfort",
    ],
    materials: "78% Polyester, 22% Elastane",
    care: "Machine wash cold, hang dry",
    image: "/images/apparel.jpg",
    price: 1999,
  },

  "urban-commuter-jacket": {
    id: "urban-commuter-jacket",
    name: "Urban Commuter Jacket",
    description:
      "Weather-ready commuter shell designed to move with you through city loops and rainy streets.",
    features: [
      "Water-resistant fabric",
      "Reflective back stripe",
      "Ventilated underarm zones",
      "Lightweight packable design",
    ],
    materials: "Softshell Nylon Composite",
    care: "Machine wash gentle, tumble dry low",
    image: "/images/apparel-green.png",
    price: 2499,
  },

  "all-weather-shell": {
    id: "all-weather-shell",
    name: "All-Weather Shell",
    description:
      "Stormproof warmth and technical stretch for long rides in unpredictable weather.",
    features: [
      "Thermal-lined core",
      "Wind-blocking outer layer",
      "Rain-resistant zippers",
      "Ride-tailored ergonomic cut",
    ],
    materials: "Polyester, WindShield Membrane",
    care: "Hand wash recommended",
    image: "/images/apparel-blue.png",
    price: 2899,
  },
};
