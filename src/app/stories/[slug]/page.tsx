"use client";

import Footer from "@/components/common/Footer";
import { GalleryGrid } from "@/components/story/GalleryGrid";
import HeroScrollParallax from "@/components/story/HeroScrollParallex";
import HeroTout from "@/components/story/HeroTout";
import SimpleGallery from "@/components/story/SimpleGallery";
import StoriesImage from "@/components/story/StoriesImage";
import VideoBlock from "@/components/story/VideoBlock";
import WarrenTextBlock from "@/components/story/WarrenTextBlock";
import { useParams } from "next/navigation";
import React from "react";

// Example data for each story
const storiesData: Record<
  string,
  {
    heroVideo: string;
    heroTitle: string;
    introText: string;
    videoId: string;
    interviewText: string;
    galleryImages: { src: string; alt: string }[];
  }
> = {
  shimla_tour: {
    heroVideo:
      "https://yeticycles-prod.zaneray.com/cms/media/aAkFlPIqRLdaBhuc_WarrenKniss_SantaCruz_160e_WEB_16x9_1.mp4",
    heroTitle: "Shimla Tour with Warren Kniss",
    introText:
      "We've gotten to know Warren over the past six years, and he’s truly one of the nicest, most genuine, and humble people out there.",
    videoId: "DouE0cCivN4",
    interviewText:
      "It has been three years since you last raced. What have you been up to since then?",
    galleryImages: [
      {
        src: "https://yeticycles-prod.zaneray.com/cms/images/aAj43fIqRLdaBheS_WarrenKniss_CrankCase_Web-6.jpg?auto=format,compress&rect=0,159,2048,1366&w=1280&h=854",
        alt: "Warren Kniss",
      },
      {
        src: "https://yeticycles-prod.zaneray.com/cms/images/Zw7GAYF3NbkBXejN_20241009_Powers_RedbullRampage-Day3_1397.jpg?auto=format,compress&rect=0%2C0%2C2999%2C2001&w=1280&h=854",
        alt: "Warren Kniss Yeti 160E",
      },
      {
        src: "https://yeticycles-prod.zaneray.com/cms/images/ZzI-m68jQArT0tOx_Riding_2021_05_04_Smartwool_salida_mtb_IF-7980.jpg?auto=format%2Ccompress&rect=1%2C0%2C2878%2C1920&w=1280&h=854",
        alt: "Warren Kniss Yeti 160E",
      },
      {
        src: "https://yeticycles-prod.zaneray.com/cms/images/Z1IBYZbqstJ98Fqh_Jake-Gasaway_bike_craigburn-7.jpg?auto=format%2Ccompress&rect=2%2C0%2C4768%2C3181&w=1280&h=854",
        alt: "Warren Kniss",
      },
    ],
  },

  himalaya_trek: {
    heroVideo:
      "https://yeticycles-prod.zaneray.com/cms/media/another_video.mp4",
    heroTitle: "Himalaya Trek Adventure",
    introText:
      "Warren takes us through an incredible journey in the Himalayas.",
    videoId: "AnotherVideoId",
    interviewText:
      "How did you prepare for the Himalaya trek, and what was the most challenging part?",
    galleryImages: [
      {
        src: "https://yeticycles-prod.zaneray.com/cms/images/himalaya1.jpg",
        alt: "Himalaya Trek",
      },
      {
        src: "https://yeticycles-prod.zaneray.com/cms/images/himalaya2.jpg",
        alt: "Mountain Riding",
      },
    ],
  },
};

export default function StoryPage() {
  const params = useParams();
  const slug = params.slug as string;

  // Fallback to the first story if slug not found
  const story = storiesData[slug] ?? storiesData[Object.keys(storiesData)[0]];

  return (
    <main className="relative">
      {/* Parallax Hero Section */}
      <div className="fixed top-0 left-0 w-full h-screen z-0">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={story.heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content overlays and scrolls above HeroTout */}
      <div className="relative z-10">
        <HeroTout title={story.heroTitle} />

        {/* Content overlays start here */}
        <div className="bg-black relative">

          {/* Intro text */}
          <WarrenTextBlock />

          {/* YouTube Video */}
          <VideoBlock videoId={story.videoId} title={story.heroTitle} />

          {/* Another text block (example) */}
          <WarrenTextBlock />

          <HeroScrollParallax
            image={story.galleryImages[0].src}
            title={story.heroTitle}
            subtitle="stories"
          />

          {/* Simple gallery */}
          <SimpleGallery src={story.galleryImages[0]} />

          {/* Interview block */}
          <WarrenTextBlock />

          {/* Grid gallery */}
          <GalleryGrid images={story.galleryImages} />

          {/* Single story image */}
          <StoriesImage />

          <Footer />
        </div>
      </div>
    </main>
  );
}
