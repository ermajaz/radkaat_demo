"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { stories } from "@/utils/data";
import { StorySidebar } from "@/components/story/StorySidebar";
import HeroTout from "@/components/story/HeroTout";
import Image from "next/image";
import { TourGallery } from "@/components/story/TourGallery";
import StoryStrip from "@/components/common/StoryStrip";
import { StoryContentRenderer } from "@/components/story/StoryContentRenderer";

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
          quality={100}
          src={story.img}
          alt={story.title}
          fill
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />

        {/* Button: View Gallery */}
        <button
          onClick={() => setGalleryOpen(true)}
          className="absolute cursor-pointer bottom-24 right-4 h-[44px] z-20 text-[16px] flex items-center gap-2.5 px-4 py-2.5 
             bg-[#1A1A1A]/80 backdrop-blur-sm hover:bg-[#1A1A1A]/90 
             text-stone-200 font-semibold border-[0.5px] border-stone-500/50 
             rounded-[2px] shadow-md"
          style={{
            boxShadow: "0px 4px 30px 0px #0000001A",
            backdropFilter: "blur(5px)",
          }}
        >
          <Image
            quality={100}
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

      {/* Sidebar + Story Content */}
      <div className="flex flex-col min-h-screen mb-20 lg:flex-row p-6 lg:p-10 bg-superblack text-white relative z-10">
        {/* SIDEBAR - Sticky */}
        <div className="w-full lg:w-[350px] lg:pr-10 mb-10 lg:mb-0">
          <div className="lg:sticky lg:top-0">
            <StorySidebar
              contents={contents.map((c) => ({ title: c.title }))}
              activeIndex={activeIndex}
              onSelect={setActiveIndex}
            />
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="flex-1 pt-10 pl-10 flex flex-col gap-8">
          <StoryContentRenderer
            section={contents[activeIndex]}
            nextTourName={nextStory.title}
            onNextTourClick={handleNextStory}
          />
        </div>
      </div>

      {/* TourGallery Overlay */}
      {galleryOpen && (
        <TourGallery
          title={story.title}
          images={story.images ?? []}
          open={galleryOpen}
          onClose={() => setGalleryOpen(false)}
        />
      )}

      {/* Sticky Bottom Strip */}
      <StoryStrip
        name={story.title}
        price={story.price ?? 24999}
        onBuy={() => alert(`Buying ${story.title}`)}
      />
    </main>
  );
}
