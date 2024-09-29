"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis"; // Import Lenis without /react
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import { SiSpacex } from "react-icons/si";
import { FiArrowRight, FiMapPin } from "react-icons/fi";
import { useRef } from "react";
import { CNavbar } from "./CNavbar"; // Import your updated CNavbar
import mhero from "../assets/mhero.jpg";

export const SmoothScrollHero = () => {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      lerp: 0.05, // Configure options as needed
    });

    // Register Lenis with requestAnimationFrame
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Clean up when the component unmounts
    return () => {
      lenis.destroy();
    };
  }, []); // Only run on mount and unmount

  return (
    <div className="bg-zinc-950">
      {/* <CNavbar /> Use your updated Navbar here */}
      <Hero />
    </div>
  );
};

const SECTION_HEIGHT = 1500;

const Hero = () => {
  return (
    <div
      style={{ height: `calc(${SECTION_HEIGHT}px + 5vh)` }}
      className="relative w-full bg-gradient-to-r from-neutral-800 to-violet-200"
    >
      <CenterImage />
      <ParallaxImages />
    </div>
  );
};

const CenterImage = () => {
  const { scrollY } = useScroll();
  const clip1 = useTransform(scrollY, [0, 1500], [25, 0]);
  const clip2 = useTransform(scrollY, [0, 1500], [75, 100]);

  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  const backgroundSize = useTransform(
    scrollY,
    [0, SECTION_HEIGHT + 500],
    ["50%", "90%"]
  );
  const opacity = useTransform(
    scrollY,
    [SECTION_HEIGHT, SECTION_HEIGHT + 500],
    [1, 0]
  );

  return (
    <motion.div
      className="sticky top-0 h-screen w-[100vw] z-0 pointer-events-none"
      style={{
        clipPath,
        backgroundSize,
        opacity,
        backgroundImage: `url(${mhero.src})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
};

const ParallaxImages = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 pt-[200px]">
      <ParallaxImg
        src="https://images.unsplash.com/photo-1484600899469-230e8d1d59c0?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="An example of a space launch"
        start={-200}
        end={200}
        className="w-1/3"
      />
      {/* <ParallaxImg
        src="https://images.unsplash.com/photo-1446776709462-d6b525c57bd3?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="An example of a space launch"
        start={200}
        end={-250}
        className="mx-auto w-2/3"
      /> */}
      <ParallaxImg
        src="https://res.cloudinary.com/ddjikayiy/image/upload/v1727568247/Pantheon24/vfor8ni5m0eyl4ltyqfv.webp"
        alt="Orbiting satellite"
        start={-200}
        end={200}
        className="ml-auto w-1/3"
      />
      <ParallaxImg
        src="https://res.cloudinary.com/ddjikayiy/image/upload/v1727569104/Pantheon24/h2ib0cpj5yq0abhyprx1.avif"
        alt="Orbiting satellite"
        start={0}
        end={-500}
        className="ml-24 w-5/12"
      />
    </div>
  );
};

const ParallaxImg = ({ className, alt, src, start, end }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`],
  });

  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);

  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <motion.img
      src={src}
      alt={alt}
      className={`${className} pointer-events-none`}
      ref={ref}
      style={{ transform, opacity }}
    />
  );
};
