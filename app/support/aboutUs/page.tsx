"use client"

import StickySidebarLayout from "@/features/support/components/StickySidebarLayout";
import SupportLayout from "@/features/support/components/SupportLayout";
import { supportData } from "@/features/support/utils/support";
import React from "react";

export default function AboutPage() {
  return (
    <SupportLayout image="/images/parallex.jpeg" >
      <StickySidebarLayout sections={supportData.about} />
    </SupportLayout>
  );
}
