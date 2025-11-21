"use client";

import NavGroup from "./NavGroup";
import { ModelClassKey } from "./utils/product-overlay-data";

export default function ModelsSection({
  models,
  activeModel,
  setActiveModel,
}: {
   models: any[];
  activeModel: ModelClassKey;
  setActiveModel: (m: ModelClassKey) => void;
}) {
  if (!models?.length) return null;

  return (
    <NavGroup title="MODELS">
      {models.map((m) => (
        <p
          key={m.id}
          onClick={() => setActiveModel(m.id)}
          className={`cursor-pointer flex justify-between items-center py-1 text-base tracking-wide 
            ${activeModel === m.id ? "text-white font-bold" : "text-white/60 hover:text-white"}
          `}
        >
          {m.label}
          <span className="text-2xl">›</span>
        </p>
      ))}
    </NavGroup>
  );
}
