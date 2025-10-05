"use client";

import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { stories } from "@/utils/data";
import { StorySidebar } from "@/components/story/StorySidebar";
import { StoryContentCard } from "@/components/story/StoryContentCard";
import HeroTout from "@/components/story/HeroTout";
import Image from "next/image";
import { ImageIcon } from "lucide-react";
import { TourGallery } from "@/components/story/TourGallery";

export default function StoryPage() {
  const params = useParams();
  const { id } = params as { id: string; slug?: string };
  const router = useRouter();

  // Find story by ID
  const currentIndex = stories.findIndex((s) => s.id === Number(id));
  const story = stories[currentIndex] ?? stories[0];

  const contents = [...(story.content ?? [])];
  const [activeIndex, setActiveIndex] = useState(0);

  // Overlay state
  const [galleryOpen, setGalleryOpen] = useState(false);

  // Determine next story
  const nextStory = stories[(currentIndex + 1) % stories.length];

  const handleNextStory = () => {
    router.push(
      `/stories/${nextStory.id}/${nextStory.title
        .toLowerCase()
        .replace(/\s+/g, "-")}`
    );
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="relative">
      {/* Hero Section */}
      <div className="relative w-full h-screen">
        <Image quality={100}
          src={story.img}
          alt={story.title}
          fill
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Blackish Overlay */}
        <div className="absolute inset-0 bg-black/40" />
        {/* Button at bottom-right */}
        <button
          onClick={() => setGalleryOpen(true)}
          className="absolute cursor-pointer bottom-4 right-4 h-[44px] z-20 text-[16px] flex items-center gap-2.5 px-4 py-2.5 
             bg-[#1A1A1A]/80 backdrop-blur-sm hover:bg-[#1A1A1A]/90 
             text-stone-200 font-semibold border-[0.5px] border-stone-500/50 
             rounded-[2px] shadow-md"
          style={{
            boxShadow: "0px 4px 30px 0px #0000001A",
            backdropFilter: "blur(5px)",
          }}
        >
          <Image quality={100}
            src="/icons/gallery-icon.png"
            alt="gallery-icon"
            width={28}
            height={23}
          />
          View All Photos
        </button>

        <div className="relative z-10">
          <HeroTout title={story.title} />
        </div>
      </div>

      {/* Sidebar + Story Content Section */}
      <div className="p-10 pb-[50vh] flex min-h-screen bg-superblack text-white">
        <StorySidebar
          contents={contents.map((c) => ({ title: c.title }))}
          activeIndex={activeIndex}
          onSelect={setActiveIndex}
        />

        <div className="flex-1 p-10 pt-5 flex flex-col gap-8">
          <StoryContentCard
            content={contents[activeIndex]}
            nextTourName={nextStory.title}
            onNextTourClick={handleNextStory}
          />
        </div>
      </div>
      {/* TourGallery Overlay */}
      {galleryOpen && (
        <TourGallery
          title={story.title}
          images={story.images ?? []} // ensure your story object has an `images` array
          open={galleryOpen}
          onClose={() => setGalleryOpen(false)}
        />
      )}
    </main>
  );
}
