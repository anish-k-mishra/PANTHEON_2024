import React, { useState, useEffect } from "react";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { cn } from "../lib/utils";
import { toast, Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation"; // Import useRouter

export function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        otp: "",
    });
    const [step, setStep] = useState(1); 
    const [isLoggedIn, setIsLoggedIn] = useState(false); // State to check if user is logged in
    const [loading, setLoading] = useState(false); // Loader state
    const router = useRouter(); // Initialize router

    // Check if user is logged in on component mount
    useEffect(() => {
        const token = localStorage.getItem("token"); // Retrieve token from localStorage
        if (token) {
            setIsLoggedIn(true); // User is logged in if token exists
            router.push("/dashboard"); // Redirect to dashboard if JWT is valid
        }
    }, [router]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); 
        if (step === 1) {
            const res = await fetch("/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await res.json();
            setLoading(false);

            if (res.ok) {
                setStep(2);
            } else {
                alert(data.message);
            }
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
            setLoading(false);
            if (res.ok) {
                localStorage.setItem("token", data.token); 
                setIsLoggedIn(true); 
                toast.success("OTP verified. Redirecting to dashboard...");
                setTimeout(() => {
                    router.push("/dashboard"); 
                }, 2000);
            } else {
                alert(data.message);
            }
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    return (
        <div className="relative z--1 max-w-xl w-full mx-auto p-4 md:p-8 rounded-2xl bg-white/10 border border-transparent bg-clip-padding shadow-input text-white pointer-events-auto">
            <Toaster position="top-center" reverseOrder={false} />
            <div className="absolute inset-0 rounded-2xl border-neon animate-lightning -z-1 pointer-events-none" />
            <h2 className="font-bold font-sans text-4xl bg-gradient-to-r from-pink-800 to-purple-900 bg-clip-text text-transparent text-center">
                LOGIN!
            </h2>

            {/* Show login status message */}
            <div className="my-4 text-center">
                {isLoggedIn ? (
                    <p className="text-green-500">Redirecting to Dashboard...</p>
                ) : (
                    <p className="text-yellow-500">Welcome to Pantheon Login Window</p>
                )}
            </div>

            {/* Show loader while processing */}
            {loading && (
                <div className="text-center mb-4">
                    <p className="text-blue-500">Processing...</p>
                </div>
            )}

            <form className="my-8" onSubmit={handleSubmit}>
                {step === 1 ? (
                    <>
                        <LabelInputContainer className="mb-2 md:mb-4">
                            <Label htmlFor="email">Email Address</Label>
                            <Input
                                id="email"
                                placeholder="Enter your email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="pointer-events-auto bg-gray-900 text-gray-500"
                            />
                        </LabelInputContainer>

                        <LabelInputContainer className="mb-2 md:mb-4">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                placeholder="Enter your password"
                                type="password"
                                value={formData.password}
                                onChange={handleChange}
                                className="pointer-events-auto bg-gray-900 text-gray-500"
                            />
                        </LabelInputContainer>
                        <button
                            className="bg-gradient-to-br relative group/btn from-pink-800 to-purple-900 block w-full text-white rounded-md h-10 font-bold text-xl shadow-lg mb-2"
                            type="submit" disabled={loading} // Disable button while loading
                        >
                            LOGIN &rarr;
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
                            type="submit" disabled={loading} // Disable button while loading
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