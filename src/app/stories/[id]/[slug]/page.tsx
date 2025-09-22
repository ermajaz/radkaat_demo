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
        <Image
          src={story.img}
          alt={story.title}
          fill
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Button at bottom-right */}
        <button
          onClick={() => setGalleryOpen(true)}
          className="absolute cursor-pointer bottom-6 right-6 z-20 flex items-center gap-2 px-5 py-2.5 bg-black/70 backdrop-blur-sm hover:bg-black/80 text-white font-semibold rounded-[6px] shadow-lg"
        >
          <div className="flex -space-x-2">
            <ImageIcon size={16} />
          </div>
          View All Photos
        </button>

        <div className="relative z-10">
          <HeroTout title={"Welcome to " + story.title} />
        </div>
      </div>

      {/* Sidebar + Story Content Section */}
      <div className="p-10 flex min-h-screen bg-superblack text-white">
        <StorySidebar
          contents={contents.map((c) => ({ title: c.title }))}
          activeIndex={activeIndex}
          onSelect={setActiveIndex}
        />

        <div className="flex-1 p-10 flex flex-col gap-8">
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
