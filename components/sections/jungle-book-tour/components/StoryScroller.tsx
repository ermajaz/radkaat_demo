"use client";

import StoryCardDesktop from "./StoryCardDesktop";
import { Tour } from "../types/tours.types";


export default function StoryScroller({
  destinations,
  activeIndex,
}: {
  destinations: Tour[];
  activeIndex: number;
}) {
  return (
    <>
      {destinations.map((item, index) => (
        <div key={item._id} onClick={() =>
          window.open(`${`/stories/${item._id}/${item.trip_name}`}`, "_blank")
        } className="snap-start shrink-0 w-full flex justify-center">
          <StoryCardDesktop destination={item} isActive={activeIndex === index} />

        </div>
      ))}
    </>
  );
}
