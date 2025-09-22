export default function ColorDot({ color, selected }: { color: string; selected?: boolean }) {
  return (
    <div
      className={`relative cursor-pointer flex items-center justify-center ${
        selected ? "p-[3px] border-2 border-white rounded-full" : ""
      }`}
    >
      <div
        className="w-5 h-5 rounded-full border border-white/20"
        style={{ background: color }}
      />
    </div>
  );
}
