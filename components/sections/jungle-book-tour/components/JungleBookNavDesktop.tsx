"use client";

export default function JungleBookNavDesktop({ destinations, activeIndex, onStoryClick }: any) {
  return (
    <div className="flex justify-between items-center h-[110px] px-10 py-2 bg-[#121212]">
      {/* Left Section */}
      <div className="flex flex-col w-[350px]">
        <h2 className="text-white text-[48px] font-bold leading-tight">
          THE JUNGLE BOOK
        </h2>
        <p className="text-stone text-[10px] font-normal max-w-full">
          Your handbook of advantures-stories, guides, routes and adventures wisdom from our explorer.
        </p>
      </div>

      {/* Right Section */}
      <div className="flex gap-10 pr-10 overflow-x-auto hide-scrollbar">
        {destinations.map((story: any, index: number) => (
          <div
            key={index}
            onClick={() => onStoryClick(index)}
            className="cursor-pointer max-w-[200px] flex flex-col items-center text-center transition-all duration-300"
          >
            <span
              className={`uppercase text-[12px] font-medium ${activeIndex === index ? "text-stone" : "text-gray-300"
                }`}
            >
              {story.title}
            </span>
            <span
              className={`text-[10.5px] font-normal ${story?.urgent
                ? "text-sandstorm"
                : activeIndex === index
                  ? "text-stone"
                  : "text-gray-400"
                }`}
            >
              {story?.urgent
                ? story.urgent
                : story?.seat
                  ? story.seat
                  : story.date}
            </span>

            {activeIndex === index && (
              <span className="block w-full h-0.5 bg-stone mt-2"></span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
