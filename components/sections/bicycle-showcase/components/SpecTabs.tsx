"use client";

export default function SpecTabs({
  specs,
  activeSpecKey,
  setActiveSpecKey,
  onViewMore,
}: {
  specs: any[];
  activeSpecKey: string;
  setActiveSpecKey: (key: string) => void;
  onViewMore: () => void;
}) {
  return (
    <aside className="col-span-2">
      <ul className="space-y-2">
        {specs.map((s) => {
          const active = s.key === activeSpecKey;

          return (
            <li key={s.key} className="relative">
              <button
                onClick={() => setActiveSpecKey(s.key)}
                className="relative cursor-pointer text-sm inline-block text-left py-1 transition-all text-white"
              >
                {s.label}

                {/* Active underline */}
                {active && (
                  <span className="absolute left-0 bottom-0 h-0.5 w-full bg-sandstorm rounded-full" />
                )}
              </button>
            </li>
          );
        })}

        {/* ✅ VIEW MORE */}
        <li className="relative pl-0 pt-5">
          <button
            onClick={onViewMore}
            className="group flex items-center text-[11px] text-white/70 cursor-pointer transition-all"
          >
            <span className="relative whitespace-nowrap group-hover:text-white transition-all tracking-wider duration-300">
              View Detailed Specs
              {/* Animated underline */}
              <span className="absolute left-0 -bottom-0.5 h-[1.5px] w-0 bg-sandstorm transition-all duration-300 group-hover:w-full"></span>
            </span>

            {/* Arrow Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3 h-3 translate-x-0 opacity-70 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </li>

      </ul>
    </aside>
  );
}
