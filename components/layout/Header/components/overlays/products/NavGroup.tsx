"use client";

export default function NavGroup({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="w-1/2">
      <span className="text-sandstorm text-base font-bold">{title}</span>
      <div className="flex flex-col mt-2 gap-1">{children}</div>
    </div>
  );
}
