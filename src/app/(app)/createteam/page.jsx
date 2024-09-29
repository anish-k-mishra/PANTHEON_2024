"use client";
import React, { useState } from "react";
import { Label } from "../../../components/ui/label";
import { Input } from "../../../components/ui/input";
import { cn } from "../../../lib/utils";
import { BackgroundLines } from "../../../components/ui/CreateFormBg";
import { Toaster, toast } from "react-hot-toast";

export default function Page() {
  return (
    <div className="relative lg:-mt-10 sm:mt-15 flex flex-col md:flex-row justify-evenly items-center gap-10 min-h-screen md:gap-4">
      <Toaster position="top-center" reverseOrder={false} />
      <BackgroundLines className="absolute inset-0 -z-10" />{" "}
      {/* Ensure it stays in the background */}
      <CreateTeam
        gradientClass="from-pink-800 to-purple-900"
        title="CREATE TEAM!"
        label="Team Name"
        placeholder="Enter Team Name"
        buttonText="CREATE &rarr;"
      />
      <CreateTeam
        gradientClass="from-green-800 to-blue-900"
        title="JOIN TEAM!"
        label="Team ID"
        placeholder="Enter Team ID"
        buttonText="JOIN &rarr;"
      />
    </div>
  );
}

function CreateTeam({ gradientClass, title, label, placeholder, buttonText }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    otp: "",
  });
  const [step, setStep] = useState(1); // 1: login, 2: otp

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (step === 1) {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) setStep(2);
      else alert(data.message);
    } else if (step === 2) {
      const res = await fetch("/api/verify-otp-login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          otp: formData.otp,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        localStorage.setItem("token", data.token); // Store JWT token in local storage
        alert("OTP verified. Login successful!");
        const token = localStorage.getItem("token");
        console.log(token);
      } else {
        alert(data.message);
      }
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <div
      className={`relative flex flex-col items-center justify-center max-w-xl w-full p-4 -pt-[30px] md:p-8 rounded-2xl bg-white/10 border border-transparent bg-clip-padding shadow-input text-white pointer-events-auto transform -translate-y-2 md:translate-y-0`}
    >
      <div
        className={`absolute inset-0 rounded-2xl border-neon ${gradientClass} animate-lightning -z-1 pointer-events-none`}
      />
      <h2
        className={`font-bold font-sans text-4xl bg-gradient-to-r ${gradientClass} bg-clip-text text-transparent text-center`}
      >
        {title}
      </h2>
      <form className="my-8" onSubmit={handleSubmit}>
        {step === 1 ? (
          <>
            <LabelInputContainer className="mb-2 md:mb-4">
              <Label htmlFor="email">{label}</Label>
              <Input
                id="email"
                placeholder={placeholder}
                type="text"
                value={formData.email}
                onChange={handleChange}
                className="pointer-events-auto bg-gray-900 text-gray-500"
              />
            </LabelInputContainer>

            <button
              className={`bg-gradient-to-br relative group/btn block w-full text-white rounded-md h-10 font-bold text-xl shadow-lg mb-2 ${gradientClass}`}
              type="submit"
              onClick={() => toast.success("Successful")}
            >
              {buttonText}
              <BottomGradient />
            </button>
          </>
        ) : (
          <>
            <LabelInputContainer>
              <Label htmlFor="otp">Enter OTP</Label>
              <Input
                id="otp"
                placeholder="Enter OTP"
                type="text"
                value={formData.otp}
                onChange={handleChange}
                className="pointer-events-auto"
              />
            </LabelInputContainer>
            <button
              className="bg-gradient-to-br relative group/btn from-black to-neutral-600 block w-full text-white rounded-md h-10 font-medium shadow-lg mb-2"
              type="submit"
            >
              Verify OTP &rarr;
              <BottomGradient />
            </button>
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
