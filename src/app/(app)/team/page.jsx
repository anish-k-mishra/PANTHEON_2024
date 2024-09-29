"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
// Removed BackgroundLines import
import { cn } from "../../../lib/utils";
import { jwtDecode } from "jwt-decode";

export default function Page() {
  const router = useRouter();

  return (
    <div className=" lg:-mt-10 sm:mt-15 flex flex-col md:flex-row justify-evenly items-center gap-10 min-h-screen md:gap-4">
      <Toaster position="top-center" reverseOrder={false} />
      {/* Removed BackgroundLines component */}
      <CreateTeam
        gradientClass="from-pink-800 to-purple-900"
        title="CREATE TEAM!"
        label="Team Name"
        placeholder="Enter Team Name"
        buttonText="CREATE &rarr;"
        isJoinForm={false}
      />
      <CreateTeam
        gradientClass="from-green-800 to-blue-900"
        title="JOIN TEAM!"
        label="Team ID"
        placeholder="Enter Team ID"
        buttonText="JOIN &rarr;"
        isJoinForm={true}
      />
    </div>
  );
}

function CreateTeam({
  gradientClass,
  title,
  label,
  placeholder,
  buttonText,
  isJoinForm,
}) {
  const router = useRouter();
  const token = localStorage.getItem("token");
  const [formData, setFormData] = useState({ teamName: isJoinForm ? "" : "" });

  // Check if the user is authenticated
  if (!token) {
    toast.error("Sign in to access this feature!");
    return null; // Prevent rendering if not authenticated
  }

  const decodedToken = jwtDecode(token);
  console.log(decodedToken);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        isJoinForm ? "/api/join-team" : "/api/create-team",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Include the token here
          },
          body: JSON.stringify(
            isJoinForm
              ? { teamId: formData.teamName }
              : { teamName: formData.teamName }
          ), // Use teamId for joining
        }
      );

      if (!res.ok) {
        // Handle any non-OK response (e.g., 401 Unauthorized)
        const errorData = await res.json();
        toast.error(errorData.message || "Failed to process request");
        return;
      }

      const data = await res.json();
      toast.success(
        isJoinForm ? "Joined team successfully" : "Team created successfully"
      );
      console.log(isJoinForm ? "Joined team" : "Team created", data);

      // Optional: Navigate to the team page or reset form
    } catch (error) {
      toast.error("Some error occurred. Please try again later.");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, teamName: e.target.value }); // Use a common state for both forms
  };

  return (
    <div
      className={`p-4 bg-gray-800 text-black rounded shadow ${gradientClass}`}
    >
      <h2 className="text-2xl mb-4">{title}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2">{label}</label>
          <input
            id="teamName"
            type="text"
            value={formData.teamName}
            onChange={handleChange}
            placeholder={placeholder}
            required
            className="p-2 rounded border border-gray-300"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {buttonText}
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
