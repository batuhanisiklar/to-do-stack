"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Login failed");

      localStorage.setItem("token", data.access_token);
      console.log("Login successful:", data);

      // Parse JWT token to get user info
      const tokenPayload = JSON.parse(atob(data.access_token.split(".")[1]));
      console.log("Full token payload:", tokenPayload);
      const isTeacher = tokenPayload.sub.is_teacher;

      // Redirect based on user type
      if (isTeacher) {
        router.push("/teacher");
      } else {
        router.push("/student");
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-800 via-blue-600 to-blue-400">
      <div className="bg-white/95 backdrop-blur-sm p-10 rounded-lg shadow-xl w-[450px]">
        <div className="flex flex-col items-center mb-8">
          <h1 className="text-4xl font-bold text-blue-800">
            University Portal
          </h1>
          <p className="text-gray-600 mt-2">
            Welcome back, please login to your account
          </p>
        </div>
        <form className="space-y-6" onSubmit={handleLogin}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800"
            >
              University Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 block w-full px-4 py-3 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-black"
              placeholder="student@university.edu"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-2 block w-full px-4 py-3 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-black"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex items-center justify-between">
            <a
              href="#"
              className="text-sm text-blue-700 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-md text-base font-medium text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transform hover:scale-[1.01] transition-all duration-200"
          >
            Login to Portal
          </button>
        </form>
        <div className="mt-6 text-center space-y-2">
          <p className="text-xs text-gray-500">
            For technical support, contact IT Help Desk
          </p>
        </div>
      </div>
    </div>
  );
}
