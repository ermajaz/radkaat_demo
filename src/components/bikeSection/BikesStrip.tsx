"use client";

import Image from "next/image";
import Slider from "react-slick";
import { bikesData } from "@/utils/data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function BikesStrip() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: true,
    centerMode: true, // <--- key to center slides
    centerPadding: "0px", // remove extra padding
  };

  return (
    <div className="sticky top-0 z-50 w-full bg-sandstorm h-16 flex items-center justify-center">
      <Slider {...settings} className="bikes-slider w-full">
        {/* Slide 1: All bike logos + names */}
        <div className="slide-content flex justify-center items-center w-full">
          <div className="flex space-x-8">
            {bikesData.map((bike) => (
              <div key={bike.name} className="flex items-center space-x-2">
                <div className="w-10 h-10 relative">
                  <Image
                    src={bike.logo}
                    alt={bike.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <h2 className="font-semibold text-[20px] !tracking-[5px]">
                  {bike.name}
                </h2>
              </div>
            ))}
          </div>
        </div>

        {/* Slide 2: Tagline */}
        <div className="slide-content flex !flex-row justify-center items-center w-full space-x-4">
          <div className="flex items-center justify-center space-x-3">
            {bikesData.map((bike) => (
              <div key={bike.name} className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-white" />
                <h2 className="font-bold text-[16px] !tracking-[3px]">{bike.name}</h2>
              </div>
            ))}
            <div className="h-[2px] w-20 bg-white mx-4" />
            <h2 className="font-bold text-[16px] uppercase !tracking-[3px]">
              Mountain legends reimagined as rides
            </h2>
          </div>
        </div>
      </Slider>
    </div>
  );
}
