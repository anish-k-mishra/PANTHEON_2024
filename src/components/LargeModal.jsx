"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const LargeModal = ({ isOpen, onClose, modalData }) => {
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md"
          onClick={onClose}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.3 }}
        >
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              duration: 0.5,
            }}
            className="relative bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 p-1 rounded-xl shadow-lg w-[80%] max-w-3xl mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-gray-900 p-8 rounded-lg max-h-[80vh] overflow-y-auto scrollbar-hidden">
              {" "}
              {/* Updated class */}
              <button
                className="absolute top-4 right-4 text-2xl text-white"
                onClick={onClose}
              >
                &times;
              </button>
              <h2 className="text-3xl font-bold mb-4 text-white">
                {modalData.title}
              </h2>
              <p className="text-lg leading-relaxed mb-2 text-white">
                <strong>Club Name:</strong> {modalData.clubName}
              </p>
              <p className="text-lg leading-relaxed mb-2 text-white">
                <strong>Event Name:</strong> {modalData.title}
              </p>
              <p className="text-lg leading-relaxed mb-2 text-white">
                <strong>Time:</strong> {modalData.timeSlots.join(", ")}
              </p>
              <p className="text-lg leading-relaxed mb-2 text-white">
                <strong>Location:</strong> {modalData.location}
              </p>
              <p className="text-lg leading-relaxed mb-2 text-white">
                <strong>Phone:</strong> {modalData.phone}
              </p>
              <p className="text-lg leading-relaxed mb-2 text-white">
                <strong>Coordinator Name:</strong> {modalData.coordinatorName}
              </p>
              <p className="text-lg leading-relaxed mb-2 text-white">
                <strong>Faculty Advisor:</strong> {modalData.facultyAdvisor}
              </p>
              <p className="text-lg leading-relaxed mb-2 text-white">
                <strong>Description:</strong> {modalData.description}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LargeModal;
