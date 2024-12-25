import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import Image, { StaticImageData } from "next/image";  // Import StaticImageData for types

import btp from "@/assets/btp.png";
import chatbot from "@/assets/chatbot.png";
import inflex from "@/assets/inflex.png";
import rejouice from "@/assets/rejouice.png";
import portfolio from "@/assets/portfolio.png";
import healthybites from "@/assets/helthybites.png";
import saas from "@/assets/saas.png";
import tomato from "@/assets/tomato.png";

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
      src: saas.src,  // Accessing the .src property of StaticImageData
    },
    {
      category: "Tomato: Food Delivery Website",
      title: "Scalable Food Delivery Platform",
      content: (
        <p>
          Developed a user-friendly MERN stack app featuring real-time order tracking and secure payments. Optimized scalable RESTful APIs for seamless data handling, reducing response times by 30% and increasing customer engagement by 40%.
        </p>
      ),
      src: tomato.src,  // Accessing the .src property of StaticImageData
    },
    {
      category: "Frontend Developer Intern",
      title: "HealthyBites",
      content: (
        <p>
          Developing and maintaining the frontend of the HealthyBites platform using Next.js and Tailwind CSS, ensuring optimized performance and responsiveness. Leveraged the Aceternity library for dynamic features while adhering to modern accessibility and SEO standards.
        </p>
      ),
      src: healthybites.src,  // Accessing the .src property of StaticImageData
    },
    {
      category: "RAG System using OpenAI GPT-4",
      title: "Advanced Document Query System",
      content: (
        <p>
          Created a Retrieval-Augmented Generation system leveraging GPT-4 and LangChain, achieving 40% improved query accuracy and handling over 10,000 daily queries efficiently.
        </p>
      ),
      src: btp.src,  // Accessing the .src property of StaticImageData
    },
    {
      category: "SIH'24 GAIL Chatbot",
      title: "AI Chatbot for Energy Queries",
      content: (
        <p>
          Designed and deployed an AI-powered chatbot using Python, NLP, and OpenAI API. Achieved 95% user satisfaction during testing, providing real-time, intelligent assistance for energy-related queries.
        </p>
      ),
      src: chatbot.src,  // Accessing the .src property of StaticImageData
    },
    {
      category: "Inflex B2C",
      title: "Responsive Web Design",
      content: (
        <p>
          Designed a responsive and dynamic website with secure authentication, increasing client sign-ups by 40% and reducing page load times by 15%. Implemented custom UI elements to enhance engagement.
        </p>
      ),
      src: inflex.src,  // Accessing the .src property of StaticImageData
    },
    {
      category: "Portfolio Website",
      title: "Showcasing My Skills and Work",
      content: (
        <p>
          Built a fully responsive portfolio website featuring modern accessibility standards and showcasing professional achievements and projects.
        </p>
      ),
      src: portfolio.src,  // Accessing the .src property of StaticImageData
    },
    {
      category: "Rejouice Website",
      title: "Interactive Service Provider Website",
      content: (
        <p>
          Designed a service provider website with GSAP animations and Locomotive JS scrolling. Integrated a secure backend with JWT authentication, achieving a 40% increase in client sign-ups and improved data management.
        </p>
      ),
      src: rejouice.src,  // Accessing the .src property of StaticImageData
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