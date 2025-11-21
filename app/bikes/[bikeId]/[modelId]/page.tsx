import BikesPageClient from "@/features/bikes/BikePageClient";
import { TableBikeName, TableModelName } from "@/features/bikes/components/geometry/utils/geometry.types";

export default async function BikesPage({ params }: {
  params: Promise<{ bikeId: string; modelId: string }>;
}) {
  const { bikeId, modelId } = await params;

  const bikeName = bikeId?.toUpperCase() as TableBikeName;
  const modelName = modelId as TableModelName;

  return (
    <BikesPageClient
      bikeName={bikeName}
      modelName={modelName}
    />
  );
}
