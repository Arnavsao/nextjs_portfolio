/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] pb-20 rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
    {
      quote:
        "Arnav demonstrated great dedication, creativity, and technical ability throughout his internship. His work on our project was invaluable, and his enthusiasm for learning new technologies was truly impressive.",
      name: "John Doe",
      title: "Lead Developer at GrapplTech",
    },
    {
      quote:
        "I had the pleasure of working with Arnav during his internship at our company. His problem-solving skills and ability to work under pressure contributed significantly to the success of the team. His technical expertise, especially in React and Tailwind CSS, was exceptional.",
      name: "Eshwar Nagaraj",
      title: "CEO at GrapplTech",
    },
    {
      quote:
        "Arnav is a fast learner and a great team player. During his time with us, he handled complex tasks with ease and consistently delivered high-quality results. His passion for coding and attention to detail made him an excellent intern.",
      name: "Rajesh Sao",
      title: "CTO at Luckmatrix, San Jose",
    },
    {
      quote:
        "It was a pleasure to have Arnav on our team during his internship. He contributed valuable insights and was always eager to collaborate. His ability to adapt quickly and deliver results made him a standout intern.",
      name: "Emily Clark",
      title: "HR Manager at GrapplTech",
    },
    {
      quote:
        "Arnav's work ethic and willingness to go the extra mile were apparent from day one. He brought innovative ideas to the table, and his ability to execute them in a timely manner impressed the entire team.",
      name: "David Brown",
      title: "CTO at GrapplTech",
    },
  ];