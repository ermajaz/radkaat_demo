import Image from "next/image";

type Props = {
  skus: { id: string; name: string; image: string }[];
};

export default function RelatedSkus({ skus }: Props) {
  return (
    <div className="w-full mt-6 grid grid-cols-3 gap-6">
      {skus.map((sku) => (
        <div
          key={sku.id}
          className="relative overflow-hidden cursor-pointer group shadow-lg"
        >
          {/* SKU Image */}
          <Image
            src={sku.image}
            alt={sku.name}
            width={400}
            height={280}
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-superblack/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white text-lg font-bold text-center px-2">
              {sku.name}
            </span>
          </div>

          {/* Always show name centered over image */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="text-white text-lg font-bold text-center px-2">
              {sku.name}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
