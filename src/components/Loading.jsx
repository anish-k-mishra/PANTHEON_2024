import Image from "next/image";
import React from "react";
import hero from "../assets/logo.jpg";

const LoadingPage = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-[#1E1E2F] via-[#2C003E] to-[#0F052C] animate-gradient">
      <div className="flex flex-col items-center space-y-6 z-10 relative">
        <div className="relative">
          <Image
            src={hero}
            alt="hero"
            className="w-40 h-auto shadow-2xl rounded-full animate-bounce"
          />
        </div>
        <p className="mt-4 text-white text-lg font-semibold tracking-wider">
          Loading, please wait...
        </p>
        <div className="w-8 h-8 border-4 border-[#D61C4E] border-t-transparent border-double rounded-full animate-spin"></div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-[#120136] via-[#32004E] to-[#0F052C] opacity-50 animate-flicker"></div>
      <style jsx>{`
        @keyframes gradientAnimation {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradientAnimation 6s ease-in-out infinite;
        }

        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        .animate-bounce {
          animation: bounce 1.8s infinite;
        }

        .animate-spin {
          animation: spin 1.2s linear infinite;
        }

        @keyframes flicker {
          0%,
          100% {
            opacity: 0.4;
          }
          50% {
            opacity: 0.8;
          }
        }

        .animate-flicker {
          animation: flicker 1.6s infinite;
        }
      `}</style>
    </div>
  );
};

export default LoadingPage;
