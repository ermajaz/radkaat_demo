interface Props {
  text: string;
}

export default function BikeBranding({ text }: Props) {
  return (
    <div className="hidden absolute top-1/2 -translate-y-1/2 left-[50px] lg:flex flex-col items-center justify-center h-full">
      {text.split("").map((char, i) => (
        <h2
          key={i}
          className="text-7xl font-extrabold tracking-widest leading-[8rem] text-white"
        >
          {char}
        </h2>
      ))}
    </div>
  );
}
