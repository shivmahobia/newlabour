"use client";
import React from "react";
import BreadCrumb from "@/components/BreadCrumb";
import { useState } from "react";
import { FaUser, FaEye, FaExclamationCircle, FaSyncAlt, FaSignInAlt } from "react-icons/fa";

const links = [
  { name: "HOME", href: "/" },
  { name: "LOG IN", href: "" } // Last breadcrumb has no link
];

export default function LoginPage() {
  const [userType, setUserType] = useState("");
  const [userID, setUserID] = useState("");
  const [password, setPassword] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");
  const [captcha, setCaptcha] = useState(generateCaptcha());

  // Simple captcha generator (6 digit number)
  function generateCaptcha() {
    return Math.floor(100000 + Math.random() * 900000).toString();
  }

  function refreshCaptcha() {
    setCaptcha(generateCaptcha());
    setCaptchaInput("");
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Add form submission logic here
    alert("Login submitted!");
  }

  return (
    <div className="px-20 mb-10">
      <BreadCrumb links={links} />
      <div className="relative rounded-md shadow-md bg-white py-8">
        {/* Card */}
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-3 shadow-lg">
          <FaSignInAlt className="h-8 w-8 text-[#00487C]" />
        </div>

        <h2 className="text-center text-xl font-semibold text-[#00487C] mb-3 mt-4 text-[24px]">Login to your Account</h2>
        <div className="border-b border-gray-200 mb-4 mx-10"></div>

        <div className="py-2 flex items-center justify-center bg-white px-4">
          <div className="max-w-4xl w-full">
            <div className="bg-red-100 border border-red-300 rounded-md p-4 mb-4 flex gap-3 text-sm text-[#00487C] items-center">
              <FaExclamationCircle className="h-6 w-6 flex-shrink-0 text-red-500" />
              <ul className="list-disc list-inside space-y-1">
                <li>OTP based login & Mandatory login password change after 90 days introduced for added security</li>
                <li>Please do not share OTP/password/user information with anyone</li>
              </ul>
            </div>

            <div className="max-w-md w-full bg-white pt-4 mx-auto">
              <form onSubmit={handleSubmit} className="space-y-5 text-sm text-gray-700">
                {/* User Type */}
                <div>
                  <label htmlFor="userType" className="block font-bold mb-1">
                    User Type
                  </label>
                  <select
                    id="userType"
                    value={userType}
                    onChange={e => setUserType(e.target.value)}
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#00487C]"
                    required
                  >
                    <option value="">--Select--</option>
                    <option value="citizen">Citizen</option>
                    <option value="department">Department</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>

                {/* User ID */}
                <div>
                  <label htmlFor="userID" className="block font-bold mb-1">
                    User ID
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="userID"
                      placeholder="Enter User ID"
                      value={userID}
                      onChange={e => setUserID(e.target.value)}
                      className="w-full border border-gray-300 rounded px-10 py-2 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#00487C]"
                      required
                    />
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
                      <FaUser className="h-5 w-5" />
                    </div>
                  </div>
                </div>

                {/* Password */}
                <div>
                  <label htmlFor="password" className="block font-bold mb-1">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      id="password"
                      placeholder="Enter Password"
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                      className="w-full border border-gray-300 rounded px-10 py-2 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#00487C]"
                      required
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer select-none">
                      <FaEye className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="text-right mt-1">
                    <a href="#" className="text-blue-900 text-sm hover:underline">
                      Forgot Password?
                    </a>
                  </div>
                </div>

                {/* Captcha */}
                <div>
                  <label className="block font-bold mb-1">Captcha</label>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="bg-green-100 text-green-900 font-semibold px-4 py-2 rounded select-none">{captcha}</div>
                    <button type="button" onClick={refreshCaptcha} className="flex items-center gap-1 text-gray-700 hover:text-[#00487C] focus:outline-none" aria-label="Refresh Captcha">
                      <FaSyncAlt className="h-5 w-5 animate-spin-slow" />
                      Refresh Captcha
                    </button>
                  </div>
                  <input
                    type="text"
                    placeholder="Enter Captcha"
                    value={captchaInput}
                    onChange={e => setCaptchaInput(e.target.value)}
                    className="w-full border border-gray-300 rounded px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#00487C]"
                    required
                  />
                </div>

                {/* Submit button with rounded left and right borders */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#00487C] to-[#0878C7] text-white py-3 rounded-full font-semibold text-[14px] hover:opacity-90 transition"
                  style={{ borderRadius: "9999px" }}
                >
                  Login to My Account
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
