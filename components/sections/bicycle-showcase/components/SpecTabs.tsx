"use client";

export default function SpecTabs({
  specs,
  activeSpecKey,
  setActiveSpecKey,
}: {
  specs: any[];
  activeSpecKey: string;
  setActiveSpecKey: (key: string) => void;
}) {
  return (
    <aside className="col-span-2">
      <ul className="space-y-2">
        {specs.map((s) => {
          const active = s.key === activeSpecKey;

          return (
            <li key={s.key} className="relative pl-3">
              <button
                onClick={() => setActiveSpecKey(s.key)}
                className={`relative cursor-pointer text-sm inline-block text-left py-1 transition-all text-white
                  `}
              >
                {s.label}

                {/* 🔥 Auto width underline */}
                {active && (
                  <span className="absolute left-0 bottom-0 h-0.5 w-full bg-sandstorm rounded-full" />
                )}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
