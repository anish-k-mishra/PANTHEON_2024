"use client";

import React, { useEffect } from "react";
import { BackgroundLines } from "../../../components/ui/CreateFormBg";
import { Login } from "../../../components/Login";
import { CNavbar } from "../../../components/CNavbar";

function ComponentName() {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div>
      <CNavbar className="fixed tester top-0 w-full z-50 pointer-events-auto" />{" "}
      {/* Use z-50 */}
      <div className="relative h-screen w-screen">
        {/* Fixed navbar with full width and correct z-index */}
        <div className="absolute inset-0 z-0 pt-2">
          <BackgroundLines className="absolute tester2 z-10" />{" "}
          {/* Background behind navbar */}
        </div>
        <div className="relative z-20 flex justify-center items-center h-screen p-4">
          <div className="w-full h-3/4">
            <Login />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComponentName;
