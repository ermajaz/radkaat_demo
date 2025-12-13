"use client";
import { useParams, useRouter } from "next/navigation";
import { StoryStripMobile } from "./components/mobile/StoryStripMobile";
import { TourGallery } from "./components/TourGallery";
import { useState } from "react";
import { stories } from "./utils/story-data";
import Image from "next/image";
import { StorySidebarMobile } from "./components/mobile/StorySidebarMobile";
import { StoryContentRendererMobile } from "./components/mobile/StoryContentRendererMobile";
import HeroToutMobile from "./components/mobile/HeroToutMobile";

export default function IternaryMobile() {
    const params = useParams();
    const { id } = params as { id: string; slug?: string };
    const router = useRouter();
    const [activeIndex, setActiveIndex] = useState(0);
    const [galleryOpen, setGalleryOpen] = useState(false);


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
        <>
            {/* HERO */}
            <section className="relative w-full h-[700px]">
                {/* HERO */}
                <HeroToutMobile title={story.title} tour={story} />

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

            <StoryStripMobile
                name={story.title}
            />
        </>
    );
}