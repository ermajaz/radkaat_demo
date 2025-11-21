"use client";

import dynamic from "next/dynamic";

// Leaflet must load ONLY in browser — so use dynamic import
const MapInner = dynamic(() => import("./MapInner"), {
  ssr: false,
});

export default function Map(props: any) {
  return <MapInner {...props} />;
}
