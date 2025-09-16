interface Props {
  bike: {
    specs: Record<string, string>;
  };
}

export default function BikeSpecs({ bike }: Props) {
  return (
    <div className="bg-white/10 backdrop-blur-lg border border-gray-400 p-6 rounded-2xl shadow-xl space-y-4 w-full max-w-[300px] ml-auto hover:scale-105 transition-transform duration-500">
      {Object.entries(bike.specs).map(([key, value], idx, arr) => (
        <div
          key={key}
          className={`pb-4 ${
            idx !== arr.length - 1 ? "border-b border-gray-400" : ""
          }`}
        >
          <h3 className="text-base font-semibold text-gray-300 uppercase mb-1">
            {key}
          </h3>
          <p className="text-sm break-words">{value}</p>
        </div>
      ))}
    </div>
  );
}
