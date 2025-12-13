"use client";
import { useParams, useRouter } from "next/navigation";
import StoryStrip from "./components/StoryStrip";
import { TourGallery } from "./components/TourGallery";
import { useState } from "react";
import { stories } from "./utils/story-data";
import Image from "next/image";
import HeroTout from "./components/HeroTout";
import { StorySidebar } from "./components/StorySidebar";
import { StoryContentRenderer } from "./components/StoryContentRenderer";

export default function IternaryDesktop() {
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
            <section className="relative w-full h-[85vh] md:h-screen">
                <div className="relative z-10">
                    <HeroTout title={story.title} tour={story} />
                </div>

                {/* Gallery Button */}
                <button
                    onClick={() => setGalleryOpen(true)}
                    className="absolute bottom-25 right-4 z-20 rounded-lg sm:rounded-sm flex items-center gap-2 px-4 py-2 bg-[#1A1A1A]/80 text-stone-200 cursor-pointer border border-stone-700 text-sm md:text-base"
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

                <div className="flex-1 pt-2 pl-0 lg:pl-10 flex flex-col gap-8">
                    <StoryContentRenderer
                        section={contents[activeIndex]}
                        nextTourName={nextStory.title}
                        onNextTourClick={handleNextStory}
                    />
                </div>
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
            <StoryStrip
                name={story.title}
            />


        </>
    );
}