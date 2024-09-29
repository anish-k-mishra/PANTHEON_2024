"use client";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";
import p34 from "../assets/logo bg rem.png";
import p35 from "../assets/70_years.png";
import Link from "next/link";
import Type from "../components/Typewritter";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";
import Image from "next/image";
import hero from "../assets/hero.png";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

export const AuroraHero = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      className="relative grid min-h-screen place-content-center overflow-hidden bg-gray-950 px-4 py-12 text-gray-200 sm:py-16 md:py-24 lg:py-32"
    >
      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Hero Logo */}
        <div className="flex -mt-12 md:-mt-24">
          <Image
            src={p34}
            alt="hero"
            className="w-full max-w-[250px] sm:max-w-[300px] md:max-w-[400px] lg:max-w-[500px] h-auto"
          />
        </div>

        {/* Hero Image */}
        <div className="flex mt-8 md:-mt-28 flex-col">
          <Image
            src={hero}
            alt="hero"
            className="w-full max-w-[200px] sm:max-w-[250px] md:max-w-[350px] lg:max-w-[450px] h-auto"
          />
        </div>

        {/* Typewriter Effect */}
        <div className="mt-6 md:-mt-16">
          <Type />
        </div>
      </div>

      {/* Background Stars */}
      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={50} count={2500} factor={4} fade speed={2} />
        </Canvas>
      </div>
    </motion.section>
  );
};
