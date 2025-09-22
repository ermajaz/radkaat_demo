import { SKU } from "@/types";
import Image from "next/image";


export default function RelatedSkus({ skus }: { skus: SKU[] }) {
  return (
    <div className="w-full grid grid-cols-3 gap-6">
      {skus.map((sku) => (
        <div
          key={sku.id}
          className="relative overflow-hidden rounded shadow-[0_6px_18px_rgba(0,0,0,0.6)] group bg-black/20"
        >
          <Image src={sku.image} alt={sku.name} width={400} height={280} className="w-full h-44 object-cover" />

          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
            <span className="text-white font-bold text-center px-3">{sku.name}</span>
          </div>

          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="text-white font-bold text-center px-3">{sku.name}</span>
          </div>
        </div>
      ))}
    </div>
  );
}