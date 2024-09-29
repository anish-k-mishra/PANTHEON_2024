"use client";
import React from "react";

const Modal = ({ isOpen, onClose, title, fullDescription }) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Background Blur */}
      <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-40"></div>

      {/* Modal Container */}
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="bg-gray-900 text-white p-8 rounded-xl shadow-lg w-[80%] max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-lg leading-relaxed mb-6">{fullDescription}</p>
          <div className="flex justify-end">
            <button
              className="py-2 px-4 bg-red-500 rounded-full text-white font-bold hover:bg-red-600"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
