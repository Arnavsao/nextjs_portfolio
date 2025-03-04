"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import { GlobeDemo } from "./GlobeDemo";

export function BackgroundBeamsDemoContact() {
  return (
    <div className="pt-20 pb-20 h-screen w-auto rounded-md bg-black relative flex items-center justify-center antialiased">
      <div className="flex flex-col md:flex-row items-center justify-center max-w-7xl w-full mx-auto gap-8 px-4">
        {/* Left Section: Contact Form */}
        <div className="md:w-1/2 w-full flex flex-col items-center">
          <div className="max-w-2xl w-full">
            <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
              Let&apos;s Connect
            </h1>
            <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
              Interested in collaborating or learning more about my work? Fill out the form below, and I will get back to you soon!
            </p>

            <input
              type="text"
              placeholder="Your Name"
              className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full relative z-10 mt-4 bg-neutral-950 placeholder:text-neutral-700 px-4 py-2"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full relative z-10 mt-4 bg-neutral-950 placeholder:text-neutral-700 px-4 py-2"
            />
            <textarea
              placeholder="Your Message"
              className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full relative z-10 mt-4 bg-neutral-950 placeholder:text-neutral-700 h-32 px-4 py-2"
            ></textarea>

            <button className="w-full mt-4 bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg text-sm font-bold">
              Send Message
            </button>
          </div>
        </div>

        {/* Right Section: Globe Visualization */}
        <div className="md:w-1/2 w-full flex items-center justify-center">
          <GlobeDemo />
        </div>
      </div>

      <BackgroundBeams />
    </div>
  );
}