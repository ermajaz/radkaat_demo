"use client";

export default function SidebarProfilesMobile({ profiles }: any) {
  return (
    <div className="bg-[#121212] p-4 rounded-lg space-y-3">
      {profiles.map((p: any, i: number) => (
        <div key={i} className="p-3 bg-[#1c1c1c] rounded-md">
          <h4 className="text-sm font-bold">{p.title}</h4>
          <p className="text-xs text-white/60">{p.level}</p>
        </div>
      ))}
    </div>
  );
}
