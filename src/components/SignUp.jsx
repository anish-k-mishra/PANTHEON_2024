"use client";
import React, { useState } from "react";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { cn } from "../lib/utils";
import { toast, Toaster } from "react-hot-toast";
import { ClipLoader } from "react-spinners"; // Import the ClipLoader

export function SignUp() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    otp: "",
    college: "", // Added formData fields for college and contact
    contact: "",
  });
  const [step, setStep] = useState(1); // 1: register, 2: otp
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (step === 1) {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) setStep(2);
      else {
        toast.error("Failed to validate!", {
          style: {
            fontSize: "0.875rem",
            padding: "8px 12px",
            width: "auto",
          },
        });
      }
    } else if (step === 2) {
      const res = await fetch("/api/verify-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          otp: formData.otp,
          password: formData.password,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        toast.success("Verification successful!", {
          style: {
            fontSize: "0.875rem",
            padding: "8px 12px",
            width: "auto",
          },
        });
      } else {
        toast.error("Verification failed! Please try again!", {
          style: {
            fontSize: "0.875rem",
            padding: "8px 12px",
            width: "auto",
          },
        });
      }
    }
    setLoading(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <div
      className={`relative z-10 max-w-xl w-full mx-auto p-4 md:p-8 rounded-2xl bg-white/10 border border-transparent bg-clip-padding shadow-input text-white pointer-events-auto ${
        step === 2 ? "mt-30" : ""
      }`}
    >
      <Toaster position="top-center" reverseOrder={false} />
      <div className="absolute inset-0 rounded-2xl border-neon animate-lightning -z-1 pointer-events-none mt-30" />
      <h2 className="font-bold font-sans text-4xl bg-gradient-to-r from-pink-800 to-purple-900 bg-clip-text text-transparent text-center">
        REGISTER NOW!
      </h2>
      <form className="my-8" onSubmit={handleSubmit}>
        {step === 1 ? (
          <>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
              <LabelInputContainer>
                <Label htmlFor="firstname">First Name</Label>
                <Input
                  id="firstname"
                  placeholder="Tyler"
                  type="text"
                  value={formData.firstname}
                  onChange={handleChange}
                />
              </LabelInputContainer>
              <LabelInputContainer>
                <Label htmlFor="lastname">Last Name</Label>
                <Input
                  id="lastname"
                  placeholder="Durden"
                  type="text"
                  value={formData.lastname}
                  onChange={handleChange}
                />
              </LabelInputContainer>
            </div>
            <LabelInputContainer className="mb-2 md:mb-4">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                placeholder="btechxxxxx.yy@bitmesra.ac.in"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
            </LabelInputContainer>

            <LabelInputContainer className="mb-2 md:mb-4">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                placeholder="••••••••"
                type="password"
                value={formData.password}
                onChange={handleChange}
              />
            </LabelInputContainer>

            <LabelInputContainer className="mb-2 md:mb-4">
              <Label htmlFor="college">College Name</Label>
              <Input
                id="college"
                placeholder="Birla Institute of Technology, Mesra"
                type="text"
                value={formData.college}
                onChange={handleChange}
              />
            </LabelInputContainer>

            <LabelInputContainer className="mb-8 md:mb-4">
              <Label htmlFor="contact">Contact Number</Label>
              <Input
                id="contact"
                placeholder="XXXXXXXXXX"
                type="text"
                value={formData.contact}
                onChange={handleChange}
              />
            </LabelInputContainer>

            <button
              className="bg-gradient-to-br relative group/btn from-pink-800 to-purple-900 block w-full text-white rounded-md h-10 font-bold text-xl shadow-lg mb-2"
              type="submit"
              disabled={loading} // Disable button while loading
            >
              {loading ? <ClipLoader size={20} color="#fff" /> : "Send OTP →"}
              <BottomGradient />
            </button>
          </>
        ) : (
          <>
            {/* OTP Verification Step */}
            <div className="relative z-10 max-w-xl w-full mx-auto p-4 md:p-8 rounded-2xl bg-white/10 border border-transparent bg-clip-padding shadow-input text-white pointer-events-auto">
              <div className="absolute inset-0 rounded-2xl border-neon -z-1 pointer-events-none" />
              <LabelInputContainer>
                <Label htmlFor="otp">Enter OTP</Label>
                <Input
                  id="otp"
                  placeholder="Enter OTP"
                  type="text"
                  value={formData.otp}
                  onChange={handleChange}
                />
              </LabelInputContainer>
              <button
                className="mt-5 bg-gradient-to-br relative group/btn from-pink-800 to-purple-900 block w-full text-white text-xl rounded-md h-10 font-medium shadow-lg mb-2"
                type="submit"
                disabled={loading} // Disable button while loading
              >
                {loading ? (
                  <ClipLoader size={20} color="#fff" />
                ) : (
                  "Verify OTP →"
                )}
                <BottomGradient />
              </button>
            </div>
          </>
        )}
        <div className="bg-gradient-to-r from-transparent via-neutral-300 to-transparent my-4 h-[1px] w-full" />
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
