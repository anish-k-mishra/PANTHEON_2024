"use client"; // Required for Next.js client-side rendering

import React, { useEffect } from "react";
import { BackgroundLines } from "../../../components/ui/CreateFormBg";
import { SignUp } from "../../../components/SignUp";

function ComponentName() {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <BackgroundLines />
      </div>

      <div className="relative z-10 flex justify-center items-center h-auto p-4">
        <div className="custom-signup-page">
          <SignUp />
        </div>
      </div>
    </div>
  );
}

export default ComponentName;
