"use client";

export default function CategoryTabs({
    categories,
    active,
    setActive,
}: {
    categories: string[];
    active: string;
    setActive: (c: string) => void;
}) {
    return (
        <aside className="col-span-2">
            <ul className="space-y-2">
                {categories.map((c) => {
                    const isActive = active === c;

                    return (
                        <li key={c} className="relative pl-3">
                            <button
                                onClick={() => setActive(c)}
                                className={`relative cursor-pointer inline-block text-left py-1 transition-all ${isActive
                                        ? "text-white" : "text-white/50 hover:text-white/80"
                                    }`}
                            >
                                {c}

                                {/* 🔥 Auto width underline */}
                                {isActive && (
                                    <span className="absolute left-0 bottom-0 h-0.5 w-full bg-white rounded-full" />
                                )}
                            </button>
                        </li>
                    );
                })}
            </ul>
        </aside>

    );
}
