"use client";

export default function SidebarLayout({
  children,
  onClickInside,
}: {
  children: React.ReactNode;
  onClickInside: (e: any) => void;
}) {
  return (
    <div
      className="w-[450px] h-full p-6 text-white flex justify-between gap-12"
      onClick={onClickInside}
    >

      {children}
    </div>
  );
}
