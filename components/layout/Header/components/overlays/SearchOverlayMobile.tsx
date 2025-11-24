"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Search } from "lucide-react";

export default function SearchOverlayMobile({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [query, setQuery] = useState("");

  if (!open) return null;

  return (
    <AnimatePresence>
      {/* ✅ BACKDROP */}
      <motion.div
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.55 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/90 backdrop-blur-sm z-999"
      />

      {/* ✅ 60vh SHEET */}
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: "40%" }}
        exit={{ y: "100%" }}
        transition={{ type: "spring", stiffness: 220, damping: 22 }}
        className="
          fixed bottom-0 left-0 right-0
          h-[80vh] border-t border-white/10
          bg-superblack text-white z-1000
          rounded-t-3xl overflow-hidden
          shadow-[0_-20px_60px_rgba(0,0,0,0.6)]
          flex flex-col
        "
      >
        {/* ✅ HANDLE + CLOSE */}
        <div className="relative py-4 flex flex-col items-center border-b border-white/10">
          <div className="w-20 h-1.5 bg-white/20 rounded-full" />
        </div>

        {/* ✅ UNDERLINE SEARCH INPUT */}
        <div className="px-5 mt-10">
          <div className="flex items-center gap-3 border-b border-white/20 pb-3">
            <Search size={20} className="text-sandstorm/80" />

            <input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="text"
              placeholder="Search bikes, apparel, gear..."
              className="
                flex-1 bg-transparent outline-none
                text-white placeholder-white/40 text-sm
              "
            />

            {/* ✅ CLEAR */}
            {query.length > 0 && (
              <button
                onClick={() => setQuery("")}
                className="text-white/50 text-xs active:scale-90 transition"
              >
                Clear
              </button>
            )}
          </div>

          {/* ✅ ACTIVE LINE ANIMATION */}
          <motion.div
            layout
            className={`h-0.5 mt-0.5 rounded-full ${
              query ? "bg-sandstorm" : "bg-transparent"
            }`}
            transition={{ duration: 0.25 }}
          />
        </div>

        {/* ✅ RESULT / SUGGESTION AREA */}
        <div className="flex-1 px-5 mt-6 overflow-y-auto text-white/60 text-sm">
          {!query ? (
            <p className="text-center mt-6 text-white/40">
              Start typing to search…
            </p>
          ) : (
            <p className="text-center mt-6 text-white/60">
              Searching for: <span className="text-sandstorm">{query}</span>
            </p>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
