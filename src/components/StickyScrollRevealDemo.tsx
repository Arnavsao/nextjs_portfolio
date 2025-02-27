"use client";
import React from "react";
import StickyScroll from "./ui/sticky-scroll-reveal"; // ✅ Importing default export
import Image from "next/image";

const content = [
  {
    title: "Collaborative Editing",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white bg-gradient-to-br from-cyan-500 to-emerald-500 p-6 rounded-lg">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "Real-time Changes",
    description:
      "See changes as they happen and track every modification in real time, eliminating confusion about the latest version.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/linear.webp"
          width={300}
          height={300}
          layout="intrinsic"
          className="object-cover rounded-lg"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Version Control",
    description:
      "Experience real-time updates and never stress about version control again. Always work on the latest version of your project without manual updates.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white bg-gradient-to-br from-orange-500 to-yellow-500 p-6 rounded-lg">
        Version Control
      </div>
    ),
  },
  {
    title: "Seamless Content Updates",
    description:
      "Ensure your content stays up-to-date automatically, eliminating the need for manual tracking and saving valuable time.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white bg-gradient-to-br from-blue-500 to-purple-500 p-6 rounded-lg">
        Seamless Content Updates
      </div>
    ),
  },
];

export function StickyScrollRevealDemo() {
  return (
    <div className="p-10 bg-gray-800 min-h-screen">
      <h1 className="text-4xl font-bold text-white mb-6">
        Interactive Features Showcase
      </h1>
      <StickyScroll content={content} />
    </div>
  );
}