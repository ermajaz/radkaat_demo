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
      {/* Ambient lighting background */}
      {/* <div className="absolute inset-0 -z-10 bg-linear-to-b from-[#0a0a0a] via-[#121212] to-[#0a0a0a]" />
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-gradient-to-tr from-army/20 via-sandstorm/10 to-transparent rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-gradient-to-tl from-rust/15 via-transparent to-transparent rounded-full blur-[120px]" /> */}

      <h2 className="text-4xl md:text-5xl font-bold text-center text-army mb-20 tracking-wide">
        Discussion Forum
      </h2>

      <div className="max-w-6xl mx-auto space-y-12">
        {posts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            className="relative group overflow-hidden border border-white/10 bg-[rgba(18,18,18,0.7)] backdrop-blur-2xl backdrop-saturate-150 p-6 md:p-8 shadow-[0_4px_30px_rgba(0,0,0,0.6)] transition-all duration-500"
          >
            {/* Glow overlay */}
            <motion.div
              className="absolute inset-0 -z-10 bg-linear-to-br from-army/10 via-transparent to-sandstorm/10 opacity-0 group-hover:opacity-40 blur-2xl transition-opacity duration-700"
            />

            {/* Top Accent Line */}
            <motion.div
              className="absolute top-0 left-0 h-[3px] w-0 bg-linear-to-r from-army via-sandstorm to-rust group-hover:w-full transition-all duration-700"
            />

            {/* Content layout */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10">
              {/* Author Avatar */}
              <div className="shrink-0 relative">
                <div className="absolute inset-0 rounded-full bg-linear-to-tr from-army via-sandstorm to-transparent blur-xl opacity-30 group-hover:opacity-70 transition-opacity duration-700" />
                <Image
                  src={post.avatar}
                  alt={post.author}
                  width={72}
                  height={72}
                  quality={100}
                  className="rounded-full border border-white/20 relative z-10"
                />
              </div>

              {/* Post Details */}
              <div className="flex-1 flex flex-col gap-4">
                <div>
                  <h3 className="text-2xl font-semibold text-sandstorm mb-1">
                    {post.title}
                  </h3>
                  <p className="text-white/60 text-sm">{post.author}</p>
                </div>
                <p className="text-white/80 text-sm md:text-base leading-relaxed">
                  {post.content}
                </p>

                {/* Actions */}
                <div className="flex gap-6 mt-3">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-1.5 text-white/60 hover:text-army transition"
                  >
                    <ThumbsUp
                      size={18}
                      className="transition-colors cursor-pointer group-hover:text-army"
                    />
                    <span className="text-sm">{post.likes}</span>
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-1.5 text-white/60 hover:text-sandstorm transition"
                  >
                    <MessageSquare size={18}  className="cursor-pointer"/>
                    <span className="text-sm">{post.comments}</span>
                  </motion.button>
                </div>
              </div>
            </div>

            {/* Hover light sweep */}
            <motion.div
              className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1.3s] ease-in-out"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
