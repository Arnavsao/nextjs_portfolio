/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { div, h1 } from "framer-motion/client";

// Importing images from the assets folder
import contact1 from "@/assets/contact1.png"; // LinkedIn image
import contact2 from "@/assets/contact2.png"; // GitHub image
import contact3 from "@/assets/contact3.png"; // Email image
import contact4 from "@/assets/contact4.png"; // LeetCode image
import contact5 from "@/assets/contact5.png"; // Twitter image

const people = [
  {
    id: 1,
    name: "LinkedIn",
    image: contact1, // Local image for LinkedIn
    link: "https://www.linkedin.com/in/arnavsao/", // LinkedIn link
    designation: "Professional Network", // Placeholder designation
  },
  {
    id: 2,
    name: "Github",
    image: contact2, // Local image for GitHub
    link: "https://github.com/Arnavsao", // GitHub link
    designation: "Code Repository", // Placeholder designation
  },
  {
    id: 3,
    name: "Email",
    image: contact3, // Local image for Email
    link: "mailto:arnavsao1924@gmail.com", // Email link
    designation: "Contact via Email", // Placeholder designation
  },
  {
    id: 4,
    name: "LeetCode",
    image: contact4, // Local image for LeetCode
    link: "https://leetcode.com/u/arnavsao1924/", // LeetCode link
    designation: "Practice Coding Challenges", // Placeholder designation
  },
  {
    id: 5,
    name: "Twitter",
    image: contact5, // Local image for Twitter
    link: "https://x.com/_arnav_sao_", // Twitter link
    designation: "Microblogging", // Placeholder designation
  },
];

export function AnimatedTooltipPreview() {
  return (
    <div
  className="flex flex-row items-center justify-center w-full bg-transparent"
>
  <AnimatedTooltip items={people} />
</div>
  );
}