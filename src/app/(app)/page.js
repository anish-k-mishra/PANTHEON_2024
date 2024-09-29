"use client";
import React from "react";
import { TimelineDemo } from "../../components/Timeline"; // Adjust import path based on folder structure
import { SmoothScrollHero } from "../../components/Hero";
import Carousel from "../../components/Carousel";
import { AuroraHero } from "../../components/AuroraBkc";

const Page = () => {
  return (
    <div className="text-white">
      <AuroraHero />
      <SmoothScrollHero />

      <TimelineDemo />
      <Carousel />
      <hr className="my-8 border-t border-gray-300" />
    </div>
  );
};

export default Page;
