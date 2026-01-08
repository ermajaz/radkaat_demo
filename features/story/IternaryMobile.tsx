"use client";
import { useParams, useRouter } from "next/navigation";
import { StoryStripMobile } from "./components/mobile/StoryStripMobile";
import { TourGallery } from "./components/TourGallery";
import { useEffect, useState } from "react";
import Image from "next/image";
import { StorySidebarMobile } from "./components/mobile/StorySidebarMobile";
import { StoryContentRendererMobile } from "./components/mobile/StoryContentRendererMobile";
import HeroToutMobile from "./components/mobile/HeroToutMobile";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { RootState } from "@/lib/store";
import { fetchTourById, fetchTours } from "./storySlice";
import { Trip } from "./types/story.types";

export default function IternaryMobile() {
    const dispatch = useAppDispatch();
    const params = useParams();
    const { id } = params as { id: string; slug?: string };
    const router = useRouter();
    const { currentTour, isLoading, error } = useAppSelector((state: RootState) => state.story);
    const { tours } = useAppSelector((state: RootState) => state.story);
    const [activeIndex, setActiveIndex] = useState(0);
    const [galleryOpen, setGalleryOpen] = useState(false);

    useEffect(() => {
        if (tours.length === 0) {
            dispatch(fetchTours());
        }
    }, [dispatch, tours.length]);

    // Fetch tour by ID on mount or ID change
    useEffect(() => {
        if (id) {
            dispatch(fetchTourById(id));
        }
    }, [dispatch, id]);

    // Handle loading and error states
    if (isLoading) return <div className="text-white">Loading tour...</div>;
    if (error) return <div className="text-white">Error: {error}</div>;
    if (!currentTour) return <div className="text-white">No tour found</div>;


    const currentIndex = tours.findIndex(
        (t) => t._id === currentTour.id || t._id === (currentTour as Trip).id
    );

    const hasTours = tours.length > 0 && currentIndex !== -1;

    const nextTour = hasTours
        ? tours[(currentIndex + 1) % tours.length]
        : null;



    const handleNextStory = () => {
        router.push(
            `/stories/${nextTour?._id}/${nextTour?.title
                .toLowerCase()
                .replace(/\s+/g, "-")}`
        );
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const contentSections = [
        ...(currentTour.content.story ?? []),

        ...(currentTour.content.itinerary ?? []),

        ...(currentTour.content.packing ?? []),

        ...(currentTour.content.testimonials
            ? [
                {
                    type: "testimonials",
                    title: "Testimonials",
                    data: currentTour.content.testimonials,
                },
            ]
            : []),

        ...(currentTour.content.inclusions
            ? [
                {
                    type: "inclusions",
                    title: currentTour.content.inclusions.title,
                    data: {
                        user_experience: currentTour.content.inclusions.user_experience,
                        author: currentTour.content.inclusions.author,
                        date: currentTour.content.inclusions.date,
                    },
                },
            ]
            : []),

        ...(currentTour.content.exclusions
            ? [
                {
                    type: "exclusions",
                    title: currentTour.content.exclusions.title,
                    data: {
                        user_experience: currentTour.content.exclusions.user_experience,
                        author: currentTour.content.exclusions.author,
                        date: currentTour.content.exclusions.date,
                    },
                },
            ]
            : []),
    ];
    return (
        <>
            {/* HERO */}
            <section className="relative w-full h-[700px]">
                {/* HERO */}
                <HeroToutMobile title={currentTour.title} tour={currentTour} />

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
                    contents={contentSections.map((c) => ({ title: c.title }))}
                    activeIndex={activeIndex}
                    onSelect={setActiveIndex}
                />
                <StoryContentRendererMobile
                    section={contentSections[activeIndex]}
                    tour={currentTour}
                    nextTourName={nextTour?.title}
                    onNextTourClick={handleNextStory}
                />
            </div>

            {/* GALLERY OVERLAY */}
            {galleryOpen && (
                <TourGallery
                    title={currentTour.title}
                    tours={currentTour}
                    images={currentTour.images ?? []}
                    open={galleryOpen}
                    onClose={() => setGalleryOpen(false)}
                />
            )}

            {/* STICKY STRIP */}

            <StoryStripMobile
                tourName={currentTour.title}
                tourId={currentTour.id}
            />
        </>
    );
}