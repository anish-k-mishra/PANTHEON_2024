"use client";
import React, { useState } from "react";
import { Label } from "../../../components/ui/label";
import { Input } from "../../../components/ui/input";
import { cn } from "../../../lib/utils";

export default function JoinTeam() {
  const [formData, setFormData] = useState({
    teamID: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/join-team", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    if (res.ok) alert("Joined Team Successfully!");
    else alert(data.message);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <div className="max-w-[1500px] w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-transparent text-white">
      <h2 className="font-bold font-sans text-4xl bg-gradient-to-r from-pink-800 to-purple-900 bg-clip-text text-transparent dark:text-neutral-200 text-center">
        JOIN TEAM
      </h2>
      <form className="my-8" onSubmit={handleSubmit}>
        <LabelInputContainer className="mb-2 md:mb-4">
          <Label htmlFor="teamID">Team ID</Label>
          <Input
            id="teamID"
            placeholder="Enter Team ID"
            type="text"
            value={formData.teamID}
            onChange={handleChange}
          />
        </LabelInputContainer>

        <LabelInputContainer className="mb-2 md:mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            placeholder="user@team.com"
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

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] mb-2"
          type="submit"
        >
          Join Team &rarr;
          <BottomGradient />
        </button>
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
