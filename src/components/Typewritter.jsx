"use client";
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";

function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Science",
    },
    {
      text: "and",
    },
    {
      text: "Technology",
    },
    {
      text: "for",
    },
    {
      text: "Societal",
    },
    {
      text: "Development",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}

export default TypewriterEffectSmoothDemo;
