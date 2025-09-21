"use client";

import { Search, X } from "lucide-react";
import { useState } from "react";

export default function SearchInput() {
  const [query, setQuery] = useState("");

  const handleClear = () => {
    setQuery("");
  };

  return (
    <div className="relative w-full max-w-6xl">
      {/* Search Icon (left) */}
      <Search
        size={28}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray"
      />

      {/* Input */}
      <input
        type="text"
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full bg-transparent border-b-2 tracking-wider border-gray-400 pl-14 pr-12 py-4 text-3xl focus:outline-none focus:border-white transition-colors"
      />

      {/* Clear Button (right) */}
      {query && (
        <button
          onClick={handleClear}
          className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray tracking-wider hover:text-white transition"
        >
          clear
        </button>
      )}
    </div>
  );
}
