"use client";
import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

function DashboardPage() {
  const [userData, setUserData] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    console.log("useEffect triggered");
    const token = localStorage.getItem("token");
    console.log("token dashboard", token);

    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        console.log("decodedToken", decodedToken);
        setUserData({
          email: decodedToken.user.email || "Unknown email",
          userId: decodedToken.user._id || "Unknown ID",
          teamName: decodedToken.user.teamName || "Unknown Team",
          teamId: decodedToken.user.teamId || "Unknown Team ID",
        });
        setIsLoggedIn(true);
      } catch (error) {
        console.error("Error decoding token:", error);
        setIsLoggedIn(false);
      }
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <div>
      {isLoggedIn ? (
        <div className="text-center text-3xl text-white mt-16 mb-16">
          <p>Email: {userData?.email}</p>
          <p>User ID: {userData?.userId}</p>
          <p>Team Name: {userData?.teamName}</p>
          <p>Team ID: {userData?.teamId}</p>
        </div>
      ) : (
        <div className="text-center text-3xl text-white mt-16 mb-16">
          <p>{"You're not logged in"}</p>
        </div>
      )}
    </div>
  );
}

export default DashboardPage;
