"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function AppleCardsCarouselDemo() {
  const projectData = [
    {
      category: "Titans AI SaaS Platform",
      title: "AI Solutions for Business Automation",
      content: (
        <p>
          Built a full-stack web app with React, Firebase, and FastAPI, providing AI solutions to over 50 businesses. Enhanced automation by 35% and deployed voice agents for improved engagement.
        </p>
      ),
    },
    {
      category: "Tomato: Food Delivery Website",
      title: "Scalable Food Delivery Platform",
      content: (
        <p>
          Developed a responsive MERN stack app with real-time order tracking, secure payments, and optimized performance for high-traffic applications.
        </p>
      ),
    },
    {
      category: "RAG System using OpenAI GPT-4",
      title: "Advanced Document Query System",
      content: (
        <p>
          Created a Retrieval-Augmented Generation system leveraging GPT-4 and LangChain, achieving 40% improved query accuracy and handling over 10,000 daily queries.
        </p>
      ),
    },
    {
      category: "SIH'24 GAIL Chatbot",
      title: "AI Chatbot for Energy Queries",
      content: (
        <p>
          Designed and deployed an AI-powered chatbot using Python, NLP, and OpenAI API, achieving 95% user satisfaction during testing for energy-related queries.
        </p>
      ),
    },
    {
      category: "Service Provider Website",
      title: "Responsive Web Design",
      content: (
        <p>
          Built a dynamic website with secure authentication, increasing client sign-ups by 40% and reducing page load times by 15%.
        </p>
      ),
    },
    {
      category: "Portfolio Website",
      title: "Showcasing My Skills and Work",
      content: (
        <p>
          Created a responsive portfolio with accessibility features, showcasing professional achievements and projects.
        </p>
      ),
    },
  ];

  const cards = projectData.map((project, index) => (
    <Card key={index} card={project} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
      Get to know my Projects.
      </h2>
      <Carousel items={cards} />
    </div>
  );
}