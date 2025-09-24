"use client"
import SupportLayout from "@/components/support/SupportLayout";
import StickySidebarLayout from "@/components/support/StickySidebarLayout";
import { supportData } from "@/utils/support";
import React from "react";

export default function AboutPage() {
  return (
    <SupportLayout image="/images/parallex.jpeg" >
      <StickySidebarLayout sections={supportData.about} />
    </SupportLayout>
  );
}
