"use client";

import { Search, X } from "lucide-react";
import { useState } from "react";

export default function SearchInput() {
  const [value, setValue] = useState("");

  return (
    <div className="w-full max-w-5xl relative flex items-center">
      {/* Search Icon */}
      <Search className="absolute left-1 text-white/60 h-5 w-5 pointer-events-none" />

      {/* Input */}
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search products..."
        className="
          w-full bg-transparent text-white pl-8 pr-10 py-2
          border-b border-white/30
          placeholder-white/40
          focus:border-white focus:outline-none
          transition-all duration-300
        "
      />

      {/* Clear Button */}
      {value && (
        <button
          onClick={() => setValue("")}
          className="absolute right-1 text-white/60 cursor-pointer hover:text-white transition"
        >
          <span>clear</span>
        </button>
      )}
    </div>
  );
}
