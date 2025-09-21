// BikeOverlayDetails.tsx
type Props = {
  details: {
    size: string;
    color: string;
    dimension: string;
    material: string;
  };
};

export default function BikeOverlayDetails({ details }: Props) {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      {/* Semi-transparent overlay behind table */}
      <div className="absolute inset-0 bg-superblack/30 rounded-xl pointer-events-auto" />

      {/* Table container */}
      <div className="relative w-96 pointer-events-auto">
        <h3 className="text-xl font-bold mb-4 text-center border-b border-yellow-400 pb-2 text-white">
          Specifications
        </h3>
        <table className="w-full text-left border-collapse text-white">
          <tbody>
            <tr className="border-b border-gray-400">
              <td className="py-2 font-semibold">📏 Size</td>
              <td className="py-2">{details.size}</td>
            </tr>
            <tr className="border-b border-gray-400">
              <td className="py-2 font-semibold">🎨 Color</td>
              <td className="py-2">{details.color}</td>
            </tr>
            <tr className="border-b border-gray-400">
              <td className="py-2 font-semibold">📐 Dimension</td>
              <td className="py-2">{details.dimension}</td>
            </tr>
            <tr>
              <td className="py-2 font-semibold">⚒ Material</td>
              <td className="py-2">{details.material}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
