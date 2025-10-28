"use client";

import BreadCrumb from "@/components/BreadCrumb";
import React, { useState } from "react";

const links = [
  { name: "HOME", href: "/" },
  { name: "DEPARTMENT", href: "" }, // Last breadcrumb has no link
  { name: "CELL", href: "" } // Last breadcrumb has no link
];

const Page = () => {
  const [service, setService] = useState("");
  const [userType, setUserType] = useState("");
  const [action, setAction] = useState("");

  return (
    <div className="px-20 mb-10">
      <BreadCrumb links={links} />

      <div className="relative rounded-md shadow-md bg-white py-8 p-8">
        <div className="font-semibold text-center text-[24px] text-[#00487C]">Labour Commissioner Services</div>
        <div className="border-b border-gray-200 py-2 mx-10"></div>

        <div className="flex justify-between gap-6 mt-6 mx-10">
          {/* Service Select */}
          <div className="w-1/3">
            <label className="block mb-1 font-bold text-[14px]">Service</label>
            <select
              value={service}
              onChange={e => setService(e.target.value)}
              className="w-full border border-gray-300 rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-600"
            >
              <option value="" disabled>
                --Select--
              </option>
              <option value="service1">Service 1</option>
              <option value="service2">Service 2</option>
              <option value="service3">Service 3</option>
            </select>
          </div>

          {/* User Type Select */}
          <div className="w-1/3">
            <label className="block mb-1 font-bold text-[14px]">User Type</label>
            <select
              value={userType}
              onChange={e => setUserType(e.target.value)}
              className="w-full border border-gray-300 rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-600"
            >
              <option value="" disabled>
                --Select--
              </option>
              <option value="user1">User Type 1</option>
              <option value="user2">User Type 2</option>
              <option value="user3">User Type 3</option>
            </select>
          </div>

          {/* What do you want to do? Select */}
          <div className="w-1/3">
            <label className="block mb-1 font-bold text-[14px]">What do you want to do?</label>
            <select
              value={action}
              onChange={e => setAction(e.target.value)}
              className="w-full border border-gray-300 rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-600"
            >
              <option value="" disabled>
                --Select--
              </option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
        </div>

        {/* Proceed Button */}
        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="w-xs bg-gradient-to-r from-[#00487C] to-[#0878C7] text-white py-3 rounded-full font-semibold text-[14px] hover:opacity-90 transition"
            style={{ borderRadius: "9999px" }}
          >
            Proceed Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
