"use client";

import { useResponsiveComponent } from "@/hooks/useResponsiveComponent";
import { TableBikeName, TableModelName } from "./components/geometry/utils/geometry.types";
import BikePageClientDesktop from "./BikePageClientDesktop";
import BikePageClientMobile from "./BikePageClientMobile";


export default function BikesPageClient({
  bikeName,
  modelName,
}: {
  bikeName: TableBikeName;
  modelName: TableModelName;
}) {


  return (
    <>{useResponsiveComponent(
      <BikePageClientMobile bikeName={bikeName} modelName={modelName} />,
      <BikePageClientDesktop bikeName={bikeName} modelName={modelName} />
    )}
    </>
  );
}
