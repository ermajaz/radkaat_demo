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
    <section className="relative w-full min-h-screen bg-superblack py-20 px-6 overflow-hidden">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-sandstorm mb-20 tracking-wide">
        Discussion Forum
      </h2>

      <div className="max-w-6xl mx-auto space-y-10">
        {posts.map((post, i) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.1 }}
            viewport={{ once: true }}
            className="
              relative
              border border-white/10 
              bg-[rgba(18,18,18,0.85)]
              backdrop-blur-2xl 
              p-6 md:p-8
              shadow-[0_4px_30px_rgba(0,0,0,0.5)]
            "
          >
            {/* Top accent line - Static */}
            <div className="absolute top-0 left-0 h-[3px] w-full bg-linear-to-r from-rust via-sandstorm to-army opacity-70" />

            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10 mt-3">
              {/* Avatar */}
              <div className="relative shrink-0">
                <div className="absolute inset-0 rounded-full bg-rust/20 blur-xl"></div>

                <Image
                  src={post.avatar}
                  alt={post.author}
                  width={72}
                  height={72}
                  className="rounded-full border border-white/20 relative z-10"
                />
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col gap-4">
                <div>
                  <h3 className="text-2xl font-semibold text-sandstorm mb-1">
                    {post.title}
                  </h3>
                  <p className="text-white/50 text-sm">{post.author}</p>
                </div>

                <p className="text-white/80 text-sm md:text-base leading-relaxed">
                  {post.content}
                </p>

                {/* Static actions (no hover motion) */}
                <div className="flex gap-6 mt-3">
                  <button className="flex items-center gap-1.5 text-white/60 hover:text-sandstorm transition">
                    <ThumbsUp size={18} />
                    <span className="text-sm">{post.likes}</span>
                  </button>

                  <button className="flex items-center gap-1.5 text-white/60 hover:text-sandstorm transition">
                    <MessageSquare size={18} />
                    <span className="text-sm">{post.comments}</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
