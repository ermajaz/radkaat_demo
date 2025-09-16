"use client";

import Link from "next/link";
import React from "react";

const stories = [
  { slug: "shimla_tour", title: "Shimla Tour" },
  { slug: "himalaya_trek", title: "Himalaya Trek" },
];

export default function StoriesPage() {
  return (
    <section className="max-w-4xl mx-auto p-8 space-y-4">
      <h1 className="text-3xl font-bold">Stories</h1>
      <ul className="space-y-2">
        {stories.map((story) => (
          <li key={story.slug}>
            <Link
              href={`/stories/${story.slug}`}
              className="text-blue-600 hover:underline"
            >
              {story.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
