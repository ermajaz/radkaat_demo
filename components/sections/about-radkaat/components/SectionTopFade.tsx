export default function SectionTopFade() {
  return (
    <div
      className="
        pointer-events-none
        absolute -top-15 left-0 w-full h-[60px]
        bg-linear-to-t
        from-superblack
        via-superblack/85
        to-transparent
        z-30
      "
    />
  );
}
