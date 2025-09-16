"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ShoppingCart, Star, TrendingUp } from "lucide-react";
import { Recommendation } from "@/types";
import CardLarge from "./CardLarge";
import CardMinimal from "./CardMinimal";
import CardWide from "./CardWide";
import CardTall from "./CardTall";

const recommendations: Recommendation[] = [
  {
    id: 1,
    title: "Electric Bike",
    subtitle: "Fast. Eco. Futuristic.",
    image: "/images/takin-1.jpg",
    badge: "Trending 🚀",
    icon: <TrendingUp size={18} />,
    price: "$999",
    rating: 4.7,
    category: "Mobility",
  },
  {
    id: 2,
    title: "Racing Gear",
    subtitle: "Speed meets safety",
    image: "/images/takin-2.jpg",
    badge: "New ✨",
    icon: <Star size={18} />,
    price: "$249",
    category: "Accessories",
    discount: "15% Off",
  },
  {
    id: 3,
    title: "Smart Helmet",
    subtitle: "Ride with intelligence",
    image: "/images/helmet.jpg",
    badge: "Bestseller 🔥",
    icon: <ShoppingCart size={18} />,
    price: "$179",
    rating: 4.9,
  },
  {
    id: 4,
    title: "Adventure Kit",
    subtitle: "Gear for explorers",
    image: "https://bikepacking.com/wp-content/uploads/2024/04/dispersed-bikepacking-handlebar-roll-review_52.jpg",
    badge: "Limited Edition 🎯",
    icon: <Star size={18} />,
    price: "$349",
    category: "Outdoors",
  },
];

export default function SearchRecommendations() {
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!listRef.current) return;
    gsap.fromTo(
      listRef.current.children,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <div className="relative h-[60%] w-full px-6 pb-6 overflow-hidden">
      <div
        ref={listRef}
        className="grid grid-cols-3 auto-rows-[minmax(100px,1fr)] gap-3 h-full"
      >
        <CardWide rec={recommendations[2]} />
        <CardMinimal rec={recommendations[1]} />
        <CardLarge rec={recommendations[0]} />
        <CardTall rec={recommendations[3]} />
      </div>
    </div>
  );
}
