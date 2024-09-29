"use client";
import { useEffect, useState } from "react";
import { CNavbar } from "../../components/CNavbar";
import LoadingPage from "../../components/Loading";
import { Footer } from "../../components/Footer";
export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]">
      {!loading && <CNavbar />}

      {loading ? <LoadingPage /> : children}
      {!loading && <Footer />}
    </div>
  );
}
