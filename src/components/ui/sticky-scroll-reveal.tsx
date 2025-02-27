"use client";
import React from "react";

interface ContentItem {
  title: string;
  description: string;
  content: React.ReactNode;
}

interface StickyScrollProps {
  content: ContentItem[];
}

const StickyScroll: React.FC<StickyScrollProps> = ({ content }) => {
  return (
    <div className="sticky-scroll-container p-10 space-y-8">
      {content.map((item, index) => (
        <div key={index} className="scroll-item bg-gray-900 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-white">{item.title}</h2>
          <p className="text-gray-300 mt-2">{item.description}</p>
          <div className="mt-4">{item.content}</div>
        </div>
      ))}
    </div>
  );
};

export default StickyScroll;