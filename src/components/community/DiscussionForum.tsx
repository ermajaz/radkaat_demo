"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MessageSquare, ThumbsUp } from "lucide-react";

interface Post {
  id: number;
  author: string;
  avatar: string;
  title: string;
  content: string;
  likes: number;
  comments: number;
}

const posts: Post[] = [
  {
    id: 1,
    author: "Aarav Mehta",
    avatar: "/images/manali/rider-img.jpg",
    title: "Best time for Ladakh ride?",
    content:
      "Planning a Ladakh trip in November. Too cold? Or should I wait until summer?",
    likes: 42,
    comments: 12,
  },
  {
    id: 2,
    author: "Priya Sharma",
    avatar: "/images/manali/rider-img.jpg",
    title: "Which Radkaat jacket is better for monsoon trails?",
    content:
      "I need something lightweight but waterproof. Anyone tried the Trail Jacket vs Expedition Shell?",
    likes: 33,
    comments: 8,
  },
  {
    id: 3,
    author: "Kabir Singh",
    avatar: "/images/manali/rider-img.jpg",
    title: "Spiti or Shimla first for beginners?",
    content:
      "I’ve done local city rides but never mountain trails. Should I attempt Spiti right away?",
    likes: 25,
    comments: 10,
  },
];

export default function DiscussionForum() {
  return (
    <section className="w-full min-h-screen bg-black py-16 px-6">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-sandstorm mb-16">
        Discussion Forum
      </h2>

      <div className="max-w-6xl mx-auto space-y-16">
        {posts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative flex flex-col md:flex-row items-start md:items-center justify-between group"
          >
            {/* Slanted background */}
            <div className="absolute inset-0 bg-gray-900/70 backdrop-blur-md skew-y-[-2deg] rounded-3xl -z-10 border-l-4 border-rust/50" />

            {/* Left: Author */}
            <div className="flex-shrink-0 flex flex-col items-center md:items-start gap-4 mr-6">
              <div className="relative w-16 h-16">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-rust to-sandstorm blur opacity-40 animate-pulse"></div>
                <Image
                  src={post.avatar}
                  alt={post.author}
                  width={64}
                  height={64}
                  className="rounded-full border border-gray-600 relative"
                />
              </div>
              <p className="text-sm text-gray-400">{post.author}</p>
            </div>

            {/* Right: Content */}
            <div className="flex-1 flex flex-col gap-4">
              <h3 className="text-xl md:text-2xl font-bold text-sandstorm">
                {post.title}
              </h3>
              <p className="text-gray-300 text-sm md:text-base">{post.content}</p>

              <div className="flex gap-6 mt-2">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-1 text-gray-400 hover:text-rust transition"
                >
                  <ThumbsUp size={18} /> {post.likes}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-1 text-gray-400 hover:text-sandstorm transition"
                >
                  <MessageSquare size={18} /> {post.comments}
                </motion.button>
              </div>
            </div>

            {/* Hover Glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-rust/30 to-transparent opacity-0 group-hover:opacity-30 transition-opacity pointer-events-none -z-10" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
