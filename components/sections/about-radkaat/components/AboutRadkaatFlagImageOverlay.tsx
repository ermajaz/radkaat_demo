export default function AboutRadkaatFlagImageOverlay() {
  return (
    <div
      className="
        pointer-events-none
        absolute top-0 left-0 w-full h-[140px] 
        bg-linear-to-b 
        from-[#000000]/90 
        via-[#000000]/60 
        to-transparent 
        backdrop-blur-[6px]
        z-30
      "
    />
  );
}
