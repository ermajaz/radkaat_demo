"use client";

import { motion } from "framer-motion";
import { MessageSquare, ThumbsUp } from "lucide-react";
import Image from "next/image";

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
    <section className="pb-16 px-6">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-sandstorm">
        Discussion Forum
      </h2>
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Forum Posts */}
        <div className="space-y-8">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative group bg-gradient-to-tr from-gray-900/60 to-gray-900/30 backdrop-blur-md border border-gray-800 rounded-3xl p-6 shadow-lg hover:scale-105 hover:shadow-2xl transition-transform cursor-pointer overflow-hidden"
            >
              {/* Author */}
              <div className="flex items-center gap-3 mb-4">
                <div className="relative w-10 h-10">
                  <div className="absolute -inset-1 bg-gradient-to-tr from-rust to-sandstorm rounded-full blur opacity-30 animate-pulse"></div>
                  <Image
                    src={post.avatar}
                    alt={post.author}
                    width={40}
                    height={40}
                    className="rounded-full border border-gray-300 relative"
                  />
                </div>
                <p className="font-semibold text-sandstorm">{post.author}</p>
              </div>

              {/* Content */}
              <h3 className="text-lg md:text-xl font-bold text-sandstorm drop-shadow-md">
                {post.title}
              </h3>
              <p className="text-gray-300 text-sm md:text-base mt-1">{post.content}</p>

              {/* Actions */}
              <div className="flex items-center gap-6 mt-4 text-gray-400 text-sm">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-1 hover:text-rust transition"
                >
                  <ThumbsUp size={16} /> {post.likes}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-1 hover:text-sandstorm transition"
                >
                  <MessageSquare size={16} /> {post.comments}
                </motion.button>
              </div>

              {/* Hover Glow Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-rust/20 to-transparent opacity-0 group-hover:opacity-30 transition-opacity rounded-3xl pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
