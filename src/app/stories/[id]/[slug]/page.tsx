"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";

import { stories } from "@/utils/data";
import { StorySidebar } from "@/components/story/StorySidebar";
import { StorySidebarMobile } from "@/components/story/StorySidebarMobile";
import { StoryContentRenderer } from "@/components/story/StoryContentRenderer";
import { StoryContentRendererMobile } from "@/components/story/StoryContentRendererMobile";
import { TourGallery } from "@/components/story/TourGallery";
import HeroTout from "@/components/story/HeroTout";
import StoryStrip from "@/components/common/StoryStrip";
import { StoryStripMobile } from "@/components/common/StoryStripMobile";

export default function StoryPage() {
  const params = useParams();
  const { id } = params as { id: string; slug?: string };
  const router = useRouter();

  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [galleryOpen, setGalleryOpen] = useState(false);

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Find story
  const currentIndex = stories.findIndex((s) => s.id === Number(id));
  const story = stories[currentIndex] ?? stories[0];
  const contents = [...(story.content ?? [])];
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
      {/* HERO */}
      <section className="relative w-full h-[85vh] md:h-screen">
        <Image
          src={story.img}
          alt={story.title}
          fill
          quality={100}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10">
          <HeroTout title={story.title} />
        </div>

        {/* Gallery Button */}
        <button
          onClick={() => setGalleryOpen(true)}
          className="absolute bottom-20 right-4 z-20 rounded-lg sm:rounded-sm flex items-center gap-2 px-4 py-2 bg-[#1A1A1A]/80 text-stone-200 cursor-pointer border border-stone-700 text-sm md:text-base"
        >
          <Image
            src="/icons/gallery-icon.png"
            alt="gallery-icon"
            width={24}
            height={20}
          />
          View Photos
        </button>
      </section>

      {/* STORY SECTIONS */}
      {isMobile ? (
        <div className="flex flex-col p-4 gap-4 relative">
          <StorySidebarMobile
            contents={contents.map((c) => ({ title: c.title }))}
            activeIndex={activeIndex}
            onSelect={setActiveIndex}
          />
          <StoryContentRendererMobile
            section={contents[activeIndex]}
            nextTourName={nextStory.title}
            onNextTourClick={handleNextStory}
          />
        </div>
      ) : (
        <div className="flex min-h-screen mb-20 lg:flex-row p-6 lg:p-10 relative">
          <div className="w-full lg:w-[350px] lg:pr-10 mb-10 lg:mb-0">
            <div className="lg:sticky lg:top-0">
              <StorySidebar
                contents={contents.map((c) => ({ title: c.title }))}
                activeIndex={activeIndex}
                onSelect={setActiveIndex}
              />
            </div>
          </div>

          <div className="flex-1 pt-10 pl-0 lg:pl-10 flex flex-col gap-8">
            <StoryContentRenderer
              section={contents[activeIndex]}
              nextTourName={nextStory.title}
              onNextTourClick={handleNextStory}
            />
          </div>
        </div>
      )}

      {/* GALLERY OVERLAY */}
      {galleryOpen && (
        <TourGallery
          title={story.title}
          images={story.images ?? []}
          open={galleryOpen}
          onClose={() => setGalleryOpen(false)}
        />
      )}

      {/* STICKY STRIP */}
      {/* STICKY STRIP */}
      {isMobile ? (
        <StoryStripMobile
          name={story.title}
          price={story.price ?? 24999}
          onBuy={() => alert(`Buying ${story.title}`)}
        />
      ) : (
        <StoryStrip
          name={story.title}
          price={story.price ?? 24999}
          onBuy={() => alert(`Buying ${story.title}`)}
        />
      )}

    </main>
  );
}
