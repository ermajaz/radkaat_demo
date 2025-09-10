import Image from "next/image";

interface Props {
  bike: {
    logo: string;
    name: string;
    features: { label: string; value: string }[];
  };
}

export default function BikeText({ bike }: Props) {
  return (
    <div className="min-w-[250px] flex flex-col space-y-6 z-20 text-center lg:text-left">
      <div className="flex flex-col lg:flex-row items-center lg:space-x-3">
        <Image
          src={bike.logo}
          alt={`${bike.name} Logo`}
          width={60}
          height={60}
          className="hover:scale-110 transition-transform duration-300"
        />
        <h2 className="text-5xl font-bold mt-2 lg:mt-0">{bike.name}</h2>
      </div>
      <ul className="text-lg space-y-4">
        {bike.features.map((f, idx) => (
          <li key={idx} className="flex flex-col">
            <span className="text-gray-400">{f.label}</span>
            <span className="font-semibold">{f.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
