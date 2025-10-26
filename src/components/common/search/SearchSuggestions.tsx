"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Compass, Zap, ShoppingBag } from "lucide-react";

type SuggestionItem = {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  type: "poster" | "glass-card" | "split-banner" | "product-tile";
};

const suggestions: SuggestionItem[] = [
  {
    id: 1,
    title: "Adventure Gear",
    subtitle: "Explore rugged terrains with pro-grade equipment",
    image:
      "https://images.pexels.com/photos/5808010/pexels-photo-5808010.jpeg?auto=compress&cs=tinysrgb&w=800",
    type: "poster",
  },
  {
    id: 2,
    title: "Smart Helmet",
    subtitle: "Safety meets AI innovation",
    image:
      "https://images.pexels.com/photos/5808010/pexels-photo-5808010.jpeg?auto=compress&cs=tinysrgb&w=800",
    type: "glass-card",
  },
  {
    id: 3,
    title: "Ladakh Trail Ride",
    subtitle: "Your ultimate Himalayan adventure awaits",
    image:
      "https://images.pexels.com/photos/5808010/pexels-photo-5808010.jpeg?auto=compress&cs=tinysrgb&w=800",
    type: "split-banner",
  },
  {
    id: 4,
    title: "Radkaat Jackets",
    subtitle: "All-weather performance wear",
    image:
      "https://images.pexels.com/photos/5808010/pexels-photo-5808010.jpeg?auto=compress&cs=tinysrgb&w=800",
    type: "product-tile",
  },
];

export default function SearchSuggestions() {
  return (
    <div className="flex-1 overflow-y-hidden px-6 pb-12">
      <motion.h3
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-sm uppercase text-white/60 mb-6 tracking-wider"
      >
        Popular Searches
      </motion.h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {suggestions.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
          >
            {item.type === "poster" && <PosterCard item={item} />}
            {item.type === "glass-card" && <GlassCard item={item} />}
            {item.type === "split-banner" && <SplitBannerCard item={item} />}
            {item.type === "product-tile" && <ProductTileCard item={item} />}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------
   🧭 1. PosterCard – cinematic, adventure-oriented
------------------------------------------------------------- */
function PosterCard({ item }: { item: SuggestionItem }) {
  return (
    <div className="relative rounded-3xl overflow-hidden group h-64 cursor-pointer">
      <Image
        src={item.image}
        alt={item.title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      <div className="absolute bottom-5 left-5">
        <h3 className="text-2xl font-bold text-sandstorm mb-1 drop-shadow">
          {item.title}
        </h3>
        <p className="text-sm text-gray-300">{item.subtitle}</p>
      </div>
      <Compass
        size={40}
        className="absolute top-4 right-4 text-sandstorm opacity-60 group-hover:opacity-100 transition-opacity"
      />
    </div>
  );
}

/* -------------------------------------------------------------
   🧊 2. GlassCard – futuristic & sleek
------------------------------------------------------------- */
function GlassCard({ item }: { item: SuggestionItem }) {
  return (
    <div className="relative p-6 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl flex flex-col justify-between h-64 transition-all duration-500 hover:scale-[1.04]">
      <div>
        <h3 className="text-xl font-semibold text-white">{item.title}</h3>
        <p className="text-gray-300 text-sm mt-2">{item.subtitle}</p>
      </div>
      <div className="flex justify-between items-end">
        <div className="flex items-center gap-2 text-sandstorm text-sm">
          <Star className="fill-sandstorm text-sandstorm" size={16} />
          Featured
        </div>
        <div className="relative w-20 h-20">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="rounded-full object-cover ring-2 ring-sandstorm/40"
          />
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------
   🏞️ 3. SplitBannerCard – half image, half text banner
------------------------------------------------------------- */
function SplitBannerCard({ item }: { item: SuggestionItem }) {
  return (
    <div className="flex h-64 rounded-3xl overflow-hidden border border-white/10 group hover:scale-[1.02] transition-all duration-500 bg-gradient-to-r from-black/70 via-black/40 to-transparent">
      <div className="relative w-1/2">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      <div className="flex flex-col justify-center px-6 w-1/2">
        <h3 className="text-2xl font-bold text-sandstorm mb-2">{item.title}</h3>
        <p className="text-sm text-gray-300 leading-relaxed mb-3">
          {item.subtitle}
        </p>
        <button className="flex items-center gap-2 text-sm font-medium text-black bg-sandstorm px-4 py-2 rounded-full hover:bg-sandstorm/80 transition">
          Explore <Zap size={14} />
        </button>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------
   🧥 4. ProductTileCard – clean e-commerce style
------------------------------------------------------------- */
function ProductTileCard({ item }: { item: SuggestionItem }) {
  return (
    <div className="relative rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 p-5 flex flex-col justify-between h-64 hover:scale-[1.04] transition-all duration-500">
      <div className="relative h-32 w-full mb-3 rounded-2xl overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-700 hover:scale-110"
        />
      </div>
      <div className="flex items-center justify-between">
        <div>
          <h4 className="font-semibold text-white">{item.title}</h4>
          <p className="text-xs text-gray-400">{item.subtitle}</p>
        </div>
        <button className="p-2 bg-sandstorm/20 rounded-full hover:bg-sandstorm/40 transition">
          <ShoppingBag size={18} className="text-sandstorm" />
        </button>
      </div>
    </div>
  );
}
