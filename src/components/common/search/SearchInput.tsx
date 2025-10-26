"use client";

import { Search, X } from "lucide-react";
import { useState } from "react";

export default function SearchInput() {
  const [query, setQuery] = useState("");

  return (
    <div className="relative w-full max-w-4xl">
      <Search
        size={24}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50"
      />

      <input
        type="text"
        placeholder="Search products, tours, or riders..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full bg-white/10 border border-white/20 rounded-full py-4 pl-12 pr-12 text-lg placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-sandstorm focus:border-transparent transition-all"
      />

      {query && (
        <button
          onClick={() => setQuery("")}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition"
        >
          <X size={20} />
        </button>
      )}
    </div>
  );
}
