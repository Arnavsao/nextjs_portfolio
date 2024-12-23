import React from "react";
import { FlipWords } from "./ui/flip-words";

export function FlipWordsDemo() {
  const words = ["innovative", "responsive", "scalable", "impactful"];

  return (
    <div className="">
      <div className="text-5xl  font-normal text-neutral-600 dark:text-neutral-400 ">
        Building
        <FlipWords words={words} /> <br />
        solutions with expertise.
      </div>
    </div>
  );
}