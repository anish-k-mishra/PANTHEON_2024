"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Image from "next/image"; // Import Image from Next.js
import pd1 from "../assets/pd1.jpg";
import pd2 from "../assets/pd2.jpg";
import pd3 from "../assets/pd3.jpg";
import pd4 from "../assets/pd4.jpg";
import pd5 from "../assets/pd5.jpg";
import pd6 from "../assets/pd6.jpg";
import pd7 from "../assets/pd7.jpg";

const Carousel = () => {
  return (
    <div className="bg-neutral-800">
      <h2 className="text-center text-6xl font-bold bg-gradient-to-r from-indigo-600 to-blue-400 bg-clip-text text-transparent text-white">
        ARCHIVES
      </h2>
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-53%"]);

  return (
    <section ref={targetRef} className="relative h-[200vh] bg-neutral-900">
      <div className="sticky top-0 flex h-screen items-center overflowX-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
    >
      {/* Use Next.js Image component to display the image */}
      <Image
        src={card.url}
        alt={card.title}
        layout="fill" // Fill the container
        objectFit="cover" // Make the image cover the entire area
        className="transition-transform duration-300 group-hover:scale-110"
      />
    </div>
  );
};

export default Carousel;

const cards = [
  {
    url: `https://res.cloudinary.com/ddjikayiy/image/upload/v1727568491/Pantheon24/e4yrywryb1u3oytnt9sm.jpg`,

    id: 1,
  },
  {
    url: `https://res.cloudinary.com/ddjikayiy/image/upload/v1727558204/Pantheon24/bjwxvp6kzotlhntkaspq.jpg`,

    id: 2,
  },
  {
    url: `https://res.cloudinary.com/ddjikayiy/image/upload/v1727558205/Pantheon24/fvdc1efscwuqgn7yzmqd.jpg`,

    id: 3,
  },
  {
    url: `https://res.cloudinary.com/ddjikayiy/image/upload/v1727558205/Pantheon24/s5d86cqxm525w2p4epqz.jpg`,

    id: 4,
  },
  {
    url: `https://res.cloudinary.com/ddjikayiy/image/upload/v1727551727/Pantheon24/vweu51dvinq3slxy7bot.jpg`,

    id: 5,
  },
  {
    url: pd5,

    id: 6,
  },
  {
    url: pd7,

    id: 7,
  },
];
