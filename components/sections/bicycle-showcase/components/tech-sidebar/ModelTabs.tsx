"use client";

export default function ModelTabs({
  models,
  active,
  setActive,
}: {
  models: string[];
  active: string;
  setActive: (m: string) => void;
}) {
  return (
    <div className="w-fit flex gap-8 border-b border-white/10">
      {models.map((m) => {
        const isActive = active === m;

        return (
          <button
            key={m}
            onClick={() => setActive(m)}
            className={`relative cursor-pointer pb-1 text-lg transition-all ${
              isActive ? "text-white font-semibold" : "text-white/40 hover:text-white/70"
            }`}
          >
            {m}

            {isActive && (
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white" />
            )}
          </button>
        );
      })}
    </div>
  );
}
