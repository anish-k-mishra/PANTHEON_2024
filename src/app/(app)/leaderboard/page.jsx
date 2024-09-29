"use client"; // Ensures it's a client component

import React, { useState, useEffect } from "react";
import { FaCrown } from "react-icons/fa";
import { motion } from "framer-motion";

const sampleTeams = [
  {
    teamName: "Team Alpha",
    teamScore: 350,
  },
  {
    teamName: "Team Beta",
    teamScore: 320,
  },
  {
    teamName: "Team Gamma",
    teamScore: 280,
  },
  {
    teamName: "Team Delta",
    teamScore: 240,
  },
  {
    teamName: "Team Epsilon",
    teamScore: 190,
  },
  {
    teamName: "Team Zeta",
    teamScore: 180,
  },
  {
    teamName: "Team Eta",
    teamScore: 170,
  },
  {
    teamName: "Team Theta",
    teamScore: 160,
  },
  {
    teamName: "Team Iota",
    teamScore: 150,
  },
  {
    teamName: "Team Kappa",
    teamScore: 140,
  },
];

function Leaderboard() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const sortedTeams = [...sampleTeams].sort(
      (a, b) => b.teamScore - a.teamScore
    );
    setTeams(sortedTeams);
  }, []);

  return (
    <div className="p-6 min-h-screen bg-black text-gray-200 relative overflow-hidden flex flex-col items-center">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {Array.from({ length: 10 }).map((_, i) => {
          const shape = ["circle", "square", "triangle", "rectangle"][
            Math.floor(Math.random() * 4)
          ];
          const size = Math.random() * 30 + 15;
          const color = `hsl(${Math.random() * 360}, 100%, 70%)`;

          return (
            <motion.div
              key={i}
              className={`absolute ${shape} bg-opacity-80`}
              style={{
                width: `${size}px`,
                height: `${size}px`,
                backgroundColor: color,
                borderRadius:
                  shape === "circle"
                    ? "50%"
                    : shape === "triangle"
                    ? "0 0 0 50%"
                    : "0%",
              }}
              initial={{
                x: Math.random() * 100 - 50,
                y: Math.random() * 100 - 50,
                opacity: 0.8,
              }}
              animate={{
                x: [
                  Math.random() * window.innerWidth,
                  Math.random() * window.innerWidth,
                  Math.random() * window.innerWidth,
                ],
                y: [
                  Math.random() * window.innerHeight,
                  Math.random() * window.innerHeight,
                  Math.random() * window.innerHeight,
                ],
                transition: {
                  duration: Math.random() * 4 + 2,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "loop",
                },
              }}
            />
          );
        })}
      </div>

      <h1 className="text-4xl font-bold text-center mb-10">Leaderboard</h1>
      <div className="grid grid-cols-1 gap-6">
        {teams.map((team, index) => (
          <motion.div
            key={index}
            className={`flex justify-between items-center p-6 rounded-lg border border-gray-600 bg-opacity-80 
              ${
                index === 0
                  ? "bg-yellow-400 text-black"
                  : index === 1
                  ? "bg-green-400 text-black"
                  : index === 2
                  ? "bg-blue-400 text-black"
                  : "bg-purple-400 text-black"
              } rounded-lg min-w-[70vw] mx-auto transition-all duration-300 
              hover:scale-105 hover:bg-opacity-100 active:bg-opacity-90`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex items-center justify-center">
              {team.teamName}{" "}
              {index === 0 && (
                <FaCrown className="inline-block text-yellow-500 ml-2" />
              )}
            </div>
            <div className="text-center">{team.teamScore}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Leaderboard;
