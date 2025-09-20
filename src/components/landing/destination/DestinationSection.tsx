"use client";
import React from "react";
import DestinationCard from "./DestinationCard";
import { destinations } from "@/utils/destinations";

const DestinationSection = () => {
  return (
    <div className="w-full">
      {destinations.map((destination) => (
        <DestinationCard key={destination.id} destination={destination} />
      ))}
    </div>
  );
};

export default DestinationSection;
