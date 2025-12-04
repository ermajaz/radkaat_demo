"use client";

import { useIsMobile } from "@/hooks/useIsMobile";
import StoryCardDesktop from "./StoryCardDesktop";
import StoryCardMobile from "./StoryCardMobile";
import { Tour } from "@/features/story/types/story.types";


export default function StoryScroller({
  destinations,
  activeIndex,
}: {
  destinations: Tour[];
  activeIndex: number;
}) {
  const isMobile = useIsMobile();
  return (
    <>
      {destinations.map((item, index) => (
        <div key={item.id} onClick={() =>
          window.open(`${item?.link}`, "_blank")
        } className="snap-start shrink-0 w-full flex justify-center">
          {isMobile ? (
            <StoryCardMobile destination={item} isActive={activeIndex === index} />
          ) : (
            <StoryCardDesktop destination={item} isActive={activeIndex === index} />
          )}
        </div>
      ))}
    </>
  );
}
