"use client";

export default function ViewToggle({
  onlyDiff,
  setOnlyDiff,
}: {
  onlyDiff: boolean;
  setOnlyDiff: (v: boolean) => void;
}) {
  return (
    <div className="flex justify-end gap-3">
      <button
        onClick={() => setOnlyDiff(false)}
        className={`px-6 py-2 rounded-sm cursor-pointer text-sm border transition ${
          !onlyDiff
            ? "bg-white text-black"
            : "text-white/70 border-white/30"
        }`}
      >
        All
      </button>

      <button
        onClick={() => setOnlyDiff(true)}
        className={`px-6 py-2 rounded-sm cursor-pointer text-sm border transition ${
          onlyDiff
            ? "bg-white text-black"
            : "text-white/70 border-white/30"
        }`}
      >
        Only Difference
      </button>
    </div>
  );
}
