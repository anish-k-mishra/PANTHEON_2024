import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import img from "../assets/pd1.jpg";
import { toast, Toaster } from "react-hot-toast"; // Import toast for notification

const cardVariants = {
  hidden: { opacity: 0, rotate: -15, y: -100 },
  show: {
    opacity: 1,
    rotate: 0,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 12,
    },
  },
};

export function Cards({ eventData, openModal }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [toastShown, setToastShown] = useState(false); // State to track if the toast has been shown

  useEffect(() => {
    const token = localStorage.getItem("token"); // Retrieve token from local storage
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
    console.log(isLoggedIn);
  }, []);

  const handleRegister = () => {
    if (isLoggedIn) {
      window.open(eventData.link, "_blank"); // Redirect if logged in
    } else {
      if (!toastShown) {
        // Only show toast if it hasn't been shown yet
        toast.error("You are not logged in. Please log in to register!"); // Show error if not logged in
        setToastShown(true); // Set toastShown to true to prevent duplicate toasts
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      className="relative p-1 rounded-xl overflow-hidden text-center bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 hover:shadow-[0_0_20px_5px_rgba(255,255,255,0.5)] transition-shadow"
    >
      <div className="p-4 bg-gray-900 rounded-lg shadow-lg">
        <div className="relative w-full h-[200px] md:h-[250px] lg:h-[300px] min-h-[200px] max-h-[300px] overflow-hidden mb-5">
          <Image
            src={eventData.image || img}
            alt="Event"
            layout="fill"
            className="object-cover w-full h-full"
          />
        </div>

        <h3 className="text-base sm:text-xl text-white mb-2">
          {eventData.title}
        </h3>

        <p className="text-sm text-gray-400 leading-relaxed mb-4">
          {eventData.clubName} - {eventData.timeSlots[0]}
        </p>

        <div className="flex justify-center space-x-4">
          {/* Register Button */}
          <button
            className="rounded-full py-2 px-6 text-white bg-red-500 mt-4 text-lg font-bold hover:bg-red-600 transition"
            onClick={handleRegister} // Call handleRegister on click
          >
            Register
          </button>

          {/* Info Button */}
          <button
            className="rounded-full py-2 px-6 text-white bg-gray-700 mt-4 text-lg font-bold hover:bg-gray-800 transition"
            onClick={() => openModal(eventData)}
          >
            Info
          </button>
        </div>
      </div>

      {/* Add the Toaster component to show notifications */}
      <Toaster />
    </motion.div>
  );
}
