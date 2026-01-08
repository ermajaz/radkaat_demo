"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import EnquiryFormModal from "./EnquireFormModal";

interface StoryStripProps {
  tourName: string;
  tourId:string;
}

export default function StoryStrip({ tourName,tourId }: StoryStripProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="
          sticky w-full bottom-0 left-0 z-50
          bg-stone backdrop-blur-md
          flex items-center justify-between
          px-6 md:px-10 py-3
        "
      >
        <div className="text-superblack text-[20px] md:text-[22px] font-semibold truncate">
          {tourName.toUpperCase()}
        </div>

        <Button
          className="bg-superblack rounded-none px-6 py-6 cursor-pointer text-white text-[18px] hover:bg-gray-900"
          onClick={() => setOpen(true)}
        >
          ENQUIRE NOW
        </Button>
      </div>

      {/* Desktop → ShadCN Modal */}
      <EnquiryFormModal open={open} onClose={() => setOpen(false)} tourId={tourId} tourTitle={tourName} />
    </>
  );
}
