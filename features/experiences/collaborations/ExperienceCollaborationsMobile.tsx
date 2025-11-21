"use client";

import LeftPanel from "./components/LeftPanel";
import RightTilesScroller from "./components/RightTilesScroller";

export default function ExperienceCollaborationsMobile() {
  return (
    <section className="w-full h-screen flex flex-col bg-superblack">
      <div className="flex-1">
        <LeftPanel />
      </div>

      <div className="flex-1">
        <RightTilesScroller />
      </div>
    </section>
  );
}
